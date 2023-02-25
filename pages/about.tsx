import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Layout from "../components/layout";
import Section from "../components/Section";
import Center from "../components/Center";
import nextjs from "../public/nextjs.jpg";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div className="ml-10 mr-10 mt-8 mb-32">
        <Center>WebSite Framework & Design</Center>
        <Image
          alt="Angie"
          title="Angie"
          src={nextjs}
          className="w-full"
          loading="lazy"
          height={762}
          width={1400}
        />
        <a href="https://nextjs.org/">
          <h2>This Website is built with NextJs</h2>
        </a>
        <p>
          Used by some of the world's largest companies, Next.js enables you to
          create full-stack web applications by extending the latest React
          features, and integrating powerful Rust-based JavaScript tooling for
          the fastest builds.
        </p>
        <Center>Dato Cms</Center>
        <Section>
          <div>
            <a href="https://www.datocms.com/">
              <h2>HEADLESS CMS, DONE RIGHT</h2>
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
        <Center>Redis Database</Center>
        <Section>
          <a href="https://redis.io/">
            <h2>DATABASE, DONE RIGHT</h2>
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

        <Center>100ms</Center>
        <Section>
          <a href="https://www.100ms.live/">
            <h2>STREAMING VIDEO SERVICE</h2>
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
            for Facebook & Disney+ Hotstar. We know what works and what buffers.
          </p>
        </Section>
        <Section>
          <Center>About Angie</Center>

          <p>
            <a href="https://youtube.com/c/AngelinaJordanOfficial">
              <h2>For those who don't know about Angelina jordan</h2>
            </a>
            :👇👇👇
          </p>
          <p>
            Angelina jordan is a singer born in Oslo, Norway. And, also the
            youngest author of Norway.
          </p>
        </Section>
        <Section>
          <p>
            Angelina jordan (barefoot princess) is the winner of Norway got
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
              <a href="https://angelinajordanofficial.com">
                🔗 Angelina Jordan official Website
              </a>
            </p>
            <p>
              <a href="https://youtube.com/c/AngelinaJordanOfficial">
                🔗 Angelina Jordan YouTube Channel
              </a>
            </p>
            <p>
              <a href="https://youtube.com/c/AngelinaJordanCoverChannel">
                🔗 Angelina Jordan Cover Offical
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/angelinajordana/">
                🔗 Angelina Jordan Instagram
              </a>
            </p>
            <p>
              <a href="https://www.facebook.com/angelinajordanofficial">
                🔗 Angelina Jordan Facebook
              </a>
            </p>
          </div>
        </Section>
      </div>
    </Layout>
  );
}
