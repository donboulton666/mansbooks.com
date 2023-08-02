import {
  useHMSStore,
  selectLocalPeer,
  selectPeers,
  selectIsConnectedToRoom
} from "@100mslive/react-sdk";
import Footer from "@components/StageFooter";
import User from "./Tile/User";
import VideoTile from "./Tile/VideoTile";
import ChatContainer from "./Chat/ChatContainer";
import styles from "@components/stage-container.module.css";
import styleUtils from "@components/utils.module.css";

const Room = () => {
  const localPeer = useHMSStore(selectLocalPeer);
  const peers = useHMSStore(selectPeers);
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  return (
    <div className={styles.container}>
      <div
        className={`${styles.streamContainer} ${
          isConnected ? "" : styles.streamYt
        }`}
      >
        <div className=" mb-24 mt-4">
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
      </div>
    </div>
  );
};

export default Room;
