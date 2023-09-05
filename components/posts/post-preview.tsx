import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import styles from "../sponsors-grid.module.css";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <>
      <section className="center mx-auto mb-32 max-w-5xl overflow-hidden rounded-lg border-double border-sky-600 bg-slate-800">
        <div className={styles.gridpost}>
          <div className={styles.imageWrapper}>
            <CoverImage
              className="mt-4 rounded-t-md"
              slug={slug}
              title={title}
              responsiveImage={coverImage.responsiveImage}
            />
          </div>
          <div className={styles.cardBody}>
            <div className="mb-8 sm:flex sm:items-start">
              <div className="ml-2 flex h-12 w-12 flex-shrink-0 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                <Avatar name={author.name} picture={author.picture} />
                <div className="-mt-1 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="text-base leading-6">
                    <span className="mr-6 font-medium italic">
                      {author.name}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-medium italic">
              <Date dateString={date} />
            </div>
            <h3 className="mb-3 text-3xl leading-snug">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="mb-4 text-lg leading-relaxed">{excerpt}</div>
          </div>
        </div>
      </section>
    </>
  );
}
