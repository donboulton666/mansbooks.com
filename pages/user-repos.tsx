import {
  User,
  createServerSupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Layout from "@components/PageLayout";
import Accordion from "@components/Accordion";

export default function ProtectedPage({
  user,
  allRepos,
}: {
  user: User;
  allRepos: any;
}) {
  return (
    <>
      <Layout>
        <Head>
          <title>Github Repos</title>
        </Head>
        <div className="mx-20 my-20 border-2 border-slate-900 bg-black p-4 text-slate-300">
          <h2>Github Repos</h2>
          <div className="flex flex-row text-xs text-slate-300">
            Protected content for {user.full_name} {user.avatar_url}
          </div>
          <div>{user.email}</div>
          <Accordion title="Json Response" buttonTitle="Json Response">
            <p>Data fetched with provider token:</p>
            <pre>{JSON.stringify(allRepos, null, 2)}</pre>
            <p>user:</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </Accordion>
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  // Retrieve provider_token & logged in user's third-party id from metadata
  const { provider_token, user } = session;
  const userId = user.user_metadata.user_name;

  const allRepos = await (
    await fetch(`https://api.github.com/search/repositories?q=user:${userId}`, {
      method: "GET",
      headers: {
        Authorization: `token ${provider_token}`,
      },
    })
  ).json();

  return { props: { user, allRepos } };
};
