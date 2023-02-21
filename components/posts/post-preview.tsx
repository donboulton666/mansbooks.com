import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section class="mb-32 overflow-hidden">
      <div class="center container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div class="-m-1 flex flex-wrap justify-center md:-m-2">
          <div class="flex flex-wrap">
            <CoverImage
              slug={slug}
              title={title}
              responsiveImage={coverImage.responsiveImage}
            />
          </div>
          <Avatar name={author.name} picture={author.picture} />
          <h3 className="text-3xl mb-3 leading-snug">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="text-lg mb-4">
            <Date dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>      
        </div>
      </div>
    </section>
  );
}
