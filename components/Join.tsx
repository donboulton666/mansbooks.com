import { useState } from 'react';
import Avatar from 'boring-avatars';
import { useHMSActions } from '@100mslive/hms-video-react';

import NameInput from './Join/NameInput';
import RoleSelect from './Join/RoleSelect';
import JoinButton from './Join/JoinButton';

const Join = () => {
  const hmsActions = useHMSActions();

  const [name, setName] = useState('');
  const [role, setRole] = useState('listener');

  const joinRoom = async () => {
    try {
      const response = await fetch('/api/token', {
        method: 'POST',
        body: JSON.stringify({ role }),
      });
      const { token } = await response.json();
      hmsActions.join({
        userName: name || 'Anonymous',
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
      <div className="bg-gray-900 opacity-70 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 text-white shadow-lg space-y-4 flex flex-col items-center max-w-md">
        <Avatar name={name} variant="marble" size="72" />
        <NameInput name={name} setName={setName} />
        <RoleSelect role={role} setRole={setRole} />
        <JoinButton joinRoom={joinRoom} />
      </div>
    </>
  );
};

export default Join;
