import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import cn from "classnames";
import styles from "../sponsor-section.module.css";

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={cn(styles.button, styles["button-resource"])}>
        <button onClick={() => setShowModal(true)}>Share</button>
      </div>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
