import Link from "next/link";

export default function Intro() {
  return (
    <section className="mb-16 mt-10 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
      <h1 className="text-2xl font-bold leading-tight tracking-tighter text-wine-200 md:pr-8 md:text-lg">
        Blog Posts
      </h1>
      <h4 className="mt-5 text-center text-lg md:pl-8 md:text-left">
        Angelina Jordan's{" "}
        <Link
          href="/expo"
          className="hover:text-success text-blue-500 transition-colors duration-200"
        >
          {" "}
          Webinars
        </Link>{" "}
        <span className="text-wine-200">&</span>{" "}
        <Link
          href="/blog"
          className="hover:text-success text-blue-500 transition-colors duration-200"
        >
          Albums
        </Link>
        .
      </h4>
    </section>
  );
}
