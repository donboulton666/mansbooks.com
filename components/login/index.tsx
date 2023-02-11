import { FADE_IN_ANIMATION_SETTINGS } from "../../lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react"
import { PersonIcon } from '@100mslive/react-icons';
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

export default function Modal() {
  const { data: session, status } = useSession();
  const { setShowSignInModal } = useSignInModal();

  return (
    <>
      <SignInModal />
      <div>
        <AnimatePresence>
          {!session && status !== "loading" ? (            
            <motion.button
              className="rounded-lg border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
              onClick={() => setShowSignInModal(true)}
              {...FADE_IN_ANIMATION_SETTINGS}
            >
              <PersonIcon />
            </motion.button>
          ) : (
            <UserDropdown />
          )}          
        </AnimatePresence>
      </div>
    </>
  );
}
