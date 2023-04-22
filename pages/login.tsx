import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "@components/account";
import Layout from "@components/PageLayout";
import Center from "@components/Center";
import Image from "next/legacy/image";
import LeftText from "@components/LeftText";
import TodoList from "@components/TodoList";
import ColumnGridLeft from "@components/column-grid-left";
import angie from "../public/angie/angelina.jpg";
import angieImage from "../public/icons/apple-touch-icon.png";
import iLoveYou from "../public/angie/ps-i-love-you.jpg";
import { Database } from "@lib/database.types";

const Login = () => {
  const session = useSession();
  const supabase = useSupabaseClient<Database>();
  return (
    <Layout>
      <div className="mb-96 ml-10 mr-10 mt-10" data-datocms-noindex>
        <div>
          <Center>Login Angelina Jordan</Center>
        </div>
        <LeftText>The Queen</LeftText>
        <ColumnGridLeft>
          <div className="mt-4">
            <div className="mb-4">
              <Image
                layout="fixed"
                className="h-5 w-5 self-center rounded-lg"
                src={iLoveYou}
                width={325}
                height={573}
                quality={95}
                alt="PS I Love You"
                loading="lazy"
              />
            </div>
          </div>
          <div className="-mt-2 mb-24 ml-8 text-slate-200 lg:col-span-2 lg:mt-0">
            {!session ? (
              <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                providers={["github", "google", "spotify", "slack"]}
                theme="dark"
              />
            ) : (
              <>
                <ColumnGridLeft>
                  <Account session={session} />
                  <div
                    className="flex h-full w-full flex-col items-center justify-center p-4"
                    style={{ minWidth: 250, maxWidth: 600, margin: "auto" }}
                  >
                    <TodoList session={session} />
                  </div>
                </ColumnGridLeft>
              </>
            )}
          </div>
        </ColumnGridLeft>
      </div>
    </Layout>
  );
};

export default Login;
