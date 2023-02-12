import { FADE_IN_ANIMATION_SETTINGS } from "../../lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react"
import { LogIn } from "lucide-react";
import UserDropdown from "./user-dropdown";

export default function SignInButton() {
    const { data: session, status } = useSession();
  return (
    <div>
      <AnimatePresence>
       {!session && status !== "loading" ? (
          <motion.button
            className="rounded-lg border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-purple-600 hover:text-white"
            onClick={(e) => {
                e.preventDefault()
                signIn()
              }}
            {...FADE_IN_ANIMATION_SETTINGS}
          >
            <LogIn className="h-4 w-4" />
          </motion.button>
        ) : (
          <UserDropdown />
        )}
      </AnimatePresence>
    </div>
  );
}
