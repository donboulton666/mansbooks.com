import React from "react";
import { useState, useEffect, FormEvent } from "react";
import { useHMSActions, useHMSStore } from "@100mslive/react-sdk";
import { selectHMSMessages, selectLocalPeer } from "@100mslive/react-sdk";
import Dropdown from "./Dropdown";
import { ChatIcon } from "@100mslive/react-icons";

const Chat = () => {
  const [msg, setMsg] = useState("");
  const actions = useHMSActions();
  const msgs = useHMSStore(selectHMSMessages);
  const sendMessage = (e: FormEvent) => {
    e.preventDefault();
    actions.sendBroadcastMessage(msg);
    setMsg("");
  };
  useEffect(() => {
    const el = document.getElementById("chat-feed");
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [msgs]);
  const localPeer = useHMSStore(selectLocalPeer);
  return (
    <>
      <div id="chat-feed" className="h-full overflow-y-scroll p-4">
        {msgs.length > 0 ? (
          msgs.map((m) => (
            <div key={m.id} className="relative mb-5 flex w-full items-start">
              <Avatar
                name={m.sender === localPeer.id ? localPeer.name : m.senderName}
              />
              <div className="flex flex-grow flex-col">
                <div className="flex w-full  items-center pl-2 font-medium">
                  <span className="text-foreground">
                    {m.sender === localPeer.id ? localPeer.name : m.senderName}
                  </span>
                  {m.senderRole === "stage" || m.senderRole === "backstage" ? (
                    <Badge
                      isLocal={m.sender === localPeer.id}
                      isMod={m.senderRole === "backstage"}
                    />
                  ) : null}
                  <span className="ml-1 text-xxs text-gray-400">
                    {m.time.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div className="mt-1 w-[220px] break-words pl-2 text-gray-200">
                  {m.message}
                </div>
              </div>
              {localPeer.roleName === "stage" ||
              localPeer.roleName === "backstage" ? (
                <div className="absolute right-0 top-0">
                  {localPeer.id !== m.sender ? (
                    <Dropdown role={m.senderRole || "viewer"} id={m.sender} />
                  ) : null}
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex w-full flex-col items-center text-center">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gray-700 text-foreground md:h-[80px] md:w-[80px]">
                <ChatIcon className="h-[30px] w-[30px] md:h-[50px] md:w-[50px]" />
              </div>
              <p>
                Welcome to the Webinar. You can engage with the speaker and
                other participants through the chat below.
              </p>
            </div>
          </div>
        )}
      </div>
      <form
        className="flex h-[80px] items-center px-4"
        onSubmit={sendMessage}
        style={{ borderTop: "1px solid var(--accents-7)" }}
      >
        <input
          className="w-full bg-transparent focus:outline-none"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          type="text"
          placeholder="Send a message..."
        />
      </form>
    </>
  );
};

export default Chat;

const Badge: React.FC<{ isMod?: boolean; isLocal: boolean }> = ({
  isMod = false,
  isLocal,
}) => {
  return (
    <div
      style={{
        border: `${isMod ? "1px solid transparent" : "1px solid #2f6eeb"}`,
      }}
      className={`mx-1 inline-flex items-center rounded bg-gray-700 p-0.5 text-[10px] text-foreground`}
    >
      {isLocal ? (
        <>
          You <span className="mx-1 h-1 w-1 rounded-full bg-foreground" />
        </>
      ) : null}{" "}
      {isMod ? "Moderator" : "Speaker"}
    </div>
  );
};
