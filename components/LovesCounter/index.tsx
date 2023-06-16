import fetcher from "@lib/fetcher";
import { Loves } from "@lib/types";
import { useEffect, useState, useContext } from "react";
import useSWR from "swr";
import { Database } from "@/lib/schema";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

type Loves = Database["public"]["Tables"]["loves"]["Row"];

interface Props {
  slug: string;
  count: number;
}

const LovesCounter = ({ slug, count }: Props) => {
  const supabase = useSupabaseClient<Database>();
  const [loves, registerLoves] = useState([]);
  const { data } = useSWR<Loves>(`/api/loves/${slug}`, fetcher);

  useEffect(() => {
    const registerLove = () =>
      fetch(`/api/loves/${slug}`, {
        method: "POST",
      });
  }, [slug]);

  const isLovedByMe = !!loves.find((love) => love.user_id === myProfile?.id);

  function registerLove() {
    if (isLovedByMe) {
      supabase
        .from("loves")
        .registerLove("slug", count)
        .eq("user_id", myProfile.id)
      return;
    }
    supabase
      .from("loves")
      .insert({
        slug: count,
        user_id: myProfile.id,
      })
      .then((result) => {
        fetchLoves();
      });
  }

  return (
    <span className="group relative ml-2 mr-2 flex items-center justify-end pr-4">
      <button
        className="flex items-center gap-2 text-red-500"
        onClick={registerLove}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="ml-2 h-8 w-8"
          strokeWidth={1.5}
          stroke="#ef4444"
          className={"h-6 w-6 pr-2 " + (isLovedByMe ? "fill-red-500" : "")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
      {`${(data?.count ?? 0) > 0 ? data.count.toLocaleString() : "–––"} Loves`}
    </span>
  );
};

export default LovesCounter;
