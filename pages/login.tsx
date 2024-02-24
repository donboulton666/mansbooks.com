import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import Account from "@components/account";
import Layout from "@components/Layout";
import Image from "next/image";
import LeftText from "@components/LeftText";
import TodoList from "@components/TodoList"
import ColumnGridLeft from "@components/column-grid-left";
import Stars from "@components/Stars";
import me from "../public/donald-boulton-32x32.png";
import angie from "../public/apple-touch-icon.png";

export default function Login({
  session,
  slug,
  user_id,
}: {
  session: Session;
}) {
  const supabase = createClientComponentClient<Database>({
    isSingleton: false,
  });

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
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
    });
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }
  return (
    <>
      <Stars />
      <Head>
        <title>Login</title>
        <>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Privacy",
              url: "https://mansbooks.com/login",
              image: {
                "@type": "ImageObject",
                url: angie,
                width: "1400",
                height: "450",
              },
              publisher: {
                "@type": "Organization",
                name: "Mansbooks",
              },
              license: "http://mansbooks.com/license",
            })}
            ,
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@id": "https://mansbooks.com",
              "@type": "Organization",
              address: "OKC, Middle Earth",
              contactPoint: {
                "@type": "ContactPoint",
                email: "donaldboulton@gmail.com",
                telephone: "+405-863-2165",
              },
              description: "Mansbooks Privacy Page",
              email: "donaldboulton@gmail.com",
              founder: {
                "@id": "https://donboulton.com",
              },
              location: "OKC, Middle Earth",
              image: {
                "@type": "ImageObject",
                url: angie,
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
            ,
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
            ,
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
                    name: "Home",
                  },
                  position: "1",
                },
                {
                  "@type": "ListItem",
                  item: {
                    "@id": "https://mansbooks.com/login",
                    name: "Login",
                  },
                  position: "2",
                },
              ],
              numberOfItems: "2",
              name: "Breadcrumbs",
            })}
            ,
          </script>
        </>
      </Head>
      <Layout>
        <div className="login-beams bg-scale-100 flex flex-1 flex-col">
          <div className="flex flex-1 mb-10">
            <main className="bg-scale-200 border-scale-500 flex flex-1 flex-shrink-0 flex-col items-center border-r border-slate-700 px-5 pb-8 pt-16 shadow-lg">
              <div className="flex w-[330px] flex-1 flex-col justify-center sm:w-[384px]">
                <div className="mb-10">
                  <LeftText className="mb-2 mt-8 text-2xl lg:text-3xl">
                    Welcome back
                  </LeftText>
                  <h2 className="text-scale-1100 text-sm">
                    Sign in to your account
                  </h2>
                </div>
                <div className="flex flex-col gap-5">
                  {!session ? (
                    <Auth
                      supabaseClient={supabase}
                      appearance={{
                        extend: true,
                        theme: ThemeSupa,
                        variables: {
                          default: {
                            colors: {
                              brand: "red",
                              brandAccent: "darkred",
                            },
                          },
                        },
                      }}
                      providers={["google", "spotify"]}
                      theme="dark"
                    />
                  ) : (
                    <>
                      <ColumnGridLeft>
                        <Account session={session} />
                        <div
                          className="flex h-full w-full flex-col items-center justify-center p-4"
                          style={{
                            minWidth: 250,
                            maxWidth: 600,
                            margin: "auto",
                          }}
                        >
                          <TodoList session={session} />
                        </div>
                        <div
                          className="flex h-full w-full flex-col items-center justify-center p-4"
                          style={{
                            minWidth: 250,
                            maxWidth: 600,
                            margin: "auto",
                          }}
                        >
                          Todo
                        </div>
                      </ColumnGridLeft>
                    </>
                  )}
                </div>
              </div>
              <div className="sm:text-center">
                <p className="text-xs text-scale-900 sm:mx-auto sm:max-w-sm">
                  By continuing, you agree to Mansbooks{" "}
                  <Link
                    className="underline hover:text-scale-1100"
                    href="https://mansbooks.com/terms"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    className="underline hover:text-scale-1100"
                    href="https://mansbooks.com/privacy"
                  >
                    Privacy Policy
                  </Link>
                  , and to receive periodic emails with updates.
                </p>
              </div>
            </main>
            <aside className="hidden form-beams flex-1 flex-shrink basis-1/4 flex-col items-center justify-center xl:flex">
              <div className="relative flex flex-col gap-6">
                <div className="absolute -left-11 -top-12 select-none">
                  <span className="text-scale-600 text-[160px] leading-none">
                    <svg
                      width="25"
                      height="20"
                      viewBox="0 0 25 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false"
                      className="text-wine-300"
                    >
                      <path d="M7.57 19.4c-.467 0-1.097-.163-1.89-.49-1.727-1.027-3.033-2.17-3.92-3.43C.92 14.173.5 12.633.5 10.86.5 9.553.873 8.2 1.62 6.8c.747-1.4 1.89-2.66 3.43-3.78C6.59 1.853 8.503 1.013 10.79.5v1.54c-1.633.42-3.057 1.12-4.27 2.1-1.167.98-1.75 2.147-1.75 3.5 0 .84.21 1.633.63 2.38.467.747 1.423 1.517 2.87 2.31l2.45 1.26.07.84-1.54 3.43c-.373 1.027-.933 1.54-1.68 1.54zm13.93 0c-.467 0-1.097-.163-1.89-.49-1.727-1.027-3.033-2.17-3.92-3.43-.84-1.307-1.26-2.847-1.26-4.62 0-1.307.373-2.66 1.12-4.06.747-1.4 1.89-2.66 3.43-3.78 1.54-1.167 3.453-2.007 5.74-2.52v1.54c-1.633.42-3.057 1.12-4.27 2.1-1.167.98-1.75 2.147-1.75 3.5 0 .84.21 1.633.63 2.38.467.747 1.423 1.517 2.87 2.31l2.45 1.26.07.84-1.54 3.43c-.373 1.027-.933 1.54-1.68 1.54z"></path>
                    </svg>
                  </span>
                </div>
                <blockquote className="z-10 max-w-lg text-3xl">
                  All week I have been working on Angelina Jordans New Album{" "}
                  <Link href="/old-enough" aria-describedby="I am Old Enough">
                    I am Old Enough
                  </Link>{" "}
                  building a backend with{" "}
                  <a
                    href="https://supabase.com/launch-week"
                    aria-describedby="Supabase"
                  >
                    Supabase
                  </a>{" "}
                  🧪 My Favorite song is,{" "}
                  <a
                    aria-describedby="Love Don't Let me Go"
                    href="https://www.youtube.com/watch?v=kjwD884SYRE&list=PLduoB64Irge5-yS-QI1Je_IOvm0FEmkkt&index=1"
                  >
                    Love Don't Let me Go, "Visualizer"
                  </a>
                  , second is{" "}
                  <a
                    href="https://www.youtube.com/watch?v=z-a9Qetfp74"
                    aria-describedby="All my Fault"
                  >
                    All my Fault
                  </a>{" "}
                  Followed by:{" "}
                  <a
                    href="https://www.youtube.com/watch?v=qQjxAKAHSgs"
                    aria-describedby="Diamond"
                  >
                    Diamond.
                  </a>{" "}
                  Listen to the Love! <span className="text-red-800">❤️</span>
                </blockquote>
                <div className="absolute -right-11 -bottom-12 select-none">
                  <span className="text-scale-600 text-[160px] leading-none">
                    <svg
                      width="25"
                      height="20"
                      viewBox="0 0 25 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false"
                      className="text-wine-300"
                    >
                      <path d="M7.57 19.4c-.467 0-1.097-.163-1.89-.49-1.727-1.027-3.033-2.17-3.92-3.43C.92 14.173.5 12.633.5 10.86.5 9.553.873 8.2 1.62 6.8c.747-1.4 1.89-2.66 3.43-3.78C6.59 1.853 8.503 1.013 10.79.5v1.54c-1.633.42-3.057 1.12-4.27 2.1-1.167.98-1.75 2.147-1.75 3.5 0 .84.21 1.633.63 2.38.467.747 1.423 1.517 2.87 2.31l2.45 1.26.07.84-1.54 3.43c-.373 1.027-.933 1.54-1.68 1.54zm13.93 0c-.467 0-1.097-.163-1.89-.49-1.727-1.027-3.033-2.17-3.92-3.43-.84-1.307-1.26-2.847-1.26-4.62 0-1.307.373-2.66 1.12-4.06.747-1.4 1.89-2.66 3.43-3.78 1.54-1.167 3.453-2.007 5.74-2.52v1.54c-1.633.42-3.057 1.12-4.27 2.1-1.167.98-1.75 2.147-1.75 3.5 0 .84.21 1.633.63 2.38.467.747 1.423 1.517 2.87 2.31l2.45 1.26.07.84-1.54 3.43c-.373 1.027-.933 1.54-1.68 1.54z"></path>
                    </svg>
                  </span>
                </div>
                <a
                  href="https://twitter.com/donboulton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <Image
                    layout="fixed"
                    className="h-8 w-8 self-center rounded-lg"
                    src={me}
                    width={32}
                    height={32}
                    quality={95}
                    alt="Donald Boulton"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <cite className="text-scale-1100 whitespace-nowrap font-medium not-italic">
                      @donboulton
                    </cite>
                  </div>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </Layout>
    </>
  );
};
