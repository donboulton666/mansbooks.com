import React from "react";
import { useState } from "react";
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

const Join: React.FC<Props> = ({ token, role }) => {
  const isMobile = isMobileDevice();
  return (
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
  );
};

export default Join;

const ViewersJoin: React.FC<{ token: string }> = ({ token }) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const actions = useHMSActions();
  const joinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    actions.join({
      userName: name || "David",
      authToken: token,
      initEndpoint: process.env.NEXT_PUBLIC_HMS_INIT_PEER_ENPOINT || undefined,
      rememberDeviceSelection: true,
    });
  };
  return (
    <div className="text-center">
      <h1>Enter your name to continue.</h1>
      <p className="my-0 text-sm text-gray-300">
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
          className="w-80 rounded-lg bg-gray-600 p-4 text-md placeholder:text-gray-400 focus:bg-gray-700 focus:outline-none"
          placeholder="Enter your name to join the event"
          type="text"
        />
        <button
          type="submit"
          className="mt-4 w-80 cursor-pointer rounded-lg bg-brand-300 px-4 py-4 hover:bg-brand-200 md:mt-0 md:w-20"
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
  const [stage, setStage] = React.useState(``);
  const router = useRouter();
  React.useEffect(() => {
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
      <Dialog.Content className="dialog-content dialog-animation w-[95%] rounded-lg bg-gray-700 text-center md:w-96">
        <h3>Joining as a speaker is not supported on mobile</h3>
        <p className="mt-4 text-xs text-gray-200">
          There are a few profiles to make it easy for you or your team to
          experience each perspective. Join in one click or share access with
          anyone else.
        </p>
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
