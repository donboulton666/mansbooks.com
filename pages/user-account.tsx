import React from "react";
import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import Head from "next/head";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import AuthForm from "@app/auth-form";
import NavDropdown from "@components/NavDropdown";
import AccountForm from "@app/account/account-form";
import Layout from "@components/PageLayout";
import Image from "next/image";
import LeftText from "@components/LeftText";
import ColumnGridLeft from "@components/column-grid-left";
import Stars from "@components/Stars";
import TodoList from "@components/TodoList";
import me from "../public/donald-boulton-32x32.png";
import angie from "../public/apple-touch-icon.png";
import planets from "../public/backdrops/planets.jpg";
import { Database } from "@lib/database.types";

const UserAccount = () => {
  const supabase = useSupabaseClient<Database>();
  const session = useSession();
  return (
    <>
      <Stars />
      <Head>
        <title>Account</title>
        <>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Privacy",
              url: "https://mansbooks.com/account",
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
                    "@id": "https://mansbooks.com/account",
                    name: "User Account",
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
      <div className="login-beams bg-scale-100 flex flex-1 flex-col">
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
              <NavDropdown />
            </div>
          </nav>
        </div>
        <div className="flex flex-1 mb-10">
          <main className="bg-scale-200 border-scale-500 flex flex-1 flex-shrink-0 flex-col items-center border-r border-slate-700 px-5 pb-8 pt-16 shadow-lg">
            <div className="flex w-[330px] flex-1 flex-col justify-center sm:w-[384px]">
              <div className="mb-10">
                <LeftText className="mb-2 mt-8 text-2xl lg:text-3xl">
                  Welcome back
                </LeftText>
                <h2 className="text-scale-1100 text-sm">My Lovely Fan's</h2>
              </div>
              <div className="flex flex-col gap-5">
                {!session ? (
                  <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    providers={["github", "spotify"]}
                    theme="dark"
                  />
                ) : (
                  <>
                    <AccountForm session={session} />
                    <div className="flex flex-col items-center justify-center p-4">
                      <TodoList session={session} />
                    </div>
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
              <Image
                layout="fixed"
                className="self-center rounded-lg opacity-60"
                src={planets}
                width={640}
                height={427}
                quality={95}
                alt="Planets!"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
