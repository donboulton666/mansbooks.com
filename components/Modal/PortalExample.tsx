import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import cn from "classnames";
import { ShareIcon } from "@heroicons/react/24/outline";
import styles from "../sponsor-section.module.css";

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={cn(styles.button, styles["button-resource"])}>
        <button onClick={() => setShowModal(true)}>
          <ShareIcon className="-mt-1 h-8 w-8 pr-2" />
        </button>
      </div>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </>
  );
}
