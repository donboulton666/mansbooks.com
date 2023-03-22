import dynamic from "next/dynamic";

const ChatBoxAdmin = dynamic({
  loader: () => import("@upstash/chatbox").then((mod) => mod.ChatBoxAdmin),
  ssr: false,
});

export default function () {
  return <ChatBoxAdmin />;
}
