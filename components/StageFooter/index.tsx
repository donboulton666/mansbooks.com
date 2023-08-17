import React from "react";
import LeaveButton from "../Buttons/LeaveButton";
import AudioButton from "../Buttons/AudioButton";
import VideoButton from "../Buttons/VideoButton";
import UserCount from "../Buttons/UserCount";
import HandRaiseButton from "../Buttons/HandRaiseButton";
import {
  useHMSActions,
  useHMSStore,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  selectLocalPeer,
} from "@100mslive/react-sdk";

const Footer = ({ count }) => {
  const hmsActions = useHMSActions();
  const isLocalAudioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const isLocalVideoEnabled = useHMSStore(selectIsLocalVideoEnabled);

  const peer = useHMSStore(selectLocalPeer);
  const isListenerOrHandraised =
    peer.roleName === "listener" || peer.roleName === "handraise";

  return (
    <footer className="left-0 mb-6 flex h-20 w-11/12 items-center justify-center space-x-4 pb-6">
      <UserCount count={count} />
      <AudioButton
        active={isLocalAudioEnabled}
        onClick={() => {
          hmsActions.setLocalAudioEnabled(!isLocalAudioEnabled);
        }}
      />
      {isListenerOrHandraised && (
        <HandRaiseButton
          isHandRaised={peer.roleName === "handraise"}
          toggleHandRaise={() =>
            hmsActions.changeRole(
              peer.id,
              peer.roleName === "listener" ? "handraise" : "listener",
              true,
            )
          }
        />
      )}
      <VideoButton
        active={isLocalVideoEnabled}
        onClick={() => {
          hmsActions.setLocalAudioEnabled(!isLocalVideoEnabled);
        }}
      />
      <LeaveButton
        onClick={() => {
          hmsActions.leave();
        }}
      />
    </footer>
  );
};

export default Footer;
