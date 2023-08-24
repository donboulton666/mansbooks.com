import Link from "next/link";
import {
  addCommentRequest,
  deleteCommentRequest,
  editCommentRequest,
  readAllCommentsFetcher,
} from "../../utils/database";
import { useSession } from "@supabase/auth-helpers-react";
import { useState, FC } from "react";
import { useForm } from "react-hook-form";
import { PencilIcon, ReplyIcon, TrashIcon } from "@heroicons/react/outline";
import useSWR, { Key, useSWRConfig } from "swr";
import { useRecoilState } from "recoil";
import { ToastState } from "../../states/toastStates";

interface Comments {
  id: number;
  writer_email: string;
  payload: string;
  reply_of: number | null;
  created_at: string;
}

interface CommentsProps {
  postId: number;
  slug: string;
}

export const Comments: FC<CommentsProps> = ({ slug }) => {
  const [toast, setToast] = useRecoilState(ToastState);
  const commentsUrl: Key = `/api/comments/${slug}`;
  // TODO: Handle error from getting comments
  const { data: comments, error: commentError } = useSWR<Comments[]>(
    commentsUrl,
    readAllCommentsFetcher,
  );

  const [replyContent, setReplyContent] = useState<{
    comment: string;
    commentId: number;
  } | null>(null);
  const reply = (comment: string, commentId: number) => {
    setReplyContent({ comment, commentId });
    document.getElementById("comment-form")?.scrollIntoView();
  };

  const { handleSubmit, getValues, register, watch, setValue } = useForm<{
    payload: string;
  }>({
    defaultValues: {
      payload: "",
    },
  });

  const { mutate } = useSWRConfig();
  const addComment = async () => {
    const { payload } = getValues();
    if (
      typeof session?.user?.email === "string" &&
      session.user.email.length > 0
    ) {
      const newComment = {
        writer_email: session.user.email,
        payload,
        reply_of: replyContent?.commentId,
        slug: slug,
      };
      if (typeof comments !== "undefined") {
        // Modify cache before actually adding comment
        mutate(commentsUrl, [...comments, newComment], false);
        // Send request for adding a comment
        await addCommentRequest(commentsUrl, newComment);
        // Trigger revalidation to make sure local data is correct
        mutate(commentsUrl);
        // Reset form
        setValue("payload", "");
        setReplyContent(null);
        setToast({
          isOpen: true,
          messageType: "ok",
          message: "Comment Added",
        });
      }
    }
  };

  const [edit, setEdit] = useState<number | null>(null);
  const [editPayload, setEditPayload] = useState<string | null>(null);
  const switchEdit = (id: number, payload: string) => {
    if (edit !== null) {
      setEdit(null);
    } else {
      setEdit(id);
      setEditPayload(payload);
    }
  };
  const editComment = async (
    id: number,
    payload: string,
    prevPayload: string,
  ) => {
    if (payload === prevPayload) {
      setToast({
        isOpen: true,
        messageType: "warning",
        message: "Comment unchanged",
      });
      return;
    }
    setToast({
      isOpen: true,
      messageType: "confirm",
      message: "Edit comment?",
      confirm: async () => {
        try {
          // Modify cache before actually adding comment
          mutate(
            commentsUrl,
            comments?.map((comment) => {
              if (comment.id === id) {
                return { ...comment, payload };
              }
              return comment;
            }),
            false,
          );
          // Send request for adding a comment
          await editCommentRequest(commentsUrl, id, payload);
          // Trigger revalidation to make sure local data is correct
          mutate(commentsUrl);
          // Reset form
          setEdit(null);
          setEditPayload(null);
          setToast({
            isOpen: true,
            messageType: "ok",
            message: "Comment Edited",
          });
          return;
        } catch (error) {
          setToast({
            isOpen: true,
            messageType: "error",
            message: "Failed to edit comment",
          });
          return;
        }
      },
    });
  };

  const deleteComment = async (id: number) => {
    setToast({
      isOpen: true,
      messageType: "confirm",
      message: "Delete comment?",
      confirm: async () => {
        try {
          mutate(
            commentsUrl,
            comments?.filter((comment) => comment.id !== id),
            false,
          );
          const { error } = await deleteCommentRequest(commentsUrl, id);
          if (error) {
            setToast({
              isOpen: true,
              messageType: "error",
              message: "Failed to delete comment",
            });
            return;
          }
          mutate(commentsUrl);
          setToast({
            isOpen: true,
            messageType: "ok",
            message: "Comment Deleted",
          });
          return;
        } catch (error) {
          setToast({
            isOpen: true,
            messageType: "error",
            message: "Failed to delete comment",
          });
          return;
        }
      },
    });
  };

  const { data: session, status } = useSession();

  return (
    <section id="comments-section" className="w-full scroll-m-8">
      <h1 className="tablet:mb-8 mb-4">Comments</h1>
      {status === "authenticated" ? (
        <form
          onSubmit={handleSubmit(addComment)}
          className="scroll-m-4"
          id="comment-form"
        >
          {replyContent && (
            <div className="mb-4 flex items-center justify-start gap-4 opacity-70">
              <ReplyIcon className="w-4 -rotate-180" />
              <p className="text-base font-extralight">
                {replyContent.comment}
              </p>
              <TrashIcon
                onClick={() => setReplyContent(null)}
                className="w-4 cursor-pointer"
              />
            </div>
          )}
          <div className="flex w-full flex-col items-end">
            <input
              type="text"
              className="w-full border-b-2 border-slate-700 bg-transparent px-1 pb-2 text-lg font-light opacity-70 outline-none transition-all ease-out focus:opacity-100"
              placeholder="Write comments"
              {...register("payload")}
            />
            <button
              className={`tablet:mt-6 mt-4 rounded-md text-lg transition-all ${
                watch().payload.length > 0
                  ? `pointer-events-auto opacity-100`
                  : `pointer-events-none opacity-70`
              }`}
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="flex items-center gap-8">
          <p>Sign in to add comments</p>
          <Link href={"/login"}>
            <a className="rounded-lg bg-slate-900 px-3 py-1 text-lg text-slate-300">
              Sign in
            </a>
          </Link>
        </div>
      )}
      <div className="mt-2">
        {typeof comments !== "undefined" &&
          comments
            .sort((a, b) => {
              const aDate = new Date(a.created_at);
              const bDate = new Date(b.created_at);
              // @ts-ignore
              return aDate - bDate;
            })
            .map(
              ({
                writer_email: user,
                payload,
                id: commentId,
                reply_of: replyOf,
              }) => (
                <div
                  key={`comment-${commentId}`}
                  id={`comment-${commentId}`}
                  className={`flex scroll-m-4 flex-col items-start gap-1 py-4`}
                >
                  {replyOf && (
                    <div
                      onClick={() =>
                        document
                          .getElementById(`comment-${replyOf}`)
                          ?.scrollIntoView()
                      }
                      className="flex cursor-pointer items-center justify-start gap-4 opacity-70"
                    >
                      <ReplyIcon className="w-4 -rotate-180" />
                      <p className="text-base font-extralight">
                        {comments
                          .find((comment) => comment.id === replyOf)
                          ?.payload.slice(0, 30) ||
                          "[Comment you replied has been deleted]"}
                      </p>
                    </div>
                  )}
                  <div className="flex w-full items-center justify-between">
                    <p className="font-medium">{user}</p>
                    <div className="tablet:flex mt-2 hidden w-full justify-end gap-6">
                      <ReplyIcon
                        onClick={() => reply(payload, commentId)}
                        className="w-6 -rotate-180 cursor-pointer"
                      />
                      {session?.user?.email === user && (
                        <>
                          <PencilIcon
                            onClick={() => switchEdit(commentId, payload)}
                            className="w-6 cursor-pointer"
                          />
                          <TrashIcon
                            onClick={() => deleteComment(commentId)}
                            className="w-6 cursor-pointer"
                          />
                        </>
                      )}
                    </div>
                  </div>
                  {edit === commentId ? (
                    <div className="my-1 flex w-full justify-end gap-4">
                      <input
                        type="text"
                        value={editPayload + ""}
                        onChange={(e) => setEditPayload(e.target.value)}
                        className="w-full border-b bg-transparent pb-1 outline-none"
                      />
                      <button
                        onClick={() =>
                          editComment(edit, editPayload + "", payload)
                        }
                        className={`${
                          editPayload
                            ? `pointer-events-auto opacity-100`
                            : `pointer-events-none opacity-70`
                        }`}
                      >
                        Edit
                      </button>
                    </div>
                  ) : (
                    <p className="font-extralight">{payload}</p>
                  )}
                  <div className="tablet:hidden mt-2 flex w-full justify-start gap-6">
                    <ReplyIcon
                      onClick={() => reply(payload, commentId)}
                      className="w-6 -rotate-180 cursor-pointer"
                    />
                    {session?.user?.email === user && (
                      <>
                        <PencilIcon
                          onClick={() => switchEdit(commentId, payload)}
                          className="w-6 cursor-pointer"
                        />
                        <TrashIcon
                          onClick={() => deleteComment(commentId)}
                          className="w-6 cursor-pointer"
                        />
                      </>
                    )}
                  </div>
                </div>
              ),
            )}
      </div>
    </section>
  );
};
