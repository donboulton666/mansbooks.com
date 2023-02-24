import Head from "next/head";
import Layout from "../components/layout";
import Search from "../components/search";
import Center from "../components/Center"

export default function SearchForm() {
  return (
    <Layout>
      <Head>
        <title>Search</title>
      </Head>
      <div className="mx-18">
        <div className="z-30 -mt-4">
          <div className="mt-10">
              <Center>Search this website</Center>
            <div className="mt-16 mb-16 p-8 sm:mt-2">
              <div className="mb-2">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
