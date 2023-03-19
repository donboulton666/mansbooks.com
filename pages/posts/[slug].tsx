import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "@components/posts/container";
import Header from "@components/posts/header";
import Layout from "@components/PageLayout";
import MoreStories from "@components/posts/more-stories";
import PostBody from "@components/posts/post-body";
import PostHeader from "@components/posts/post-header";
import SectionSeparator from "@components/posts/section-separator";
import { request } from "@lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@lib/fragments";
import LanguageBar from "@components/LanguageBar";
import Giscus from "@giscus/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { format } from "date-fns";

export async function getStaticPaths({ locales }) {
  const data = await request({ query: `{ allPosts { slug } }` });
  const pathsArray = [];
  data.allPosts.map((post) => {
    locales.map((language) => {
      pathsArray.push({ params: { slug: post.slug }, locale: language });
    });
  });

  return {
    paths: pathsArray,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false, locale }) {
  const formattedLocale = locale.split("-")[0];
  const graphqlRequest = {
    query: `
      query PostBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        post(locale: ${formattedLocale}, filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          slug
          description
          video {
            provider
            providerUid
            thumbnailUrl
            title
            url
            width
          }
          content {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1400, h: 650 }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
          date
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 1400, h: 550 })
          }
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1400, h: 650 }) {
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

        morePosts: allPosts(locale: ${formattedLocale}, orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
          title
          slug
          excerpt
          date
          description
          video {
            provider
            providerUid
            thumbnailUrl
            title
            url
            width
          }
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1400, h: 650 }) {
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

      ${responsiveImageFragment}
      ${metaTagsFragment}
    `,
    preview,
    variables: {
      slug: params.slug,
    },
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
      preview,
    },
  };
}

export default function Post({ subscription, preview }) {
  const {
    data: { site, post, morePosts },
  } = useQuerySubscription(subscription);

  const metaTags = post.seo.concat(site.favicon);

  return (
    <Layout preview={preview}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Container>
        <LanguageBar />
        <Header />
        <article>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={post.content} />
          <div className="center mx-auto mb-4 mt-6 max-w-4xl">
            <div className="comments-container">
              <Giscus
                id="comments"
                repo="donaldboulton/mansbooks.com"
                repoId="R_kgDOI7HnKA"
                category="General"
                categoryId="DIC_kwDOI7HnKM4CU8od"
                mapping="pathname"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="transparent_dark"
              />
            </div>
          </div>
        </article>
        <SectionSeparator />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}
