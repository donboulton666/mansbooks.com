import { useState, FC } from "react";
import Avatar from "boring-avatars";
import { useHMSActions } from "@100mslive/react-sdk";
import NameInput from "./Join/NameInput";
import RoleSelect from "./Join/RoleSelect";
import JoinButton from "./Join/JoinButton";

interface JoinProps {
  token: string;
  role: string;
}

const Join: FC<JoinProps> = () => {
  const hmsActions = useHMSActions();
  const [name, setName] = useState("");
  const [role, setRole] = useState("listener");

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

  return (
    <>
      <div className="absolute left-0 right-0 mx-auto mb-20 mt-20 flex w-11/12 max-w-md flex-col items-center space-y-4 rounded-lg bg-slate-900 object-center p-8 text-slate-300 opacity-60 shadow-lg md:w-1/2 lg:w-1/3">
        <Avatar name={name} variant="marble" size="72" />
        <NameInput name={name} setName={setName} />
        <RoleSelect role={role} setRole={setRole} />
        <JoinButton joinRoom={joinRoom} />
      </div>
    </>
  );
};

export default Join;
