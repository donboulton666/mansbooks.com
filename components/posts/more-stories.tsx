import PostPreview from "./post-preview";
import styles from "../sponsors-grid.module.css";
import { useRouter } from "next/router";
import i18n from "@lib/i18n";

export default function MoreStories({ posts }) {
  if (posts[0].localeVersion) {
    // if the posts are localized versions, make sure that it is not null (would be for unpublished posts)
    // and pick that locale version
    posts = posts.map((post) => post.localeVersion).filter((post) => post);
  }
  const { locale } = useRouter();
  return (
    <section className="center mx-auto max-w-5xl">
      <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tighter text-wine-200 md:text-3xl">
        {i18n.stories.more[locale]}
      </h2>
      <div className={styles.grid}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
