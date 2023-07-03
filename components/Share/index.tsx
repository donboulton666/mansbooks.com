import React from "react";
import Center from "@components/Center";

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

const slug = typeof window !== "undefined" ? window.location.href : "";

export default function Share() {
  return (
    <div className="bg-slate-900">
      <Center>Social Share</Center>
      <EmailShareButton url={slug} subject={"Email"} body="body">
        <EmailIcon size={32} round />
      </EmailShareButton>
      <TwitterShareButton url={slug} title={slug}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton url={slug}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <PinterestShareButton url={slug}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>
      <TelegramShareButton url={slug} title={slug}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <RedditShareButton url={slug}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton url={slug}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={slug}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
}
