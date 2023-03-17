import Link from "next/link";
import Image from "next/legacy/image";
import { signIn, signOut, useSession } from "next-auth/react";
import authImage from "../../public/next-auth.png";
// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Login() {
  const { data: session, status } = useSession();
  return (
    <div className="mt-10 mb-32">
      <div>
        <Image
          layout="fixed"
          className="h-20w-20 self-center"
          src={authImage}
          width={80}
          height={80}
          quality={95}
          alt="Auth picture"
          loading="lazy"
        />
        <div>
          {!session && (
            <>
              <span className="text-slate-300">You are not signed in</span>
              <Link
                href={`/api/auth/signin`}
                className="rounded-md bg-gray-800 py-2 px-4 text-slate-200 shadow-lg hover:bg-gray-900 hover:shadow-slate-800/50"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </Link>
            </>
          )}
          {session?.user && (
            <>
              <span
                style={{ backgroundImage: `url(${session.user.image})` }}
                className="h-20 w-20"
              />
              <span className="text-slate-300">
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email || session.user.name}</strong>
              </span>
              <Link
                href={`/api/auth/signout`}
                className="rounded-md bg-gray-800 py-2 px-4 text-slate-200 shadow-lg hover:bg-gray-900 hover:shadow-slate-800/50"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </Link>
            </>
          )}
        </div>
      </div>
      <nav>
        <ul className="list-unstyled text-slate-300">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/protected">Protected</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
