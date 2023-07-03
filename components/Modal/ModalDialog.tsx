import React from "react";
import { ReactNode, useState, FC } from "react";
import { Dialog } from "";
import Share from "@components/Share";

export interface ModalDialogProps {
  dialogContent: JSX.Element;
  dialogTitle: string;
  children: ReactNode;
}

const ModalDialog: FC<ModalDialogProps> = (props) => {
  const { dialogTitle, dialogContent, children, ...rest } = props;
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="flex min-h-screen items-center justify-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="relative mx-auto max-w-sm rounded bg-white p-8">
          <Dialog.Title
            key={dialogTitle}
            className="text-lg font-medium leading-6 text-slate-300 dark:text-slate-200"
          >
            {dialogTitle}
          </Dialog.Title>
          <div className="mt-2">
            <p key={dialogContent} className="mt-4 text-sm text-slate-200">
              {dialogContent}
            </p>
          </div>
          <Dialog.Panel>{children}</Dialog.Panel>
          <button
            className="mx-2 mt-8 rounded border border-solid border-black px-2 py-1"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ModalDialog;
