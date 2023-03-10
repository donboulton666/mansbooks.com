/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config({
  path: "./.env.local",
});

const { GraphQLClient } = require("graphql-request");
const algoliasearch = require("algoliasearch/lite");
const intersection = require("lodash.intersection");
const without = require("lodash.without");

const getMs = (dateString) => new Date(dateString).getTime();

(async () => {
  let haltExecution;

  // Init Algolia client
  const algoliaClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.ALGOLIA_SEARCH_ADMIN_KEY
  );
  const INDEX_NAME = "Posts";
  const algoliaIndex = algoliaClient.initIndex(INDEX_NAME);

  // Init GraphQL client
  const client = new GraphQLClient("https://graphql.datocms.com/", {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  });

  const QUERY = `
      {
        allArticles(filter: { _status: { eq: published } }) {
          _updatedAt
          objectID: id
          title
          excerpt
        }
      }
    `;

  // Fetch records
  const data = await client.request(QUERY).catch((err) => {
    haltExecution = true;
    console.error("Failed to fetch CMS data.", "\n", err.stack);
  });
  if (haltExecution || !data) return;

  // Transform records to Algolia objects
  const recordsToAlgoliaObjects = data.allTours.map(
    ({ _updatedAt, ...rest }) => ({
      updatedAt: {
        _operation: "IncrementSet",
        value: getMs(_updatedAt),
      },
      ...rest,
    })
  );

  // Save/update objects to Algolia index
  const saveAlgoliaObjects = await algoliaIndex
    .partialUpdateObjects(recordsToAlgoliaObjects, {
      createIfNotExists: true,
    })
    .catch(() => {
      haltExecution = true;
      console.error("Failed to add/update objects to Algolia index.");
    });
  if (haltExecution || !saveAlgoliaObjects) return;
  console.log(
    `Sucessfully added/updated ${saveAlgoliaObjects.objectIDs.length} objects to Algolia index.`
  );

  // Delete draft/unpublished/deleted records from Algolia index
  // 1. Create a new array of all objectIDs from Algolia index
  let algoliaObjectList = [];
  await algoliaIndex
    .browseObjects({
      query: "",
      attributesToRetrieve: ["objectID"],
      batch: (objectID) =>
        (algoliaObjectList = algoliaObjectList.concat(objectID)),
    })
    .catch(() => {
      haltExecution = true;
      console.error("Failed to retrieve Algolia objects.");
    });
  if (haltExecution) return;
  const algoliaObjectsArray = algoliaObjectList.map(({ objectID }) => objectID);

  // 2. Create a new array of all published records IDs
  const recordsArray = data.allTours.map(({ objectID }) => objectID);

  // 3. Create a new array of all published records already indexed and updated on Algolia
  const publishedRecords = intersection(algoliaObjectsArray, recordsArray);

  // 4. Exclude all updated/published records from Algolia index objects
  const objectsToDelete = without(algoliaObjectsArray, ...publishedRecords);

  // 5. If there are any unpublished/deleted records, delete them from Algolia index
  if (objectsToDelete.length > 0) {
    const deleteObsoleteRecords = await algoliaIndex
      .deleteObjects(objectsToDelete)
      .catch(() => {
        haltExecution = true;
        console.error("Failed to delete Algolia objects.");
      });
    if (haltExecution || !deleteObsoleteRecords) return;

    console.log(
      `Deleted ${deleteObsoleteRecords.objectIDs.length} obsolete records from Algolia index.`
    );
  } else console.log("No obsolete records found.");
})();
