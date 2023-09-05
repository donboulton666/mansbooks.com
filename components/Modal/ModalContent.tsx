import React from "react";
import Center from "@components/Center";
import cn from "classnames";
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

import styles from "../sponsor-section.module.css";

export default function ModalContent({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative mx-auto my-6 w-auto max-w-3xl">
          <div className="content relative flex w-full flex-col rounded-lg border-0 bg-[#111111] shadow-lg outline-none focus:outline-none">
            <div className="head flex items-start justify-between rounded-t border-b border-solid border-slate-700 p-5">
              <h2>Modal</h2>
              <button
                className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-slate-200 outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="block h-6 w-6 bg-transparent text-2xl text-slate-200 outline-none focus:outline-none">
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
            <div className="body relative flex-auto p-6">
              <div className="my-4 bg-[#111111] px-2 text-lg leading-relaxed text-slate-300">
                <EmailShareButton
                  url="https://mansbooks.com/expo/sponsor.slug/"
                  subject={sponsor.name}
                  body="body"
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>{" "}
                <TwitterShareButton
                  url="https://mansbooks.com/gallery"
                  title={sponsor.name}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>{" "}
                <FacebookShareButton url="https://mansbooks.com/gallery">
                  <FacebookIcon size={32} round />
                </FacebookShareButton>{" "}
                <PinterestShareButton url="https://mansbooks.com/gallery">
                  <PinterestIcon size={32} round />
                </PinterestShareButton>{" "}
                <TelegramShareButton
                  url="https://mansbooks.com/gallery"
                  title={sponsor.name}
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>{" "}
                <RedditShareButton url="https://mansbooks.com/gallery">
                  <RedditIcon size={32} round />
                </RedditShareButton>{" "}
                <WhatsappShareButton url="https://mansbooks.com/gallery">
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>{" "}
                <LinkedinShareButton url="https://mansbooks.com/gallery">
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>
            </div>
            <div className="footer flex items-center justify-end rounded-b border-t border-solid border-slate-700 p-6">
              <span className={cn(styles.button, styles["button-resource"])}>
                <button type="button" onClick={onClose}>
                  Close
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
