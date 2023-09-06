import { GetStaticProps } from "next";
import Page from "@components/page";
import SpeakersGrid from "@components/speakers-grid";
import Layout from "@components/Layout";
import Header from "@components/header";
import LanguageBar from "@components/LanguageBar";
import { getAllSpeakers } from "@lib/cms-api";
import { Speaker } from "@lib/types";
import { META_DESCRIPTION } from "@lib/constants";
import Container from "@components/posts/container";

type Props = {
  speakers: Speaker[];
};

export default function Speakers({ speakers }: Props) {
  const meta = {
    title: "Webinars - Angelina Jordan",
    description: META_DESCRIPTION,
  };
  return (
    <Page meta={meta}>
      <Layout>
        <LanguageBar />
        <Container>
          <div className="mb-20">
            <Header hero="Speakers" description={meta.description} />
            <SpeakersGrid speakers={speakers} />
          </div>
        </Container>
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const speakers = await getAllSpeakers();

  return {
    props: {
      speakers,
    },
    revalidate: 60,
  };
};
