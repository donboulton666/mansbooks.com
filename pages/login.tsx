import React from "react";
import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import AuthForm from "@app/auth-form";
import supabase from "@app/supabase-provider";
import Account from "@components/UserAccount/account";
import Layout from "@components/PageLayout";
import Image from "next/image";
import LeftText from "@components/LeftText";
import ColumnGridLeft from "@components/column-grid-left";
import Stars from "@components/Stars";
import { Session, useSupabaseClient } from "@supabase/auth-helpers-react";
import me from "../public/donald-boulton-32x32.png";
import angie from "../public/apple-touch-icon.png";

function Login({ session }: { session: Session | null }) {
  const supabase = useSupabaseClient();
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
                    name: "MansBooks Home",
                  },
                  position: "1",
                },
                {
                  "@type": "ListItem",
                  item: {
                    "@id": "https://mansbooks.com/login",
                    name: "Mansbooks Login",
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
      <div className="bg-scale-100 flex flex-1 flex-col">
        <div className="absolute top-0 mx-auto w-full px-8 pt-6 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10">
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="https://mansbooks.com">
                  <span className="relative inline-block overflow-hidden">
                    <Image
                      layout="fixed"
                      className="h-8 w-8 self-center rounded-lg"
                      src={angie}
                      width={32}
                      height={32}
                      quality={95}
                      alt="Our Love!"
                      loading="lazy"
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="hidden items-center space-x-3 md:ml-10 md:flex md:pr-4">
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://mansbooks.com/about"
                className="font-regular text-scale-1200 bg-scale-100 hover:bg-scale-300 border-scale-600 hover:border-scale-700 border-scale-700 hover:border-scale-800 bg-scale-500 hover:bg-scale-600 focus-visible:outline-brand-600 relative inline-flex cursor-pointer items-center justify-center space-x-2 rounded-md border px-2.5 py-1 text-center text-xs shadow-sm outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1"
              >                
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="sbui-icon "
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>{" "}
                  <span className="truncate">About Mansbooks</span>{" "}               
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex flex-1 mb-10">
          <main className="beams bg-scale-200 border-scale-500 flex flex-1 flex-shrink-0 flex-col items-center border-r px-5 pb-8 pt-16 shadow-lg">
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
                  <AuthForm />
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
                  “
                </span>
              </div>
              <blockquote className="z-10 max-w-lg text-3xl">
                All week I have been working on Angelina Jordans New Album backend with <a href="https://supabase.com/launch-week">Supabase</a>{" "} 🧪 {" "}
                <a href="https://mansbooks.com/albums">I am Old Enough</a>{" "}
                My Favorite song is, Love Don't Let me Go, "Visualizer", then It's all my Fault{" "}
                <a href="https://supabase.com/launch-week">
                  Followed by Diamond.
                </a>{" "}
                Listen to the Love! ❤️
              </blockquote>
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
    </>
  );
}

export default Login;
