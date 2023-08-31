import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "./HmsButton";

const DemoModal = () => {
  return (
    <Dialog.Root defaultOpen={true}>
      <Dialog.Overlay
        className="fixed inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />
      <Dialog.Content className="dialog-content dialog-animation w-[95%] rounded-lg bg-slate-700 md:w-[400px]">
        <h3 className="mb-4">Heads Up</h3>
        <p className="my-0 text-sm text-slate-200">
          Since this is public, you might encounter other people on the stage
          who can hear / see you in case your audio / video is enabled. We
          recommend you to use the participants tab to check if there are other
          people on the call.
        </p>

        <Dialog.Close asChild>
          <Button className="mt-4 w-[100px]">Got it</Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default DemoModal;
