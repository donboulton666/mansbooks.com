import Head from "next/head";
import Layout from "@components/PageLayout";

export default function Thanks() {
  return (
    <Layout>
      <Head>
        <title>Thank You</title>
      </Head>
      <div className="center mx-auto max-w-5xl">
        <div className="z-30 -mt-4">
          <div className="mt-10">
            <div className="mb-16 mt-16 p-8 sm:mt-2">
              <div className="mb-2">
                Thank You for your form submission. Turn around is 1 - 2
                business days.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
