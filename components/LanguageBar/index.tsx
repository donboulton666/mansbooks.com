import React from "react";
import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import WavyHr from "../WavyHr";

export default function LanguageBar() {
  const currentPath = useRouter().asPath;
  return (
    <div className="fixed left-1 top-1/4 z-10 mb-4 w-28 pb-4 md:left-1">
      <Popover as="div">
        {({ open }) => (
          <>
            <Popover.Button className="-ml-1 h-auto w-auto rounded-r-md bg-slate-900 pr-2 pt-2 pb-0 text-slate-300">
              <span className="headings-center inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-1 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </span>
            </Popover.Button>
            <Popover.Overlay
              className={`${
                open ? "fixed inset-0 opacity-30" : "opacity-0"
              } bg-black`}
            />
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Popover.Panel className="relative h-64 w-64">
                <div className="mt-2 ml-2 mr-2 rounded-lg bg-slate-900 text-slate-300 opacity-75 shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="mt-2 text-center underline decoration-blue-300 decoration-wavy underline-offset-4">
                    Languages
                  </div>
                  <div className="text-center text-xl text-slate-200 underline decoration-blue-300 decoration-wavy underline-offset-2"></div>
                  <WavyHr className="mt-1 mb-1" />
                  <nav className="nav-scroll h-44 w-auto overflow-y-auto overflow-x-hidden">
                    <ul className="flex flex-col">
                      <Link
                        href={currentPath}
                        locale="en"
                        className="mt-2 text-center text-lg text-slate-200 underline decoration-blue-300 decoration-wavy underline-offset-4 transition duration-300 hover:text-slate-200"
                      >
                        English
                      </Link>
                      <Link
                        href={currentPath}
                        locale="it"
                        className="mt-2 text-center text-lg text-slate-200 underline decoration-blue-300 decoration-wavy underline-offset-4 transition duration-300 hover:text-slate-200"
                      >
                        Italian
                      </Link>
                      <Link
                        href={currentPath}
                        locale="es"
                        className="mt-2 text-center text-lg text-slate-200 underline decoration-blue-300 decoration-wavy underline-offset-4 transition duration-300 hover:text-slate-200"
                      >
                        Spanish
                      </Link>
                      <Link
                        href={currentPath}
                        locale="nn"
                        className="mt-2 text-center text-lg text-slate-200 underline decoration-blue-300 decoration-wavy underline-offset-4 transition duration-300 hover:text-slate-200"
                      >
                        Norwegian
                      </Link>
                    </ul>
                  </nav>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
