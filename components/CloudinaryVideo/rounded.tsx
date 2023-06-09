import React from "react";
import { useRef } from "react";
import { AdvancedVideo, lazyload } from "@cloudinary/react";
import { Cloudinary, Transformation } from "@cloudinary/url-gen";
import { max } from "@cloudinary/url-gen/actions/roundCorners";
import { videoCodec } from "@cloudinary/url-gen/actions/transcode";
import { auto, vp9 } from "@cloudinary/url-gen/qualifiers/videoCodec";
import { scale } from "@cloudinary/url-gen/actions/resize";

const Rounded = () => {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "mansbooks",
    },
    url: {
      analytics: false,
    },
  });
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
  // Use the video with public ID,
  const myVideo = cld.video(
    "videos/Angelina_Jordan_-_Love_Dont_Let_Me_Go_-Visualizer-"
  );

  // Apply the transformation.
  myVideo.resize(scale().width(800).height(500)).roundCorners(max());

  // Render the transformed video in a React component.
  return (
    <div className="mb-10 mt-10 block w-full">
      <AdvancedVideo
        cldVid={myVideo}
        className="w-full"
        sources={sources}
        ref={videoEl}
        controls="true"
        autoPlay
        loop
        plugins={[lazyload()]}
      />
    </div>
  );
};

export default Rounded;
