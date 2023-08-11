"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import cn from "classnames";
import styleUtils from "@components/utils.module.css";
import styles from "@components/conf-entry.module.css";
import AuthForm from "../../app/auth/auth-form";
import Center from "@components/Center";
import { Database } from "@lib/database.types";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import Image from "next/image";

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function Avatar({
  session: Session,
  uid,
  url,
}: {
  uid: string;
  url: Profiles["avatar_url"];
}) {
  const supabase = createClientComponentClient<Database>();
  const [avatarUrl, setAvatarUrl] = useState<Profiles["avatar_url"]>(url);

  useEffect(() => {
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path);
        if (error) {
          throw error;
        }

        const url = URL.createObjectURL(data);
        setAvatarUrl(url);
      } catch (error) {
        console.log("Error downloading image: ", error);
      }
    }

    if (url) downloadImage(url);
  }, [url, supabase]);

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {avatarUrl ? (
        <span className="avatar image flex flex-shrink-0 items-center pr-1">
          <Image
            width={32}
            height={32}
            src={avatarUrl}
            alt="Avatar"
            className="avatar image"
          />
        </span>
      ) : (
        <>
          {showModal ? (
            <>
              <div className="nav-scroll fixed inset-0 z-50 flex items-center justify-center outline-none focus:outline-none">
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
                        <AuthForm />
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-700 p-3">
                      <span
                        className={cn(styles.button, styles["button-resource"])}
                      >
                        <button
                          type="button"
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
          <span className="flex flex-shrink-0 items-center pr-1">
            <button onClick={() => setShowModal(true)}>
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
            </button>
          </span>
        </>
      )}
    </div>
  );
}
