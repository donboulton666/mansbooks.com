import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Login() {
  const { data: session, status } = useSession();
  return (
    <div className="mt-10 mb-32">
      <div>
        <div
        >
          {!session && (
            <>
              <span className="text-slate-300">
                You are not signed in
              </span>
              <a
                href={`/api/auth/signin`}
                className="rounded-md bg-gray-800 py-2 px-4 text-slate-200 shadow-lg hover:bg-gray-900 hover:shadow-slate-800/50"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              <span
                style={{ backgroundImage: `url(${session.user.image})` }}
                className="w-20 h-20"
              />
              <span className="text-slate-300">
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email || session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className="rounded-md bg-gray-800 py-2 px-4 text-slate-200 shadow-lg hover:bg-gray-900 hover:shadow-slate-800/50"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </a>
            </>
          )}
        </div>
      </div>
      <nav>
        <ul className="list-unstyled text-slate-300">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/client">
              <a>Client</a>
            </Link>
          </li>
          <li>
            <Link href="/server">
              <a>Server</a>
            </Link>
          </li>
          <li>
            <Link href="/protected">
              <a>Protected</a>
            </Link>
          </li>
          <li>
            <Link href="/api-example">
              <a>API</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
