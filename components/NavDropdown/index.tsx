"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Link from "next/link";
import Center from "@components/Center";
import ColumnGridLeft from "@components/column-grid-left";
import { useSupabaseClient, Session } from "@supabase/auth-helpers-react";
import Image from "next/image";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BriefcaseIcon, ChevronDownIcon } from "@heroicons/react/solid";
import {
  SearchIcon,
  UserGroupIcon,
  UserIcon,
  MapIcon,
  LoginIcon,
  CogIcon,
  ClipboardIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";
import Control from "@components/icons/control";
import { Database } from "@lib/database.types";
import { cookies } from "next/headers";
import Avatar from "@app/account/avatar";

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation({
  uid,
  url,
  size,
  session,
}: {
  session: Session;
}) {
  const supabase = useSupabaseClient<Database>();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<Profiles["username"]>(null);
  const [avatarUrl, setAvatarUrl] = useState<Profiles["avatar_url"]>(null);
  const [showModal, setShowModal] = useState(false);
  const user = session?.user;

  let width = "w-7";
  if (size === "lg") {
    width = "w-7 md:w-7";
  }

  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      "http://localhost:3000/";
    // Make sure to include `https://` when not localhost.
    url = url.includes("http") ? url : `https://${url}`;
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
    return url;
  };

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: getURL(),
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  }

  async function signInWithSpotify() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "spotify",
      options: {
        redirectTo: getURL(),
      },
    });
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <>
      <Disclosure as="nav" className="sticky top-0 z-40">
        {({ open }) => (
          <>
            <div className="mx-auto mr-7 max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="p-1">
                    <span className="sr-only">Search</span>
                    <Link href="/search">
                      <span className="flex flex-shrink-0 items-center pr-1 text-lg">
                        <SearchIcon
                          className="h-7 w-8 text-wine-300 text-opacity-75 hover:text-slate-300"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </div>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-1">
                    <div>
                      <Menu.Button className="flex rounded-full text-sm focus:outline-none">
                        <span className="sr-only">Open Control Menu</span>
                        <Control
                          className="text-wine-300 text-opacity-75 hover:text-slate-300"
                          aria-hidden="true"
                          aria-label="Links"
                        >
                          <ChevronDownIcon
                            className={`${
                              open
                                ? "rotate-180 text-wine-300"
                                : "text-opacity-75"
                            }
                            -mr-1 mt-1 h-5 text-wine-300 transition duration-150 ease-in-out first-letter:w-5 hover:text-slate-300 group-hover:text-opacity-75`}
                            aria-hidden="true"
                          />
                        </Control>
                      </Menu.Button>
                    </div>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-3 w-64 origin-top-right rounded-md bg-slate-900 py-1 text-slate-200 opacity-75 shadow-lg ring-1 ring-black ring-opacity-5 hover:opacity-100 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/angies-profile"
                              className={classNames(
                                active ? "bg-slate-700" : "",
                                "ml-2 mr-2 block items-center justify-center rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300",
                              )}
                            >
                              <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                <UserGroupIcon
                                  className="block h-8 w-8 pr-2 text-blue-500"
                                  aria-hidden="true"
                                />
                                <span>Angie's Profile</span>
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/social"
                              className={classNames(
                                active ? "bg-slate-700" : "",
                                "ml-2 mr-2 block rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300",
                              )}
                            >
                              <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                <UserIcon
                                  className="block h-8 w-9 pr-2 text-wine-200"
                                  aria-hidden="true"
                                />
                                <span>Social</span>
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/speakers"
                              className={classNames(
                                active ? "bg-slate-700" : "",
                                "ml-2 mr-2 block rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300",
                              )}
                            >
                              <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                <UserIcon
                                  className="block h-8 w-9 pr-2 text-fuchsia-500"
                                  aria-hidden="true"
                                />
                                <span>Speakers</span>
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              target="_blank"
                              href="/sitemap.xml"
                              className={classNames(
                                active ? "bg-slate-700" : "",
                                "ml-2 mr-2 block items-center justify-center rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300",
                              )}
                            >
                              <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                <MapIcon
                                  className="block h-9 w-9 pr-2 text-green-600"
                                  aria-hidden="true"
                                />
                                <span>Sitemap</span>
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  {/* User dropdown */}
                  <Menu as="div" className="relative ml-1">
                    <div>
                      <Menu.Button className="flex rounded-full text-sm focus:outline-none">
                        <span className="sr-only">Open User Menu</span>
                        {avatarUrl ? (
                          <Image
                            uid={user!.id}
                            url={avatar_url}
                            alt="Avatar"
                            className="avatar image h-7 w-7 rounded-full "
                          />
                        ) : (
                          <div className="avatar no-image">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="h-7 w-7 text-wine-300"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                        )}
                        <ChevronDownIcon
                          className={`${
                            open
                              ? "rotate-180 text-wine-300"
                              : "text-opacity-75"
                          }
                            -mr-1 mt-1 h-5 text-wine-300 transition duration-150 ease-in-out first-letter:w-5 hover:text-slate-300 group-hover:text-opacity-75`}
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-3 w-64 origin-top-right rounded-md bg-slate-900 py-1 text-slate-200 opacity-75 shadow-lg ring-1 ring-black ring-opacity-5 hover:opacity-100 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => setShowModal(true)}
                              className={classNames(
                                active ? "bg-slate-700" : "",
                                "ml-2 mr-2 block rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300",
                              )}
                            >
                              <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                <LoginIcon
                                  className="block h-8 w-8 pr-2 text-blue-500"
                                  aria-hidden="true"
                                />
                                <span>Login</span>
                              </span>
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/profile"
                              className={classNames(
                                active ? "bg-slate-700" : "",
                                "ml-2 mr-2 block rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300",
                              )}
                            >
                              <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                <CogIcon
                                  className="block h-8 w-9 pr-2 text-wine-200"
                                  aria-hidden="true"
                                />
                                <span>User Profile</span>
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/survey"
                              className={classNames(
                                active ? "bg-slate-700" : "",
                                "ml-2 mr-2 block rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300",
                              )}
                            >
                              <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                <ClipboardIcon
                                  className="block h-8 w-9 pr-2 text-fuchsia-500"
                                  aria-hidden="true"
                                />
                                <span>Survey</span>
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/results"
                              className={classNames(
                                active ? "bg-slate-700" : "",
                                "ml-2 mr-2 block items-center justify-center rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-slate-300",
                              )}
                            >
                              <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                <ClipboardListIcon
                                  className="block h-9 w-9 pr-2 text-green-600"
                                  aria-hidden="true"
                                />
                                <span>Results</span>
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      {showModal ? (
        <>
          <div className="nav-scroll fixed inset-0 mt-10 z-50 flex items-center justify-center outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-96 flex-col rounded-lg border-0 bg-[#111111] shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-700 p-5">
                  <Center>Login</Center>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-slate-200 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="avatar no-image block h-6 w-6 bg-transparent text-2xl text-slate-200 opacity-5 outline-none focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-slate-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-3">
                  <p className="my-4 bg-[#111111] px-2 text-lg leading-relaxed text-slate-300">
                    {!session ? (
                      <Auth
                        supabaseClient={supabase}
                        view="magic_link"
                        appearance={{ theme: ThemeSupa }}
                        theme="dark"
                        showLinks={false}
                        providers={["google", "spotify"]}                        
                      />
                    ) : (
                      <ColumnGridLeft>
                        <Avatar
                          uid={user!.id}
                          url={avatar_url}
                          className="h-24 w-24 rounded-full"
                        />
                        <div>
                          <h2>Hello: {username}</h2>
                          <div className="flex h-full w-full flex-col items-center justify-center p-4">
                            <div className="mb-4">
                              <button
                                className="button block"
                                onClick={() => supabase.auth.signOut()}
                              >
                                Sign Out
                              </button>
                            </div>
                          </div>
                        </div>
                      </ColumnGridLeft>
                    )}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-700 p-3">
                  <span>
                    <button
                      type="button"
                      className="float-right button block"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
