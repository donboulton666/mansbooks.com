import React from "react";
import { useRef, ReactNode, FC } from "react";
import { AdvancedVideo, lazyload } from "@cloudinary/react";
import { videoCodec } from "@cloudinary/url-gen/actions/transcode";
import { auto, vp9 } from "@cloudinary/url-gen/qualifiers/videoCodec";
import VideoWrapper from "./wrapper";

interface VideoChildrenProps {
  children: ReactNode;
  video: string;
}

const cld = new Cloudinary({
  cloud: {
    cloudName: "mansbooks",
  },
});

const VideoChildren: FC<VideoChildrenProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, video, cloudName } = props;
  const myVideo = cld.video({ video });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const myURL = myVideo.toURL();
  const videoEl = useRef();
  const sources = [
    {
      type: "mp4",
      codecs: ["avc1.4d002a"],
      transcode: videoCodec(auto()),
    },
    {
      type: "webm",
      codecs: ["vp8", "vorbis"],
      transcode: videoCodec(vp9()),
    },
  ];

  return (
    <>
      <VideoWrapper>
        <AdvancedVideo
          cldVid={cld}
          sources={sources}
          className="w-full opacity-75"
          ref={videoEl}
          controls
          autoPlay
          loop
          plugins={[lazyload()]}
        >
          {video}
        </AdvancedVideo>
      </VideoWrapper>
    </>
  );
};

export default VideoChildren;
