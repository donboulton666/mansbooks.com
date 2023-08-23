import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "@app/account/Account";
import Layout from "@components/PageLayout";
import Center from "@components/Center";
import Image from "next/image";
import LeftText from "@components/LeftText";
import TodoList from "@components/TodoList";
import ColumnGridLeft from "@components/column-grid-left";
import angie from "../public/angie/angelina.jpg";
import Stars from "@components/Stars";
import angieImage from "../public/icons/apple-touch-icon.png";
import iLoveYou from "../public/angie/ps-i-love-you.jpg";

const ProfilePage: NextPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: getURL(),
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  }

  async function signInWithSpotify() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "spotify",
      options: {
        redirectTo: getURL(),
      },
    });
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }
  return (
    <Layout>
      <Stars />
      <Head>
        <title>Login</title>
        <>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Login",
              url: "https://mansbooks.com/profile",
              image: {
                "@type": "ImageObject",
                url: angieImage,
                width: "1400",
                height: "450",
              },
              publisher: {
                "@type": "Organization",
                name: "Mansbooks",
              },
              license: "http://mansbooks.com/license",
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@id": "https://mansbooks.com",
              "@type": "Organization",
              address: "LA, Evil Earth",
              contactPoint: {
                "@type": "ContactPoint",
                email: "donaldboulton@gmail.com",
                telephone: "+405-863-2165",
              },
              description: "Angelina's Login",
              email: "donaldboulton@gmail.com",
              founder: {
                "@id": "https://donboulton.com",
              },
              location: "LA, Evil Earth",
              image: {
                "@type": "ImageObject",
                url: angieImage,
                width: "1400",
                height: "450",
              },
              logo: {
                "@type": "ImageObject",
                url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFRYVDhgQEhgNEh0PExYVFx8eGBYVIhUaHysjHR0oKRUiJTUlKC0vMjIyGSU4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7NTsyOzs7OzsvLy81OzU7NjU1Ozs1LzY7OzsvNS87OzsvLy87OzsvLzIvLy87Lzs7O//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABgcFAf/EAB0QAAEFAQEBAQAAAAAAAAAAAAEAAgMEEQUxIRL/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQA/8QAHBEAAQQDAQAAAAAAAAAAAAAAAgABAxEEEyEx/9oADAMBAAIRAxEAPwCu3Z2wwO0pTl6UYs5o9Wl2ZJBAc3xTm3LaN4/nfVBk5emuKuDH2H6qdR6MZYPoQlPnSWGxDdXFYEljaGSCipPHTqtlgJxKzeRG6zpaPUIQyALt1KjJ2fi2IOUxrBgQhCcAtSxG9r//2Q==",
              },
              name: "MansBooks",
              sameAs: [
                "mailto:donaldboulton@gmail.com",
                "tel:+405-863-2165",
                "https://www.facebook.com/donboulton",
                "https://www.instagram.com/boulton3662",
                "https://twitter.com/donboulton",
                "https://www.linkedin.com/donboulton",
                "https://github.com/donaldboulton/",
              ],
              url: "https://mansbooks.com",
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://donboulton.com",
              name: "Donald Boulton",
              url: "https://donboulton.com",
              worksFor: {
                "@id": "https://mansbooks.com",
              },
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              description: "Breadcrumbs list",
              itemListElement: [
                {
                  "@type": "ListItem",
                  item: {
                    "@id": "https://mansbooks.com/",
                    name: "MansBooks Home",
                  },
                  position: "1",
                },
                {
                  "@type": "ListItem",
                  item: {
                    "@id": "https://mansbooks.com/profile",
                    name: "Profile Page",
                  },
                  position: "2",
                },
              ],
              numberOfItems: "2",
              name: "Breadcrumbs",
            })}
          </script>
        </>
      </Head>
      <div className="mb-96 ml-10 mr-10 mt-10" data-datocms-noindex>
        <div>
          <Center>User Profile</Center>
        </div>
        <LeftText>The Queen</LeftText>
        <ColumnGridLeft>
          <div className="mt-4">
            <div className="mb-4">
              <Image
                layout="fixed"
                className="self-center rounded-lg"
                src={iLoveYou}
                width={325}
                height={573}
                quality={95}
                alt="PS I Love You"
                loading="lazy"
              />
            </div>
          </div>
          <div className="container" style={{ padding: "50px 0 100px 0" }}>
            {!session ? (
              <div className="row">
                <div className="col-6">
                  <h1 className="header">Auth User Storage</h1>
                  <p className="">Login.</p>
                </div>
                <div className="col-6 auth-widget">
                  <Auth
                    supabaseClient={supabase}
                    view="magic_link"
                    appearance={{ theme: ThemeSupa }}
                    providers={["google", "spotify"]}
                    theme="dark"
                  />
                </div>
              </div>
            ) : (
              <>
                <h3>Account</h3>
                <Account session={session} />
              </>
            )}
          </div>
        </ColumnGridLeft>
      </div>
    </Layout>
  );
};

export default ProfilePage;
