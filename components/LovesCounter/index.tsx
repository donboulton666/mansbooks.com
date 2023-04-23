import fetcher from "@lib/fetcher";
import { Loves } from "@lib/schema";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { createClient } from "@supabase/supabase-js";
import useSWR from "swr";
import { Database } from "@/lib/schema";

const supabase =
  process.env.SUPABASE_URL &&
  process.env.SUPABASE_SERVICE_ROLE_SECRET
    ? createClient<Database>(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_SECRET
      )
    : undefined;

interface Props {
  slug: string;
}

const LovesCounter = ({ slug, user_id }: Props) => {
  const [loves, setLoves] = useState([]);
  const { profile: myProfile } = useContext(UserContext);
  const { data } = useSWR<Loves>(`/api/loves/${slug}`, fetcher);
  useEffect(() => {
    const registerLove = () =>
      fetch(`/api/loves/${slug}`, {
        method: "POST",
      });
  }, [slug]);

  const isLovedByMe = !!loves.find((love) => love.user_id === myProfile?.id);

  function setLove() {
    if (isLovedByMe) {
      supabase
        .from("loves")
        .select()
        .delete()
        .registerLove()
        .eq("slug", count)
        .eq("user_id", myProfile.id)
        .then(() => {
          fetchLoves();
        });
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
        onClick={setLove}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 ml-2"
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
      {`${(data?.count ?? 0) > 0 ? data.count.toLocaleString() : "–––"} love`}
    </span>
  );
};

export default LovesCounter;
