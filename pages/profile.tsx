import Head from "next/head";
import Link from "next/link";
import Image from "next/legacy/image";
import Layout from "../components/layout";
import Center from "@components/Center";
import Section from "@components/Section";
import styles from "../components/sponsors-grid.module.css";
import sevenHeaven from "../public/angie/angelina-jordan-seventh-heaven.jpg";

export default function Thanks() {
  return (
    <Layout>
      <>
        <Head>
          <title>Thank You</title>
        </Head>
        <main class="mb-10 py-6 px-4 sm:p-6 md:py-10 md:px-8">
          <div class="mx-auto grid max-w-4xl grid-cols-1 lg:max-w-5xl lg:grid-cols-2 lg:gap-x-20">
            <div class="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3 sm:row-start-2 sm:bg-none sm:p-0 lg:row-start-1">
              <h1 class="mt-1 text-lg font-semibold text-wine-200 sm:text-wine-300 md:text-2xl">
                Angelina Jordan
              </h1>
              <p class="text-sm font-medium leading-4 text-white sm:text-slate-500">
                Queen Of Jazz
              </p>
            </div>
            <div class="col-start-1 col-end-2 row-start-1 grid gap-2 sm:mb-6 sm:grid-cols-1 lg:col-start-1 lg:row-span-4 lg:row-end-6 lg:mb-0 lg:gap-2">
              <Image
                src={sevenHeaven}
                alt=""
                class="h-60 w-96 rounded-lg object-cover sm:col-span-2 sm:h-52 lg:col-span-full"
                loading="lazy"
              />
            </div>
            <dl class="row-start-2 mt-4 flex items-center text-xs font-medium sm:row-start-3 sm:mt-1 md:mt-2.5 lg:row-start-2">
              <dt class="sr-only">Reviews</dt>
              <dd class="flex items-center text-wine-300">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  class="mr-1 stroke-current dark:stroke-wine-200"
                >
                  <path
                    d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>
                  4.89 <span class="font-normal text-slate-400">(128)</span>
                </span>
              </dd>
              <dt class="sr-only">Location</dt>
              <dd class="flex items-center">
                <svg
                  width="2"
                  height="2"
                  aria-hidden="true"
                  fill="currentColor"
                  class="mx-3 text-slate-300"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="mr-1 text-slate-400"
                  aria-hidden="true"
                >
                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>
                Los Angeles CA.
              </dd>
            </dl>
            <div class="col-start-1 row-start-3 mt-4 self-center sm:col-start-2 sm:row-span-2 sm:row-start-2 sm:mt-0 lg:col-start-1 lg:row-start-3 lg:row-end-4 lg:mt-6">
              <Link
                href="/expo/seventhheaven"
                type="button"
                class="rounded-lg bg-wine-300 py-2 px-3 text-sm font-medium leading-6 text-white"
              >
                7th Heaven
              </Link>
            </div>
            <p class="col-start-1 mt-4 text-sm leading-6 text-slate-300 sm:col-span-2 lg:col-span-1 lg:row-start-4 lg:mt-6">
              <p>
                Angelina Jordan Astar was born and raised in Oslo, Norway; this
                world-renowned singer has earned fantastic reviews for the
                amazing breadth, depth and maturity of her vocal talent that
                simply belies her young age.
              </p>
              <Section>
                <p>
                  Amazingly, her passion for music began at just one-and- a-half
                  years of age when Angelina first saw Whitney Houston on
                  YouTube performing I Will Always Love You. Whitney - and later
                  Billie Holiday, Dinah Washington - became her first major
                  musical influences. At the age of seven, Angelina auditioned
                  for Norway’s Got Talent performing Billie Holiday’s Gloomy
                  Sunday. She won the competition with the show drawing record
                  TV audiences.
                </p>
              </Section>
            </p>
          </div>
        </main>
        <Center>Extended Profile Information: </Center>
        <div className="ml-20 mr-20">
          <Section>
            <p>
              Angelina’s videos have received over several billions views on
              YouTube and more than 4 billion views on Facebook. Amazingly, her
              passion for music began at just one-and- a-half years of age when
              Angelina first saw Whitney Houston on YouTube performing I Will
              Always Love You. Whitney - and later Billie Holiday, Dinah
              Washington - became her first major musical influences. At the age
              of seven, Angelina auditioned for Norway’s Got Talent performing
              Billie Holiday’s Gloomy Sunday. She won the competition with the
              show drawing record TV audiences.
            </p>
            <p>
              Not surprisingly, throughout her rising career, Angelina has
              featured in prominent media outlets including TIME, CNN, BBC, and
              People while also performing on the U.S. network TV shows Little
              Big Shots and The View.
            </p>
            <p>
              In 2016, Avicii chose Angelina for the vocals on his worldwide
              Volvo commercial campaign, a brilliant cover of Nina Simone’s
              Feeling Good.
            </p>
            <p>
              As well as singing before Nobel Peace Prize Laureates, charitable
              causes to which Angelina has given her talent include the
              Rainforest Alliance at the American Museum of Natural History in
              New York and Ein Herz für Kinder in Berlin where she helped raise
              over 21 Million Euros for children and families in need.
            </p>
          </Section>
          <Section>
            <p>
              This multi-talented singing prodigy has also written a successful,
              illustrated children’s book in her native Norway making Angelina
              the youngest published author in the country’s history. Based on
              the true story of when she was six years old, Angelina met a
              homeless, shoeless girl. After they talked for a long time, she
              gave the girl her shoes and vowed never to appear on stage again
              wearing shoes until all the world’s children had them. Since that
              time, Angelina has always performed barefoot in public.
            </p>
          </Section>
          <Section>
            Angelina Jordan (barefoot queen) is the winner of Norway got talent
            2014. She also auditioned for America's got talent in 2020 where she
            received GOLDEN BUZZER from Heidi Klum. Currently, she signed with
            Republic records. August 2020.
          </Section>
        </div>
        <div className="mt-4 mr-20 ml-20 mb-20">
          <div className={styles.grid}>
            <div>
              <a
                href="https://angelinajordanofficial.com"
                className="hover:text-pink-500"
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="Angelina Jordan"
                area-label="Angelina Jordan"
              >
                🔗 Angelina Jordan official Website
              </a>
            </div>
            <div>
              <a
                href="https://angelina-jordan-official-store.creator-spring.com/"
                className="hover:text-pink-500"
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="Built with NextJs"
                area-label="Built with NextJs"
              >
                🔗 Angelina Jordan Official Store
              </a>
            </div>
            <div>
              <a
                href="https://youtube.com/c/AngelinaJordanOfficial"
                className="hover:text-pink-500"
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="Angelina Jordan YouTube Channel"
                area-label="Angelina Jordan YouTube Channel"
              >
                🔗 Angelina Jordan YouTube
              </a>
            </div>
            <div>
              <a
                href="https://youtube.com/c/AngelinaJordanCoverChannel"
                className="hover:text-pink-500"
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="Angelina Jordan Cover Offical"
                area-label="Angelina Jordan Cover Offical"
              >
                🔗 Angelina Jordan Covers
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/angelinajordana/"
                className="hover:text-pink-500"
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="Angelina Jordan Instagram"
                area-label="Angelina Jordan Instagram"
              >
                🔗 Angelina Jordan Instagram
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/angelinajordanofficial"
                className="hover:text-pink-500"
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="Angelina Jordan Facebook"
                area-label="Angelina Jordan Facebook"
              >
                🔗 Angelina Jordan Facebook
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/angelinajordana"
                className="hover:text-pink-500"
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="Angelina Jordan Twitter"
                area-label="Angelina Jordan Twitter"
              >
                🔗 Angelina Jordan Twitter
              </a>
            </div>
            <div>
              <a
                href="https://www.tiktok.com/@angelinajordana/"
                className="hover:text-pink-500"
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="Angelina Jordan"
                area-label="Angelina Jordan"
              >
                🔗 Angelina Jordan TikTok
              </a>
            </div>
            <div>
              <a
                href="https://angelinajordandatabase.com/"
                className="hover:text-pink-500"
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="Angelina Jordan Database"
                area-label="Angelina Jordan Database"
              >
                🔗 Angelina Jordan Database
              </a>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
