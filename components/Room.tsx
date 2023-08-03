import {
  useHMSStore,
  selectLocalPeer,
  selectPeers,
} from "@100mslive/react-sdk";
import Footer from "@components/StageFooter";
import User from "./Tile/User";
import VideoTile from "./Tile/VideoTile";
import ChatContainer from "./Chat/ChatContainer";

const Room = () => {
  const localPeer = useHMSStore(selectLocalPeer);
  const peers = useHMSStore(selectPeers);
  return (
    <div className="flex h-[80vh] w-screen items-center justify-center p-8 pb-40 text-slate-300 shadow-lg md:w-3/4 lg:w-11/12">
      <div className="flex items-start justify-between">
        <div className="mr-6 flex flex-wrap items-start justify-center">
          {peers.map((p) => (
            <User key={p.id} peer={p} />
          ))}
        </div>
        {localPeer && <VideoTile peer={localPeer} isLocal={true} />}
        {peers &&
          peers
            .filter((peer) => !peer.isLocal)
            .map((peer) => {
              return (
                <>
                  <VideoTile isLocal={false} peer={peer} />
                </>
              );
            })}
        <ChatContainer />
      </div>
      <Footer count={peers.length} />
    </div>
  );
};

export default Room;
