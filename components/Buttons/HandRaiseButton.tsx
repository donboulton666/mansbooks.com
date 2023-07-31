import { MdOutlineFrontHand } from "react-icons/md";

const HandRaiseButton = ({ toggleHandRaise, isHandRaised }) => {
  return (
    <button
      onClick={toggleHandRaise}
      className={`${
        isHandRaised ? "bg-purple-500" : null
      } rounded-full border-2 border-purple-500 p-3`}
    >
      <MdOutlineFrontHand className="h-5 w-5" />
    </button>
  );
};

export default HandRaiseButton;
