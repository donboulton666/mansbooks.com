import Head from "next/head";
import Layout from "../components/layout";
import Section from "../components/Section";

export default function Terms() {
  return (
    <Layout>
      <Head>
        <title>Terms</title>
      </Head>
      <div className="mx-18">
        <div className="z-30 -mt-4">
          <div className="mt-10">
            <div className="mt-16 mb-16 p-8 sm:mt-2">
              <div className="mb-2">
                <h2>Using hCaptcha</h2>
                <p>
                  We use the hCaptcha anti-bot service (hereinafter "hCaptcha")
                  on our website.
                </p>
                <p>
                  This service is provided by Intuition Machines, Inc., a
                  Delaware US Corporation ("IMI"). hCaptcha is used to check
                  whether the data entered on our website (such as on a login
                  page or contact form) has been entered by a human or by an
                  automated program.
                </p>
                <Section>
                  <p>
                    To do this, hCaptcha analyzes the behavior of the website or
                    mobile app visitor based on various characteristics. This
                    analysis starts automatically as soon as the website or
                    mobile app visitor enters a part of the website or app with
                    hCaptcha enabled. For the analysis, hCaptcha evaluates
                    various information (e.g. IP address, how long the visitor
                    has been on the website or app, or mouse movements made by
                    the user). The data collected during the analysis will be
                    forwarded to IMI. hCaptcha analysis in the "invisible mode"
                    may take place completely in the background. Website or app
                    visitors are not advised that such an analysis is taking
                    place if the user is not shown a challenge. Data processing
                    is based on Art. 6(1)(f) of the GDPR (DSGVO): the website or
                    mobile app operator has a legitimate interest in protecting
                    its site from abusive automated crawling and spam. IMI acts
                    as a "data processor" acting on behalf of its customers as
                    defined under the GDPR, and a "service provider" for the
                    purposes of the California Consumer Privacy Act (CCPA).
                  </p>
                </Section>
                <Section>
                  <p>
                    For more information about hCaptcha and IMI's privacy policy
                    and terms of use, please visit the following links:
                  </p>
                  <a
                    href="https://www.hcaptcha.com/privacy"
                    className="hover:text-pink-500"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-describedby="AJ Instagram"
                    area-label="Privacy"
                  >
                    🔗 https://www.hcaptcha.com/privacy.
                  </a>
                  <a
                    href="https://www.hcaptcha.com/terms"
                    className="hover:text-pink-500"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-describedby="hCaptcha Terms"
                    area-label="hCaptcha Terms"
                  >
                    🔗 https://www.hcaptcha.com/terms.
                  </a>
                </Section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
