import { useRouter } from "next/router";
import Search from "../Search";
import i18n from "@lib/i18n";

export default function Intro() {
  const { locale } = useRouter();
  const formattedLocale = locale.split("-")[0];
  return (
    <section className="mt-16 mb-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
      <div className="mt-10 w-full md:w-1/2 lg:w-1/3">
        <Search />
      </div>
      <h1 className="text-3xl font-bold leading-tight tracking-tighter text-wine-200 md:pr-8 md:text-2xl">
        Blog Posts
      </h1>
      <h4 className="mt-5 text-center text-lg md:pl-8 md:text-left">
        {i18n.intro[formattedLocale]}{" "}
        <a
          href="https://mansbooks.com/expo"
          className="hover:text-success text-blue-500 underline transition-colors duration-200"
        >
          Vlogs
        </a>{" "}
        <span className="text-wine-200">&</span>{" "}
        <a
          href="https://mansbooks.com/blog"
          className="hover:text-success text-blue-500 underline transition-colors duration-200"
        >
          Blogs
        </a>
        .
      </h4>
    </section>
  );
}
