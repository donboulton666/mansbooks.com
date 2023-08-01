import React from "react";
import { useState } from "react";
import { Picker } from "emoji-mart";

const ChatInput = ({ value, onChange, onKeyPress }) => {
  const [showEmojis, setShowEmojis] = useState(false);
  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };
  return (
    <div className="items-center justify-center">
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="m-2 w-72 rounded-3xl border-none bg-slate-900 px-3 py-2 placeholder-slate-200 outline-none ring-brand-100 focus:bg-black focus:ring-1"
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
        className="border-0 bg-transparent outline-0"
        onClick={() => setShowEmojis(!showEmojis)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
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
      {showEmojis && (
        <>
          <Picker onSelect={addEmoji} theme={dark} set={apple} />
        </>
      )}
    </div>
  );
};

export default ChatInput;
