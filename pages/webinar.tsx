import Head from "next/head";
import dynamic from "next/dynamic";
import Page from "@components/page";
import Schedule from "@components/schedule";
import Layout from "@components/PageLayout";
import Header from "@components/header";
import { META_DESCRIPTION } from "@lib/constants";
import Container from "@components/posts/container";
import angie from "../public/angie/angelina.jpg";
import Stars from "@components/Stars";

const DynamicConferenceWrapper = dynamic(
  () => import("../components/Conference/conferenceWrapper"),
  { ssr: false }
);

const Webinar = () => {
  const meta = {
    title: "Webinars - Angelina Jordan",
    description: META_DESCRIPTION,
  };
  return (
    <>
      <Stars />
      <Page meta={meta}>
        <Layout>
          <Container>
            <Head>
              <title>Live Stages</title>
              <>
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    name: "Terms",
                    url: "https://mansbooks.com/terms",
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
                    description: "Mansbooks Profile Page",
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
                      url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFRYVDhgQEhgNEh0PExYVFx8eGBYVIhUaHysjHR0oKRUiJTUlKC0vMjIyGSU4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7NTsyOzs7OzsvLy81OzU7NjU1Ozs1LzY7OzsvNS87OzsvLy87OzsvLzIvLy87Lzs7O//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABgcFAf/EAB0QAAEFAQEBAQAAAAAAAAAAAAEAAgMEEQUxIRL/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQA/8QAHBEAAQQDAQAAAAAAAAAAAAAAAgABAxEEEyEx/9oADAMBAAIRAxEAPwCu3Z2wwO0pTl6UYs5o9Wl2ZJBAc3xTm3LaN4/nfVBk5emuKuDH2H6qdR6MZYPoQlPnSWGxDdXFYEljaGSCipPHTqtlgJxKzeRG6zpaPUIQyALt1KjJ2fi2IOUxrBgQhCcAtSxG9r//2Q==",
                    },
                    name: "MansBooks 100MS Stage",
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
                          "@id": "https://mansbooks.com/StageApp",
                          name: "MansBooks Terms",
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
            <div className="mb-10 h-[80vh]"><DynamicConferenceWrapper /></div>            
          </Container>
        </Layout>
      </Page>
    </>
  );
};

export default Webinar;
