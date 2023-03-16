import Head from "next/head";
import Layout from "@components/PageLayout";

export default function Thanks() {
  return (
    <Layout>
      <Head>
        <title>Thank You</title>
      </Head>
      <div className="mx-18">
        <div className="z-30 -mt-4">
          <div className="mt-10">
            <div className="mt-16 mb-16 p-8 sm:mt-2">
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
