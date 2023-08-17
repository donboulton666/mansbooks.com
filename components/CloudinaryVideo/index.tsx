import React from "react";
import { useRef } from "react";
import { AdvancedVideo, lazyload } from "@cloudinary/react";
import { CloudinaryVideo } from "@cloudinary/url-gen";
import { Transformation } from "@cloudinary/url-gen";
import { reverse } from "@cloudinary/url-gen/actions/effect";
import { brightness } from "@cloudinary/url-gen/actions/adjust";
import { max } from "@cloudinary/url-gen/actions/roundCorners";
import { concatenate } from "@cloudinary/url-gen/actions/videoEdit";
import { Concatenate } from "@cloudinary/url-gen/qualifiers/concatenate";
import { videoCodec } from "@cloudinary/url-gen/actions/transcode";
import { auto, vp9 } from "@cloudinary/url-gen/qualifiers/videoCodec";
import rounded from "./CloudinaryVideo/rounded";
import VideoWrapper from "./wrapper";

const Video = () => {
  const vid = new CloudinaryVideo(
    "videos/Angelina_Jordan_-_Love_Dont_Let_Me_Go_-Visualizer-",
    {
      cloudName: "mansbooks",
    },
  );
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
          cldVid={vid}
          sources={sources}
          className="w-full"
          ref={videoEl}
          controls
          autoPlay
          loop
          plugins={[lazyload()]}
        />
      </VideoWrapper>
    </>
  );
};

export default Video;
