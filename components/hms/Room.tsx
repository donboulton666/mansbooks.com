import React from "react";
import { useState, useEffect } from "react";
import {
  useHMSActions,
  useHMSStore,
  selectIsConnectedToRoom,
} from "@100mslive/react-sdk";
import { getToken } from "../hms/lib/getToken";
import Join from "@components/Join";
import Live from "./Live";
import { useRouter } from "next/router";

interface Props {
  stagePeers: string[];
  backstagePeers: string[];
  roomId: string;
}
/**
 * Entry components for 100ms
 */
const Room = ({ roomId, stagePeers, backstagePeers }: Props) => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const actions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  useEffect(() => {
    if (!router.isReady) return;
    const role = router.query.role ? (router.query.role as string) : "viewer";
    getToken(role, roomId)
      .then((t) => setToken(t))
      .catch((e) => console.error(e));
  }, [roomId, backstagePeers, stagePeers, router.query, router.isReady]);
  useEffect(() => {
    window.onunload = () => {
      actions.leave();
    };
  }, [actions]);
  return (
    <>
      {isConnected ? (
        <Live />
      ) : (
        <Join
          role={router.query.role ? (router.query.role as string) : "viewer"}
          token={token}
        />
      )}
    </>
  );
};

export default Room;
