import React from "react";
import Head from "next/head";
import Center from "@components/Center";
import LeftText from "@components/LeftText";
import ColumnGridLeft from "@components/column-grid-left";
import Layout from "@components/layout";
import ContactForm from "@components/ContactForm";
import angie from "../public/angie/angelina.jpg";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Contact",
              url: "https://mansbooks.com/contact",
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
              description: "Mansbooks Home Page",
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
                    "@id": "https://mansbooks.com/contact",
                    name: "MansBooks Contact",
                  },
                  position: "2",
                },
              ],
              numberOfItems: "2",
              name: "Breadcrumbs",
            })}
            ,
          </script>
        </>
        ,
      </Head>
      <div className="mr-10 ml-10 mt-10 mb-20">
        <p>
          <Center>Contact Queen Angelina Jordan</Center>
          <p>Use the form below to Contact the Angelic Queen.</p>
        </p>
        <LeftText>Social Links</LeftText>
        <ColumnGridLeft>
          <div className="mr-20 mt-4">
            Extended Profile Information:{" "}
            <p>
              <a
                href="https://angelinajordanofficial.com"
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="hookForm"
              >
                🔗 Angelina Jordan official Website
              </a>
            </p>
            <p>
              <a
                href="https://youtube.com/c/AngelinaJordanOfficial"
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="hookForm"
              >
                🔗 Angelina Jordan YouTube Channel
              </a>
            </p>
            <p>
              <a
                href="https://youtube.com/c/AngelinaJordanCoverChannel"
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="hookForm"
              >
                🔗 Angelina Jordan Cover Offical
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/angelinajordana/"
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="hookForm"
              >
                🔗 Angelina Jordan Instagram
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/angelinajordanofficial"
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="Angelina Jordan Facebook"
              >
                🔗 Angelina Jordan Facebook
              </a>
            </p>
            <p>
              <a
                href="https://www.tiktok.com/@angelinajordana"
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="Angelina Jordan TikTok"
              >
                🔗 Angelina Jordan TikTok
              </a>
            </p>
          </div>
          <div className="-mt-2 mb-24 text-slate-200 lg:col-span-2 lg:mt-0">
            <ContactForm />
          </div>
        </ColumnGridLeft>
      </div>
    </Layout>
  );
}
