import Search from "../Search";

export default function Intro() {
  return (
    <>
      <section className="mt-16 mb-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
        <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
          Blog.
        </h1>
        <div className="mt-10 w-full md:w-1/2 lg:w-1/3">
          <Search />
        </div>
      </section>
    </>
  );
}
