import PostPreview from "./post-preview";
import styles from "../sponsors-grid.module.css";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="text-wine-200 mb-4 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Posts
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
