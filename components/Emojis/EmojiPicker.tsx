import React from "react";
import EmojiPicker, { EmojiClickData, Emoji } from "emoji-picker-react";

function onClick(emojiData: EmojiClickData, event: MouseEvent) {
  setSelectedEmoji(emojiData.unified);
}

function Picker() {
  return (
    <>
      <EmojiPicker
        onEmojiClick={onClick}
        autoFocusSearch={false}
        theme={Theme.DARK}
        // searchDisabled
        skinTonePickerLocation={SkinTonePickerLocation.PREVIEW}
        // height={350}
        // width="50%"
        // emojiVersion="0.6"
        // lazyLoadEmojis={true}
        // previewConfig={{
        //   defaultCaption: "Pick one!",
        //   defaultEmoji: "1f92a" // 🤪
        // }}
        // suggestedEmojisMode={SuggestionMode.RECENT}
        // skinTonesDisabled
        // searchPlaceHolder="Filter"
        // defaultSkinTone={SkinTones.MEDIUM}
        emojiStyle={EmojiStyle.NATIVE}
        // categories={[
        //   {
        //     name: "Fun and Games",
        //     category: Categories.ACTIVITIES
        //   },
        //   {
        //     name: "Smiles & Emotions",
        //     category: Categories.SMILEYS_PEOPLE
        //   },
        //   {
        //     name: "Flags",
        //     category: Categories.FLAGS
        //   },
        //   {
        //     name: "Yum Yum",
        //     category: Categories.FOOD_DRINK
        //   }
        // ]}
      />
    </>
  );
}

export default Picker;
