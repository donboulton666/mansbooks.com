import tiny from "tiny-json-http";

export async function request({ query, variables }) {
  let endpoint = "https://graphql.datocms.com";

  if (process.env.NEXT_DATOCMS_ENVIRONMENT) {
    endpoint += `/environments/${process.env.NEXT_DATOCMS_ENVIRONMENT}`;
  }

  const { body } = await tiny.post({
    url: endpoint,
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_READ_ONLY_API_TOKEN}`,
    },
    data: {
      query,
      variables,
    },
  });

  if (body.errors) {
    console.error("Ouch! The query has some errors!");
    throw body.errors;
  }

  return body.data;
}