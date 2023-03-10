import { useState } from "react";
import { buildClient } from "@datocms/cma-client-browser";
import ReactPaginate from "react-paginate";
import { useSiteSearch } from "react-datocms";

const client = buildClient({
  apiToken: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
});

function Search() {
  const [query, setQuery] = useState("");
  const { state, error, data } = useSiteSearch({
    client,
    initialState: { locale: "en" },
    buildTriggerId: "netlify",
    resultsPerPage: 10,
  });
  return (
    <div className="bg-slate-900 pt-8 pb-6 text-slate-300">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          state.setQuery(query);
        }}
      >
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
            className="search-box w-96 rounded-md bg-slate-900 py-2 pl-10 text-sm leading-6 text-slate-300 placeholder-slate-400 shadow-sm ring-1 ring-wine-300 focus:outline-none focus:ring-2 focus:ring-wine-200"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            value={state.locale}
            onChange={(e) => {
              state.setLocale(e.target.value);
            }}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="it">Italian</option>
            <option value="nn">Norwegian</option>
          </select>
        </div>
      </form>
      {!data && !error && <p>Loading...</p>}
      {error && <p>Error! {error}</p>}
      {data && (
        <>
          {data.pageResults.map((result) => (
            <div key={result.id}>
              <a href={result.url}>{result.title}</a>
              <div>{result.bodyExcerpt}</div>
              <div>{result.url}</div>
            </div>
          ))}
          <p>Total results: {data.totalResults}</p>
          <ReactPaginate
            pageCount={data.totalPages}
            forcePage={state.page}
            onPageChange={({ selected }) => {
              state.setPage(selected);
            }}
            activeClassName="active"
            renderOnZeroPageCount={() => null}
          />
        </>
      )}
    </div>
  );
}

export default Search;
