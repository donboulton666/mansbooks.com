import React from "react";
import { useState } from "react";

import dynamic from 'next/dynamic'

let Picker;

if (typeof window !== 'undefined') {
  import('emoji-picker-react').then(_module => {
    Picker = _module.default;
  });
}

const ChatInput = ({ onChange, onKeyPress }) => {
  const [value, setValue] = useState('');
  const [showPicker, setShowPicker] = useState(false);
 
  const onEmojiClick = (event, emojiObject) => {
    setValue(prevInput => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        className="m-2 w-64 rounded-3xl border-none bg-slate-900 px-3 py-2 placeholder-slate-200 outline-none ring-brand-100 focus:bg-black focus:ring-1"
        placeholder="Send Message"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            if (!event.shiftKey) {
              event.preventDefault();
              if (value.trim() !== "") {
                onKeyPress();
              }
            }
          }
        }}
      />
      <button
        className="rounded-full bg-slate-900 p-1 text-slate-200"
        onClick={() => setShowPicker(val => !val)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-slate-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      {showPicker && <Picker
        onEmojiClick={onEmojiClick} />
      }
    </div>
  );
};

export default ChatInput;
