import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Layout from "../components/layout";
import Section from "../components/Section";
import LeftText from "../components/LeftText";
import nextjs from "../public/nextjs.jpg";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className="ml-10 mr-10 mt-8 mb-32">
        <LeftText>WebSite Framework & Design</LeftText>
        <Image
          alt="NextJs"
          title="NextJs"
          src={nextjs}
          className="w-full opacity-80"
          loading="lazy"
          height={762}
          width={1400}
        />
        <a href="https://nextjs.org/"
          className="hover:text-pink-500"
          rel="noopener noreferrer"
          target="_blank"
          aria-describedby="Built with NextJs"
          area-label="Built with NextJs"
        >
          <h2>This Website is built with NextJs</h2>
        </a>
        <p>
          Used by some of the world's largest companies, Next.js enables you to
          create full-stack web applications by extending the latest React
          features, and integrating powerful Rust-based JavaScript tooling for
          the fastest builds.
        </p>
        <LeftText>Dato Cms</LeftText>
        <Section>
          <div>
            <a href="https://www.datocms.com/"
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
        <LeftText>Redis Database</LeftText>
        <Section>
          <a href="https://redis.io/"
            className="hover:text-pink-500"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Memory Database"
            area-label="Memory Database"
          >
            <h2>Memory Database, Done Right</h2>
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

        <LeftText>100ms</LeftText>
        <Section>
          <a href="https://www.100ms.live/"
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
            for Facebook & Disney + Hotstar. We know what works and what buffers.
          </p>
        </Section>
        <LeftText>Cloudinary Image Transformations</LeftText>
        <Section>
          <a href="https://cloudinary.com/"
            className="hover:text-pink-500"
            rel="noopener noreferrer"
            target="_blank"
            aria-describedby="Image and Video APIs"
            area-label="Image and Video APIs"
          >
            <h2>The Most Powerful Image and Video APIs</h2>
          </a>
          <p>         
            Trusted by 1.3 million developers and 10,000
            enterprise and hyper-growth companies as a
            critical part of their tech stack.
          </p>
          <p> Image and Video API for Powerful Visual Experiences</p>
          <p>
            Image and Video API for Powerful Visual Experiences
            Store, transform, optimize, and deliver all your media assets with easy-to-use APIs, widgets, or user interface.
          </p>
        </Section>
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
          <p>
            Angelina Jordan is a singer born in Oslo, Norway. And, also the
            youngest author of Norway.
          </p>
        </Section>
        <Section>
          <p>
            Angelina Jordan (barefoot queen) is the winner of Norway got
            talent 2014. She also auditioned for America's got talent in 2020
            where she received GOLDEN BUZZER from Heidi Klum. Currently, she
            signed with Republic records.
          </p>
        </Section>
        <Section>
          <p>She also plays piano, violin, guitar, flute and also paints.</p>
          <p>Thanks 🙏</p>
        </Section>
        <Section>
          <div>
            Extended Profile Information:{" "}
            <p>
              <a href="https://angelinajordanofficial.com"
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
              <a href="https://youtube.com/c/AngelinaJordanOfficial"
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
              <a href="https://youtube.com/c/AngelinaJordanCoverChannel"
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
              <a href="https://www.instagram.com/angelinajordana/"
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
              <a href="https://www.facebook.com/angelinajordanofficial"
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
      </div>
    </Layout>
  );
}
