import React from "react";
import MicOffIcon from "../icons/MicOffIcon";
import MicOnIcon from "../icons/MicOnIcon";
import Avatar from "boring-avatars";

const UserInfo = ({ peer, audioEnabled }) => {
  
  return (
    <>
      <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center text-center">
        <p className="text-sm font-bold">{peer.name}</p>
        <p className="flex items-center text-xs font-semibold text-slate-400">
          {audioEnabled ? (
            <MicOnIcon stroke="#FFF" height={15} />
          ) : (
            <MicOffIcon stroke="#ff677d" height={15} />
          )}{" "}
          {peer.roleName}
        </p>
      </div>
      <div className="opacity-50">
        <Avatar variant="marble" size={90} name={peer.name} />
      </div>
    </>
  );
};

export default UserInfo;
