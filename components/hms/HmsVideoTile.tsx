import React from "react";
import { MicOffIcon } from "@100mslive/react-icons";
import {
  useHMSStore,
  HMSPeer,
  useAudioLevelStyles,
  selectIsPeerAudioEnabled,
  selectIsPeerVideoEnabled,
  HMSTrackID,
  selectPeerByID,
  selectTrackByID,
} from "@100mslive/react-sdk";
import { useCallback, useRef, FC } from "react";
import HmsAvatar from "./HmsAvatar";
import { hmsConfig } from "./config";
import useVideo from "./lib/useVideo";
import Image from "next/image";

interface VideoTileProps {
  trackId: HMSTrackID;
  width: number;
  height: number;
}

const VideoTile: FC<VideoTileProps> = ({ width, height, trackId }) => {
  const track = useHMSStore(selectTrackByID(trackId));
  const peer = useHMSStore(selectPeerByID(track?.peerId));
  const isVideoEnabled = useHMSStore(selectIsPeerVideoEnabled(peer?.id));
  const isAudioEnabled = useHMSStore(selectIsPeerAudioEnabled(peer?.id));
  return (
    <div className="relative p-2" style={{ width, height }}>
      {peer ? (
        <div className="relative flex h-full w-full items-center justify-center rounded-lg">
          <PeerName name={peer?.name} />
          {peer.videoTrack ? (
            <Video mirror={peer.isLocal} id={peer.videoTrack} />
          ) : null}
          {isAudioEnabled ? null : <AudioIndicator />}
          <AudioLevel audioTrack={peer.audioTrack} />
          {isVideoEnabled ? (
            <>
              {height > 300 || hmsConfig.setHmsWatermark ? (
                <HmsWatermark />
              ) : null}
            </>
          ) : (
            <HmsAvatar
              size={width < 400 ? "lg" : "xl"}
              className="absolute"
              name={peer.name}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default VideoTile;

const Video: React.FC<{ id: string; mirror: boolean }> = ({ id, mirror }) => {
  const ref = useVideo(id);
  return (
    <video
      className={`bg-slate-base h-full w-full rounded-lg border-solid border-transparent object-cover  ${
        mirror ? "mirror" : ""
      }`}
      ref={ref}
      autoPlay
      muted
      playsInline
    />
  );
};

const AudioIndicator = () => {
  return (
    <div className="absolute bottom-2 right-2 flex items-center justify-center rounded-full bg-red-500 p-1">
      <MicOffIcon />
    </div>
  );
};

const PeerName: React.FC<{ name: string }> = ({ name }) => {
  return (
    <span
      style={{ textShadow: "black 1px 0 10px" }}
      className="absolute bottom-3 left-3 z-40 text-sm"
    >
      {name}
    </span>
  );
};

const HmsWatermark = () => {
  return (
    <Image
      src="/hms-coachmark.svg"
      className="absolute right-6 top-6 z-30"
      width={82}
      height={23}
      alt="HMS Logo"
    />
  );
};

export const AudioLevel: React.FC<{ audioTrack: HMSPeer["audioTrack"] }> = ({
  audioTrack,
}) => {
  const getStyle = useCallback((level: number) => {
    console.log("AL: ", level);
    const style: Record<string, string> = {
      border: `${level > 10 ? 3 : 0}px solid ${hmsConfig.audioLevelColor}`,
    };
    return style;
  }, []);
  const ref = useRef(null);
  useAudioLevelStyles({
    trackId: audioTrack,
    getStyle,
    ref,
  });
  return (
    <div className="absolute left-0 top-0 h-full w-full rounded-lg" ref={ref} />
  );
};
