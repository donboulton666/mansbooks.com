import Link from "next/link";

export default function Intro() {
  return (
    <section className="mt-10 mb-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter text-wine-200 md:pr-8 md:text-2xl">
        Blog Posts
      </h1>
      <h4 className="mt-5 text-center text-lg md:pl-8 md:text-left">
        Angelina Jordan's{" "}
        <Link
          href="/expo"
          className="hover:text-success text-blue-500 underline transition-colors duration-200"
        >
          Vlogs
        </Link>{" "}
        <span className="text-wine-200">&</span>{" "}
        <Link
          href="/blog"
          className="hover:text-success text-blue-500 underline transition-colors duration-200"
        >
          Blogs
        </Link>
        .
      </h4>
    </section>
  );
}
