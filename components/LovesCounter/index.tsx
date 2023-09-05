import fetcher from "@lib/fetcher";
import { Session } from "@supabase/auth-helpers-nextjs";
import { Database } from "@lib/database.types";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getLoves, registerLoves } from "@lib/loves";
import useSWR from "swr";
import supabase from "@lib/supabase";

type Loves = Database["public"]["Tables"]["loves"]["Row"];

interface LovesProps {
  slug: string;
}

export default function LovesCounter<LovesProps>({
  session,
  slug,
  user_id,
}: {
  session: Session | null;
}) {
  const [loves, setLoves] = useState<Loves[]>([]);
  const { profile: myProfile } = useContext(UserContext);
  const { data } = useSWR<Loves>(`/api/loves/${slug}`, fetcher);
  useEffect(() => {
    const registerLove = () =>
      fetch(`/api/loves/${slug}`, {
        method: "POST",
      });
  }, [slug]);

  const isLovedByMe = !!loves.find((love) => love.user_id === user.id);

  function setLove() {
    if (isLovedByMe) {
      supabase
        .from("loves")
        .select("*")
        .eq("slug", count)
        .eq("user_id", user.id)
        .then(() => {
          fetchLoves();
        });
      return;
    }
    supabase
      .from("loves")
      .insert({
        slug: count,
        user_id: user.id,
      })
      .then((result) => {
        fetchLoves();
      });
  }
  const deleteLove = async (id: number) => {
    try {
      await supabase.from("loves").delete().eq("id", id).throwOnError();
      setLoves(loves.filter((x) => x.id != id));
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <span className="group relative ml-2 mr-2 flex items-center justify-end pr-4">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          className="flex items-center gap-2 text-slate-300"
          onSubmit={(e) => {
            e.preventDefault();
            registerLoves();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={"h-8 w-8 pr-2 " + (isLovedByMe ? "fill-slate-300" : "")}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <span className="mr-2">{`${
            (data?.count ?? 0) > 0 ? data.count.toLocaleString() : "–––"
          } love`}</span>
        </button>
        <button
          className="flex items-center gap-2 text-slate-300"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDelete();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
            />
          </svg>
        </button>
      </div>
    </span>
  );
}
