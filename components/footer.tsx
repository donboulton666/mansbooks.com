import * as React from "react";
import { SOCIAL } from "../lib/constants";
import Link from "next/link";
import A from "../components/A";
import Subscriptions from "../components/subsctiptions";
import LinkedIn from "./icons/linkedin.inline";
import Facebook from "./icons/facebook-inline";
import Instagram from "./icons/instagram-inline";
import Twitter from "./icons/twitter-inline";
import Github from "./icons/github-inline";

export default function Footer() {
  const social = SOCIAL;

  const socialLinks = [
    {
      name: "LinkedIn",
      link: "linkedin" in social ? social.linkedin : null,
      image: LinkedIn,
    },
    {
      name: "Facebook",
      link: "facebook" in social ? social.facebook : null,
      image: Facebook,
    },
    {
      name: "Instagram",
      link: "instagram" in social ? social.instagram : null,
      image: Instagram,
    },
    {
      name: "Twitter",
      link: "twitter" in social ? social.twitter : null,
      image: Twitter,
    },
    {
      name: "Github",
      link: "github" in social ? social.github : null,
      image: Github,
    },
  ];

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
              <h4 className="text-3xl font-semibold text-gray-200">
                Let"s keep in touch!
              </h4>
              <h5 className="mt-0 mb-2 text-lg text-gray-100">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-4">
                <span className="mt-4 inline-flex justify-center md:ml-auto md:mt-0 md:justify-start">
                  {socialLinks.map((s) =>
                    s.link ? (
                      <A href={s.link} key={s.link} className="ml-3" external>
                        <s.image className=" h-6 w-6" />
                        <span className="sr-only">{s.name}</span>
                      </A>
                    ) : (
                      ""
                    )
                  )}
                </span>
              </div>
              <div className="mt-4">
                <h4 className="text-3xl font-semibold text-gray-200">
                  Subscriptions
                </h4>
                <h5 className="mt-0 mb-2 text-lg text-gray-200">
                  Get exclusive newsletter-only content now and then
                </h5>
                <Subscriptions />
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="items-top -mb-2 flex flex-wrap">
                <div className="ml-auto w-full px-4 lg:w-4/12">
                  <span className="mb-2 block text-sm font-semibold uppercase text-gray-200">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="block pb-2 text-sm font-semibold text-gray-200 hover:text-fuchsia-500"
                        href="/privacy"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-sm font-semibold text-gray-200 hover:text-fuchsia-500"
                        href="/blog"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-sm font-semibold text-gray-200 hover:text-fuchsia-500"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-sm font-semibold text-gray-200 hover:text-fuchsia-500"
                        href="/profile"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-sm font-semibold text-gray-200 hover:text-fuchsia-500"
                        href="/search"
                      >
                        Search Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-sm font-semibold text-gray-200 hover:text-fuchsia-500"
                        href="/sitemap.xml"
                      >
                        Sitemap XML
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <span className="mb-2 block text-sm font-semibold uppercase text-gray-100">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="block pb-2 text-sm font-semibold text-gray-200 hover:text-fuchsia-500"
                        href="https://publiuslogic.com/blog/0bsd-licence"
                      >
                        BSD License
                      </Link>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-gray-200 hover:text-fuchsia-500"
                        rel="noopener noreferrer"
                        target="_blank"
                        area-label="Github"
                        href="https://www.github.com/donaldboulton"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-gray-200 hover:text-fuchsia-500"
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
                        className="block pb-2 text-sm font-semibold text-gray-200 hover:text-fuchsia-500"
                        href="/privacy"
                      >
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-sm font-semibold text-gray-200 hover:text-fuchsia-500"
                        href="/privacy"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block pb-2 text-sm font-semibold text-gray-200 hover:text-fuchsia-500"
                        href="/rss.xml"
                      >
                        Site Rss
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="mx-auto w-full px-4 text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-gray-200">
                © {new Date().getFullYear()} Mansbooks by:{" "}
                <a
                  href="https://donboulton.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  area-label="Donald Boulton Web Site"
                  className="text-gray-200 hover:text-fuchsia-500"
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
