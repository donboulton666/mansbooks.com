import React from "react";
import Head from "next/head";
import Image from "next/legacy/image";
import Layout from "../components/layout";
import Center from "../components/Center";
import LeftText from "../components/LeftText";
import ColumnGridTwo from "../components/column-grid";
import UserProfile from "../components/UserProfile";
import Section from "../components/Section";
import VideoWrapper from "../components/VideoWrapper";
import SingleAccordion from "../components/SingleAccordion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import about from "../public/about.jpg";
import cookies from "../public/cookies.png";

export default function Privacy() {
  return (
    <Layout>
      <Head>
        <title>Privacy</title>
      </Head>
      <div className="mx-8 mt-8 mb-32">
        <Center>Privacy Policy / Terms of Usage</Center>
        <Image
          alt="Privacy"
          title="Privacy"
          src={about}
          className="h-20 w-20"
          loading="lazy"
          height={450}
          width={1400}
        />
        <h2>User data is encrypted</h2>
        <p>⚓ The privacy of my visitors is extremely important.</p>
        <p>
          This Privacy Policy outlines the types of personal information that is
          received and collected and how it is used.
        </p>
        First and foremost, I will never share your email address or any other
        personal information to anyone without your direct consent.
        <h2>Log Files</h2>
        <Section>
          🏴󠁡󠁦󠁬󠁯󠁧󠁿 Like many other websites, this site uses log files to help
          learn about when, from where, and how often traffic flows to this
          site. The information in these log files include: - Internet Protocol
          addresses (IP) - Types of browser - Internet Service Provider (ISP) -
          Date and time stamp - Referring and exit pages - Number of clicks All
          of this information is not linked to anything that is personally
          identifiable.
        </Section>
        <h2> Cookies Beacons</h2>
        <Section>
          🍪 When you visit this site "convenience" cookies are stored on your
          computer when you submit a comment to help you log in faster to 🔗{" "}
          <a href="https://twitter.com/donboulton">Twitter</a> the next time you
          do a tweet.
        </Section>
        <Section>
          <LeftText>Cookies Purpose and Usage</LeftText>
          <ColumnGridTwo>
            <UserProfile
              buttonLink="https://www.youtube.com/watch?v=yoE9-tNvhRs"
              title="Cookie"
              titleLink="https://www.youtube.com/watch?v=yoE9-tNvhRs"
              link="https://www.youtube.com/watch?v=yoE9-tNvhRs"
              description="Cookies Explained"
            >
              <Image
                alt="cookies"
                title="Cookies"
                src={cookies}
                className="h-20 w-20"
                loading="lazy"
                height={80}
                width={80}
              />
            </UserProfile>
            <VideoWrapper>
              <LiteYouTubeEmbed id="yoE9-tNvhRs" title="Cookies Explained" />
            </VideoWrapper>
          </ColumnGridTwo>
        </Section>
        <Section>
          Third-party advertisers may also place and read cookies on your
          browser and / or use web beacons to collect information. This site has
          no access or control over these cookies. You should review the
          respective privacy policies on any and all third-party ad servers for
          more information regarding their practices and how to opt-out. If you
          wish to disable cookies, you may do so through your web browser
          options. Instructions for doing so can be found on the specific web
          browsers' websites.
        </Section>
        <h2>Cookies in EU Law</h2>
        <SingleAccordion label="Cookies Confusion">
          ⚖️ The Law
          <p>
            🔗{" "}
            <a href="https://www.123-reg.co.uk/blog/security-issues/is-the-eus-cookie-law-confusing-you-too/">
              Is the EU's cookie law confusing you too?
            </a>
          </p>
          🔗{" "}
          <a href="https://ec.europa.eu/info/cookies_en">
            New EU cookie law e-Privacy Directive
          </a>
          <p>
            🔗{" "}
            <a href="https://chriswharton.me/2012/05/cookies-doing-nothing-isnt-the-right-answer/">
              Cookies Doing nothing isn't the right answer.
            </a>
          </p>
        </SingleAccordion>
        <h2>Disabling Cookies</h2>
        <Section>
          ❌ If you would like to restrict the use of cookies you can control
          this in your Internet browser. Links to advice on how to do this for
          the most popular Internet browsers are provided below for convenience
          and will be available for the Internet browser of your choice either
          online or via the software help (normally available via key F1).
        </Section>
        <SingleAccordion label="Disable in the Browser">
          <p>
            🔗 \*{" "}
            <a
              href="https://www.cookiesandyou.com/disable-cookies/windows/edge/"
              target="_blank"
            >
              Disabling cookies in MS Edge
            </a>
          </p>
          <p>
            🔗 \*{" "}
            <a
              href="https://support.google.com/chrome/bin/answer.py?hl=en-GB&answer=95647&p=cpn_cookies"
              target="_blank"
            >
              Disabling cookies in Google Chrome
            </a>
          </p>
          <p>
            🔗 \*{" "}
            <a
              href="https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox"
              target="_blank"
            >
              Disabling cookies in Mozilla Firefox
            </a>
          </p>
          <p>
            🔗 \*{" "}
            <a
              href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
              target="_blank"
            >
              Disabling cookies in Apple Safari
            </a>
          </p>
        </SingleAccordion>
        <h2>Angelina Jordan UI cookies</h2>
        <Section>
          CookieHub is a complete cookie consent solution that you can easily
          integrated with any website. The cookie consent plugin can be
          customized to match your brand and is compliant with cookie laws,
          including GDPR. To adjust cookie settings in Angelina Jordan look to
          the left bottom left of this page, click the gear icon and follow the
          instructions.
        </Section>
        <h2>Google Analytics</h2>
        <Section>
          📈 The cookies in use to deliver Google Analytics service are
          described below. Returning, New Session, Time, Custom Variable Data,
          Source
        </Section>
        <h2>Analytics Cookie Types</h2>
        <Section>
          <p>- \_\_utma</p>
          🤚 This cookie is used to determine new and returning visitors. It has
          an expiration time of 2 years. If the ga.js library is executed and no
          \_utma cookie exists, this will be recorded as the users’ first visit
          and a \_utma cookie will be set. If a \_utma cookie is already in
          place, the expiration time is reset and the user is recorded as a
          return visitor.
          <p>- \_\_utmb</p>
          🤚 This cookie is used to determine a new session. The cookie is set
          when the ga.js library executes and there is no \_utmb cookie in
          place. It has an expiration time of 30 minutes, therefore if a user is
          inactive for a period longer than this, a new cookie will be set when
          the library executes and the interaction will be recorded as a new
          session.
          <p>- \_\_utmz</p>
          🤚 This cookie is used to determine the traffic source, medium,
          campaign name and campaign term which delivered the user to your
          website. It is created when the javaScript library executes and
          expires after 6 months. This helps Google collect the data which can
          then help them to determine which traffic sources assist conversions
          within the multi-channel section of Analytics.
          <p>- \_\_utmc</p>
          🤚 This Cookie waits 30 minutes, and then it expires. You see,
          \_\_utmc has no way of knowing when a user closes their browser or
          leaves a website, so it waits 30 minutes for another pageview to
          happen, and if it doesn’t, it expires. And is used to store
          information, such as what time your current visit occurred, whether
          you have been to the site before, and what site referred you to the
          web page.
          <p>
            From Stackoverflow: 🔗{" "}
            <a
              href="https://stackoverflow.com/questions/1823406/what-does-utma-mean"
              target="_blank"
            >
              What does \_\_utma mean?
            </a>
          </p>
          <p>- \_\_utmv</p>
        </Section>
        <Section>
          <p>
            🤚 This cookie is used for storing visitor-level custom variable
            data. It is created when the \_setCustomVar method is used with a
            visitor level custom variable. Like the \_utma cookie, this cookie
            expires after 2 years and is reset each time the user visits your
            site before the expiration of the cookie.
          </p>
          Although each of these cookies has a set expiration time, each time
          the ga.js library is executed and the expiration time has not been met
          the cookie is updated, resetting the expiration date to its original
          value.
          <p>
            These cookies contain no personally identifiable information but
            they will use your computer's IP address to know from where in the
            world you are accessing the Internet.
          </p>
          Google stores the information collected by these cookies on servers in
          the United States. Google may transfer this information to
          third-parties where required to do so by law, or where such
          third-parties process the information on Google's behalf.
        </Section>
        <h3>Opt-out</h3>
        <Section>
          😜 In order to provide website visitors with more choice on how data
          is collected by Google Analytics, Google has developed the Google
          Analytics Opt-out Browser Add-on. The add-on communicates with the
          Google Analytics JavaScript (ga.js) to stop data being sent to Google
          Analytics. The Google Analytics Opt-out Browser Add-on does not affect
          usage of the website in any other way. A link to further information
          on the Google Analytics Opt-out Browser Add-on is provided below for
          your convenience.
        </Section>
        <h2>Opt Out Google tools</h2>
        <p>
          🔗{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout?hl=None"
            target="_blank"
          >
            Opt Out Google tools
          </a>
        </p>
        <Section>
          ⚒️ For more information on the usage of cookies by Google Analytics
          please see the Google website. A link to the privacy advice for this
          product is provided below for your convenience.
        </Section>
        <h2> Hubspot</h2>
        <Section>
          <p>- \_\_hstc Cookie</p>
          🥠 About this cookie \_\_hstc
          <p>
            This cookie name is associated with websites built on the HubSpot
            platform. It is reported by them as being used for website
            analytics.
          </p>
          The main purpose of this cookie is: Performance
        </Section>
        <h4>Key numbers for \_\_hstc</h4>
        <Section>
          🗝️ Cookies with this name have been found on 316 websites, set by 269
          host domains. It has been found as a First Party cookie on 277
          websites and a Third Party cookie on 71 websites. It has been found as
          a Persistent cookie on 348 websites, with an average life span of 725
          days. It has been found as a Session cookie on 0 websites. Note: Many
          technologies or services use cookies that will be common to different
          websites and can be identified by name alone. However this is not
          always true. More specific information can sometimes be found with a
          website based search.
        </Section>
        <h2>Privacy Google</h2>
        <p>
          🔗{" "}
          <a
            href="https://www.google.com/analytics/learn/privacy.html"
            target="_blank"
          >
            Google Analytics Privacy Policy
          </a>
        </p>
        <Section>
          🗠 Google Analytics is a web analytics tool I use to help understand
          how visitors engage with this website. It reports website trends using
          cookies and web beacons without identifying individual visitors.
        </Section>
        <h2>Read Analytics Policy</h2>
        <Section>
          <p>
            🔗{" "}
            <a
              href="https://www.google.com/analytics/learn/privacy.html"
              target="_blank"
            >
              Google Analytics Privacy Policy
            </a>
          </p>
          <h2> Google AdSense</h2>
          💹 Google AdSense, a third party affiliate marketing network, uses
          cookies to help make sure I get a commission when you buy a product
          after clicking on a link or ad banner that takes you to the site of
          one of their merchants.
        </Section>
        <h2>Read AdSense Policy</h2>
        <p>
          🔗{" "}
          <a
            href="https://support.google.com/adsense/bin/answer.py?hl=en&answer=48182"
            target="_blank"
          >
            Google AdSense Privacy Policy
          </a>
        </p>
        <h2>Create Your Own</h2>
        <Section>🦸 Google AdSense Privacy Policy creator</Section>
        <p>
          🔗{" "}
          <a
            href="https://www.termsfeed.com/blog/privacy-policy-google-adsense/"
            target="_blank"
          >
            Privacy Policy Creator Google
          </a>
        </p>
        <h2> Donation Policy</h2>
        <Section>
          🩸 All Donations thought our external pay sites and or through our
          PayPal buttons will not be refundable, as they are a donation to a
          free website designer, that has limited ability's to do money
          transfers back to you. Thank You for your donations to
          publiuslogic.com.
          <h2> Comment Policy</h2>
          🩸 We want you to feel at home when you post a comment on
          publiuslogic.com. We want everyone to feel at home posting comments on
          publiuslogic.com. We don’t know what your home is like, but we know
          how we expect people to behave when they visit ours. That’s why we
          reserve the right to delete comments and ban users as needed to keep
          the comment threads here civil and substantive.
        </Section>
        <h2>1 house rule is simple</h2>
        <h2>Don’t be a jerk</h2>
        <Section>
          Want to be the kind of commenter we’d love to bring home to
          Thanksgiving dinner? Here’s what we like to see in comments: Weigh in
          with smart, informed ideas that contribute further to the story. Give
          us useful, constructive criticism. Spot a typo or an error? Let us
          know and we will correct it. Demonstrate and share the intelligence,
          wisdom, and humor we know you possess.
        </Section>
        <h2> Disclosure Policy</h2>
        <Section>
          🩸 I make money on this website through affiliate programs. If you
          click an affiliate link or ad banner and buy the product, you help
          support this website because I'll get a percentage of that sale.
        </Section>
        Donald Boulton and this 🔗{" "}
        <a href="https://mansbooks.com" target="_blank">
          Angelina Jordan
        </a>{" "}
        🗸 Website is a Affiliate for Google AdSense.
        <Section>
          What this means for you: - I became an affiliate to earn revenue
          towards the costs of running and maintaining this website. Where I
          have direct control over which ads are served on this website I offer
          only products that are directly related to the topic of this website
          and products that a reader/subscriber would have a genuine interest in
          or need of. - I do not and will not recommend a product just for the
          sake of making money. - I do not let the compensation I receive
          influence the content, topics, posts, or opinions expressed on this
          website. - I respect and value my readers too much to write anything
          other than my own genuine and objective opinions and advice. Just like
          this website, my Disclosure Policy is a work in progress. As the
          revenue streams evolve, so will this page.
        </Section>
        <Section>
          <h2>License OBSD</h2>
          🔰 The 0BSD (Zero-Clause BSD) license.
          <p>Copyright (C) [year] by [copyright holder] [email]</p>
          <p>
            Permission to use, copy, modify, and/or distribute this software for
            any purpose with or without fee is hereby granted.
          </p>
          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL
          WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED
          WARRANTIES OF MERCHANTABILITY AND FITNESS.
          <p>
            IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
            RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF
            CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
            CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
          </p>
        </Section>
        <Section>
          <h2>Attribution</h2>
          Everything Under Father God
        </Section>
        <h2>Purchases</h2>
        <h2>Purchase Policy</h2>
        <h3>Return Policy working</h3>
      </div>
    </Layout>
  );
}
