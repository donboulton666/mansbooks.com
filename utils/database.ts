import axios from "axios";
import supabase from "@lib/supabase";

// Comment Request

export const readAllCommentsFetcher = (url: string) =>
  axios.get(url).then((res) => res.data);

export const addCommentRequest = (url: string, comment: any) =>
  axios.post(url, { comment }).then((res) => res.data);

export const editCommentRequest = (
  url: string,
  commentId: number,
  payload: string,
) => axios.patch(url, { commentId, payload }).then((res) => res.data);

export const deleteCommentRequest = (url: string, commentId: number) =>
  axios.delete(`${url}?comment_id=${commentId}`).then((res) => res.data);
