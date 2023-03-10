import { buildClient } from "@datocms/cma-client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSiteSearch } from "react-datocms";
import Container from "@components/posts/container";
import Intro from "@components/posts/intro";
import LanguageBar from "@components/posts/language-bar";
import Layout from "@components/layout";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getServerSideProps(context) {
  const token = process.env.NEXT_CMS_DATOCMS_API_TOKEN_SITE_SEARCH;
  const buildTriggerId = process.env.NEXT_CMS_DATOCMS_BUILD_TRIGGER_ID;
  return {
    props: { token, buildTriggerId },
  };
}

export default function Search(props) {
  const router = useRouter();
  const { term } = router.query;

  const client = buildClient({
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_READ_ONLY_API_TOKEN}`,
    },
    apiToken: props.token,
  });

  const { state, data } = useSiteSearch({
    client,
    buildTriggerId: props.buildTriggerId,
    initialState: { locale: router.locale },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    highlightMatch: (text, key, context) => <strong key={key}>{text}</strong>,
  });

  useEffect(() => {
    state.setLocale(router.locale);
    state.setQuery(term);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term, router.locale]);

  return (
    <Layout>
      <Container>
        <LanguageBar />
        <Intro />
        {data &&
          data.pageResults.map((result) => {
            const paramsArray = result.url.split("/");
            const slug = paramsArray[paramsArray.length - 1];
            const isNotHomePage = slug && slug != "it";

            if (isNotHomePage) {
              const formatedSlug = "/posts/" + slug;

              return (
                <div key={result.id} className="mb-20">
                  <h3 className="mb-3 text-3xl leading-snug">
                    <Link
                      as={formatedSlug}
                      href={formatedSlug}
                      className="hover:underline"
                    >
                      {result.title}
                    </Link>
                  </h3>
                  <p className="mb-4 text-lg leading-relaxed">
                    {result.bodyExcerpt}
                  </p>
                </div>
              );
            }
          })}
      </Container>
    </Layout>
  );
}
