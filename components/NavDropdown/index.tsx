/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import {
  UserGroupIcon,
  UserIcon,
  PhotographIcon,
  MapIcon,
} from "@heroicons/react/outline";
import Control from "@components/icons/control";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <>
      <Disclosure as="nav" className="sticky top-0 z-40">
        {({ open }) => (
          <>
            <div className="mx-auto mr-7 max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-1">
                    <div>
                      <Menu.Button className="flex rounded-full text-sm focus:outline-none">
                        <span className="sr-only">Open Control Menu</span>
                        <Control
                          className="text-wine-300 text-opacity-75 hover:text-slate-300"
                          aria-hidden="true"
                          aria-label="DarkMode"
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
                      <Menu.Items className="absolute right-0 mt-3 w-48 origin-top-right rounded-md bg-slate-900 py-1 text-slate-200 opacity-75 shadow-lg ring-1 ring-black ring-opacity-5 hover:opacity-100 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/profile"
                              className={classNames(
                                active ? "bg-slate-700" : "",
                                "ml-2 mr-2 block items-center justify-center rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-white"
                              )}
                            >
                              <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                <UserGroupIcon
                                  className="block h-8 w-8 pr-2 text-blue-500"
                                  aria-hidden="true"
                                />
                                <span>Profile</span>
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/gallery"
                              className={classNames(
                                active ? "bg-slate-700" : "",
                                "ml-2 mr-2 block rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-white"
                              )}
                            >
                              <span className="flex flex-shrink-0 items-center pr-2 text-lg">
                                <PhotographIcon
                                  className="block h-8 w-9 pr-2 text-pink-500"
                                  aria-hidden="true"
                                />
                                <span>Gallery</span>
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/jobs"
                              className={classNames(
                                active ? "bg-slate-700" : "",
                                "ml-2 mr-2 block rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-white"
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
                                "ml-2 mr-2 block rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-white"
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
                                "ml-2 mr-2 block items-center justify-center rounded-md px-3 py-2 text-lg font-medium hover:bg-slate-600/30 hover:text-white"
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
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <Link href="/Speakers" className="bg-gray-200 text-slate-200">
                  Speakers
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
