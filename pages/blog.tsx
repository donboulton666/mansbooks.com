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
import { Views } from "@lib/types";
import useSWR from "swr";
import fetcher from "@lib/fetcher";
import angieImage from "../public/icons/apple-touch-icon.png";
import Stars from "@components/Stars";
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
      <Stars />
      <Layout preview={subscription.preview}>
        <Head>
          {renderMetaTags(metaTags)}
          <title>Blog</title>
          <>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: "Blog",
                url: "https://mansbooks.com/gallery",
                image: {
                  "@type": "ImageObject",
                  url: angieImage,
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
                  url: angieImage,
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
                      "@id": "https://mansbooks.com/blog",
                      name: "MansBooks Blog",
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
          <Intro />
          <div className="center mx-auto -mt-6 mr-2 flex max-w-4xl flex-row text-xs text-slate-300">
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
