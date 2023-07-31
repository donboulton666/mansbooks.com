import React from "react";
import MenuIcon from "../icons/MenuIcon";
import { useHMSActions } from "@100mslive/hms-video-react";

const Permission = ({ audioTrack, id }) => {
  const hmsActions = useHMSActions();
  const mutePeer = () => {
    hmsActions.setRemoteTrackEnabled(audioTrack, false);
  };
  const changeRole = (role) => {
    hmsActions.changeRole(id, role, true);
  };
  const btnClass = "flex w-32 text-sm font-semibold hover:bg-slate-800 p-2";
  return (
    <div className="menu-btn absolute right-0 top-0 z-50">
      <div as="button" className="group relative rounded-md bg-slate-900 px-1">
        <MenuIcon />
      </div>
      <div className="menu-items flex-col rounded-md bg-slate-900 py-2 text-slate-500">
        <button className={btnClass} onClick={() => mutePeer()}>
          Mute
        </button>
        <button className={btnClass} onClick={() => changeRole("listener")}>
          Make Listener
        </button>
        <button className={btnClass} onClick={() => changeRole("speaker")}>
          Make Speaker
        </button>
      </div>
    </div>
  );
};

export default Permission;
