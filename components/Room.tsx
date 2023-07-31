import {
  useHMSStore,
  selectLocalPeer,
  selectPeers
} from "@100mslive/hms-video-react";
import Footer from '@components/StageFooter';
import User from './Tile/User';
import VideoTile from "@components/Tile/videoTile";
import ChatContainer from './Chat/ChatContainer';

const Room = () => {
  const localPeer = useHMSStore(selectLocalPeer);
  const peers = useHMSStore(selectPeers);
  return (
    <div className="w-11/12 mb-24 mt-4 pb-60 md:w-3/4 lg:w-11/12 absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 text-white shadow-lg space-y-4 flex flex-col items-center">
      <div className='flex justify-between items-start'>
        <div className='flex flex-wrap justify-center items-start mr-6'>
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
