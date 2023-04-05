import React from "react";
import { FC } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface YouTubeProps {
  videoId: string;
  title: string;
}

const YouTube: FC<YouTubeProps> = (props) => {
  const { title, videoId } = props;
  return (
    <div>
      <LiteYouTubeEmbed id={videoId} title={title} />
    </div>
  );
};

export default YouTube;
