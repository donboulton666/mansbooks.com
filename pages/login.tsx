import Head from "next/head";
import Image from "next/legacy/image";
import Layout from "@components/PageLayout";
import Login from "@components/Login";
import authImage from "../public/next-auth.png";

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
              <Image
                layout="fixed"
                className="h-20 w-20 self-center"
                src={authImage}
                width={80}
                height={80}
                quality={95}
                alt="Auth picture"
                loading="lazy"
              />
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
