import classNames from "classnames";
import React, { useEffect, useRef } from "react";

const Frame: React.FC<{
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  onClose: () => void;
  open?: boolean;
}> = ({
  children,
  title,
  closeOnClickOutside = true,
  closeOnEsc = true,
  onClose,
  open = true,
}) => {
  useEffect(() => {
    const onKeyPress = (e: KeyboardEvent) => {
      if (closeOnEsc && open && e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyPress);
    return () => window.removeEventListener("keydown", onKeyPress);
  }, [closeOnEsc, onClose, open]);

  const container = useRef<HTMLDivElement>(null);
  const onOverlayClick = (e: React.MouseEvent) => {
    if (!container.current?.contains(e.target as Node)) onClose();
  };

  return (
    // transparent overlay: `inset-0` to stretch over the entire screen (combines`top-0`, `right-0`, `bottom-0`, and `left-0`)
    <div
      className={classNames(
        "bg-gray-600/90 fixed inset-0 z-10 p-8 text-white",
        `${open ? "visible" : "invisible"}` // control visibility via `open` attribute (or render conditionally)
      )}
      onClick={closeOnClickOutside ? onOverlayClick : undefined}
    >
      {/* container: `max-w-sm` to make it reasonably narrow, `mx-auto` to center horizontally */}
      <div className="relative mx-auto mt-8 w-full max-w-sm" ref={container}>
        {/* closer in the corner */}
        <button
          className="absolute -right-2 -top-2 flex h-8 w-8 cursor-pointer justify-center rounded-full bg-gray-600 shadow-xl"
          onClick={() => onClose()}
          title="Bye bye"
        >
          <span className="select-none text-2xl leading-7">&times;</span>
        </button>
        {/* contents */}
        <div className="overflow-hidden rounded bg-gray-800 shadow-xl">
          {children}
        </div>
      </div>
    </div>
  );
};

const Head: React.FC = ({ title }) => (
  <div className="block bg-gray-900 p-4">
    <h1 className="text-lg">{title}</h1>
  </div>
);

const Body: React.FC = ({ children }) => <div className="p-4">{children}</div>;

export const Modal = { Frame, Head, Body };
