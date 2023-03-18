import React from "react";
import Giscus from "@components/GiscusComments/Giscus";
import Section from "@components/Section";

function GiscusComments() {
  return (
    <Section>
      <Giscus
        repo="donaldboulton/mansbooks.com"
        repoId="R_kgDOI7HnKA"
        category="General"
        categoryId="DIC_kwDOI7HnKM4CU8od"
        mapping="url"
        term="Angies Discussions!"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme="dark_tritanopia"
        lang="en"
      />
    </Section>
  );
}

export default GiscusComments;
