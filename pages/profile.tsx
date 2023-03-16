import Head from "next/head";
import Link from "next/link";
import Image from "next/legacy/image";
import Layout from "@components/PageLayout";
import Center from "@components/Center";
import Section from "@components/Section";
import LeftText from "@components/LeftText";
import ColumnGridLeft from "../components/column-grid-left";
import sevenHeaven from "../public/angie/angelina-jordan-seventh-heaven.jpg";
import angieImage from "../public/icons/apple-touch-icon.png";

export default function Thanks() {
  return (
    <Layout>
      <>
        <Head>
          <title>Profile</title>
        </Head>
        <main class="mb-10 py-6 px-4 sm:p-6 md:py-10 md:px-8">
          <div class="mx-auto grid max-w-4xl grid-cols-1 lg:max-w-5xl lg:grid-cols-2 lg:gap-x-20">
            <div class="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3 sm:row-start-2 sm:bg-none sm:p-0 lg:row-start-1">
              <h1 class="mt-1 text-lg font-semibold text-wine-200 sm:text-wine-300 md:text-2xl">
                Angelina Jordan
              </h1>
              <div class="text-sm font-medium leading-4 text-white sm:text-slate-500">
                Queen Of Jazz
              </div>
            </div>
            <div class="col-start-1 col-end-2 row-start-1 grid gap-2 sm:mb-6 sm:grid-cols-1 lg:col-start-1 lg:row-span-4 lg:row-end-6 lg:mb-0 lg:gap-2">
              <Image
                src={sevenHeaven}
                alt="Seventh Heaven"
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
                  class="mr-1 stroke-current"
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
            <div class="col-start-1 mt-4 text-sm leading-6 text-slate-300 sm:col-span-2 lg:col-span-1 lg:row-start-4 lg:mt-6">
              <div>
                Angelina Jordan Astar was born and raised in Oslo, Norway; this
                world-renowned singer has earned fantastic reviews for the
                amazing breadth, depth and maturity of her vocal talent that
                simply belies her young age.
              </div>
              <Section>
                <div>
                  Amazingly, her passion for music began at just one-and- a-half
                  years of age when Angelina first saw Whitney Houston on
                  YouTube performing I Will Always Love You. Whitney - and later
                  Billie Holiday, Dinah Washington - became her first major
                  musical influences. At the age of seven, Angelina auditioned
                  for Norway’s Got Talent performing Billie Holiday’s Gloomy
                  Sunday. She won the competition with the show drawing record
                  TV audiences.
                </div>
              </Section>
            </div>
          </div>
        </main>
        <Center>Extended Profile Information: </Center>
        <div className="ml-20 mr-20">
          <Section>
            <div>
              Angelina’s videos have received over several billions views on
              YouTube and more than 4 billion views on Facebook. Amazingly, her
              passion for music began at just one-and- a-half years of age when
              Angelina first saw Whitney Houston on YouTube performing I Will
              Always Love You. Whitney - and later Billie Holiday, Dinah
              Washington - became her first major musical influences. At the age
              of seven, Angelina auditioned for Norway’s Got Talent performing
              Billie Holiday’s Gloomy Sunday. She won the competition with the
              show drawing record TV audiences.
            </div>
            <div>
              Not surprisingly, throughout her rising career, Angelina has
              featured in prominent media outlets including TIME, CNN, BBC, and
              People while also performing on the U.S. network TV shows Little
              Big Shots and The View.
            </div>
            <div>
              In 2016, Avicii chose Angelina for the vocals on his worldwide
              Volvo commercial campaign, a brilliant cover of Nina Simone’s
              Feeling Good.
            </div>
            <div>
              As well as singing before Nobel Peace Prize Laureates, charitable
              causes to which Angelina has given her talent include the
              Rainforest Alliance at the American Museum of Natural History in
              New York and Ein Herz für Kinder in Berlin where she helped raise
              over 21 Million Euros for children and families in need.
            </div>
          </Section>
          <Section>
            <div>
              This multi-talented singing prodigy has also written a successful,
              illustrated children’s book in her native Norway making Angelina
              the youngest published author in the country’s history. Based on
              the true story of when she was six years old, Angelina met a
              homeless, shoeless girl. After they talked for a long time, she
              gave the girl her shoes and vowed never to appear on stage again
              wearing shoes until all the world’s children had them. Since that
              time, Angelina has always performed barefoot in public.
            </div>
          </Section>
          <Section>
            Angelina Jordan (barefoot queen) is the winner of Norway got talent
            2014. She also auditioned for America's got talent in 2020 where she
            received GOLDEN BUZZER from Heidi Klum. Currently, she signed with
            Republic records. August 2020.
          </Section>
        </div>
        <div className="mt-4 mr-20 ml-20 mb-20">
          <LeftText>Social Contacts</LeftText>
          <div className="mt-4">
            <ColumnGridLeft>
              <div className="mr-2">
                <span className="group relative flex items-center text-slate-300">
                  <Image
                    layout="fixed"
                    className="h-5 w-5 self-center"
                    src={angieImage}
                    width={20}
                    height={20}
                    quality={95}
                    alt="Profile picture"
                    loading="lazy"
                  />
                  <a
                    className="hover:text-pink-500"
                    href="https://angelinajordanofficial.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-describedby="AJ Official"
                    area-label="AJ Official"
                  >
                    <span className="pl-2">Official Website</span>
                  </a>
                </span>
              </div>
              <div className="mr-2">
                <span className="group relative flex items-center text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 self-center"
                    viewBox="0 0 16 16"
                  >
                    <g fill-rule="evenodd" clip-rule="evenodd">
                      <path
                        fill="#F44336"
                        d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"
                      />
                      <path fill="#FAFAFA" d="M6 11.5v-6l5 3z" />
                    </g>
                  </svg>
                  <a
                    className="hover:text-pink-500"
                    href="https://youtube.com/c/AngelinaJordanOfficial"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-describedby="YouTube Channel"
                    area-label="YouTube Channel"
                  >
                    <span className="pl-2">YouTube Channel</span>
                  </a>
                </span>
              </div>
            </ColumnGridLeft>
            <ColumnGridLeft>
              <div className="mr-2">
                <span className="group relative flex items-center text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block h-5 w-5"
                    viewBox="0 0 16 16"
                  >
                    <g fill-rule="evenodd" clip-rule="evenodd">
                      <path
                        fill="#F44336"
                        d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"
                      />
                      <path fill="#FAFAFA" d="M6 11.5v-6l5 3z" />
                    </g>
                  </svg>
                  <a
                    href="https://youtube.com/c/AngelinaJordanCoverChannel"
                    className="hover:text-pink-500"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-describedby="AJ Cover Official"
                    area-label="AJ Cover Official"
                  >
                    <span className="pl-2">Cover Official</span>
                  </a>
                </span>
              </div>
              <div className="mr-2">
                <span className="group relative flex items-center text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 102 102"
                  >
                    <defs>
                      <radialGradient
                        id="a"
                        cx="6.601"
                        cy="99.766"
                        r="129.502"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".09" stop-color="#fa8f21" />
                        <stop offset=".78" stop-color="#d82d7e" />
                      </radialGradient>
                      <radialGradient
                        id="b"
                        cx="70.652"
                        cy="96.49"
                        r="113.963"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset=".64"
                          stopColor="#8c3aaa"
                          stopOpacity="0"
                        />
                        <stop offset="1" stop-color="#8c3aaa" />
                      </radialGradient>
                    </defs>
                    <path
                      fill="url(#a)"
                      d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                      data-name="Path 16"
                    />
                    <path
                      fill="url(#b)"
                      d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
                      data-name="Path 17"
                    />
                    <path
                      fill="#fff"
                      d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
                      data-name="Path 18"
                      transform="translate(-422.637 -426.196)"
                    />
                  </svg>
                  <a
                    href="https://www.instagram.com/angelinajordana/"
                    className="hover:text-pink-500"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-describedby="AJ Instagram"
                    area-label="AJ Instagram"
                  >
                    <span className="pl-2">Instagram</span>
                  </a>
                </span>
              </div>
            </ColumnGridLeft>
            <ColumnGridLeft>
              <div className="mr-2">
                <span className="group relative flex items-center text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="126.445 2.281 589 589"
                  >
                    <circle
                      cx="420.945"
                      cy="296.781"
                      r="294.5"
                      fill="#3c5a9a"
                    />
                    <path
                      fill="#fff"
                      d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
                    />
                  </svg>
                  <a
                    href="https://www.facebook.com/angelinajordanofficial"
                    className="hover:text-pink-500"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-describedby="AJ Facebook"
                    area-label="AJ Facebook"
                  >
                    <span className="pl-2">Facebook</span>
                  </a>
                </span>
              </div>
              <div className="mr-2">
                <span className="group relative flex items-center text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fillRule="optimizeQuality"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <linearGradient
                        id="a"
                        x1="67.83"
                        x2="474.19"
                        y1="82.42"
                        y2="389.98"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#67c4ce" />
                        <stop offset="1" stop-color="#e62a58" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#a)"
                      d="M256 0c141.39,0 256,114.61 256,256 0,141.39 -114.61,256 -256,256 -141.39,0 -256,-114.61 -256,-256 0,-141.39 114.61,-256 256,-256z"
                    />
                    <path
                      fill="#fff"
                      d="M313.5 106.01c0.01,4.58 1.36,70.83 70.87,74.96 0,19.1 0.02,32.95 0.02,51.18 -5.26,0.3 -45.76,-2.64 -70.97,-25.12l-0.08 99.64c0.96,69.16 -49.93,111.24 -116.46,96.7 -114.71,-34.31 -76.59,-204.44 38.59,-186.24 0,54.93 0.03,-0.01 0.03,54.93 -47.58,-7 -63.5,32.58 -50.85,60.93 11.5,25.8 58.88,31.39 75.41,-5.01 1.87,-7.12 2.8,-15.25 2.8,-24.37l0 -197.85 50.64 0.25z"
                    />
                  </svg>
                  <a
                    href="https://www.tiktok.com/@angelinajordana"
                    className="hover:text-pink-500"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-describedby="AJ TikTok"
                    area-label="AJ TikTok"
                  >
                    <span className="pl-2">TikTok</span>
                  </a>
                </span>
              </div>
            </ColumnGridLeft>
          </div>
        </div>
      </>
    </Layout>
  );
}
