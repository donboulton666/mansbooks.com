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
        <div>
          <input
            ref={searchedValue}
            type="search"
            id="default-search"
            placeholder="Search posts..."
            className="block w-full rounded-lg border border-slate-900 bg-slate-800 pt-4 pr-4 pl-4 pb-2 text-sm text-slate-300 placeholder-slate-400 focus:border-wine-300 focus:ring-wine-400"
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
