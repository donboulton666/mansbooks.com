import React from "react";
import Head from "next/head";
import Center from "@components/Center";
import LeftText from "@components/LeftText";
import ColumnGridLeft from "@components/column-grid-left";
import Layout from "@components/layout";
import ContactForm from "@components/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="mr-10 ml-10 mt-10 mb-20">
        <p>
          <Center>Contact Queen Angelina Jordan</Center>
          <p>Use the form below to Contact the Angelic Queen.</p>
        </p>
        <LeftText>Social Links</LeftText>
        <ColumnGridLeft>
          <div className="mr-20 mt-4">
            Extended Profile Information:{" "}
            <p>
              <a
                href="https://angelinajordanofficial.com"
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="hookForm"
              >
                🔗 Angelina Jordan official Website
              </a>
            </p>
            <p>
              <a
                href="https://youtube.com/c/AngelinaJordanOfficial"
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="hookForm"
              >
                🔗 Angelina Jordan YouTube Channel
              </a>
            </p>
            <p>
              <a
                href="https://youtube.com/c/AngelinaJordanCoverChannel"
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="hookForm"
              >
                🔗 Angelina Jordan Cover Offical
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/angelinajordana/"
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="hookForm"
              >
                🔗 Angelina Jordan Instagram
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/angelinajordanofficial"
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="Angelina Jordan Facebook"
              >
                🔗 Angelina Jordan Facebook
              </a>
            </p>
            <p>
              <a
                href="https://www.tiktok.com/@angelinajordana"
                className="hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-describedby="Angelina Jordan TikTok"
              >
                🔗 Angelina Jordan TikTok
              </a>
            </p>
          </div>
          <div className="-mt-2 mb-24 text-slate-200 lg:col-span-2 lg:mt-0">
            <ContactForm />
          </div>
        </ColumnGridLeft>
      </div>
    </Layout>
  );
}
