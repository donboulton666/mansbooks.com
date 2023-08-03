import {
  HMSRoomProvider,
  useHMSStore,
  selectIsConnectedToRoom,
} from "@100mslive/react-sdk";
import Join from "@components/Join";
import Live from "@components/hms/Live";

const SpacesApp = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  return <>{isConnected ? <Live /> : <Join />}</>;
};

const ConferenceWrapper = () => {
  return (
    <HMSRoomProvider>
      <SpacesApp />
    </HMSRoomProvider>
  );
};

export default ConferenceWrapper;
