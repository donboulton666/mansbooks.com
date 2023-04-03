import React from "react";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/outline";

const Search = () => {
  return (
    <>
      <div className="p-1">
        <span className="sr-only">Search</span>
        <Link href="/search">
          <span className="flex flex-shrink-0 items-center pr-1 text-lg">
            <SearchIcon
              className="h-7 w-8 text-wine-300 text-opacity-75 hover:text-slate-300"
              aria-hidden="true"
            />
          </span>
        </Link>
      </div>
    </>
  );
};

export default Search;
