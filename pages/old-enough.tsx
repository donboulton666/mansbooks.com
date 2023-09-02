import React from "react";
import { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import cn from "classnames";
import ReactPlayer from "react-player/youtube";
import Layout from "@components/PageLayout";
import Image from "next/image";
import LeftText from "@components/LeftText";
import Stars from "@components/Stars";
import angie from "../public/apple-touch-icon.png";
import IframeWrapper from "@components/IframeWrapper";
import IframeWrapperLarge from "@components/IframeWrapperLarge";

const OldEnough = () => {
  const ref = useRef(null);
  const refPlayer = useRef(null);
  return (
    <>
      <Stars />
      <Head>
        <title>Old Enough</title>
        <>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Old Enough",
              url: "https://mansbooks.com/old-enough",
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
              description: "Mansbooks Privacy Page",
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
                    name: "Home",
                  },
                  position: "1",
                },
                {
                  "@type": "ListItem",
                  item: {
                    "@id": "https://mansbooks.com/old-enough",
                    name: "Old Enough",
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
      </Head>
      <Layout>
        <div className="login-beams bg-scale-100 flex flex-1 flex-col mt">
          <div className="flex flex-1 mb-10">
            <main className="bg-scale-200 border-scale-500 flex flex-1 flex-shrink-0 flex-col items-center border-r border-slate-700 px-5 pb-8 pt-16 shadow-lg">
              <div className="flex w-[330px] flex-1 flex-col justify-center sm:w-[384px]">
                <div className="mb-10">
                  <LeftText className="mb-2 mt-8 text-2xl lg:text-3xl">
                    Welcome Angelina's Playlists
                  </LeftText>
                  <h2 className="text-scale-1100 text-sm">Old Enough</h2>
                </div>
                <div className="flex flex-col gap-5">
                  <IframeWrapper>
                    <ReactPlayer
                      ref={ref}
                      url="https://www.youtube.com/embed/videoseries?si=3WDvhcx37RPUqyZC&amp;list=PLTa09znYPWvKpWlZAAF3v2KEa4b7_tMBf"
                      width="100%"
                      height="100%"
                      controls={true}
                    />
                  </IframeWrapper>
                </div>
              </div>
              <div className="sm:text-center">
                <p className="text-xs text-scale-900 sm:mx-auto sm:max-w-sm">
                  By continuing, you agree to Mansbooks{" "}
                  <Link
                    className="underline hover:text-scale-1100"
                    href="https://mansbooks.com/terms"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    className="underline hover:text-scale-1100"
                    href="https://mansbooks.com/privacy"
                  >
                    Privacy Policy
                  </Link>
                  , and to receive periodic emails with updates.
                </p>
              </div>
            </main>
            <aside className="hidden form-beams flex-1 flex-shrink basis-1/4 flex-col items-center justify-center xl:flex">
              <div className="relative flex flex-col gap-6 opacity-70">
                <IframeWrapperLarge>
                  <ReactPlayer
                    ref={refPlayer}
                    url="https://www.youtube.com/embed/W99gdQlbv3I?si=6U_TIqIiju_nRimW"                    
                    height="100%"
                    width="100%"
                    controls={true}
                  />
                </IframeWrapperLarge>
              </div>
            </aside>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default OldEnough;
