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
import ViewCounter from "@components/ViewCounter";
import useSWR from "swr";
import fetcher from "lib/fetcher";
import { EyeIcon } from "@heroicons/react/outline";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { format } from "date-fns";

import { SITE_URL } from "@lib/constants";

type Meta = {
  title: string | null;
  description: string | null;
  image?: string | null;
  url?: string | null;
};

type Props = {
  meta: Meta;
  children: ReactNode;
  fullViewport?: boolean;
};

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

export default function Post({
  subscription,
  preview,
  meta,
  children,
  fullViewport = false,
}: Props) {
  const {
    data: { site, post, morePosts },
  } = useQuerySubscription(subscription);

  const metaTags = post.seo.concat(site.favicon);
  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Layout preview={preview}>
      <Head>
        {renderMetaTags(metaTags)}
        <title>{post.title}</title>
        <>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: post.title,
              url: url,
              image: {
                "@type": "ImageObject",
                url: post.coverImage,
                width: "1400",
                height: "450",
              },
              publisher: {
                "@type": "Organization",
                name: "Mansbooks",
              },
              license: "http://mansbooks.com/license",
            })}
            ,
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@id": "https://mansbooks.com",
              "@type": "Organization",
              address: "OKC, Middle Earth",
              contactPoint: {
                "@type": "ContactPoint",
                email: "donaldboulton@gmail.com",
                telephone: "+405-863-2165",
              },
              description: "Mansbooks Home Page",
              email: "donaldboulton@gmail.com",
              founder: {
                "@id": "https://donboulton.com",
              },
              location: "OKC, Middle Earth",
              image: {
                "@type": "ImageObject",
                url: post.coverImage,
                width: "1400",
                height: "450",
              },
              logo: {
                "@type": "ImageObject",
                url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFRYVDhgQEhgNEh0PExYVFx8eGBYVIhUaHysjHR0oKRUiJTUlKC0vMjIyGSU4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7NTsyOzs7OzsvLy81OzU7NjU1Ozs1LzY7OzsvNS87OzsvLy87OzsvLzIvLy87Lzs7O//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABgcFAf/EAB0QAAEFAQEBAQAAAAAAAAAAAAEAAgMEEQUxIRL/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQA/8QAHBEAAQQDAQAAAAAAAAAAAAAAAgABAxEEEyEx/9oADAMBAAIRAxEAPwCu3Z2wwO0pTl6UYs5o9Wl2ZJBAc3xTm3LaN4/nfVBk5emuKuDH2H6qdR6MZYPoQlPnSWGxDdXFYEljaGSCipPHTqtlgJxKzeRG6zpaPUIQyALt1KjJ2fi2IOUxrBgQhCcAtSxG9r//2Q==",
              },
              name: "MansBooks",
              sameAs: [
                "mailto:donaldboulton@gmail.com",
                "tel:+405-863-2165",
                "https://www.facebook.com/donboulton",
                "https://www.instagram.com/boulton3662",
                "https://twitter.com/donboulton",
                "https://www.linkedin.com/donboulton",
                "https://github.com/donaldboulton/",
              ],
              url: "https://mansbooks.com",
            })}
            ,
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://donboulton.com",
              name: "Donald Boulton",
              url: "https://donboulton.com",
              worksFor: {
                "@id": "https://mansbooks.com",
              },
            })}
            ,
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              description: "Breadcrumbs list",
              itemListElement: [
                {
                  "@type": "ListItem",
                  item: {
                    "@id": "https://mansbooks.com/",
                    name: "MansBooks Home",
                  },
                  position: "1",
                },
                {
                  "@type": "ListItem",
                  item: {
                    "@id": url,
                    name: post.title,
                  },
                  position: "2",
                },
              ],
              numberOfItems: "2",
              name: "Breadcrumbs",
            })}
          </script>
        </>
      </Head>
      <Container>
        <LanguageBar />
        <Header />
        <article>
          <div className="container">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <div className="-mt-6 mr-2 flex flex-row text-xs text-slate-300">
              <div className="flex-grow" />
              <div className="flex flex-row text-xs text-slate-300">
                <EyeIcon className="-mt-1 h-6 w-6 pr-2" />{" "}
                <ViewCounter slug={post.slug} />
              </div>
            </div>
            <PostBody content={post.content} />
          </div>
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
