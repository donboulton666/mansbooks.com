import { useState } from "react";
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import { ExitIcon, SpotlightIcon, ChatIcon } from '@100mslive/react-icons';
import Popover from "./shared/popover";
import Image from "next/image";
import { motion } from "framer-motion";
import { FADE_IN_ANIMATION_SETTINGS } from "../../lib/constants";
import styles from "./header.module.css"

export default function UserDropdown() {
  const { data: session } = useSession();
  const { email, image } = session?.user || {};
  const [openPopover, setOpenPopover] = useState(false);

  if (!email) return null;

  return (
    <motion.div
      className="relative inline-block text-left"
      {...FADE_IN_ANIMATION_SETTINGS}
    >
      <Popover
        content={
          <div className="w-full rounded-md bg-gray-900 p-2 sm:w-56">
            {/* <Link
              className="flex items-center justify-start space-x-2 relative w-full rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-800"
              href="/dashboard"
            >
              <LayoutDashboard className="h-4 w-4" />
              <p className="text-sm">Dashboard</p>
            </Link> */}
            {session?.user && (
              <>
                {session.user.image && (
                  <button className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-800">
                    style={{ backgroundImage: `url('${session.user.image}')` }}
                    className={styles.avatar}
                  </button>
                )}
                <button className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-800">
                  <span className={styles.signedInText}>
                    <small>Signed in as</small>
                    <br />
                    <small>{session.user.email ?? session.user.name}</small>
                  </span>
                </button>
              </>
            )}
            <button
              className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-800"
              onClick={() => signOut({ redirect: false })}
            >
              <ExitIcon className="h-4 w-4" />
              <p className="text-sm">Logout</p>
            </button>
            <button className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-800">
              <SpotlightIcon className="h-4 w-4" />
              <p className="text-sm"><Link href="/">Home</Link></p>
            </button>
            <button className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-800">
              <SpotlightIcon className="h-4 w-4" />
              <p className="text-sm"><Link href="/client">Client</Link></p>
            </button>
            <button className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-800">
              <SpotlightIcon className="h-4 w-4" />
              <p className="text-sm"><Link href="/server">Server</Link></p>
            </button>
            <button className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-800">
              <SpotlightIcon className="h-4 w-4" />
              <p className="text-sm"><Link href="/server">Server</Link></p>
            </button>
            <button className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-800">
              <SpotlightIcon className="h-4 w-4" />
              <p className="text-sm"><Link href="/protected">Protected</Link></p>
            </button>
            <button className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-800">
              <SpotlightIcon className="h-4 w-4" />
              <p className="text-sm"><Link href="/api-example">API</Link></p>
            </button>
            <button className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-800">
              <SpotlightIcon className="h-4 w-4" />
              <p className="text-sm"><Link href="/admin">Admin</Link></p>
            </button>
            <button className="relative flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-800">
              <SpotlightIcon className="h-4 w-4" />
              <p className="text-sm"><Link href="/me">Me</Link></p>
            </button>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9"
        >
          <Image
            alt={email}
            src={image || `https://avatars.dicebear.com/api/micah/${email}.svg`}
            width={40}
            height={40}
          />
        </button>
      </Popover>
    </motion.div>
  );
}
