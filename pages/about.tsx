import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Layout from "@components/layout";
import Section from "@components/Section";
import LeftText from "@components/LeftText";
import Center from "@components/Center";
import nextjs from "../public/nextjs.jpg";
import angie from "../public/angie/angelina.jpg";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "License",
              url: "https://mansbooks.com/about",
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
              license: "http://mansbooks.com/about",
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
              description: "Mansbooks OSBD license Page",
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
                url: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAAP/EAB0QAAEEAwEBAAAAAAAAAAAAABEAAQIDBAUSIXH/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/EABoRAAICAwAAAAAAAAAAAAAAAAABAgMREjH/2gAMAwEAAhEDEQA/AGtwcaONru6YWdVEyixYeAsC30oiKiqK14G1vJ//2Q==",
              },
              name: "MansBooks OSBD license",
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
                    "@id": "https://mansbooks.com/about",
                    name: "About Angie",
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
        ,
      </Head>
      <div className="ml-10 mr-10 mt-8 mb-32">
        <Center>Angelina Jordan</Center>
        <Image
          alt="NextJs"
          title="Angelina Jordan"
          src={angie}
          className="w-full opacity-80"
          loading="lazy"
          height={762}
          width={1400}
        />
        <Section>
          <LeftText>About Angie</LeftText>
          <p>
            <a
              href="https://youtube.com/c/AngelinaJordanOfficial"
              className="hover:text-pink-500"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="About Angelina Jordan"
              area-label="About Angelina Jordan"
            >
              <h2>For those who don't know about Queen Angelina Jordan</h2>
            </a>
            👇👇👇
          </p>
          <div>
            Born and raised in Oslo, Norway; this world-renowned singer has
            earned fantastic reviews for the amazing breadth, depth and maturity
            of her vocal talent that simply belies her young age.
            <p>
              Angelina’s videos have received over several billions views on
              YouTube and more than 4 billion views on Facebook.
            </p>
            <p>
              Amazingly, her passion for music began at just one-and- a-half
              years of age when Angelina first saw Whitney Houston on YouTube
              performing I Will Always Love You. Whitney - and later Billie
              Holiday, Dinah Washington - became her first major musical
              influences.
            </p>
            <p>
              At the age of seven, Angelina auditioned for Norway’s Got Talent
              performing Billie Holiday’s Gloomy Sunday. She won the competition
              with the show drawing record TV audiences.
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
            <p>
              This multi-talented singing prodigy has also written a successful,
              illustrated children’s book in her native Norway making Angelina
              the youngest published author in the country’s history.
            </p>
            Based on the true story of when she was six years old, Angelina met
            a homeless, shoeless girl. After they talked for a long time, she
            gave the girl her shoes and vowed never to appear on stage again
            wearing shoes until all the world’s children had them. Since that
            time, Angelina has always performed barefoot in public.
          </div>
        </Section>
        <Section>
          <p>
            Angelina Jordan (barefoot queen) is the winner of Norway got talent
            2014. She also auditioned for America's got talent in 2020 where she
            received GOLDEN BUZZER from Heidi Klum. Currently, she signed with
            Republic records. August 2020.
          </p>
        </Section>
        <Section>
          <div>
            Extended Profile Information:{" "}
            <p>
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
            </p>
            <p>
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
            </p>
            <p>
              <a
                href="https://youtube.com/c/AngelinaJordanOfficial"
                className="hover:text-pink-500"
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="Angelina Jordan YouTube Channel"
                area-label="Angelina Jordan YouTube Channel"
              >
                🔗 Angelina Jordan YouTube Channel
              </a>
            </p>
            <p>
              <a
                href="https://youtube.com/c/AngelinaJordanCoverChannel"
                className="hover:text-pink-500"
                rel="noopener noreferrer"
                target="_blank"
                aria-describedby="Angelina Jordan Cover Offical"
                area-label="Angelina Jordan Cover Offical"
              >
                🔗 Angelina Jordan Cover Offical
              </a>
            </p>
            <p>
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
            </p>
            <p>
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
            </p>
            <p>
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
            </p>
          </div>
        </Section>
        <Section>
          <Center>WebSite Framework & Design</Center>
          <Image
            alt="NextJs"
            title="NextJs"
            src={nextjs}
            className="w-full opacity-80"
            loading="lazy"
            height={762}
            width={1400}
          />
          <a
            href="https://nextjs.org/"
            className="hover:text-pink-500"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Built with NextJs"
            area-label="Built with NextJs"
          >
            <h2>This Website is built with NextJs</h2>
          </a>
          <a
            href="https://app.netlify.com/sites/mansbookscom/deploys"
            className="hover:text-pink-500"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Built on Netlify"
            area-label="Built on Netlify"
          >
            Netlify Build Status
          </a>
          <p>
            Used by some of the world's largest companies, Next.js enables you
            to create full-stack web applications by extending the latest React
            features, and integrating powerful Rust-based JavaScript tooling for
            the fastest builds.
          </p>
        </Section>
        <Section>
          <LeftText>Dato Cms</LeftText>
          <div>
            <a
              href="https://www.datocms.com/"
              className="hover:text-pink-500"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Headless CMS"
              area-label="Headless CMS"
            >
              <h2>Headless CMS, Done Right</h2>
            </a>
            <div>
              Simply put, the most complete, user-friendly and performant
              Headless CMS.
            </div>
            <p>
              It's the headless CMS for the modern web. More than 25,000
              businesses use DatoCMS to create online content at scale from a
              central hub and distribute it via API.
            </p>
          </div>
          <div>
            <h2>Empower every member of your team.</h2>
            <p>
              The headless CMS technology provides an end-to-end solution for
              businesses who create and distribute content to websites and other
              digital experiences at scale.
            </p>
          </div>
        </Section>
        <Section>
          <LeftText>Upstash Redis Database</LeftText>
          <a
            href="https://upstash.com/"
            className="hover:text-pink-500"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Upstash Redis"
            area-label="Upstash Redis"
          >
            <h2>Upstash Redis Memory Database, Done Right</h2>
          </a>
          <p>
            The open source, in-memory data store used by millions of developers
            as a database, cache, streaming engine, and message broker.
          </p>
          <p>A vibrant, open source database</p>
          <p>
            Voted the most-loved database for 5 years running, Redis is at the
            center of an engaged community of developers, architects, and open
            source contributors.
          </p>
        </Section>
        <Section>
          <LeftText>100ms</LeftText>
          <a
            href="https://www.100ms.live/"
            className="hover:text-pink-500"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Streaming Video Service"
            area-label="Streaming Video Service"
          >
            <h2>Streaming Video Service</h2>
          </a>
          <p>The only live video API you will ever need.</p>
          <p>
            Go beyond basic video calls, take video experiences to the next
            level with 100ms. Intricately customizable, infinitely extensible.
          </p>
          <p>Go from 1:1 calling to massive streams</p>
          <p>
            Offer 1:1 video calls. Stream live to millions. Or switch your calls
            to live streams with a single API call.
          </p>
          <p>You are in safe hands</p>
          <p>
            100ms is built by a team of video engineers that powered live video
            for Facebook & Disney + Hotstar. We know what works and what
            buffers.
          </p>
        </Section>
        <Section>
          <LeftText>Cloudinary Image Transformations</LeftText>
          <a
            href="https://cloudinary.com/"
            className="hover:text-pink-500"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Image and Video APIs"
            area-label="Image and Video APIs"
          >
            <h2>The Most Powerful Image and Video APIs</h2>
          </a>
          <p>
            Trusted by 1.3 million developers and 10,000 enterprise and
            hyper-growth companies as a critical part of their tech stack.
          </p>
          <p> Image and Video API for Powerful Visual Experiences</p>
          <p>
            Image and Video API for Powerful Visual Experiences Store,
            transform, optimize, and deliver all your media assets with
            easy-to-use APIs, widgets, or user interface.
          </p>
        </Section>
      </div>
    </Layout>
  );
}
