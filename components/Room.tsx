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
    <div className="absolute left-1/2 top-3/4 mb-24 mt-4 flex w-11/12 -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-4 p-8 pb-60 text-white shadow-lg md:w-3/4 lg:w-11/12">
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
