import {
  useHMSActions,
  useHMSStore,
  selectScreenShareByPeerID,
  selectIsLocalScreenShared,
  selectPeerScreenSharing,
} from "@100mslive/react-sdk";
import { ShareScreenIcon } from "@100mslive/react-icons";
import React from "react";
import IconFitScreen from "@components/icons/icon-fit-screen";
import Button from "./Button";
import { CrossIcon } from "@100mslive/react-icons";
import { hmsConfig } from "./config";
import Image from "next/legacy/image";

const ScreenshareTile = () => {
  const screenSharePeer = useHMSStore(selectPeerScreenSharing);
  const hmsActions = useHMSActions();
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const videoTrack = useHMSStore(
    selectScreenShareByPeerID(screenSharePeer?.id),
  );
  const isLocalScreenShared = useHMSStore(selectIsLocalScreenShared);
  React.useEffect(() => {
    (async () => {
      if (videoRef && videoRef?.current && videoTrack) {
        if (videoTrack.enabled) {
          await hmsActions.attachVideo(videoTrack.id, videoRef?.current);
        } else {
          await hmsActions.detachVideo(videoTrack.id, videoRef?.current);
        }
      }
    })();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoTrack?.id, videoTrack?.enabled, videoTrack?.deviceID]);
  const stopScreenShare = async () => {
    try {
      await hmsActions.setScreenShareEnabled(false);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const fullScreen = () => {
    if (typeof window !== "undefined") {
      const element = document.getElementById("screen-share-video");
      element?.requestFullscreen();
    }
  };
  return (
    <div className="screenshare self-screenshare">
      {isLocalScreenShared ? (
        <div className="screenshare self-screenshare flex flex-col items-center justify-center font-bold">
          <p>You're sharing screen</p>{" "}
          <Button variant="danger" onClick={stopScreenShare}>
            <CrossIcon className="mr-2" /> Stop screen share
          </Button>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center p-2 md:p-0">
          <div className="relative block h-auto max-w-full md:h-full">
            {hmsConfig.setHmsWatermark ? <HmsWatermark /> : null}
            <div
              className="absolute -right-1 bottom-0 flex items-center rounded-tl-lg p-2 text-sm"
              style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
            >
              <ShareScreenIcon className="mr-2" /> Viewing{" "}
              {screenSharePeer?.name}’s Screen
            </div>
            <button
              onClick={fullScreen}
              style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
              className="display absolute -right-1 top-0 z-10  cursor-pointer items-center justify-center rounded-bl-lg"
            >
              <IconFitScreen />
            </button>
            <video
              id="screen-share-video"
              className="block h-auto max-w-full md:h-full"
              ref={videoRef}
              autoPlay
              muted
            ></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenshareTile;

const HmsWatermark = () => {
  return (
    <Image
      src="/hms-coachmark.svg"
      className="absolute bottom-2 left-2 z-10 hidden md:block"
    />
  );
};
