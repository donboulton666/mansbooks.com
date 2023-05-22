import Avatar from "../avatar";
import Card from "./Card";
import ClickOutHandler from "react-clickout-handler";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import ReactTimeAgo from "react-time-ago";
import { UserContext } from "../../contexts/UserContext";
import { createClient } from "@supabase/supabase-js";
import useSWR from "swr";
import styles from "./home.module.css";
import { Database } from "@lib/schema";

const supabase =
  process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_SECRET
    ? createClient<Database>(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_SECRET
      )
    : undefined;

type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

type Posts = Database["public"]["Tables"]["posts"]["Row"];

type Saved_Posts = Database["public"]["Tables"]["saved_posts"]["Row"];

type Likes = Database["public"]["Tables"]["likes"]["Row"];

export default function PostCard({
  id,
  content,
  created_at,
  profiles: authorProfile,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const { profile: myProfile } = useContext(UserContext);
  const [username, setUsername] = useState<Profiles["username"]>(null);
  const [photos, setPhotos] = useState<Posts["photos"]>(null);
  const [avatar_url, setAvatar_url] = useState<Profiles["avatar_url"]>(null);

  useEffect(() => {
    fetchLikes();
    fetchComments();
    if (myProfile?.id) fetchIsSaved();
  }, [myProfile?.id]);
  function fetchIsSaved() {
    supabase
      .from("saved_posts")
      .select()
      .eq("post_id", id)
      .eq("user_id", myProfile?.id)
      .then((result) => {
        if (result.data.length > 0) {
          setIsSaved(true);
        } else {
          setIsSaved(false);
        }
      });
  }
  function fetchLikes() {
    supabase
      .from("likes")
      .select()
      .eq("post_id", id)
      .then((result) => setLikes(result.data));
  }
  function fetchComments() {
    supabase
      .from("posts")
      .select("*, profiles(*)")
      .eq("parent", id)
      .then((result) => setComments(result.data));
  }
  function openDropdown(e) {
    e.stopPropagation();
    setDropdownOpen(true);
  }
  function handleClickOutsideDropdown(e) {
    e.stopPropagation();
    setDropdownOpen(false);
  }
  function toggleSave() {
    if (isSaved) {
      supabase
        .from("saved_posts")
        .delete()
        .eq("post_id", id)
        .eq("user_id", myProfile?.id)
        .then((result) => {
          setIsSaved(false);
          setDropdownOpen(false);
        });
    }
    if (!isSaved) {
      supabase
        .from("saved_posts")
        .insert({
          user_id: myProfile.id,
          post_id: id,
        })
        .then((result) => {
          setIsSaved(true);
          setDropdownOpen(false);
        });
    }
  }

  const isLikedByMe = !!likes.find((like) => like.user_id === myProfile?.id);

  function toggleLike() {
    if (isLikedByMe) {
      supabase
        .from("likes")
        .delete()
        .eq("post_id", id)
        .eq("user_id", myProfile.id)
        .then(() => {
          fetchLikes();
        });
      return;
    }
    supabase
      .from("likes")
      .insert({
        post_id: id,
        user_id: myProfile.id,
      })
      .then((result) => {
        fetchLikes();
      });
  }

  function postComment(ev) {
    ev.preventDefault();
    supabase
      .from("posts")
      .insert({
        content: commentText,
        author: myProfile.id,
        parent: id,
      })
      .then((result) => {
        console.log(result);
        fetchComments();
        setCommentText("");
      });
  }

  return (
    <Card>
      <div className="flex gap-3">
        <div>
          <Link href={"/profile"}>
            <span className="cursor-pointer">
              <Avatar className="h-12 w-12" uid={user.id} url={avatar_url} />
            </span>
          </Link>
        </div>
        <div className="grow">
          <p>
            <Link href={"/profile/" + authorProfile.id}>
              <span className="mr-1 cursor-pointer font-semibold hover:underline">
                {authorProfile.username}
              </span>
            </Link>
            shared a post
          </p>
          <p className="text-sm text-slate-400">
            <ReactTimeAgo date={new Date(created_at).getTime()} />
          </p>
        </div>
        <div className="relative">
          <button className="text-slate-300" onClick={openDropdown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="bg-red absolute top-0 h-5 w-5"></div>
          )}
          <ClickOutHandler onClickOut={handleClickOutsideDropdown}>
            <div className="relative">
              {dropdownOpen && (
                <div className="absolute -right-6 w-52 rounded-sm border border-gray-100 bg-slate-900 p-3 shadow-md shadow-slate-900">
                  <button onClick={toggleSave} className="-my-2 w-full">
                    <span className="-mx-4 my-2 flex gap-3 rounded-md px-4 py-2 shadow-slate-900 transition-all hover:scale-110 hover:bg-socialBlue hover:text-white hover:shadow-md">
                      {isSaved && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5"
                          />
                        </svg>
                      )}
                      {!isSaved && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                          />
                        </svg>
                      )}
                      {isSaved ? "Remove from saved" : "Save post"}
                    </span>
                  </button>
                  <a
                    href=""
                    className="-mx-4 my-2 flex gap-3 rounded-md px-4 py-2 shadow-slate-900 transition-all hover:scale-110 hover:bg-socialBlue hover:text-white hover:shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                      />
                    </svg>
                    Turn notifications
                  </a>
                  <a
                    href=""
                    className="-mx-4 my-2 flex gap-3 rounded-md px-4 py-2 shadow-slate-900 transition-all hover:scale-110 hover:bg-socialBlue hover:text-white hover:shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Hide post
                  </a>
                  <a
                    href=""
                    className="-mx-4 my-2 flex gap-3 rounded-md px-4 py-2 shadow-slate-900 transition-all hover:scale-110 hover:bg-socialBlue hover:text-white hover:shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                    Delete
                  </a>
                  <a
                    href=""
                    className="-mx-4 my-2 flex gap-3 rounded-md px-4 py-2 shadow-slate-900 transition-all hover:scale-110 hover:bg-socialBlue hover:text-white hover:shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                    Report
                  </a>
                </div>
              )}
            </div>
          </ClickOutHandler>
        </div>
      </div>
      <div>
        <p className="my-3 text-sm">{content}</p>
        {photos?.length > 0 && (
          <div className="flex gap-4">
            {photos.map((photo) => (
              <div key={photo} className="photo">
                <img src={photo} className="rounded-md" alt="" />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-5 flex gap-8">
        <button className="flex items-center gap-2" onClick={toggleLike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={"h-6 w-6 " + (isLikedByMe ? "fill-red-500" : "")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          {likes?.length}
        </button>
        <button className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          {comments.length}
        </button>
        <button className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
          4
        </button>
      </div>
      <div className="mt-4 flex gap-3">
        <div>
          <Avatar url={myProfile?.avatar_url} className="h-6 w-6" />
        </div>
        <div className="relative grow rounded-full border">
          <form onSubmit={postComment}>
            <input
              value={commentText}
              onChange={(ev) => setCommentText(ev.target.value)}
              className="block h-12 w-full overflow-hidden rounded-full p-3 px-4"
              placeholder="Leave a comment"
            />
          </form>
          <button className="absolute right-3 top-3 text-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        {comments.length > 0 &&
          comments.map((comment) => (
            <div key={comment.id} className="mt-2 flex items-center gap-2">
              <Avatar url={comment.profiles.avatar} />
              <div className="rounded-3xl bg-gray-200 px-4 py-2">
                <div>
                  <Link href={"/profile/" + comment.profiles.id}>
                    <span className="mr-1 font-semibold hover:underline">
                      {comment.profiles.name}
                    </span>
                  </Link>
                  <span className="text-sm text-slate-300">
                    <ReactTimeAgo
                      timeStyle={"twitter"}
                      date={new Date(comment.created_at).getTime()}
                    />
                  </span>
                </div>
                <p className="text-sm">{comment.content}</p>
              </div>
            </div>
          ))}
      </div>
    </Card>
  );
}
