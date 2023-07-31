import { ExitIcon, SpeakerIcon } from "@100mslive/react-icons";
import {
  useHMSActions,
  useHMSStore,
  selectDominantSpeaker,
  selectLocalPeer,
  selectPeersByRole,
} from "@100mslive/react-sdk";
import UsersIcon from "@components/icons/icon-users";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  const peers = useHMSStore(selectPeersByRole("viewer"));
  const actions = useHMSActions();
  const leave = () => {
    try {
      actions.leave().then(() => router.push("/"));
    } catch (error) {
      console.log(error);
    }
  };
  const localPeer = useHMSStore(selectLocalPeer);
  const dominantPeer = useHMSStore(selectDominantSpeaker);
  return (
    <div
      className="flex w-full items-center justify-between px-4  "
      style={{ height: "var(--header-height)" }}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="block items-center">
          {localPeer.roleName === "viewer" ? (
            <button
              onClick={leave}
              className={
                "color-white mirror bg-slate-base h-10 w-10 cursor-pointer rounded-lg p-2 md:static "
              }
            >
              <ExitIcon />
            </button>
          ) : null}
        </div>

        <div className="align-end flex flex-col gap-x-2 md:flex-row md:items-center  md:gap-2">
          <div className="flex flex-row items-center gap-x-2 align-bottom md:gap-2">
            <p className="my-0 text-sm font-semibold md:text-2xl md:leading-8 ">
              Event
            </p>
            <span
              className="flex items-center rounded-sm px-0.5 text-xs font-semibold md:px-1 md:text-sm "
              style={{ backgroundColor: "#ed4c5a" }}
            >
              LIVE
            </span>
          </div>

          <div className="flex  ">
            <span className="text-md leading-5 " style={{ color: "#999a99" }}>
              9:30 pm - 10:30 pm
            </span>
          </div>
        </div>
      </div>

      {dominantPeer ? (
        <div className="hidden  items-center space-x-2 md:flex">
          <SpeakerIcon />
          <span>{dominantPeer.name}</span>
        </div>
      ) : null}

      <div className="flex flex-row justify-end gap-4">
        <div className="flex items-center">
          <div
            className="flex items-center gap-2 rounded-3xl border-solid px-4 py-2 text-sm font-normal leading-4 "
            style={{ borderWidth: "1px", borderColor: "#3b3b3b" }}
          >
            <UsersIcon /> <span className="">{peers.length}</span>{" "}
            <span className="hidden md:block"> watching</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
