import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Layout from "../components/layout";
import Section from "@components/Section";
import LeftText from "@components/LeftText";
import ColumnGridLeft from "@components/column-grid-left";
import Center from "@components/Center";
import suspiciousMinds from "../public/suspiciousminds.jpg";

export default function Profile() {
  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="mr-10 ml-10 mt-10 mb-6">
        <Center>Angelina Jordan</Center>
        <Image
          alt="NextJs"
          title="Angelina Jordan"
          src={suspiciousMinds}
          className="w-full opacity-80"
          loading="lazy"
          height={762}
          width={1400}
        />
      </div>
      <div className="mr-10 ml-10 mb-20">
        <ColumnGridLeft>
          <div className="mr-20 mt-4">
              <LeftText>About Angie</LeftText>
              <div>
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
              </div>
              <div>
                Born and raised in Oslo, Norway; this world-renowned singer has
                earned fantastic reviews for the amazing breadth, depth and
                maturity of her vocal talent that simply belies her young age.
                <div>
                  Angelina’s videos have received over several billions views on
                  YouTube and more than 4 billion views on Facebook.
                </div>
                <div>
                  Amazingly, her passion for music began at just one-and- a-half
                  years of age when Angelina first saw Whitney Houston on
                  YouTube performing I Will Always Love You. Whitney - and later
                  Billie Holiday, Dinah Washington - became her first major
                  musical influences.
                </div>
                <div>
                  At the age of seven, Angelina auditioned for Norway’s Got
                  Talent performing Billie Holiday’s Gloomy Sunday. She won the
                  competition with the show drawing record TV audiences.
                </div>
                <div>
                  Not surprisingly, throughout her rising career, Angelina has
                  featured in prominent media outlets including TIME, CNN, BBC,
                  and People while also performing on the U.S. network TV shows
                  Little Big Shots and The View.
                </div>
                <div>
                  In 2016, Avicii chose Angelina for the vocals on his worldwide
                  Volvo commercial campaign, a brilliant cover of Nina Simone’s
                  Feeling Good.
                </div>
                <div>
                  As well as singing before Nobel Peace Prize Laureates,
                  charitable causes to which Angelina has given her talent
                  include the Rainforest Alliance at the American Museum of
                  Natural History in New York and Ein Herz für Kinder in Berlin
                  where she helped raise over 21 Million Euros for children and
                  families in need.
                </div>
                <div>
                  This multi-talented singing prodigy has also written a
                  successful, illustrated children’s book in her native Norway
                  making Angelina the youngest published author in the country’s
                  history.
                </div>
                Based on the true story of when she was six years old, Angelina
                met a homeless, shoeless girl. After they talked for a long
                time, she gave the girl her shoes and vowed never to appear on
                stage again wearing shoes until all the world’s children had
                them. Since that time, Angelina has always performed barefoot in
                public.
              </div>
            <Section>
              <div>
                Angelina Jordan (barefoot queen) is the winner of Norway got
                talent 2014. She also auditioned for America's got talent in
                2020 where she received GOLDEN BUZZER from Heidi Klum.
                Currently, she signed with Republic records. August 2020.
              </div>
            </Section>
          </div>
          <div className="-mt-2 mb-24 text-slate-200 lg:col-span-2 lg:mt-0">
          <Section>
              <div>
                Extended Profile Information:{" "}
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
                    🔗 Angelina Jordan Official STore
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
                    🔗 Angelina Jordan YouTube Channel
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
                    🔗 Angelina Jordan Cover Offical
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
              </div>
            </Section>
          </div>
        </ColumnGridLeft>
      </div>
    </Layout>
  );
}
