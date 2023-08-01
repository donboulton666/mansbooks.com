import React from "react";
import { useState } from "react";
import EmojiPicker, {
  EmojiStyle,
  SkinTones,
  Theme,
  Categories,
  Emoji,
  SuggestionMode,
  SkinTonePickerLocation,
} from "emoji-picker-react";

function Place() {
  const [selectedEmoji, setSelectedEmoji] = useState<string>("");
  return (
    <>
      {selectedEmoji ? (
        <Emoji
          unified={selectedEmoji}
          emojiStyle={EmojiStyle.APPLE}
          size={22}
        />
      ) : null}
    </>
  );
}

export default Place;
