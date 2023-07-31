import React from 'react';
import LeaveButton from '../Buttons/LeaveButton';
import AudioButton from '../Buttons/AudioButton';
import UserCount from '../Buttons/UserCount';
import HandRaiseButton from '../Buttons/HandRaiseButton';
import {
  useHMSActions,
  useHMSStore,
  selectIsLocalAudioEnabled,
  selectLocalPeer,
} from '@100mslive/hms-video-react';

const Footer = ({ count }) => {
  const hmsActions = useHMSActions();
  const isLocalAudioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const peer = useHMSStore(selectLocalPeer);
  const isListenerOrHandraised =
    peer.roleName === 'listener' || peer.roleName === 'handraise';

  return (
    <footer className='flex h-20 mb-6 pb-6 w-11/12 space-x-4 left-0 items-center justify-center'>
      <UserCount count={count} />
      {!isListenerOrHandraised && (
      <AudioButton
        active={isLocalAudioEnabled}
        onClick={() => {
          hmsActions.setLocalAudioEnabled(!isLocalAudioEnabled);
        }}
      />
      )}
      {isListenerOrHandraised && (
        <HandRaiseButton
          isHandRaised={peer.roleName === 'handraise'}
          toggleHandRaise={() =>
            hmsActions.changeRole(
              peer.id,
              peer.roleName === 'listener' ? 'handraise' : 'listener',
              true
            )
          }
        />
      )}
      <LeaveButton
        onClick={() => {
          hmsActions.leave();
        }}
      />
    </footer>
  );
};

export default Footer;
