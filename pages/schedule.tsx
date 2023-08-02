import { GetStaticProps } from "next";
import Page from "@components/page";
import Schedule from "@components/schedule";
import Layout from "@components/PageLayout";
import Header from "@components/header";
import Container from "@components/posts/container";
import { getAllStages } from "@lib/cms-api";
import { Stage } from "@lib/types";
import { META_DESCRIPTION } from "@lib/constants";

type Props = {
  allStages: Stage[];
};

export default function SchedulePage({ allStages }: Props) {
  const meta = {
    title: "Schedule - Angelina Jordan",
    description: META_DESCRIPTION,
  };
  return (
    <Page meta={meta}>
      <Layout>
        <Container>
          <Header hero="Schedule" description={meta.description} />
          <Schedule allStages={allStages} />
        </Container>
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allStages = await getAllStages();

  return {
    props: {
      allStages,
    },
    revalidate: 60,
  };
};
