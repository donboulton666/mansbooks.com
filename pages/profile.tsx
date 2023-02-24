import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Layout from "../components/layout";
import Section from "../components/Section";
import Center from "../components/Center";
import suspiciousminds from "../public/suspiciousminds.jpg";

export default function Profile() {
  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="ml-10 mr-10 mt-8 mb-32">        
        <Center>Angelina Jordan</Center>
        <Image
          alt="Angie"
          title="Angie"
          src={suspiciousminds}
          className="w-full"
          loading="lazy"
          height={762}
          width={1400}
        />
        <h1>This is a Fanpage OF ANGELINA JORDAN 🎸</h1>
        <p>
          This page is not for any
          commercial benefits. This is only for Angelina's fan so that they can
          find her all videos easily.
        </p>
        <p>And, for those who don't know about Angelina jordan:👇👇👇</p>
        <p>
          Angelina jordan is a singer born in oslo, Norway. And,also the
          youngest author of Norway.
        </p>

        <Section>
        <p>
          Angelina jordan (barefoot princess) is the winner of Norway got talent
          2014. She also auditioned for America's got talent in 2020 where she
          received GOLDEN BUZZER from Heidi Klum. Currently, she signed with
          Republic records.
        </p>
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
