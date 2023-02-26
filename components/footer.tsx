import * as React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import ColumnGridLeft from "../components/column-grid-left";
import Subscriptions from "../components/subsctiptions";
import angieImage from "../public/icons/apple-touch-icon.png";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-slate-900 pt-8 pb-6">
        <div
          className="pointer-events-none absolute bottom-auto top-0 left-0 right-0 -mt-20 w-full overflow-hidden"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-current text-slate-900"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold text-wine-200">
                Let's keep in touch!
              </h4>
              <h5 className="mt-0 mb-2 text-lg text-slate-400">
                Find Angelina's Connections below.
              </h5>
              <div className="mt-4">
                <ColumnGridLeft>
                  <div className="mr-2">
                    <span className="group relative flex items-center text-slate-800">
                      <a
                        className="hover:text-pink-500"
                        href="https://angelinajordanofficial.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-describedby="AJ Official"
                        area-label="AJ Official"
                      >
                        <span className="mr-2">
                          <Image                          
                            layout="fixed"
                            src={angieImage}
                            width={20}
                            height={20}
                            quality={95}
                            alt="Profile picture"
                            loading="lazy"
                          />
                        </span>
                           Official Website
                      </a>
                    </span>
                  </div>
                  <div>
                    <a
                      className="hover:text-pink-500"
                      href="https://youtube.com/c/AngelinaJordanOfficial"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-describedby="YouTube Channel"
                      area-label="YouTube Channel"
                    >
                      🔗 YouTube Channel
                    </a>
                  </div>
                </ColumnGridLeft>
                <ColumnGridLeft>
                  <div className="mr-2">
                    <a
                      href="https://youtube.com/c/AngelinaJordanCoverChannel"
                      className="hover:text-pink-500"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-describedby="AJ Cover Official"
                      area-label="AJ Cover Official"
                    >
                      🔗 Cover Offical
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/angelinajordana/"
                      className="hover:text-pink-500"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-describedby="AJ Instagram"
                      area-label="AJ Instagram"
                    >
                      🔗 Instagram
                    </a>
                  </div>
                </ColumnGridLeft>
                <ColumnGridLeft>
                  <div className="mr-2">
                    <a
                      href="https://www.facebook.com/angelinajordanofficial"
                      className="hover:text-pink-500"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-describedby="AJ Facebook"
                      area-label="AJ Facebook"
                    >
                      🔗 Facebook
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.tiktok.com/@angelinajordana"
                      className="hover:text-pink-500"
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-describedby="AJ TikTok"
                      area-label="AJ TikTok"
                    >
                      🔗 TikTok
                    </a>
                  </div>
                </ColumnGridLeft>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-semibold text-wine-200">
                  Subscriptions
                </h4>
                <h5 className="mt-0 mb-2 text-lg text-slate-400">
                  Get exclusive newsletter-only content now and then
                </h5>
                <Subscriptions />
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="items-top -mb-2 flex flex-wrap">
                <div className="ml-auto w-full px-4 lg:w-4/12">
                  <span className="mb-2 block text-sm font-semibold uppercase text-wine-200">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="ml-2 block pb-2 text-sm font-semibold text-slate-400 hover:text-pink-500"
                        href="/about"
                      >
                        About Angie
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="ml-2 block pb-2 text-sm font-semibold text-slate-400 hover:text-pink-500"
                        href="/blog"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="ml-2 block pb-2 text-sm font-semibold text-slate-400 hover:text-pink-500"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="ml-2 block pb-2 text-sm font-semibold text-slate-400 hover:text-pink-500"
                        href="/profile"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="ml-2 block pb-2 text-sm font-semibold text-slate-400 hover:text-pink-500"
                        href="/search"
                      >
                        Search Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="ml-2 block pb-2 text-sm font-semibold text-slate-400 hover:text-pink-500"
                        href="/sitemap.xml"
                      >
                        Sitemap XML
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <span className="mb-2 block text-sm font-semibold uppercase text-wine-200">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="ml-6 block pb-2 text-sm font-semibold text-slate-400 hover:text-pink-500"
                        href="https://publiuslogic.com/blog/0bsd-licence"
                      >
                        BSD License
                      </Link>
                    </li>
                    <li>
                      <a
                        className="ml-6 block pb-2 text-sm font-semibold text-slate-400 hover:text-pink-500"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-describedby="Github"
                        area-label="Github"
                        href="https://www.github.com/donaldboulton"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="ml-6 block pb-2 text-sm font-semibold text-slate-400 hover:text-pink-500"
                        rel="noopener noreferrer"
                        target="_blank"
                        area-label="Gatsby Starter Basic Instructions"
                        href="https://github.com/donaldboulton/gatsby-starter-basic-instructions"
                      >
                        Free Starters
                      </a>
                    </li>
                    <li>
                      <Link
                        className="ml-6 block pb-2 text-sm font-semibold text-slate-400 hover:text-pink-500"
                        href="/privacy"
                      >
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="ml-6 block pb-2 text-sm font-semibold text-slate-400 hover:text-pink-500"
                        href="/privacy"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="ml-6 block pb-2 text-sm font-semibold text-slate-400 hover:text-pink-500"
                        href="https://netlify.com"
                      >
                        Netlify
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-400" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4 text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-slate-400">
                © {new Date().getFullYear()} Mansbooks by:{" "}
                <a
                  href="https://donboulton.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  area-label="Donald Boulton Web Site"
                  className="text-slate-400 hover:text-pink-500"
                >
                  Donald W. Boulton
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
