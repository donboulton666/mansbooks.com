import React from "react";
import { useState, useEffect, FC } from "react";
import cn from "classnames";
import styleUtils from "../utils.module.css";
import styles from "../conf-entry.module.css";
import { PreviewScreen } from "./preview";
import { useHMSActions } from "@100mslive/react-sdk";
import { parsedUserAgent } from "@100mslive/hms-video";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "./Button";
import { ArrowRightIcon } from "@100mslive/react-icons";
import { useRouter } from "next/router";

interface Props {
  token: string;
  role: string;
}

const Join: FC<Props> = ({ token, role }) => {
  const isMobile = isMobileDevice();
  return (
    <div className="absolute left-1/2 top-1/2 flex w-11/12 max-w-md -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-4 rounded-lg bg-slate-900 p-8 text-slate-300 opacity-70 shadow-lg md:w-1/2 lg:w-1/3">
      <div
        className={cn(
          styles.container,
          styleUtils.appear,
          styleUtils["appear-first"]
        )}
      >
        {isMobile && role !== "viewer" ? <MobileRoleDialog /> : null}
        {token ? (
          <>
            {" "}
            {role === "viewer" ? (
              <ViewersJoin token={token} />
            ) : (
              <>{isMobile ? null : <PreviewScreen token={token} />}</>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Join;

const ViewersJoin: FC<{ token: string }> = ({ token }) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const hmsActions = useHMSActions();
  const joinRoom = async () => {
    e.preventDefault();
    try {
      const response = await fetch("/api/token", {
        method: "POST",
        body: JSON.stringify({ role }),
      });
      const { token } = await response.json();
      hmsActions.join({
        userName: name || "Anonymous",
        authToken: token,
        initEndpoint:
          process.env.NEXT_PUBLIC_HMS_INIT_PEER_ENPOINT || undefined,
        settings: {
          isAudioMuted: true,
        },
        rememberDeviceSelection: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-center">
      <h1>Enter your name to continue.</h1>
      <p className="my-0 text-sm text-slate-300">
        This name will be visible to other participants once you join the stage
      </p>
      <form onSubmit={(e) => joinRoom(e)} className="mt-12 md:space-x-4">
        <input
          maxLength={20}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            localStorage.setItem("name", e.target.value);
          }}
          required
          className="w-80 rounded-lg bg-slate-600 p-4 text-md placeholder:text-slate-400 focus:bg-wine-300 focus:outline-none"
          placeholder="Enter your name to join the event"
          type="text"
        />
        <button
          type="submit"
          className="mt-4 w-80 cursor-pointer rounded-lg bg-wine-300 px-4 py-4 text-slate-200 hover:bg-wine-300 md:mt-0 md:w-20"
        >
          Join
        </button>
      </form>
    </div>
  );
};

export function isMobileDevice() {
  const device = parsedUserAgent.getDevice();
  return device && device.type === "mobile";
}

const MobileRoleDialog = () => {
  const [stage, setStage] = useState(``);
  const router = useRouter();
  useEffect(() => {
    if (router.query.slug) {
      setStage(router.query.slug as string);
    }
  }, [router]);
  return (
    <Dialog.Root open={true}>
      <Dialog.Overlay
        className="fixed inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />
      <Dialog.Content className="dialog-content dialog-animation nav-scroll w-[95%] rounded-lg bg-slate-700 text-center md:w-96">
        <h3>Joining as a speaker is not supported on mobile</h3>
        <div className="mt-4 flex w-full justify-center">
          <a href={`/stage/${stage || "a"}?role=viewer`}>
            <Button>
              Join as a Guest Instead <ArrowRightIcon />
            </Button>
          </a>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
