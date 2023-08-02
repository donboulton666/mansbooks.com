import React from "react";
import { useState, useEffect } from "react";
import {
  useHMSActions,
  useHMSStore,
  selectIsConnectedToRoom,
} from "@100mslive/react-sdk";
import Join from "./Join";
import Live from "./Live";
import { useRouter } from "next/router";

interface RoomProps {
  stagePeers: string[];
  backstagePeers: string[];
  roomId: string;
}

/**
 * Entry components for 100ms
 */

const joinRoom = async () => {
  try {
    const response = await fetch("/api/token", {
      method: "POST",
      body: JSON.stringify({ role }),
    });
    const { token } = await response.json();
    hmsActions.join({
      userName: name || "Anonymous",
      authToken: token,
      settings: {
        isAudioMuted: true,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
const Room = ({ roomId, stagePeers, backstagePeers }: RoomProps) => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  useEffect(() => {
    if (!router.isReady) return;
    const role = router.query.role ? (router.query.role as string) : "viewer";
    console.log(role);
    joinRoom(role, roomId)
      .then((t) => setToken(t))
      .catch((e) => console.error(e));
  }, [roomId, backstagePeers, stagePeers, router.query, router.isReady]);
  useEffect(() => {
    window.onunload = () => {
      hmsActions.leave();
    };
  }, [hmsActions]);
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
