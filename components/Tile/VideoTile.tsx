import React from "react";
import { useEffect, useRef } from "react";

import {
  useHMSActions,
  useHMSStore,
  selectCameraStreamByPeerID,
} from "@100mslive/react-sdk";

const VideoTile = ({ peer, isLocal }) => {
  const hmsActions = useHMSActions();
  const videoRef = useRef(null);
  const videoTrack = useHMSStore(selectCameraStreamByPeerID(peer.id));

  useEffect(() => {
    (async () => {
      console.log(videoRef.current);
      console.log(videoTrack);
      if (videoRef.current && videoTrack) {
        if (videoTrack.enabled) {
          await hmsActions.attachVideo(videoTrack.id, videoRef.current);
        } else {
          await hmsActions.detachVideo(videoTrack.id, videoRef.current);
        }
      }
    })();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoTrack]);

  return (
    <div className="m-1 flex">
      <div className="relative">
        <video
          ref={videoRef}
          autoPlay={true}
          playsInline
          muted={true}
          className={`h-64 w-64 rounded-lg object-cover shadow-lg ${
            isLocal ? "mirror" : ""
          }`}
        ></video>
      </div>
    </div>
  );
};

export default VideoTile;
