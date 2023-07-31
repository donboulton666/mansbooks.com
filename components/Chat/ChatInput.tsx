import React from 'react';
import InputEmoji from 'react-input-emoji'

const ChatInput = ({ value, onChange, onKeyPress }) => {
  return (
    <InputEmoji
      value={value}
      onChange={onChange}
      type='text'
      className='px-3 py-2 m-2 bg-slate-900 focus:bg-black rounded-3xl border-none focus:ring-1 ring-brand-100 outline-none placeholder-slate-200 w-72'
      placeholder='Send Message'
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          if (!event.shiftKey) {
            event.preventDefault();
            if (value.trim() !== '') {
              onKeyPress();
            }
          }
        }
      }}
    />
  );
};

export default ChatInput;
