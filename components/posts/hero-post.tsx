import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-1 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="align-center mb-6 text-center text-lg leading-tight lg:text-2xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-8 md:mb-16">
            <CoverImage
              title={title}
              responsiveImage={coverImage.responsiveImage}
              slug={slug}
            />
          </div>
          <div>
            <div className="mb-4 text-lg leading-relaxed">{excerpt}</div>
            <Avatar name={author.name} picture={author.picture} />
          </div>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </section>
  );
}
