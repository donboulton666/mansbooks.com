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
                url: "data:image/png;base64,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",
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
                🔗 Angelina Jordan Official STore
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
