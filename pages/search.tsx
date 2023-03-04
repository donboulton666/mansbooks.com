import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import { GetServerSideProps } from "next";
import { renderToString } from "react-dom/server";
import algoliasearch from "algoliasearch/lite";
import { Hit as AlgoliaHit } from "instantsearch.js";
import {
  DynamicWidgets,
  InstantSearch,
  Hits,
  Highlight,
  RefinementList,
  SearchBox,
  InstantSearchServerState,
  InstantSearchSSRProvider,
} from "react-instantsearch-hooks-web";
import { getServerState } from "react-instantsearch-hooks-server";
import { createInstantSearchRouterNext } from "react-instantsearch-hooks-router-nextjs";
import singletonRouter from "next/router";
import { Panel } from "@components/Panel";
import "instantsearch.css/themes/satellite-min.css";
const client = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");

type HitProps = {
  hit: AlgoliaHit<{
    slug: string;
    title: string;
  }>;
};

function Hit({ hit }: HitProps) {
  return (
    <>
      <Highlight hit={hit} attribute="name" className="Hit-label" />
      <span className="Hit-price">${hit.title}</span>
    </>
  );
}

type SearchPageProps = {
  serverState?: InstantSearchServerState;
  url?: string;
};

export default function SearchPage({ serverState, url }: SearchPageProps) {
  return (
    <Layout>
      <InstantSearchSSRProvider {...serverState}>
        <Head>
          <title>React InstantSearch Hooks - Next.js</title>
        </Head>

        <InstantSearch
          searchClient={client}
          indexName="instant_search"
          routing={{
            router: createInstantSearchRouterNext({
              serverUrl: url,
              singletonRouter,
            }),
          }}
        >
          <div className="Container">
            <div>
              <DynamicWidgets fallbackComponent={FallbackComponent} />
            </div>
            <div className="mx-18">
              <div className="z-30 -mt-4">
                <div className="mt-10">
                  <Center>Search this website</Center>
                  <div className="mt-16 mb-16 p-8 sm:mt-2">
                    <div className="mb-2">
                      <SearchBox />
                      <Hits hitComponent={Hit} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InstantSearch>
      </InstantSearchSSRProvider>
    </Layout>
  );
}

function FallbackComponent({ attribute }: { attribute: string }) {
  return (
    <Panel header={attribute}>
      <RefinementList attribute={attribute} />
    </Panel>
  );
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> =
  async function getServerSideProps({ req }) {
    const protocol = req.headers.referer?.split("://")[0] || "https";
    const url = `${protocol}://${req.headers.host}${req.url}`;
    const serverState = await getServerState(<SearchPage url={url} />, {
      renderToString,
    });

    return {
      props: {
        serverState,
        url,
      },
    };
  };
