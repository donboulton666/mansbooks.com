import Head from "next/head";
import Layout from "@components/PageLayout";
import Login from "@components/Login";

export default function LoginPage() {
  return (
    <Layout>
      <Head>
        <title>Log In</title>
      </Head>
      <div className="mx-18">
        <div className="z-30 -mt-4">
          <div className="mt-10">
            <div className="mt-16 mb-16 p-8 sm:mt-2">
              <div className="mb-2">
                <Login />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
