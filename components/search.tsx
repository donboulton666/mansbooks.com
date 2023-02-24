import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import SearchBox from "./search-box";
import SearchHits from "./search-hits";

const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY,
);

export default function Search() {
    return (
        <div className={"algolia-search"}>
            <InstantSearch searchClient={searchClient} indexName="dev_mansbooks">
                <SearchBox />
                <SearchHits />
            </InstantSearch>
        </div>
    );
}