import tiny from "tiny-json-http";
import { metaTagsFragment, responsiveImageFragment } from "./fragments";

/**
 * A helper for the GraphQL API.
 *
 * @param {String} query - The query to fetch for
 * @param {Object} param1.variables - The variables to pass to the query
 * @param {Object} param1.preview - Indicate if the query should be previewed
 */

export async function fetchAPI(query, { variables } = { variables: null }) {
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

/**
 * Get the correct type to filter post using preview flag
 *
 * @param preview
 * @returns {string}
 */
const showPreviewPosts = (preview) => {
  return preview === true
    ? '+working:true +deleted:false'
    : '+live:true +deleted:false'
}

/**
 * Fetch a single post and more posts
 *
 * @param {String} slug - The slug of the post to fetch
 * @param {boolean} preview - Whether or not to fetch the live post
 * @returns An object with a post and more posts array
 */
export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(`
    query PostBySlug($query: String!, $morePostsQuery: String!) {
      post: BlogCollection(query: $query, limit: 1) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        post(filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
        }
        title
        slug
        content {
          value
          blocks {
            __typename
            ...on ImageBlockRecord {
              id
              image {
                responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                  ...responsiveImageFragment
                }
              }
            }
          }
        }
        date
        ogImage: coverImage{
          url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
        }
        coverImage {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
        author {
          name
          picture {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
              ...responsiveImageFragment
          }
        }
      }
      
      morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
        title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
    }
    ${responsiveImageFragment}
    ${metaTagsFragment}
  `,
    {
      variables: {
        query: `+urlmap:/blog/post/${slug} ${showPreviewPosts(preview)}`,
        morePostsQuery: `-urlmap:/blog/post/${slug} ${showPreviewPosts(
          preview
        )}`,
      },
    }
  )
  return {
    post: data?.post[0] ?? {},
    morePosts: data?.morePosts ?? [],
  }
}

/**
 * Fetch one post and more post with preview mode flag.
 *
 * @param slug
 * @param isPreview
 * @returns {Promise<{post, morePosts}>}
 */
export async function getPreviewPostBySlug(slug, isPreview) {
  return await getPostAndMorePosts(slug, isPreview)
}

/**
 * Fetch all posts with slug
 *
 * @returns An array of posts with the following shape:
 * {
 *  slug: string
 * }
 */
export async function getAllPostsWithSlug() {
  const entries = await fetchAPI(`
    query getAllPostsWithSlug {
      allPosts {
        slug
      }
    }
  `)

  return entries?.BlogCollection ?? []
}

/**
 * Fetch all posts
 *
 * @param {boolean} preview - If true, return a preview of the post
 * @returns An array of posts
 */

export async function getAllPostsForHome(preview) {
  const entries = await fetchAPI(
    `
    query getAllPostsForHome($query: String!) {
      allPosts(query: $query) {
        title
        slug
        excerpt
        date
        overImage {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
        author {
          name
          picture {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100}) {
              ...responsiveImageFragment
            }
          }
        }
    }
  `,
    {
      variables: {
        query: `${showPreviewPosts(preview)}`,
      },
    }
  )
  return entries?.allPosts ?? []
}