import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "@components/posts/container";
import HeroPost from "@components/posts/hero-post";
import Intro from "@components/posts/intro";
import Layout from "@components/PageLayout";
import MoreStories from "@components/posts/more-stories";
import { request } from "@lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@lib/fragments";
import LanguageBar from "@components/LanguageBar";
import { useRouter } from "next/router";
import { Views } from "../lib/types";
import useSWR from "swr";
import fetcher from "lib/fetcher";
import { EyeIcon } from "@heroicons/react/outline";

export async function getStaticProps({ preview, locale }) {
  const formattedLocale = locale.split("-")[0];
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        blog {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        allPosts(locale: ${formattedLocale}, orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1400, h: 800 }) {
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

      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

export default function Blog({ subscription }) {
  const {
    data: { allPosts, site, blog },
  } = useQuerySubscription(subscription);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { locale, locales, asPath } = useRouter().locale;
  const post = allPosts[0];
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const metaTags = blog.seo.concat(site.favicon);
  const { data } = useSWR<Views>(`/api/views/${post.slug}`, fetcher);
  return (
    <>
      <Layout preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Container>
          <LanguageBar />
          <Intro />
          <div className="-mt-6 mr-2 flex flex-row text-xs text-slate-300">
            <div className="flex-grow" />
            <div className="flex flex-row text-xs text-slate-300">
              <EyeIcon className="-mt-1 h-6 w-6 pr-2" />{" "}
              <span>{`${data?.count ?? "0"} views`}</span>
            </div>
          </div>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          <div>{morePosts.length > 0 && <MoreStories posts={morePosts} />}</div>
        </Container>
      </Layout>
    </>
  );
}
