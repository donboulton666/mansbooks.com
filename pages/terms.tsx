import Head from "next/head";
import Layout from "@components/PageLayout";
import Section from "@components/Section";
import angie from "../public/angie/angelina.jpg";
import Stars from "@components/Stars";

export default function Terms() {
  return (
    <Layout>
      <Stars />
      <Head>
        <title>Terms</title>
        <>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Terms",
              url: "https://mansbooks.com/terms",
              image: {
                "@type": "ImageObject",
                url: angie,
                width: "1400",
                height: "450",
              },
              publisher: {
                "@type": "Organization",
                name: "Mansbooks",
              },
              license: "http://mansbooks.com/license",
            })}
            ,
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@id": "https://mansbooks.com",
              "@type": "Organization",
              address: "OKC, Middle Earth",
              contactPoint: {
                "@type": "ContactPoint",
                email: "donaldboulton@gmail.com",
                telephone: "+405-863-2165",
              },
              description: "Mansbooks Profile Page",
              email: "donaldboulton@gmail.com",
              founder: {
                "@id": "https://donboulton.com",
              },
              location: "OKC, Middle Earth",
              image: {
                "@type": "ImageObject",
                url: angie,
                width: "1400",
                height: "450",
              },
              logo: {
                "@type": "ImageObject",
                url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFRYVDhgQEhgNEh0PExYVFx8eGBYVIhUaHysjHR0oKRUiJTUlKC0vMjIyGSU4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7NTsyOzs7OzsvLy81OzU7NjU1Ozs1LzY7OzsvNS87OzsvLy87OzsvLzIvLy87Lzs7O//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABgcFAf/EAB0QAAEFAQEBAQAAAAAAAAAAAAEAAgMEEQUxIRL/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQA/8QAHBEAAQQDAQAAAAAAAAAAAAAAAgABAxEEEyEx/9oADAMBAAIRAxEAPwCu3Z2wwO0pTl6UYs5o9Wl2ZJBAc3xTm3LaN4/nfVBk5emuKuDH2H6qdR6MZYPoQlPnSWGxDdXFYEljaGSCipPHTqtlgJxKzeRG6zpaPUIQyALt1KjJ2fi2IOUxrBgQhCcAtSxG9r//2Q==",
              },
              name: "MansBooks Terms",
              sameAs: [
                "mailto:donaldboulton@gmail.com",
                "tel:+405-863-2165",
                "https://www.facebook.com/donboulton",
                "https://www.instagram.com/boulton3662",
                "https://twitter.com/donboulton",
                "https://www.linkedin.com/donboulton",
                "https://github.com/donaldboulton/",
              ],
              url: "https://mansbooks.com",
            })}
            ,
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://donboulton.com",
              name: "Donald Boulton",
              url: "https://donboulton.com",
              worksFor: {
                "@id": "https://mansbooks.com",
              },
            })}
            ,
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              description: "Breadcrumbs list",
              itemListElement: [
                {
                  "@type": "ListItem",
                  item: {
                    "@id": "https://mansbooks.com/",
                    name: "MansBooks Home",
                  },
                  position: "1",
                },
                {
                  "@type": "ListItem",
                  item: {
                    "@id": "https://mansbooks.com/profile",
                    name: "MansBooks Terms",
                  },
                  position: "2",
                },
              ],
              numberOfItems: "2",
              name: "Breadcrumbs",
            })}
            ,
          </script>
        </>
        ,
      </Head>
      <div className="center mx-auto mb-4 mt-4 max-w-5xl">
        <div className="z-30 -mt-4">
          <div className="mt-10">
            <div className="mb-16 mt-16 p-8 sm:mt-2">
              <div className="mb-2">
                <h2>Angelina Jordan Terms</h2>
                <div>
                  Welcome, and thank you for your interest in Angelina Jordan
                  Official (“Angelina Jordan Official ” “we,” or “us”) and our
                  website at
                  https://angelina-jordan-official-store.creator-spring.com (the
                  “Site”). These Terms of Use are a legally binding contract
                  between you and Angelina Jordan Official regarding your use of
                  the Site. Please read the following terms carefully before
                  using the Site. By using the Site, you acknowledge that you
                  have read, understood, and agree to be bound by the following
                  terms and conditions, including the Angelina Jordan Official
                  Privacy Policy (together, the “Terms”). If you are not
                  eligible, or you do not agree to the Terms, then you do not
                  have our permission to use the Site.
                </div>
                <div>
                  <h2>Eligibility</h2>
                </div>
                <div>
                  You must be at least 18 years of age to use the Site. By
                  agreeing to these Terms, you represent and warrant to us that:
                  (a) you are at least 18 years of age; and (b) your use of the
                  Site is in compliance with any and all applicable laws and
                  regulations. If you are an entity, organization, or company,
                  the individual accepting these Terms on your behalf represents
                  and warrants that they have authority to bind you to these
                  Terms and you agree to be bound by these Terms.
                </div>
                <div>
                  <h2>Purchases</h2>
                </div>
                <Section>
                  <div>
                    Payment: Purchases of any merchandise are facilitated
                    through a third-party service provider. We may provide such
                    service provider with information regarding your credit card
                    or other payment instrument. You represent and warrant that
                    such information is true and that you are authorized to use
                    the payment instrument. You will be responsible for all
                    taxes associated with your purchase of merchandise through
                    the Service. Loss and Cancellation: Title and risk of loss
                    for all merchandise ordered by you will pass to you on
                    delivery to the shipping carrier. We reserve the right to
                    cancel any order for any merchandise for any reason.
                    Returns: You acknowledge and agree that goods produced for
                    you are bespoke, custom-made goods. Other than where goods
                    are faulty, you have no right to cancel any order or return
                    any goods and all orders are final. Waiver: Your purchase of
                    an item constitutes a waiver of any and all intellectual
                    property, proprietary, personal, and privacy claims relating
                    to that purchase.
                  </div>
                  <div>
                    <h2>Changes to the Terms</h2>
                  </div>
                  <div>
                    We may periodically make changes to these Terms. When we do,
                    we will update the “Last Updated” date above. It is your
                    responsibility to review the most recent version of these
                    Terms and remain informed of any changes. You agree that
                    your continued use of the Site after the effective date of
                    any changes will constitute your acceptance of the changed
                    Terms for your continued use. Disputes arising under these
                    Terms will be resolved in accordance with the version of
                    these Terms that was in effect at the time the dispute
                    arose.
                  </div>
                  <h2>Changes to the Site</h2>
                  <div>
                    We reserve the right to modify or discontinue, temporarily
                    or permanently, all or a part of the Site without notice. We
                    will not be liable to you or to any third party for any
                    modification, suspension, or discontinuance of the Site.
                  </div>
                  <h2>Limited License</h2>
                  <div>
                    Subject to these Terms, Angelina Jordan Official grants you
                    a limited, revocable license to access and use the Site
                    solely for non-commercial purposes to learn more about
                    Angelina Jordan Official products and services. No other use
                    of the Site is authorized.
                  </div>
                  <h2>Restrictions</h2>
                  You must comply with all applicable laws when using the Site.
                  Except as may be expressly permitted by applicable law or
                  expressly permitted by us in writing, you will not, and will
                  not permit anyone else to: (a) store, copy, modify,
                  distribute, or resell any information or material available on
                  the Site (“Site Content”) or compile or collect any Site
                  Content as part of a database or other work; (b) use any
                  automated tool (e.g., robots, spiders) to use the Site or
                  store, copy, modify, distribute, or resell any Site Content;
                  (c) rent, lease, or sublicense your access to the Site; (d)
                  use the Site or Site Content for any purpose except for your
                  own personal use; (e) circumvent or disable any digital rights
                  management, usage rules, or other security features of the
                  Site; (f) reproduce, modify, translate, enhance, decompile,
                  disassemble, reverse engineer, or create derivative works of
                  the Site; (g) use the Site in a manner that threatens the
                  integrity, performance, or availability of the Site; or (h)
                  remove, alter, or obscure any proprietary notices (including
                  copyright notices) on any portion of the Site or Site Content.
                  <h2>Ownership</h2>
                  The Site is owned and operated by Angelina Jordan Official. We
                  or our licensors retain all right, title, and interest in and
                  to the Site and Site Content and any trademarks, logos, or
                  service marks displayed on the Site or in Site Content
                  (“Marks”). The Site, Site Content, and Marks are protected by
                  applicable intellectual property laws and international
                  treaties. Except as expressly authorized by Angelina Jordan
                  Official you may not make use of the Site, Site Content, and
                  Marks.
                  <h2>Privacy Policy</h2>
                  Please read the Angelina Jordan Official Privacy Policy
                  carefully for information relating to our collection, use,
                  storage, disclosure of your personal information. The Privacy
                  Policy is incorporated by this reference into, and made a part
                  of, these Terms.
                  <h2>Links and Third Party Content</h2>
                  The Site may contain links to third party products, services,
                  and websites. We exercise no control over the third party
                  products, services, and websites and we are not responsible
                  for their performance, do not endorse them, and are not
                  responsible or liable for any content, advertising, or other
                  materials available through the third party products,
                  services, and websites. We are not responsible or liable,
                  directly or indirectly, for any damage or loss caused to you
                  by your use of or reliance on any goods or services available
                  through the third party products, services, and websites.
                  Additionally, if you follow a link or otherwise navigate away
                  from the Site, please be aware that these Terms will no longer
                  govern. You should review the applicable terms and policies,
                  including privacy and data gathering practices, of any third
                  party websites to which you navigate to from the Site.
                  <h2>Disclaimer of Warranties</h2>
                  YOUR USE OF THE SITE AND SITE CONTENT IS AT YOUR SOLE RISK.
                  THE SITE AND SITE CONTENT ARE PROVIDED ON AN “AS IS” AND “AS
                  AVAILABLE” BASIS. Angelina Jordan Official EXPRESSLY DISCLAIMS
                  ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
                  INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
                  NON-INFRINGEMENT. WE DO NOT GUARANTEE THE ACCURACY,
                  COMPLETENESS, OR USEFULNESS OF THE SITE OR SITE CONTENT, AND
                  YOU RELY ON THE SITE AND SITE CONTENT AT YOUR OWN RISK. ANY
                  MATERIAL OBTAINED THROUGH THE SITE IS DONE AT YOUR OWN
                  DISCRETION AND RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY
                  DAMAGE TO YOUR COMPUTER OR LOSS OF DATA THAT RESULTS FROM THE
                  DOWNLOAD OF ANY MATERIAL THROUGH THE SITE. NO ADVICE OR
                  INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM
                  Angelina Jordan Official OR THROUGH OR FROM THE SITE WILL
                  CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THIS AGREEMENT.
                  HOWEVER, Angelina Jordan Official DOES NOT DISCLAIM ANY
                  WARRANTY OR OTHER RIGHT THAT Angelina Jordan Official IS
                  PROHIBITED FROM DISCLAIMING UNDER APPLICABLE LAW.
                  <h2>Limitation of Liability</h2>
                  Angelina Jordan Official WILL NOT BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES,
                  INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS,
                  GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF
                  Angelina Jordan Official HAS BEEN ADVISED OF THE POSSIBILITY
                  OF THESE DAMAGES), RESULTING FROM YOUR USE OF THE SITE AND
                  SITE CONTENT. UNDER NO CIRCUMSTANCES WILL Angelina Jordan
                  Official S TOTAL LIABILITY OF ALL KINDS ARISING OUT OF OR
                  RELATED TO YOUR USE OF THE SITE OR SITE CONTENT (INCLUDING BUT
                  NOT LIMITED TO WARRANTY CLAIMS), REGARDLESS OF THE FORUM AND
                  REGARDLESS OF WHETHER ANY ACTION OR CLAIM IS BASED ON
                  CONTRACT, TORT, OR OTHERWISE, EXCEED $50. BECAUSE SOME STATES
                  DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR
                  CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY
                  NOT APPLY TO YOU. EACH PROVISION OF THESE TERMS THAT PROVIDES
                  FOR A LIMITATION OF LIABILITY, DISCLAIMER OF WARRANTIES, OR
                  EXCLUSION OF DAMAGES IS INTENDED TO AND DOES ALLOCATE THE
                  RISKS BETWEEN THE PARTIES UNDER THESE TERMS. THIS ALLOCATION
                  IS AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN
                  THE PARTIES. EACH OF THESE PROVISIONS IS SEVERABLE AND
                  INDEPENDENT OF ALL OTHER PROVISIONS OF THESE TERMS. THE
                  LIMITATIONS IN THIS SECTION WILL APPLY EVEN IF ANY LIMITED
                  REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
                  <h2>Indemnity</h2>
                  You will indemnify and hold Angelina Jordan Official and its
                  partners, service providers, affiliates, officers, agents, and
                  employees, harmless from any costs, damages, expenses, and
                  liability caused by your use of the Site or Site Content, your
                  violation of these Terms, or your violation of any rights of a
                  third party through use of the Site or Site Content. We and
                  our licensors reserve the right, at our own expense, to assume
                  the exclusive defense and control of any matter otherwise
                  subject to indemnification by you (without limiting your
                  indemnification obligations with respect to that matter), and
                  in that case, you agree to cooperate with our defense of those
                  claims.
                  <h2>Release</h2>
                  If you have a dispute with the Site, Site Content, or any
                  products purchased through the Site, you hereby release us and
                  our partners and service providers (and each party’s
                  respective officers, directors, agents, subsidiaries, joint
                  ventures and employees) from claims, demands and damages
                  (actual and consequential) of every kind and nature, known and
                  unknown, arising out of or in any way connected with such
                  disputes. If you are a California resident, you waive
                  California Civil Code §1542, which states: “A general release
                  does not extend to claims that the creditor or releasing party
                  does not know or suspect to exist in his or her favor at the
                  time of executing the release and that, if known by him or
                  her, would have materially affected his or her settlement with
                  the debtor or released party.”
                  <h2>General Terms</h2>
                  These Terms, together with the Privacy Policy and any other
                  agreements expressly incorporated by reference into these
                  Terms, are the entire and exclusive understanding and
                  agreement between you and Angelina Jordan Official regarding
                  your use of the Site. You may not assign or transfer these
                  Terms or your rights under these Terms, in whole or in part,
                  by operation of law or otherwise, without our prior written
                  consent. We may assign these Terms at any time without notice
                  or consent. The failure to require performance of any
                  provision will not affect our right to require performance at
                  any other time after that, nor will a waiver by us of any
                  breach or default of these Terms, or any provision of these
                  Terms, be a waiver of any subsequent breach or default or a
                  waiver of the provision itself. Use of section headers in
                  these Terms is for convenience only and will not have any
                  impact on the interpretation of any provision. Throughout
                  these Terms the use of the word “including” means “including
                  but not limited to”. If any part of these Terms is held to be
                  invalid or unenforceable, the unenforceable part will be given
                  effect to the greatest extent possible, and the remaining
                  parts will remain in full force and effect.
                  <h2>Legal Notices</h2>
                  These Terms are governed by the laws of the state of without
                  regard to conflict of law principles. The exclusive
                  jurisdiction and venue for any claims arising out of or
                  related to these Terms or your use of the Site will lie in the
                  state and federal courts located in undefined, undefined, and
                  you irrevocably agree to submit to the jurisdiction of such
                  courts. The failure of Angelina Jordan Official to enforce any
                  right or provision in these Terms will not constitute a waiver
                  of such right or provision unless acknowledged and agreed to
                  by Angelina Jordan Official in writing. In the event that a
                  court of competent jurisdiction finds any provision of these
                  Terms to be illegal, invalid or unenforceable, the remaining
                  provisions will remain in full force and effect.
                </Section>
                <h2>Using hCaptcha</h2>
                <div>
                  We use the hCaptcha anti-bot service (hereinafter "hCaptcha")
                  on our website.
                </div>
                <div>
                  This service is provided by Intuition Machines, Inc., a
                  Delaware US Corporation ("IMI"). hCaptcha is used to check
                  whether the data entered on our website (such as on a login
                  page or contact form) has been entered by a human or by an
                  automated program.
                </div>
                <Section>
                  <div>
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
                  </div>
                </Section>
                <Section>
                  <div>
                    For more information about hCaptcha and IMI's privacy policy
                    and terms of use, please visit the following links:
                  </div>
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
