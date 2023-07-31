import React from 'react';
import { isLocalVideoEnabled } from '@100mslive/react-sdk';
import { BsCameraVideo, BsCameraVideoOff } from 'react-icons/bs';

const VideoButton = ({ onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        active ? 'bg-blue-500' : null
      } border-2 border-blue-500 p-3 rounded-full`}
    >
      {active ? <BsCameraVideo /> : <BsCameraVideoOff />}
    </button>
  );
};

export default VideoButton;
