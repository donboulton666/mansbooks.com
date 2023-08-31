import React from "react";
import { useState, FC } from "react";
import { Loading } from "../Loading";
import {
  MicOffIcon,
  MicOnIcon,
  SettingsIcon,
  VideoOffIcon,
  VideoOnIcon,
  ArrowRightIcon,
} from "@100mslive/react-icons";
import {
  HMSPeer,
  useVideo,
  useHMSStore,
  selectLocalPeer,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoDisplayEnabled,
  useAVToggle,
} from "@100mslive/react-sdk";
import { AudioLevel } from "../HmsVideoTile";
import InfoIcon from "@components/icons/icon-info";
import { useRouter } from "next/router";
import { usePreview } from "./usePreview";
import SettingDialog from "../SettingDialog";
import HmsAvatar from "../HmsAvatar";
import Button from "../HmsButton";
import IconButton from "./IconButton";

export const PreviewScreen: FC<{ token: string }> = ({ token }) => {
  const router = useRouter();
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const audioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const videoEnabled = useHMSStore(selectIsLocalVideoDisplayEnabled);
  const { enableJoin, join } = usePreview({
    token,
    name,
  });
  return (
    <div className="flex flex-col rounded-lg bg-[#212121] p-4 md:flex-row md:p-8">
      <PreviewContainer name={name} />
      <div className="mt-4 flex w-[320px] flex-col justify-between md:ml-8 md:mt-0">
        <div>
          <p className="my-0 text-2xl font-bold">Welcome {name}</p>
          <p className="text-slate-400">
            Preview your video and audio before joining the stage
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            join();
          }}
        >
          <input
            value={name}
            type="name"
            autoComplete="name"
            placeholder="Enter your name"
            required
            maxLength={20}
            className="h-10 w-full rounded-lg bg-slate-600 pl-2 text-md placeholder:text-slate-400 focus:bg-slate-700 focus:outline-none"
            onChange={(e) => {
              setName(e.target.value);
              localStorage.setItem("name", e.target.value);
            }}
          />
          <p className="flex items-center">
            <InfoIcon className="mr-2" /> Note: Your mic is{" "}
            {audioEnabled ? "on" : "off"} and video is{" "}
            {videoEnabled ? "on" : "off"}
          </p>
          <div className="flex space-x-4">
            <Button variant="secondary" onClick={() => router.push("/")}>
              Go back
            </Button>
            <Button disabled={!enableJoin} type="submit">
              Join Stage <ArrowRightIcon />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PreviewContainer: React.FC<{ name: string }> = ({ name }) => {
  const localPeer = useHMSStore(selectLocalPeer);
  const { isLocalAudioEnabled, isLocalVideoEnabled, toggleAudio, toggleVideo } =
    useAVToggle();
  return (
    <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-lg bg-slate-700">
      {localPeer ? (
        <>
          <PreviewVideo videoTrack={localPeer.videoTrack} />
          <AudioLevel audioTrack={localPeer.audioTrack} />
          <div className="absolute bottom-4 z-30 flex space-x-2">
            <IconButton active={!isLocalAudioEnabled} onClick={toggleAudio}>
              {isLocalAudioEnabled ? <MicOnIcon /> : <MicOffIcon />}
            </IconButton>
            <IconButton active={!isLocalVideoEnabled} onClick={toggleVideo}>
              {isLocalVideoEnabled ? <VideoOnIcon /> : <VideoOffIcon />}
            </IconButton>
          </div>
          <div className="absolute bottom-4 right-4 z-30">
            <SettingDialog>
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </SettingDialog>
          </div>
          {isLocalVideoEnabled ? null : (
            <HmsAvatar size="lg" className="absolute z-10" name={name} />
          )}
        </>
      ) : (
        <Loading size={90} />
      )}
    </div>
  );
};

const PreviewVideo: React.FC<{ videoTrack: HMSPeer["videoTrack"] }> = ({
  videoTrack,
}) => {
  const ref = useVideo(videoTrack || "");
  return (
    <video
      className={`mirror h-full w-full rounded-lg object-cover`}
      autoPlay
      muted
      playsInline
      ref={ref}
    />
  );
};
