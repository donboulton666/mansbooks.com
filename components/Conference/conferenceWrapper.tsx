import {
  HMSRoomProvider,
  useHMSStore,
  selectIsConnectedToRoom,
} from "@100mslive/react-sdk";
import Join from "@components/hms/Join";
import Room from "@components/hms/Room";

const SpacesApp = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  return <>{isConnected ? <Room /> : <Join />}</>;
};

const ConferenceWrapper = () => {
  return (
    <HMSRoomProvider>
      <SpacesApp />
    </HMSRoomProvider>
  );
};

export default ConferenceWrapper;
