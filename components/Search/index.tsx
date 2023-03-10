import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function Search() {
  const searchedValue = useRef("");
  const router = useRouter();
  const { term } = router.query;

  useEffect(() => {
    if (term) {
      searchedValue.current.value = term;
    }
  }, [term]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchedValue.current.value) {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      router.push("/search/" + searchedValue.current.value);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex h-12">
        <div className="group relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="pointer-events-none absolute left-3 top-1/2 -mt-2.5 text-slate-300 group-focus-within:text-wine-300"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            ref={searchedValue}
            type="search"
            id="default-search"
            className="block w-full rounded-lg border border-slate-900 bg-slate-800 p-4 text-sm text-slate-300 placeholder-slate-400 focus:border-wine-300 focus:ring-wine-400"
            required
          ></input>
        </div>
        <button
          type="submit"
          className="right-2.5 bottom-2.5 rounded-lg bg-wine-300 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-wine-200 focus:outline-none focus:ring-4 focus:ring-wine-300"
        >
          Search
        </button>
      </div>
    </form>
  );
}
