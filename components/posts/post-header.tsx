import Head from "next/head";
import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import angie from "../../public/angie/angelina.jpg";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  excerpt,
}) {
  const seo = typeof window !== "undefined" ? window.location.href : "";
  return (
    <>
      <Head>
        <>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: title,
              description: excerpt,
              author: [
                {
                  "@type": "Person",
                  name: author.name,
                },
              ],
              image: angie,
              datePublished: date,
            })}
            ,
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Contact",
              url: seo,
              image: {
                "@type": "ImageObject",
                url: angie,
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
              description: excerpt,
              email: "donaldboulton@gmail.com",
              founder: {
                "@id": "https://donboulton.com",
              },
              location: "OKC, Middle Earth",
              image: {
                "@type": "ImageObject",
                url: angie,
                width: "1400",
                height: "450",
              },
              logo: {
                "@type": "ImageObject",
                url: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAAP/EAB0QAAEEAwEBAAAAAAAAAAAAABEAAQIDBAUSIXH/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/EABoRAAICAwAAAAAAAAAAAAAAAAABAgMREjH/2gAMAwEAAhEDEQA/AGtwcaONru6YWdVEyixYeAsC30oiKiqK14G1vJ//2Q==",
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
                {
                  "@type": "ListItem",
                  item: {
                    "@id": seo,
                    name: title,
                  },
                  position: "3",
                },
              ],
              numberOfItems: "3",
              name: "Breadcrumbs",
            })}
            ,
          </script>
        </>
        ,
      </Head>
      <div data-datocms-noindex>
        <PostTitle>{title}</PostTitle>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage
            title={title}
            responsiveImage={coverImage.responsiveImage}
          />
        </div>
        <div className="mx-auto mb-8 max-w-4xl sm:flex sm:items-start">
          <div className="ml-2 flex h-12 w-12 flex-shrink-0 rounded-full sm:mx-0 sm:h-10 sm:w-10">
            <Avatar name={author.name} picture={author.picture} />
            <div className="-mt-1 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <div className="text-base leading-6">
                <span className="mr-6 font-medium italic">{author.name} </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-6 max-w-4xl text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
