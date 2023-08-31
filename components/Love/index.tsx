import { Session } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { Database } from "@lib/database.types";
import supabase from "@lib/supabase";

type Loves = Database["public"]["Tables"]["loves"]["Row"];

export default function LovesList({ session }: { session: Session }) {
  const [loves, setLoves] = useState<Loves[]>([]);
  const [errorText, setErrorText] = useState("");
  const user = session.user;

  useEffect(() => {
    const fetchLoves = async () => {
      const { data: loves, error } = await supabase
        .from("loves")
        .select("*")
        .order("id", { ascending: true });

      if (error) console.log("error", error);
      else setLoves(loves);
    };

    fetchLoves();
  }, [supabase]);

  const addLove = async () => {
    const { data: love, error } = await supabase
      .from("loves")
      .select("*")
      .eq("slug", count)
      .eq("user_id", user.id)
      .insert({ slug, user_id: user.id })
      .single();
    setLoves([...loves, love]);
  };

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
            registerLoves(slug);
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

const Love = ({ love, onDelete }: { love: Loves; onDelete: () => void }) => {
  const [isCompleted, setIsCompleted] = useState(love.is_complete);

  const toggle = async () => {
    try {
      const { data } = await supabase
        .from("loves")
        .eq("id", love.id)
        .throwOnError()
        .select("*")
        .single();

      if (data) setIsCompleted(data.is_complete);
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
            addLove(slug);
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
            deleteLove();
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
};
