import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Bridge from "@components/gallery/Icons/Bridge";
import Dialogue from "@components/gallery/Dialogue";
import Stars from "@components/Stars";
import Center from "@components/Center";
import { ShareIcon } from "@heroicons/react/outline";
import cn from "classnames";
import angelina from "../public/icon-192x192.png";
import cloudinary from "../utils/cloudinary";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";
import type { ImageProps } from "../utils/types";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";
import Layout from "@components/PageLayout";
import angie from "../public/angie/angelina.jpg";
import styles from "@components/sponsor-section.module.css";

const Gallery: NextPage = ({ images }: { images: ImageProps[] }) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();
  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <Stars />
      <Head>
        <title>Gallery</title>
        <>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Gallery",
              url: "https://mansbooks.com/gallery",
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
                    "@id": "https://mansbooks.com/gallery",
                    name: "MansBooks Gallery",
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
      <Layout>
        <main className="mx-auto mb-32 mt-4 max-w-[1960px] p-4">
          {photoId && (
            <Dialogue
              images={images}
              onClose={() => {
                setLastViewedPhoto(photoId);
              }}
            />
          )}
          <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
            <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-slate-300 shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="flex max-h-full max-w-full items-center justify-center">
                  <Bridge />
                </span>
                <span className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
              </div>
              <Image
                alt="Angelina Jordan"
                title="Angelina Jordan"
                src={angelina}
                className="rounded"
                loading="lazy"
                height={150}
                width={200}
              />
              <h1 className="mb-4 mt-8 text-base font-bold uppercase tracking-widest">
                2023 Event Photos
              </h1>
              <p className="max-w-[40ch] text-slate-300/75 sm:max-w-[32ch]">
                Queen Angelina Jordan, collection of photos!
              </p>
              {showModal ? (
                <>
                  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
                    <div className="relative mx-auto my-6 w-auto max-w-3xl">
                      {/*content*/}
                      <div className="relative flex w-full flex-col rounded-lg border-0 bg-[#111111] shadow-lg outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-700 p-5">
                          <Center>Social Share</Center>
                          <button
                            className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-slate-200 outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="block h-6 w-6 bg-transparent text-2xl text-slate-200 opacity-5 outline-none focus:outline-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-slate-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative flex-auto p-6">
                          <p className="my-4 bg-[#111111] px-2 text-lg leading-relaxed text-slate-300">
                            <EmailShareButton
                              url="https://mansbooks.com/gallery"
                              subject="Gallery"
                              body="body"
                            >
                              <EmailIcon size={32} round />
                            </EmailShareButton>{" "}
                            <TwitterShareButton
                              url={`https://mansbooks.com/expo/${sponsor.slug}`}
                              title="Gallery"
                            >
                              <TwitterIcon size={32} round />
                            </TwitterShareButton>{" "}
                            <FacebookShareButton
                              url={`https://mansbooks.com/expo/${sponsor.slug}`}
                            >
                              <FacebookIcon size={32} round />
                            </FacebookShareButton>{" "}
                            <PinterestShareButton
                              url={`https://mansbooks.com/expo/${sponsor.slug}`}
                            >
                              <PinterestIcon size={32} round />
                            </PinterestShareButton>{" "}
                            <TelegramShareButton
                              url={`https://mansbooks.com/expo/${sponsor.slug}`}
                              title="Gallery"
                            >
                              <TelegramIcon size={32} round />
                            </TelegramShareButton>{" "}
                            <RedditShareButton
                              url={`https://mansbooks.com/expo/${sponsor.slug}`}
                            >
                              <RedditIcon size={32} round />
                            </RedditShareButton>{" "}
                            <WhatsappShareButton
                              url={`https://mansbooks.com/expo/${sponsor.slug}`}
                            >
                              <WhatsappIcon size={32} round />
                            </WhatsappShareButton>{" "}
                            <LinkedinShareButton
                              url={`https://mansbooks.com/expo/${sponsor.slug}`}
                            >
                              <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-700 p-6">
                          <span
                            className={cn(
                              styles.button,
                              styles["button-resource"],
                            )}
                          >
                            <button
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                </>
              ) : null}
              <div className="flex flex-row text-xs text-slate-300">
                <span className={cn(styles.button, styles["button-resource"])}>
                  <button
                    className="button-glow"
                    onClick={() => setShowModal(true)}
                  >
                    <ShareIcon className="-mt-1 h-8 w-8 pr-2" />
                  </button>
                </span>
              </div>
            </div>
            {images.map(({ id, public_id, format, blurDataUrl }) => (
              <Link
                key={id}
                href={`/gallery/?photoId=${id}`}
                as={`/p/${id}`}
                ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
                shallow
                className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
              >
                <Image
                  alt="Angies Conf photo"
                  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                />
              </Link>
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Gallery;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  const reducedResults: ImageProps[] = [];

  let i = 0;
  for (const result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}
