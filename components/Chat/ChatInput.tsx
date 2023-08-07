import React from "react";

const ChatInput = ({ value, onChange, onKeyPress }) => {
  return (
    <div className="mb-1 flex">
      <div className="flex flex-row text-xs text-slate-300">
        <input
          value={value}
          onChange={onChange}
          type="text"
          className="m-1 w-72 rounded-3xl border-none bg-slate-900 px-3 py-2 placeholder-slate-200 outline-none ring-brand-100 focus:bg-black focus:ring-1"
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
      </div>
    </div>
  );
};

export default ChatInput;
