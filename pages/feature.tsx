import { useState, useRef } from "react";
import type { NextApiRequest } from "next";
import type { MouseEvent } from "react";
import Image from "next/legacy/image"
import Head from "next/head";
import Layout from "@components/PageLayout"
import clsx from "clsx";
import useSWR, { mutate } from "swr";
import toast from "react-hot-toast";
import redis from '../lib/redis-ioredis'

type Feature = {
  id: string;
  title: string;
  score: number;
  ip: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function LoadingSpinner({ invert }: { invert?: boolean }) {
  return (
    <svg
      className={clsx(
        "h-5 w-5 animate-spin text-slate-300",
        invert && "text-slate-500"
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

function Item({
  isFirst,
  isLast,
  isReleased,
  hasVoted,
  feature,
}: {
  isFirst: boolean;
  isLast: boolean;
  isReleased: boolean;
  hasVoted: boolean;
  feature: Feature;
}) {
  const upvote = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const res = await fetch("/api/vote", {
      body: JSON.stringify({
        id: feature.id,
        title: feature.title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      return toast.error(error);
    }

    mutate("/api/features");
  };

  return (
    <div
      className={clsx(
        "mx-8 flex items-center border-l border-r border-t p-6",
        isFirst && "rounded-t-md",
        isLast && "rounded-b-md border-b"
      )}
    >
      <button
        className={clsx(
          "mr-4 h-8 w-8 min-w-[2rem] rounded-full ring-1 ring-gray-200 focus:outline-none focus:ring focus:ring-blue-300",
          (isReleased || hasVoted) &&
            "cursor-not-allowed bg-green-100 ring-green-300"
        )}
        disabled={isReleased || hasVoted}
        onClick={upvote}
      >
        {isReleased ? "👍" : "❤️"}
      </button>
      <h3 className="text w-full text-left font-semibold">{feature.title}</h3>
      <div className="ml-2 rounded-xl bg-slate-900 px-2 text-sm text-slate-300">
        {feature.score}
      </div>
    </div>
  );
}

export default function Roadmap({
  features,
  ip,
}: {
  features: Feature[];
  ip: string;
}) {
  const [isCreateLoading, setCreateLoading] = useState(false);
  const [isEmailLoading, setEmailLoading] = useState(false);
  const featureInputRef = useRef<HTMLInputElement>(null);
  const subscribeInputRef = useRef<HTMLInputElement>(null);

  const { data, error } = useSWR("/api/features", fetcher, {
    initialData: { features },
  });

  if (error) {
    toast.error(error);
  }

  const addFeature = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreateLoading(true);

    const res = await fetch("/api/create", {
      body: JSON.stringify({
        title: featureInputRef?.current?.value ?? "",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    setCreateLoading(false);

    if (error) {
      toast.error(error);
      return;
    }

    mutate("/api/features");
    if (featureInputRef.current) {
      featureInputRef.current.value = "";
    }
  };

  const subscribe = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailLoading(true);

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: subscribeInputRef?.current?.value ?? "",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    setEmailLoading(false);

    if (error) {
      return toast.error(error);
    }

    toast.success("You are now subscribed to feature updates!");

    if (subscribeInputRef.current) {
      subscribeInputRef.current.value = "";
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-2">
        <Head>
          <title>Roadmap – Suggestions</title>
        </Head>

        <main className="flex flex-1 flex-col items-center justify-center px-4 text-center sm:px-20">
          <div className="my-8 flex h-16 w-16 items-center justify-center rounded-full bg-black sm:h-24 sm:w-24">
            <Image src="../public/icon-512x512.png" alt="Angelina Logo" className="h-8 sm:h-16" />
          </div>
          <h1 className="mb-2 text-lg font-bold sm:text-2xl">
            Help us prioritize our roadmap
          </h1>
          <h2 className="mx-4 text-md sm:text-xl">
            Create or vote up features you want to see in the next release.
          </h2>

          <div className="my-8 flex h-full max-w-4xl flex-wrap items-center justify-around rounded-md border border-slate-800 bg-slate-900 shadow-xl sm:w-full">
            <div className="mx-8 w-full">
              <form className="relative my-8" onSubmit={addFeature}>
                <input
                  ref={featureInputRef}
                  aria-label="Suggest a feature for our roadmap"
                  placeholder="I want..."
                  type="text"
                  maxLength={150}
                  required
                  className="mt-1 block w-full rounded-md bg-slate-900 border border-slate-800 py-3 pl-3 pr-28 text-lg text-slate-300 placeholder-gray-400 focus:outline-none focus:ring focus:ring-wine-300"
                />
                <button
                  className="absolute right-2 top-2 flex h-10 w-24 items-center justify-center rounded-md border bg-black px-4 text-lg text-white focus:bg-gray-800 focus:outline-none focus:ring focus:ring-wine-300"
                  type="submit"
                >
                  {isCreateLoading ? <LoadingSpinner invert /> : "Request"}
                </button>
              </form>
            </div>
            <div className="w-full">
              {data.features.map((feature: Feature, index: number) => (
                <Item
                  key={index}
                  isFirst={index === 0}
                  isLast={index === data.features.length - 1}
                  isReleased={false}
                  hasVoted={feature.ip === ip}
                  feature={feature}
                />
              ))}
            </div>
            <hr className="border-1 mx-8 my-8 w-full border-slate-900" />
            <div className="mx-8 w-full">
              <p className="flex text-gray-500">
                Leave your email address here to be notified when feature
                requests are released.
              </p>
              <form className="relative my-4" onSubmit={subscribe}>
                <input
                  ref={subscribeInputRef}
                  aria-label="Email for updates"
                  placeholder="Email Address"
                  type="email"
                  autoComplete="email"
                  maxLength={60}
                  required
                  className="mt-1 block w-full rounded-md bg-slate-900 border border-slate-800 px-3 py-3 text-lg text-slate-300 placeholder-gray-400 focus:outline-none focus:ring focus:ring-wine-300"
                />
                <button
                  className="absolute right-2 top-2 flex h-10 w-14 items-center justify-center rounded-md bg-slate-900 border border-slate-800 px-4 text-slate-300 focus:bg-slate-800 focus:outline-none focus:ring focus:ring-wine-300"
                  type="submit"
                >
                  {isEmailLoading ? <LoadingSpinner /> : "OK"}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  const ip =
    req.headers["x-forwarded-for"] || req.headers["Remote_Addr"] || "NA";
  const features = JSON.parse(await redis.hvals("features"))
    .map((entry) => JSON.parse(entry))
    .sort((a, b) => {
      // Primary sort is score
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;

      // Secondary sort is title
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;

      return 1;
    });

  return { props: { features, ip } };
}
