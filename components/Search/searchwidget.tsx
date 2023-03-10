import { useState } from "react";
import { buildClient } from "@datocms/cma-client-browser";
import ReactPaginate from "react-paginate";
import { useSiteSearch } from "react-datocms";

const client = buildClient({
  apiToken: process.env.DATOCMS_FULL_ACCESS_API_TOKEN,
});

function SearchWidget() {
  const [query, setQuery] = useState("");
  const { state, error, data } = useSiteSearch({
    client,
    initialState: { locale: "en" },
    buildTriggerId: "26574",
    resultsPerPage: 10,
  });
  return (
    <div className="mt-2 pt-2 z-30">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          state.setQuery(query);
        }}
      >
        <input
          type="search"
          className="rounded-lg border border-slate-900 bg-slate-800 pt-4 pr-4 pl-4 pb-2 text-sm text-slate-300 placeholder-slate-400 focus:border-wine-300 focus:ring-wine-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="bg-slate-800 text-sm text-slate-300"
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

export default SearchWidget;
