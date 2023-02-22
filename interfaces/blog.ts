import type Author from "./author";
import type Post from "./post";

export type Blog = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  content: Post;
};

export default Blog;
