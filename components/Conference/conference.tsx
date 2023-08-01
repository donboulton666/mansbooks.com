import {
  useHMSActions,
  useHMSStore,
  selectIsConnectedToRoom,
} from "@100mslive/react-sdk";
import Preview from "../Join";
import Room from "../Room";
import getToken from "../../pages/api/token";

const Conference = () => {
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const handleSubmit = async (userName) => {
    const token = await getToken(userName);
    hmsActions.join({ authToken: token, userName });
  };
  return (
    <>{isConnected ? <Room /> : <Join />}</>
  );
};

export default Conference;
