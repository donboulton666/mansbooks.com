import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@components/Layout";
import Section from "@components/Section";
import LeftText from "@components/LeftText";
import Center from "@components/Center";
import ColumnGridLeft from "../components/column-grid-left";
import nextjs from "../public/nextjs.jpg";
import angie from "../public/angie/angelina.jpg";
import angieImage from "../public/icons/apple-touch-icon.png";
import oneHundredMs from "../public/100ms.jpg";
import Stars from "@components/Stars";
import cloudinary from "../public/cloudinary.png";
import supabase from "../public/supa.png";
import upstash from "../public/upstash-logo.png";
import datoCms from "../public/datoCms.jpg";
import redux from "../public/redux-logo.png";
import csp from "../public/cspMansbooks.jpg";
import supabaseSchema from "../public/beginning-supabase-schema.jpg";

export default function About() {
  return (
    <Layout>
      <Stars />
      <Head>
        <title>About</title>
        <>
          <script src="https://www.paypal.com/sdk/js?client-id=@donaldboulton&enable-funding=venmo"></script>
          <script>paypal.Buttons().render('#paypal-button-container')</script>
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
                    name: "Home",
                  },
                  position: "1",
                },
                {
                  "@type": "ListItem",
                  item: {
                    "@id": "https://mansbooks.com/about",
                    name: "About",
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
      <div className="center mx-auto mb-32 mt-8 max-w-5xl">
        <Center>WebSite Framework & Design</Center>
        <div>
          <a
            href="https://nextjs.org/"
            className="hover:text-pink-500"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Built with NextJs"
            area-label="Built with NextJs"
          >
            <Image
              alt="NextJs"
              title="NextJs"
              src={nextjs}
              className="w-full opacity-60"
              loading="lazy"
              height={762}
              width={1400}
            />
            <LeftText>This Website is built with NextJs</LeftText>
          </a>
        </div>
        <div>
          <a
            href="https://app.netlify.com/sites/mansbooks/deploys"
            className="hover:text-pink-500"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Built on Netlify"
            area-label="Built on Netlify"
          >
            Netlify Build Status
          </a>
        </div>
        <div>
          Used by some of the world's largest companies, Next.js enables you to
          create full-stack web applications by extending the latest React
          features, and integrating powerful Rust-based JavaScript tooling for
          the fastest builds.
        </div>
        <Section>
          <LeftText>Dato Cms</LeftText>
        </Section>
        <Section>
          <div>
            <a
              href="https://www.datocms.com/"
              className="hover:text-pink-500"
              rel="noopener noreferrer"
              target="_blank"
              aria-describedby="Headless CMS"
              area-label="Headless CMS"
            >
              <Image
                alt="Dato Cms"
                title="Dato Cms"
                src={datoCms}
                className="w-80 opacity-80"
                loading="lazy"
                height={128}
                width={320}
              />
              <h2>Headless CMS, Done Right</h2>
            </a>
            <div>
              Simply put, the most complete, user-friendly and performant
              Headless CMS.
            </div>
            <div>
              It's the headless CMS for the modern web. More than 25,000
              businesses use DatoCMS to create online content at scale from a
              central hub and distribute it via API.
            </div>
          </div>
        </Section>
        <Section>
          <div>
            <h2>Empower every member of your team.</h2>
            <div>
              The headless CMS technology provides an end-to-end solution for
              businesses who create and distribute content to websites and other
              digital experiences at scale.
            </div>
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
            <Image
              alt="Upstash"
              title="Upstash"
              src={upstash}
              className="w-80 opacity-80"
              loading="lazy"
              height={128}
              width={320}
            />
            <h2>Upstash Redis Memory Database, Done Right</h2>
          </a>
          <div>
            The open source, in-memory data store used by millions of developers
            as a database, cache, streaming engine, and message broker.
          </div>
          <div>A vibrant, open source database</div>
          <div>
            Voted the most-loved database for 5 years running, Redis is at the
            center of an engaged community of developers, architects, and open
            source contributors.
          </div>
        </Section>
        <Section>
          <LeftText>Supabase Database</LeftText>
          <a
            href="https://supabase.com/"
            className="hover:text-pink-500"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Supabase"
            area-label="Supabase"
          >
            <Image
              alt="Supabase"
              title="Supabase"
              src={supabase}
              className="w-80 opacity-80"
              loading="lazy"
              height={128}
              width={320}
            />
            <h2>Build in a weekend. Scale to millions.</h2>
          </a>
          <div>
            Supabase is an open source Firebase alternative. Start your project
            with a Postgres database, Authentication, instant APIs, Edge
            Functions, Realtime subscriptions, and Storage.
          </div>
          <div>Build faster and focus on your products</div>
          <h2>Open Source Auth (with tons of integrations)</h2>
          <div>
            Every Supabase project comes with a complete User Management system
            that works without any additional tools. Including PostgreSQL's
            policy engine, for fine-grained access rules.
          </div>
          <h2>Beginning Supabase Schema and foreign key relationships</h2>{" "}
          <div>
            <Image
              alt="Supabase Schema"
              title="Supabase Schema"
              src={supabaseSchema}
              className="w-full opacity-80"
              loading="lazy"
              height={762}
              width={1400}
            />
          </div>
        </Section>
        <Section>
          <LeftText>Redux Session Storage</LeftText>
          <a
            href="https://redux.com/"
            className="hover:text-pink-500"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Redux"
            area-label="Redux"
          >
            <Image
              alt="Redux"
              title="Redux"
              src={redux}
              className="w-80 opacity-80"
              loading="lazy"
              height={128}
              width={320}
            />
            <h2>Lets you focus on the core logic your app needs.</h2>
          </a>
          <div>
            Includes utilities to simplify common use cases like store setup,
            creating reducers, immutable update logic, and more.
          </div>
          <div>Build faster and focus on your products</div>
          <h2>Opinionated</h2>
          <div>
            Provides good defaults for store setup out of the box, and includes
            the most commonly used Redux addons built-in.
          </div>
          <h2>Powerful</h2>
          <div>
            Takes inspiration from libraries like Immer and Autodux to let you
            write "mutative" immutable update logic, and even create entire
            "slices" of state automatically.
          </div>
          <h2>Effective</h2>
          <div>
            Lets you focus on the core logic your app needs, so you can do more
            work with less code.
          </div>
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
            <Image
              alt="100ms"
              title="100ms"
              src={oneHundredMs}
              className="w-80 opacity-80"
              loading="lazy"
              height={128}
              width={320}
            />
            <h2>Streaming Video Service</h2>
          </a>
          <div>The only live video API you will ever need.</div>
          <div>
            Go beyond basic video calls, take video experiences to the next
            level with 100ms. Intricately customizable, infinitely extensible.
          </div>
          <div>Go from 1:1 calling to massive streams</div>
          <div>
            Offer 1:1 video calls. Stream live to millions. Or switch your calls
            to live streams with a single API call.
          </div>
          <div>You are in safe hands</div>
          <div>
            100ms is built by a team of video engineers that powered live video
            for Facebook & Disney + Hotstar. We know what works and what
            buffers.
          </div>
        </Section>
        <Section>
          <LeftText>Cloudinary Image Transformations</LeftText>
          <a
            href="https://cloudinary.com/"
            className="mt-4 hover:text-pink-500"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Image and Video APIs"
            area-label="Image and Video APIs"
          >
            <Image
              alt="100ms"
              title="100ms"
              src={cloudinary}
              className="mt-4 w-96 pt-4 opacity-80"
              loading="lazy"
              height={128}
              width={384}
            />
            <h2>The Most Powerful Image and Video APIs</h2>
          </a>
          <div>
            Trusted by 1.3 million developers and 10,000 enterprise and
            hyper-growth companies as a critical part of their tech stack.
          </div>
          <div> Image and Video API for Powerful Visual Experiences</div>
          <div>
            Image and Video API for Powerful Visual Experiences Store,
            transform, optimize, and deliver all your media assets with
            easy-to-use APIs, widgets, or user interface.
          </div>
        </Section>
        <Section>
          <Center>Security Policy's</Center>
        </Section>
        <Section>
          <Image
            alt="security Policy"
            title="security Policy"
            src={csp}
            className="w-full opacity-80"
            loading="lazy"
          />
        </Section>
        <div id="paypal-button-container"></div>
      </div>
    </Layout>
  );
}
