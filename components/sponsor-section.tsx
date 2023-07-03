import React from "react";
import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Image from "next/legacy/image";
import Center from "@components/Center";
import cn from "classnames";
import { Sponsor } from "@lib/types";
import Giscus from "@giscus/react";
import ViewCounter from "@components/ViewCounter";
import LovesCounter from "@components/LovesCounter";
import { EyeIcon, HeartIcon, ShareIcon } from "@heroicons/react/outline";
import styles from "./sponsor-section.module.css";
import styleUtils from "./utils.module.css";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import ModalDialog from "@components/Modal/ModalDialog";
import Share from "@components/Share";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

type Props = {
  sponsor: Sponsor;
};

export default function SponsorSection({ sponsor }: Props) {
  const [showModal, setShowModal] = useState(false);
  const session = useSession();
  const supabase = useSupabaseClient();
  return (
    <>
      <>
        <Script src="https://apis.google.com/js/platform.js" />
      </>
      <div className="mb-20">
        <Link href="/expo" className={styles.backlink}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to Videos
        </Link>
        <div className={styles.layout}>
          <iframe
            className={cn(
              styles.video,
              styleUtils.appear,
              styleUtils["appear-first"]
            )}
            allow="picture-in-picture"
            allowFullScreen
            frameBorder="0"
            height="100%"
            src={`https://youtube.com/embed/${sponsor.youtubeSlug}`}
            title={sponsor.name}
            width="100%"
          />
          <div className={styles.container}>
            <div className={styles["name-and-logo"]}>
              <Image
                alt={sponsor.name}
                src={sponsor.logo.url}
                className={styles.image}
                loading="lazy"
                title={sponsor.name}
                height={64}
                width={64}
              />
              <h1 className={styles.name}>{sponsor.name}</h1>
            </div>
            <div className="mt-4 flex">
              <div className="flex flex-row text-xs text-slate-300">
                <span className={cn(styles.button, styles["button-resource"])}>
                  <EyeIcon className="-mt-1 h-8 w-8 pr-2" />{" "}
                  <ViewCounter slug={sponsor.slug} />
                </span>
              </div>
              <div className="flex flex-row text-xs text-slate-300">
                <span className={cn(styles.button, styles["button-resource"])}>
                  <LovesCounter
                    slug={sponsor.slug}
                    session={session}
                    type="button"
                    aria-describedby="AJ Loves Action"
                  />
                </span>
              </div>
              <div className="flex flex-row text-xs text-slate-300">
                {showModal ? (
                  <>
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
                      <div className="relative mx-auto my-6 w-auto max-w-3xl">
                        {/*content*/}
                        <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                            <Center>Social Share</Center>
                            <button
                              className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-slate-200 opacity-5 outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative flex-auto p-6">
                            <p className="my-4 bg-slate-900 text-lg leading-relaxed text-slate-300">
                              <EmailShareButton
                                url={sponsor.slug}
                                subject={"Email"}
                                body="body"
                              >
                                <EmailIcon size={32} round />
                              </EmailShareButton>
                              <TwitterShareButton
                                url={sponsor.slug}
                                title={slug}
                              >
                                <TwitterIcon size={32} round />
                              </TwitterShareButton>
                              <FacebookShareButton url={sponsor.slug}>
                                <FacebookIcon size={32} round />
                              </FacebookShareButton>
                              <PinterestShareButton url={sponsor.slug}>
                                <PinterestIcon size={32} round />
                              </PinterestShareButton>
                              <TelegramShareButton
                                url={sponsor.slug}
                                title={slug}
                              >
                                <TelegramIcon size={32} round />
                              </TelegramShareButton>
                              <RedditShareButton url={sponsor.slug}>
                                <RedditIcon size={32} round />
                              </RedditShareButton>
                              <WhatsappShareButton url={sponsor.slug}>
                                <WhatsappIcon size={32} round />
                              </WhatsappShareButton>
                              <LinkedinShareButton url={sponsor.slug}>
                                <LinkedinIcon size={32} round />
                              </LinkedinShareButton>
                            </p>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                            <button
                              className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                  </>
                ) : null}
                <span className={cn(styles.button, styles["button-resource"])}>
                  <button onClick={() => setShowModal(true)}>
                    <ShareIcon className="-mt-1 h-8 w-8 pr-2" />
                  </button>
                </span>
              </div>
            </div>
            <p className={styles.description}>{sponsor.description}</p>
            <div className={styles["sponsor-details"]}>
              <Link
                href={sponsor.callToActionLink}
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="AJ Action"
                area-label="AJ Action"
                type="button"
                className={cn(styles.button, styles["button-resource"])}
              >
                {sponsor.callToAction}
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                </svg>
              </Link>
              <Link
                href={sponsor.discord}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className={cn(styles.button, styles["button-link"])}
              >
                Chat on Discord
              </Link>
            </div>
            <div className={styles.resources}>
              <h2 className={styles.heading}>Resources</h2>
              {sponsor.links.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(styles.button, styles["button-resource"])}
                >
                  <span className={styles.truncate}>{link.text}</span>
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    shapeRendering="geometricPrecision"
                  >
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <path d="M15 3h6v6" />
                    <path d="M10 14L21 3" />
                  </svg>
                </Link>
              ))}
              <div className={cn(styles.button, styles["button-resource"])}>
                <div
                  className="g-ytsubscribe"
                  data-channelid="UC1Pwa4nFvIPbtYVLcBGDpjA"
                  data-layout="full"
                  data-theme="dark"
                  data-count="default"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-24 mt-6 w-[95vw]">
        <div className="comments-container ml-8 mr-8">
          <Giscus
            id="comments"
            repo="donaldboulton/mansbooks.com"
            repoId="R_kgDOI7HnKA"
            category="General"
            categoryId="DIC_kwDOI7HnKM4CU8od"
            mapping="pathname"
            term="Welcome to Angelina Jordan Comments!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="transparent_dark"
          />
        </div>
      </div>
    </>
  );
}
