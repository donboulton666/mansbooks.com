import Head from "next/head";
import Link from "next/link";
import Image from "next/legacy/image";
import Layout from "@components/PageLayout";
import Center from "@components/Center";
import Section from "@components/Section";
import LeftText from "@components/LeftText";
import ColumnGridLeft from "@components/column-grid-left";
import VideoWrapper from "@components/VideoWrapper";
import SingleAccordion from "@components/SingleAccordion";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import seventhHeaven from "../public/angie/seventh-heaven.jpg";
import love from "../public/angie/angelina-jordan-logo-800.jpg";
import nothingHandsHeart from "../public/angie/angelina-jordan-hands-over-heart-singing-whitney-houstons-i-have-nothing.jpg";
import summerTime from "../public/angie/young-angelina.jpg";
import goldenBuzzer from "../public/angie/angelinas-agt-golden-buzzer.jpg";
import heartLove from "../public/angie/angelina-makes-a-heart-sending-love-to-her-fans.jpg";
import angieImage from "../public/icons/apple-touch-icon.png";
import Stars from "@components/Stars";
import Bio from "@components/Bio";

export default function LocalProfile() {
  return (
    <Layout>
      <Stars />
      <>
        <Head>
          <title>Angies Profile</title>
          <>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: "Privacy",
                url: "https://mansbooks.com/angies-profile",
                image: {
                  "@type": "ImageObject",
                  url: angieImage,
                  width: "1400",
                  height: "450",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Mansbooks",
                },
                license: "http://mansbooks.com/license",
              })}
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@id": "https://mansbooks.com",
                "@type": "Organization",
                address: "LA, Evil Earth",
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "donaldboulton@gmail.com",
                  telephone: "+405-863-2165",
                },
                description: "Angelina's Profile",
                email: "donaldboulton@gmail.com",
                founder: {
                  "@id": "https://donboulton.com",
                },
                location: "LA, Evil Earth",
                image: {
                  "@type": "ImageObject",
                  url: angieImage,
                  width: "1400",
                  height: "450",
                },
                logo: {
                  "@type": "ImageObject",
                  url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFRYVDhgQEhgNEh0PExYVFx8eGBYVIhUaHysjHR0oKRUiJTUlKC0vMjIyGSU4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7NTsyOzs7OzsvLy81OzU7NjU1Ozs1LzY7OzsvNS87OzsvLy87OzsvLzIvLy87Lzs7O//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABgcFAf/EAB0QAAEFAQEBAQAAAAAAAAAAAAEAAgMEEQUxIRL/xAAXAQADAQAAAAAAAAAAAAAAAAACAwQA/8QAHBEAAQQDAQAAAAAAAAAAAAAAAgABAxEEEyEx/9oADAMBAAIRAxEAPwCu3Z2wwO0pTl6UYs5o9Wl2ZJBAc3xTm3LaN4/nfVBk5emuKuDH2H6qdR6MZYPoQlPnSWGxDdXFYEljaGSCipPHTqtlgJxKzeRG6zpaPUIQyALt1KjJ2fi2IOUxrBgQhCcAtSxG9r//2Q==",
                },
                name: "MansBooks",
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
                      "@id": "https://mansbooks.com/angies-profile",
                      name: "Angelina's Profile",
                    },
                    position: "2",
                  },
                ],
                numberOfItems: "2",
                name: "Breadcrumbs",
              })}
            </script>
          </>
        </Head>
        <div className="mb-10 px-4 py-6 sm:p-6 md:px-4 md:py-10">
          <div className="mx-auto grid max-w-4xl grid-cols-1 lg:max-w-5xl lg:grid-cols-2 lg:gap-x-10">
            <div className="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3 sm:row-start-2 sm:bg-none sm:p-0 lg:row-start-1">
              <h1 className="mt-1 text-lg text-wine-200 sm:text-wine-300 md:text-2xl">
                Angelina Jordan
              </h1>
              <div className="text-sm font-medium leading-4 text-white sm:text-slate-500">
                Queen Of Jazz
              </div>
              <Bio />
            </div>
            <div className="col-start-1 col-end-2 row-start-1 grid gap-2 sm:mb-6 sm:grid-cols-1 lg:col-start-1 lg:row-span-4 lg:row-end-6 lg:mb-0 lg:gap-2">
              <Image
                src={seventhHeaven}
                alt="Seventh Heaven"
                className="mb-4 h-full w-full content-center rounded-lg sm:col-span-2 sm:h-52 lg:col-span-full"
                loading="lazy"
              />
            </div>
            <dl className="item-center row-start-2 mt-4 flex text-xs font-medium sm:row-start-3 sm:mt-1 md:mt-2.5 lg:row-start-2">
              <dt className="sr-only">Reviews</dt>
              <dd className="item-center flex text-wine-300">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  className="mr-1 stroke-current"
                >
                  <path
                    d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  4.89 <span className="font-normal text-slate-400">128</span>
                </span>
              </dd>
              <dt className="sr-only">Location</dt>
              <dd className="item-center flex">
                <svg
                  width="2"
                  height="2"
                  aria-hidden="true"
                  fill="currentColor"
                  className="mx-3 text-slate-300"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 text-slate-400"
                  aria-hidden="true"
                >
                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>
                Los Angeles CA.
              </dd>
            </dl>
            <div className="col-start-1 row-start-3 mt-4 self-center sm:col-start-2 sm:row-span-2 sm:row-start-2 sm:mt-0 lg:col-start-1 lg:row-start-3 lg:row-end-4 lg:mt-6">
              <Link
                href="/expo/seventhheaven"
                type="button"
                className="rounded-lg bg-wine-300 px-3 py-2 text-sm font-medium leading-6 text-white"
              >
                7th Heaven
              </Link>
            </div>
            <div className="col-start-1 mt-4 text-sm leading-6 text-slate-300 sm:col-span-2 lg:col-span-1 lg:row-start-4 lg:mt-6">
              <div>
                Angelina Jordan Astar was born and raised in Oslo, Norway; this
                world-renowned singer has earned fantastic reviews for the
                amazing breadth, depth and maturity of her vocal talent that
                simply belies her young age.
              </div>
              <Section>
                <div>
                  Amazingly, her passion for music began at just one-and- a-half
                  years of age when Angelina first saw Whitney Houston on
                  YouTube performing I Will Always Love You. Whitney - and later
                  Billie Holiday, Dinah Washington - became her first major
                  musical influences. At the age of seven, Angelina auditioned
                  for Norway’s Got Talent performing Billie Holiday’s Gloomy
                  Sunday. She won the competition with the show drawing record
                  TV audiences.
                </div>
              </Section>
            </div>
          </div>
          <div>
            <Section>
              <div>
                Angelina’s videos have received over several billions views on
                YouTube and more than 4 billion views on Facebook. Amazingly,
                her passion for music began at just one-and- a-half years of age
                when Angelina first saw Whitney Houston on YouTube performing I
                Will Always Love You. Whitney - and later Billie Holiday, Dinah
                Washington - became her first major musical influences. At the
                age of seven, Angelina auditioned for Norway’s Got Talent
                performing Billie Holiday’s Gloomy Sunday. She won the
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
                charitable causes to which Angelina has given her talent include
                the Rainforest Alliance at the American Museum of Natural
                History in New York and Ein Herz für Kinder in Berlin where she
                helped raise over 21 Million Euros for children and families in
                need.
              </div>
            </Section>
            <Section>
              <div>
                This multi-talented singing prodigy has also written a
                successful, illustrated children’s book in her native Norway
                making Angelina the youngest published author in the country’s
                history. Based on the true story of when she was six years old,
                Angelina met a homeless, shoeless girl. After they talked for a
                long time, she gave the girl her shoes and vowed never to appear
                on stage again wearing shoes until all the world’s children had
                shoes. Since that time, Angelina has always performed barefoot
                in public.
              </div>
            </Section>
            <Section>
              Angelina Jordan barefoot queen is the winner of Norway got talent
              2014. She also auditioned for America's got talent in 2020 where
              she received GOLDEN BUZZER from Heidi Klum. Currently, she signed
              with Republic records. August 2020.
            </Section>
            <Center>Extended Profile Information:</Center>
            <div>
              <div>
                I may be a little late to have discovered this unbelievable
                musical phenomenon, but Angelina Jordan continues to impress and
                inspire me daily. The more I found out about her, the more I
                wanted to hear her sing and uncover more of her story. This
                would account for the length and breadth of this new post.
                There's enough here to keep you informed, inspired, and
                entertained at your own pace.
              </div>
              <div>
                I want to sing for the whole world. Singing is as important as
                breathing to me. I just love to sing. — Angelina Jordan
              </div>
              <div>
                I recently discovered and am thoroughly enjoying listening to an
                amazingly talented young artist—Angelina Jordan Astar from Oslo,
                Norway. Born January 10, 2006, this musical child prodigy
                started singing very early in life.
              </div>
              <div>
                Thanks to her maternal grandmother, Mery Zamani, Angelina began
                listening to classic American jazz artists when she was a very
                young child. She started singing around{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/VJjG68Dfr-8"
                  target="_blank"
                >
                  <span className="text-blue-500">18 months</span>
                </a>{" "}
                and by 3 knew that's what she wanted to do with her life—become
                an international singing superstar.{" "}
              </div>
              <div>
                Luckily, her family has supported her in that direction. As a
                young child, Angelina attended the Oslo Waldorf School and
                participated in the Oslo School of Music and Performing Arts
                after-school program where she received vocal training.{" "}
              </div>
              <div>
                In addition to singing, she also learned how to play 4
                instruments—piano, violin, guitar, and flute—and she paints! She
                also writes regularly in her journal, part of which was later
                turned into a book. More on that below. She speaks several
                languages. For years she has been covering other artists and is
                now starting to record her own songs.{" "}
              </div>
              <div>Enters Norway's Got Talent at 7 years old and wins</div>
              <div className="inline">
                <div className="center flex justify-center">
                  <a href="https://kenchawkin.files.wordpress.com/2021/06/angelina-singing-summertime-on-ngt-at-7-years-old-.png">
                    <Image
                      src={summerTime}
                      alt="Seventh Heaven"
                      className="flex h-60 w-96 justify-center rounded-lg object-center sm:col-span-2 sm:h-52 lg:col-span-full"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
              <div>
                In these earlier videos, it is totally incongruous to see such a
                small young child performing old American jazz standards on
                Norway's Got Talent. For her audition she sang{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=d3gSho9yf88"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Billie Holiday's version of Gloomy Sunday
                  </span>
                </a>
                . The judges could not believe what they were hearing. Some were
                at a loss for words; others were teary-eyed. After Angelina
                finished singing, the audience and judges rose to their feet
                applauding wildly. As they sat down and the judges started
                interviewing Angelina, we hear music playing softly in the
                background. It's the beautiful song,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://theuncarvedblog.com/2021/10/07/how-long-will-i-love-you-sung-by-ellie-goulding-highlights-4-romantic-comedies-by-richard-curtis/"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    How Long Will I Love You?
                  </span>
                </a>
                That's the moment Norway, and, when the video went viral, the
                rest of the world, fell in love with Angelina and her amazing
                voice.
              </div>
              <div>
                After Angelina auditioned for NGT, one of the judges concluded
                her remarks with this statement:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/d3gSho9yf88?t=278"
                  target="_blank"
                >
                  <span className="text-blue-500">You ARE music!</span>
                </a>
                <span className="underline"></span> The other finale judge said:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/d3gSho9yf88?t=285"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    I think that you are born to sing
                  </span>
                </a>
                , and added in front of everyone that we have a superstar.
                Afterwards the judges said they were blown away, that Angelina
                was the best they'd seen.{" "}
              </div>
              <div>
                Watch the{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=zN4kAof1is0't=5s"
                  target="_blank"
                >
                  <span className="text-blue-500">final full show</span>
                </a>{" "}
                where
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/zN4kAof1is0?t=112"
                  target="_blank"
                >
                  <span className="text-blue-500">she sings Summertime</span>
                </a>{" "}
                and goes on to win NGT with 46% of the vote at 7 years of age!
                See{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/O2bX15tYFVk"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan All Performances On Norways Got Talent
                  </span>
                </a>
                .
              </div>
              <Center>Norways got talent All Performances</Center>
              <VideoWrapper>
                <LiteYouTubeEmbed
                  id="O2bX15tYFVk"
                  title="AGT All Performances"
                />
              </VideoWrapper>
              <h2>She puts a spell on you</h2>
              <div>
                Here is another jaw-dropping, mind-blowing experience. Watch
                Angelina, now 9, belt out{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=nwFloCPXzCs"
                  target="_blank"
                >
                  <span className="text-blue-500">I Put A Spell On You</span>
                </a>{" "}
                in a studio with musicians, and later, live on{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=eASqvRGt46k"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Germany's Little Big Stars
                  </span>
                </a>
                . Often covered in the past, this 1956 song was written and
                composed by Jalacy Screamin' Jay Hawkins. His own recording of
                it was selected as one of the Rock and Roll Hall of Fame's 500
                Songs that Shaped Rock and Roll. You have to wonder how she
                discovered such historically significant artists.{" "}
                <a
                  href="https://www.youtube.com/watch?v=orNpH6iyokI"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="text-blue-500">Watch him sing it</span>
                </a>
                , then you will understand how she honors him he's on the candle
                she holds up to the camera by staying true to the original, yet
                creating her own version of it see the conductor nodding at the
                written directions of her arrangement.{" "}
              </div>
              <div>
                Angelina has recorded over 130 covers from 80 different artists
                that she's posted on Facebook and YouTube over the years. She
                arranges her own versions of popular songs and directs musicians
                how to play them. This video ranks as one of the most outrageous
                mind-blowers, with hundreds of reactor videos and millions of
                views! I love to see reactors try to respond in disbelief when
                they hear her sing this song. It's a double enjoyment for
                me—reacting to their reactions, as well as my own, again!! For
                example:{" "}
                <a href="https://youtu.be/_-a-7vJKPg0">
                  <span className="text-blue-500">Soul Reacts</span>
                </a>
                , a songwriter who cannot comprehend what he is hearing; and{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/Ph8MtT1FMJE"
                  target="_blank"
                >
                  <span className="text-blue-500">joethmarkaster</span>
                </a>
                's over-the-top reaction.{" "}
              </div>
              <Center>I put a Spell on You</Center>
              <VideoWrapper>
                <LiteYouTubeEmbed
                  id="nwFloCPXzCs"
                  title="She puts a spell on you"
                />
              </VideoWrapper>
              <div>
                Pontus Österlin at{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/4HM3kL7CEcQ"
                  target="_blank"
                >
                  <span className="text-blue-500">PO Talks</span>
                </a>{" "}
                put together a brilliantly edited{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/4HM3kL7CEcQ"
                  target="_blank"
                >
                  <span className="text-blue-500">8-minute compilation</span>
                </a>{" "}
                of a range of many reactors' reactions as Angelina belts out I
                Put A Spell On You. During the credits listing the mark, he
                included footage of Jay Hawkins screaming out his song, with
                parallel clips of Angelina.{" "}
                <span className="underline">
                  This is definitely worth watching!
                </span>
              </div>
              <div>
                Later inserted The following year I replied to a question on
                Twitter as to which black and white film I thought was the best
                and most watched in 2001 and I said this one directed by Per
                Heimly adding his Twitter address. He liked it and we started a
                DM. I was thrilled and surprised and told him the world owed him
                a great debt for what he did for Angelina and her family,
                especially her grandma Mery Zamani. He messaged back: It's a
                Family Of Great Genius . 🤘❤️🙏
              </div>
              <div>
                Here is another newer compilation:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/276tTi01RUE"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Look at the reactions of these beautiful girls! Angelina
                    Jordan' I Put A Spell On You React.
                  </span>
                </a>{" "}
                The names of the 7 reactors and their YouTube links are listed
                in the notes.{" "}
              </div>
              <div>
                BIBISI also posted this{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=ZkQc5UycXeA"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    ANGELINA JORDAN BEST 23 VOCAL COACHES ANALYSIS REACTION
                    MASHUP' COMPILATION I Put A Spell on You
                  </span>
                </a>
                .
              </div>
              <div>
                I also enjoyed One Stop Reactions{" "}
                <a
                  href="https://www.youtube.com/watch?v=wGXVX3LZIzM't=15s"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="text-blue-500">
                    Latest 2022 Special Reactions for Angelina Jordan '; I Put A
                    Spell On You | compilation reaction!
                  </span>
                </a>
              </div>
              <div>
                Another song that’s up there is Feeling Good. She was 10 years
                old when she performed it at{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/7HaMvkflBAo"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Allsang På Grensen – TV2
                  </span>
                </a>
                , and later{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/p8kAL-sGJx8"
                  target="_blank"
                >
                  LIVE on{" "}
                  <span className="text-blue-500">The Stream Gir Tilbake</span>
                </a>
                .
              </div>
              <div>America's Got Talent Golden Buzzer</div>
              <div>
                Six years later, Angelina appeared on America's Got Talent: The
                Champions 2020 when she was 13 years old. She told Heidi Klum
                that she had waited 10 years to sing for Simon Cowell. And it
                was on the biggest stage in the world! This was her moment. She
                auditioned with her own spellbinding version of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=qF0JV28vgLw"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Queen's Bohemian Rhapsody
                  </span>
                </a>
                , which won her a<span className="text-blue-500"> </span>
                Golden Buzzer from Heidi, who could hardly contain herself.
                After the show had aired, Angelina{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://twitter.com/angelinajordanA/status/1214379711070998528"
                  target="_blank"
                >
                  <span className="text-blue-500">posted a tweet</span>
                </a>{" "}
                thanking all for having her and for the Golden Buzzer, which is
                included there.{" "}
              </div>
              <div className="inline">
                <div className="center content-center justify-center">
                  <a href="https://kenchawkin.files.wordpress.com/2021/06/angelinas-agt-golden-buzzer-1.png">
                    <Image
                      src={goldenBuzzer}
                      alt="Golden Buzzer"
                      className="flex h-60 w-96 content-center justify-center rounded-lg sm:col-span-2 sm:h-52 lg:col-span-full"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
              <div>
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=l_TLzzF7DMU't=42s"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Reflecting on that moment, Angelina said
                  </span>
                </a>
                : When Heidi stood up it felt like time stood still. I can't
                believe it. The confetti felt like millions of gold stars were
                falling on me. It was really the best moment of my life.{" "}
              </div>
              <div>
                As the judges and audience members were on their feet applauding
                wildly, I heard an excerpt of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://theuncarvedblog.com/2018/01/21/the-hauntingly-beautiful-voice-of-eva-cassidy/"
                  target="_blank"
                >
                  <span className="text-blue-500">Eva Cassidy</span>
                </a>{" "}
                singing{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/2rd8VktT8xY"
                  target="_blank"
                >
                  <span className="text-blue-500">Over The Rainbow</span>
                </a>{" "}
                playing in the background and thought, how appropriate! One
                amazing angelic voice honoring another as her dream finally,
                really did come true!{" "}
              </div>
              <div>
                Talent Recap posted{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/3-Q3I7FfvUU"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan: ALL Performances on America's Got Talent
                    Champions
                  </span>
                </a>
                , which includes the introduction. Top 10 Talent also posted{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=07O5ESBUT6Q"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan ALL Performances on America's Got Talent:
                    Champions!
                  </span>
                </a>
                , which includes what happened after Heidi Klum hit the Golden
                Buzzer.{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=07O5ESBUT6Q't=227s"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    She then went on stage to hug and kiss Angelina on both
                    cheeks
                  </span>
                </a>
                . The other judges joined them on stage. Simon also hugged her
                and said: I don't think you know how good you are. Really! The
                camera then segues to Angelina's family: her thankful uncle
                Michael, sister Juliette's happy tears, and mother Sara and
                grandma Mery hugging. Kaleidoscope RMX also posted the{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=3QLhZ5N8-F4"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Full Golden Buzzer Moment
                  </span>
                </a>
                .
              </div>
              <div>
                Angelina later returned for The Champions Season 2 2020 final
                round to sing her unique take on Elton John's{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/ZhEOq2EHjIg"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Goodbye Yellow Brick Road
                  </span>
                </a>
                . She blew the judges away again, and the crowd went nuts in
                joyful disbelief.{" "}
              </div>
              <div>
                Angelina was later joined by amazing sand artist{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=StT8I7sa1f4"
                  target="_blank"
                >
                  <span className="text-blue-500">Kseniya Simonova</span>
                </a>{" "}
                and talented young violinist Tyler Butler-Figueroa for an
                exciting group performance of Someone You Loved in the AGT
                Champions Finale.{" "}
              </div>
              <Center>Someone You Loved</Center>
              <VideoWrapper>
                <LiteYouTubeEmbed id="3-Q3I7FfvUU" title="Someone You Loved" />
              </VideoWrapper>
              <div>
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/channel/UChFf2i9AM8r1cYvm5tBel1A"
                  target="_blank"
                >
                  <span className="text-blue-500">Boris Palenovski</span>
                </a>{" "}
                later edited all 3 performances together in higher res:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/D8yKeA9lVLw"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan 13'; All performances'; America's Got
                    Talent: the Champions Season 2'; 4K video
                  </span>
                </a>
                . See 13-year-old Angelina wearing a T-shirt with her 7-year-old
                face on it from Norway's Got Talent at{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/D8yKeA9lVLw?t=232"
                  target="_blank"
                >
                  <span className="text-blue-500">3:52</span>
                </a>
                .
              </div>
              <div>The girl with a thousand voices</div>
              <div>
                Angelina later recorded{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/MS2XdfgIti0"
                  target="_blank"
                >
                  <span className="text-blue-500">Bohemian Rhapsody</span>
                </a>
                , with Queen's blessing, for her official channel. She also
                sings many cover songs by today's great artists, like{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=8gJuprckBxI"
                  target="_blank"
                >
                  <span className="text-blue-500">Adele's All I Ask</span>
                </a>{" "}
                and her cover of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=mCANSHokpIo"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Bob Dylan's Make You Feel My Love
                  </span>
                </a>
                . She even sounds like{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=LbXUKzOxACU'list=RDqF0JV28vgLw'index=4"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Amy Winehouse in Back To Black
                  </span>
                </a>
                . Her performance of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=eTcvvO6B3Io"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Whitney Houston's I Have Nothing
                  </span>
                </a>{" "}
                is filled with loving power and heartfelt feelings as seen in
                this screensaver from a video of her singing the song.{" "}
              </div>
              <div className="center inline">
                <div className="center content-center justify-center">
                  <a href="https://kenchawkin.files.wordpress.com/2021/06/angelina-jordan-hands-over-heart-singing-whitney-houstons-i-have-nothing.png">
                    <Image
                      src={nothingHandsHeart}
                      alt="nothingHandsHeart"
                      className="flex h-60 w-96 content-center justify-center rounded-lg sm:col-span-2 sm:h-52 lg:col-span-full"
                      loading="lazy"
                    />
                  </a>
                  <figcaption className="content-center">
                    Angelina Jordan recording{" "}
                    <a
                      rel="noreferrer noopener"
                      href="https://www.youtube.com/watch?v=eTcvvO6B3Io"
                      target="_blank"
                    >
                      I Have Nothing Whitney Houston Tribute
                    </a>
                  </figcaption>
                </div>
              </div>
              <div>
                Angelina may emulate these artists, vocally and emotionally as
                she inhabits their songs, but she interprets them in her own
                unique stylistic way, often times better than the original! Like
                any great jazz artist, she is developing her own sound, finding
                her own voice, and now performing her own music. We are all in
                for many surprising treats.
              </div>
              <div>
                When she was 10 years old Angelina was asked to record a song by
                Brandon Lowry, aka{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://en.wikipedia.org/wiki/Sterling_Fox"
                  target="_blank"
                >
                  <span className="text-blue-500">Sterling Fox</span>
                </a>{" "}
                or Baby FuzZ. Angelina's version was a demo, not meant to be
                released. She said she would never record it again because it
                deals with suicide. Nothing happened with his song, which he had
                written and recorded with some Norwegian friends. Someone later
                leaked the audio. Rusty Shackleford provides an explanation{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=exlgtCM_rac'lc=Ugx0tcGGIhK6Qsdk2bl4AaABAg"
                  target="_blank"
                >
                  <span className="text-blue-500">in this comment</span>
                </a>
                . He includes Baby Fuzz’s comment—an attempt to clear the air
                about it after he had heard it. Angelina's version of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=Dv8mjCh5iiE"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    I'm Still Holding out for You
                  </span>
                </a>{" "}
                could easily have become a Top 10 hit.
              </div>
              <div>Worldwide online reactions</div>
              <div>
                Besides her impressive vocal skills, what gives listeners
                goosebumps and moves them to tears are the powerful soulful
                feelings she puts into each song. How can someone that young,
                who has not yet experienced life’s ups and downs, express such
                emotions and understanding? It boggles the mind! There is no
                doubt that Angelina is an old soul in a young body—something the
                judges at NGT and AGT said, as well as others who have commented
                on her performances.{" "}
              </div>
              <div>
                She has 2 billion Facebook views and over half a billion on
                YouTube. There are many compilation channels of her music and
                100’s of reaction videos of people responding to some of the
                many songs she’s posted. Most of them are visibly moved,
                jaw-dropped at a loss for word.{" "}
              </div>
              <div>
                One of the more qualified reactors is Spanish-speaking vocal
                coach{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/playlist?list=PLsJFvt698FRddwD9Lt65FNn3KIw9Thxto"
                  target="_blank"
                >
                  <span className="text-blue-500">Ceci Dover</span>
                </a>
                <span className="text-blue-500">.</span> She explains things in
                detail, sharing valuable advice. See this one she posted of
                Angelina covering{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=87LhCorUlOE"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Lana Del Ray's Born To Die
                  </span>
                </a>
                .
              </div>
              <div>
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/e3NKisBWbdE"
                  target="_blank"
                >
                  <span className="text-blue-500">In this enjoyable video</span>
                </a>{" "}
                select English subtitles, Ceci uses excerpts of Angela singing
                between ages 7-13 to give us an informed overview of the
                evolution of her amazingly talented voice.{" "}
              </div>
              <div>
                See{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=7OXnGxP1-t4"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan's rise to stardom! 🚀'; “When You Believe”
                    ⏳ 🎼 🏆
                  </span>
                </a>{" "}
                Along with Angelina's cover of this iconic song is a visual
                montage created by{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/channel/UCam0sj2MWFz2lCx_IU3I5dg"
                  target="_blank"
                >
                  <span className="text-blue-500">Kaleidoscope RMX</span>
                </a>
                . It shows her commitment to and belief in herself using
                excerpts from NGT to AGT and a sweet surprise ending. Very
                emotional and inspiring!{" "}
              </div>
              <div>
                Creatively collaborating with Stargate, signing with Republic
                Records
              </div>
              <div>
                After turning down many requests to sign Angelina, the family
                eventually settled on what they felt was the right record
                company that would allow her to create her own style of music,
                and not mold her into something artificial for commercial gain.{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://americansongwriter.com/million-miles-angelina-jordan-song-interview/"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    When she was 14, they signed
                  </span>
                </a>{" "}
                with UMG's, United Music Group{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.republicrecords.com/"
                  target="_blank"
                >
                  <span className="text-blue-500">Republic Records</span>
                </a>
                .{" "}
              </div>
              <div>
                Angelina released her first singles on the Republic Records
                label: “Million Miles” in November 2020 and “7th Heaven” in
                March 2021. Both songs are co-credited to the multiple
                Grammy-award-winning Los Angeles-based Norwegian production duo,
                Tor Erik Hermansen and Mikkel Storleer Eriksen, aka{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://en.wikipedia.org/wiki/Stargate_record_producers"
                  target="_blank"
                >
                  <span className="text-blue-500">Stargate</span>
                </a>
                . Read how this creative collaboration came about in these
                postings by this Angelina Jordan Fan Club'; The Shield on the
                WIKI:{" "}
                <a href="https://www.wiki.angelinajordanfanclub.com/stargate/">
                  <span className="text-blue-500">
                    Angelina Jordan and Stargate
                  </span>
                </a>
                .
              </div>
              <div>
                Republic released 4 videos—2 Live in Studio and 2 Official Lyric
                Videos:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=3KxvwuZ7ocenter"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Million Miles Live in Studio
                  </span>
                </a>{" "}
                and{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/NhKRh5ZtuWk"
                  target="_blank"
                >
                  <span className="text-blue-500">Official Lyric Video</span>
                </a>
                , a very personal song about losing her grandfather; and a more
                upbeat{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/bM8DzMRbiIc"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    7th Heaven Live in Studio
                  </span>
                </a>{" "}
                and{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/o4Vl3I1WWq4"
                  target="_blank"
                >
                  <span className="text-blue-500">Official Lyric Video</span>
                </a>{" "}
                about her philosophy of life. The live in-studio videos were
                filmed in a sparse lounge-like setting. The official lyric
                videos contain the words to the songs with paintings by her
                grandmother{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=i9NxX0tSjS0"
                  target="_blank"
                >
                  <span className="text-blue-500">Mery Zamani</span>
                </a>
                , some of which were printed onto the outfit Angelina wore on
                AGT. A third, more personal,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/XA1_CUaM52I"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan'; Million Miles Official Music Video
                  </span>
                </a>{" "}
                was later released in Jan 27, 2021.{" "}
              </div>
              <Center>Million Miles</Center>
              <VideoWrapper>
                <LiteYouTubeEmbed id="NhKRh5ZtuWk" title="Million Miles" />
              </VideoWrapper>
              <Center>Seventh Heaven</Center>
              <VideoWrapper>
                <LiteYouTubeEmbed id="bM8DzMRbiIc" title="Seventh Heaven" />
              </VideoWrapper>
              <div>
                Partnering with Stargate and Republic officially launched the
                career of this young teenage artist. She is now getting to
                create and produce her own material. There is no question this
                original artist will evolve into the international superstar she
                dreamed of becoming ever since she was 3!{" "}
              </div>
              <div>
                RECENTLY ADDED: Republic Records later produced and Angelina
                Jordan Official posted on July 15, 2021 a new video of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/9rLiWvwzbCA"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan singing 7th Heaven
                  </span>
                </a>{" "}
                in a club setting with an audience. The story line includes a
                waitress listening to Angelina and the band rehearse, working in
                the kitchen dreaming of what her life could be, then at the live
                performance. It includes footage of her and Angelina horsing
                around in the kitchen. Very funny and cute.
              </div>
              The Barefoot Princess / Jazz Queen
              <div>
                You may have noticed that Angelina sings barefoot. There is a
                reason for that. While living abroad with her family in the
                Middle East she came upon a poor young girl, her own age at the
                time, around 6 years old. She was weighing people to earn money
                to feed her orphaned brothers and sisters. Angelina discovered
                this when she spoke to her. She also noticed that the girl was
                barefoot and had scars on her feet.
              </div>
              <div>
                Angelina asked her what she wanted to become. She replied, a
                doctor, but didn't think it could happen. Angelina strongly told
                her to never give up her dreams. She took off her favorite green
                shoes and gave them to her. The girl resisted at first, then
                thanked her, and said she would pray every day for her to
                fulfill her dream to become a superstar and sing for the whole
                world.{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/oXedn08mg2s?t=120"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina told the story in this Variety Media interview.
                  </span>
                </a>{" "}
              </div>
              <div>
                So, in honor of and inspired by that girl, Angelina always
                performs barefoot and still thinks of her, and the many homeless
                and shoeless children everywhere. Angelina actually went on to
                raise millions of Euros for children and families in need. Talk
                about putting yourself in other people’s shoes, or in this case,
                giving your shoes to someone in need! Angelina’s empathy and
                compassionate heart are expressed through her actions as well as
                her amazing voice!{" "}
              </div>
              <blockquote className="h-full w-full">
                <div>
                  Angelina’s empathy and compassionate heart are expressed
                  through her actions as well as her amazing voice!
                </div>
              </blockquote>
              <div>Publishes Between Two Hearts</div>
              <div>
                At 9 years of age, Angelina became Norway's youngest author when
                she published a book about this story.{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.angelinajordanofficial.com/book"
                  target="_blank"
                >
                  <span className="text-blue-500">Between Two Hearts</span>
                </a>{" "}
                is illustrated by her grandmother and painter at a very early
                age. Mery exposed Angelina to jazz before she could read or
                write, and is responsible for her desire to become a jazz
                singer. They create art together, and design and make her own
                clothing. Mery tapes the many videos of Angelina singing. She
                also paints the backdrops for some of them, including images in
                the animated sequence for the lyric version of Million Miles.
                Some of her images were made into clothing that Angelina wears,
                like the colorful pant suit she wore in her first appearance on
                AGT, when she sang Bohemian Rhapsody. See this short{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=Ld0GFRB-2u8"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan book release
                  </span>
                </a>
                <span className="text-blue-500"> </span>
                video.
              </div>
              <div>
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/6p6iL989P_8"
                  target="_blank"
                >
                  <span className="text-blue-500">In a Book Talk podcast</span>
                </a>{" "}
                posted by Angelina Jordan’s publisher, Cappelen Damm, in 2015,
                Erling Kittelsen, a Norwegian author and poet, and friend of the
                family, talks with Angelina about her book. When he was first
                shown her diary containing that episode with the barefoot girl,
                he said it should be made into a book. English subtitles have
                now been provided by her fan club. In between we hear excerpts
                of Angelina singing and small extracts from “Mellom to hjerter”
                <a
                  rel="noreferrer noopener"
                  href="https://angelina-jordan-official-store.creator-spring.com/listing/between-two-hearts-english?product=1227"
                  target="_blank"
                >
                  <span className="text-blue-500">Between Two Hearts</span>
                </a>
                . It is very moving and gives us a glimpse into who Angelina
                really is. For her,
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/6p6iL989P_8?t=520"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Love is very ' Love means everything.
                  </span>
                </a>
                Angelina's book has been translated into English and is
                available for purchase as an eBook on her website:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/redirect?event=comments'redir_token=QUFFLUhqa1hLdVE0NW41ZDg2SFlCMGF0dG9jOWJZRU1UQXxBQ3Jtc0trRmhWZnFmRFBpazcyZHRRenZTdV9pTzdSLS01QTlwMmlHM1NVVTBYNGNuYktLWG5vZk5DdFpTcFNpRkN5UXRHNjByQ1ZNOTlucenter5vMGRDcW9KS0Y2dWt3WGh3X1d4bTZfWWdrS1Qwb3lSaV9hZ0wzWQ'q=https%3A%2F%2Fwww.angelinajordanofficial.com%2Fbook'stzid=UgwyUt6InhcUuBXl7gB4AaABAg"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    https://www.angelinajordanofficial.com/book
                  </span>
                </a>
                .{" "}
              </div>
              <div>
                See a footnote below that I added after ordering and reading the
                eBook.
              </div>
              <div>
                The week her book came out, Angelina Jordan was interviewed by
                Anne Lindmo on the NRK TV show Lindmo Nov 14, 2015. Ms. Lindmo
                asked Angelina to share the story of why she sings barefoot and
                to tell the story of how she met a poor barefoot girl when she
                was 6 years old. She then brings out Angelina's actual diary for
                her to read what she wrote after that encounter with the girl.
                That Norwegian interview has now been translated with English
                subtitles.{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/-cCLDY0CSZ8"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Click on the CC to watch it here
                  </span>
                </a>
                . After the interview,{" "}
                <a
                  href="https://youtu.be/wPfMzMeBLbo"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="text-blue-500">
                    Angelina sings Unchained Melody
                  </span>
                </a>
                .{" "}
              </div>
              <div>
                The whole family nourishes and supports Angelina in her career.
                In fact, her uncle is her manager, her mother handles publicity,
                and her grandmother is her stylist. They have been very
                protective of Angelina, wanting her to still enjoy her childhood
                and complete her education as she pursues her dream to become an
                international star. Throughout it all Angelina remains
                unpretentious and is happily focused on manifesting her musical
                destiny. In a reactor video,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=sPPBtaxWQww'lc=Ugy3sB238SfrSHnXxIZ4AaABAg"
                  target="_blank"
                >
                  <span className="text-blue-500">GEB Endeavors comments</span>
                </a>{" "}
                on how Angelina's uncle became her manager and eventually paved
                the way for the family to move to LA to pursue her career in
                music. It's happening!{" "}
              </div>
              <div>
                It is interesting to note that instead of bowing when an
                audience applauds her, she curtsies. She always comes across as
                dignified yet humble, respectful and loving. A rare talent and a
                very special soul.{" "}
              </div>
              <div>Revealing insights into Angelina's inner world</div>
              <div>
                When Angelina performs, she is in her element. She is calm and
                fearless. It is natural for her to powerfully project the
                emotional content of a song. She appears extroverted on stage,
                yet is in her own world. But ask her questions in an interview,
                and she gives short answers. She seems shy, introverted. She’s
                not comfortable expressing herself personally. However, it seems
                to be easier for her the older she gets.{" "}
              </div>
              <div>
                I think she may be an introvert by nature and inhabits a rich
                inner world. She comes from a deep place. We get a glimpse of
                that world when she sings, and are transformed by it. Here are a
                few hints I've noticed in some interviews.{" "}
              </div>
              <div>
                In this 2016 Norway TV News Feature, Angelina tells the
                interviewer:
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=3XXFu_V8Lcs't=100s"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    I want to sing for the whole world. Singing is as important
                    as breathing to me. I just love to sing.
                  </span>
                </a>
                That says it all.
              </div>
              <blockquote className="h-full w-full">
                <div>
                  I want to sing for the whole world. Singing is as important as
                  breathing to me. I just love to sing. — Angelina Jordan
                </div>
              </blockquote>
              <div>
                Angelina is quite young in this interview when she said:
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/24ORnvVwUmM?t=73"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    I close my eyes and go in a different world.
                  </span>
                </a>
                Her mother Sara said: “I came home one day when my mother looked
                after her. She was well eighteen months, and sang a Whitney
                Houston song in bed. I was almost shocked. It was so beautiful!
                We quickly realized that she had very great interest in music.
                It is she who is first and foremost musical in the family.
                Neither my husband nor I are particularly musical.” This video,{" "}
                <a
                  href="https://youtu.be/odiv-yJk7Ew?t=40"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="text-blue-500">
                    Angelina Jordan'; The Evolution
                  </span>
                </a>
                , includes that clip of Angelina singing as a baby.{" "}
              </div>
              <blockquote className="h-full w-full">
                <div>I close my eyes and go in a different world. </div>
                <cite>
                  A young Angelina to an interviewer asking her about her
                  singing.{" "}
                </cite>
              </blockquote>
              <div>
                Angelina was 1 of 10 finalists in America's Got Talent: The
                Champions 2020, and the winner was going to be announced that
                night. In this{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/QtUgDn73d78"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Short Interview from LA in Norwegian TV2 Monday Feb 17, 2020
                  </span>
                </a>
                , the interviewer asks Angelina about the public's response to
                her singing. She told the interviewer that it's absolutely
                incredible that there are so many people who send so many
                millions of messages, and quoted a few.{" "}
              </div>
              <div>Q: How do you prevent this from getting to your head?</div>
              <div>
                A: I take it all in…and use it to spread love to everyone all
                over the world.
              </div>
              <blockquote className="h-full w-full">
                <div>
                  I take it all in…and use it to spread love to everyone all
                  over the world.
                </div>
                <cite>
                  Angelina Jordan's response to a Norwegian reporter in LA
                  asking her how she prevents all this attention from going to
                  her head.{" "}
                </cite>
              </blockquote>
              <div>
                On Scandinavian TV,
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/97hjWg4ToRQ"
                  target="_blank"
                >
                  <span className="pr-1 text-blue-500">
                    Singer Angelina Jordan: – I don't feel like a 12-year-old |
                    SVT/TV 2/Skavlan
                  </span>
                </a>
                <span className="text-blue-500"> </span>
                Skavlan asks Angelina some deep questions. Her answers are
                revealing!
              </div>
              <div>
                At the start of the interview in Norwegian, Skavlan asks
                Angelina,
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=3HUQZFSPBNQ't=75s"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    What do you find easiest: singing or speaking?
                  </span>
                </a>{" "}
              </div>
              <div>
                She doesn't hesitate to answer, Singing and writing, which is
                what you'd expect from an introvert. He confirms her answer by
                asking, Singing and writing is easiest? Not speaking? Smiling
                and chuckling, she shyly nods her head in agreement.
              </div>
              <div>They then switch to speaking in English.</div>
              <div>
                Q: My first question is, when I see you on stage, I wonder, who
                do you feel that you become?
              </div>
              <div>
                A:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/97hjWg4ToRQ?t=53"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    When I sing I go to another world. In the world, it's like,
                    endless. It's amazing.
                  </span>
                </a>{" "}
                smiles and laughs
              </div>
              <div>Q: What do you mean by endless?</div>
              <div>A: Like, full of happiness, and, I love' It's amazing!</div>
              <div>
                Q: Many people say that you don't sound like a 12-year-old. Do
                you feel like a 12-year-old?{" "}
              </div>
              <div>
                A: I feel like a 12-year-old when I look at my passport.
              </div>
              <blockquote className="h-full w-full">
                <div>
                  When I sing I go to another world. In the world, it’s like,
                  endless. It’s amazing. 'Like, full of happiness, and, I love '
                  It's amazing!
                </div>
                <cite>
                  Angelina Jordan answers Skavlan's questions about what happens
                  to her when she sings on stage.
                </cite>
              </blockquote>
              <div>
                He mentions a song that she's written and will soon perform, and
                asks her what it's about. She explains, It's about someone you
                love, wherever you are, it's a strong love, protects you.{" "}
              </div>
              <div>
                The song sounds like a religious prayer, which could also serve
                as the theme song for a Bond movie. Skavlan said it reminded him
                of the Bond films and asks her if she’s familiar with them. She
                tells him that she got the inspiration for her song from the
                Bond films. He asks if she would sing a little bit of her
                favorite Bond song, and she does, acapela, Diamonds Are Forever.
              </div>
              <div>
                Listen to her sing her song{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/lQtUbVKb0vs"
                  target="_blank"
                >
                  <span className="text-blue-500">Shield</span>
                </a>{" "}
                with the band. It is powerful! Skavlan posted it Nov 12, 2018.
                There's a{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/IUAvEoPxNvw"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    video of her performing this song
                  </span>
                </a>{" "}
                with a band in an open air concert the following year in Norway,
                Jul 12, 2019, when she was 13.
              </div>
              <Center>The Shield</Center>
              <VideoWrapper>
                <LiteYouTubeEmbed
                  id="lQtUbVKb0vs"
                  title="Open air concert, at age 13"
                />
              </VideoWrapper>
              <h2>Describing her destiny</h2>
              <div>
                In this Feb 4, 2021{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.msn.com/en-us/music/news/viral-singing-prodigy-angelina-jordan-releases-new-single-million-miles/ar-BB1doxkY?ocid=st"
                  target="_blank"
                >
                  <span className="text-blue-500">People Magazine article</span>
                </a>
                , Alyssa Johnson asks her: Where do you hope to see yourself in
                five years from now?{" "}
              </div>
              <blockquote className="h-full w-full">
                <div>
                  I’ll have an important name in the music industry and to make
                  timeless music that can live forever. Also to give the best
                  music experience to people and for them to enjoy and feel
                  emotional or dance or make memories with the music I make.
                </div>
                <cite>
                  Angelina Jordan's answer to a People Magazine reporter asking
                  her where she hopes to see herself in 5 years.
                </cite>
              </blockquote>
              <div>
                Angelina is definitely following her bliss and manifesting her
                purpose in life! True to her name, Angelina Jordan Astar is an
                angel and a star sent here to fulfill her destiny and awaken a
                range of emotions in our hearts and touch our souls with her
                incredible voice!{" "}
              </div>
              <div>
                Reacting to Angelina singing Cry Me A River, vocal coach Ceci
                Dover exclaimed in disbelief:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=Gt5wO79Z0Fs't=562s"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    She can sing like this? This is impossible. Oh my gosh!
                    She's music. She's jazz. She's soul. Oh my gosh, I don't
                    know what to say. She's amazing! That's what I want to say.
                  </span>
                </a>
              </div>
              <div>Indeed! That about sums it up.</div>
              <div>
                Angelina Jordan's social media, fan clubs, and overviews
              </div>
              <div>
                Visit her official site:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.angelinajordanofficial.com"
                  target="_blank"
                >
                  <span className="text-blue-500">Angelina Jordan</span>
                </a>
                , and her various social media accounts:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/channel/UC1Pwa4nFvIPbtYVLcBGDpjA"
                  target="_blank"
                >
                  <span className="text-blue-500">YouTube</span>
                </a>{" "}
                and{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/channel/UCv-QOBc_N1xb8dTwqazD9Kg"
                  target="_blank"
                >
                  <span className="text-blue-500">CoverChannel</span>
                </a>{" "}
                to see selected videos of her performing well-known songs,
                including some of her own; and follow her on{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.instagram.com/angelinajordana/"
                  target="_blank"
                >
                  <span className="text-blue-500">Instagram</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.facebook.com/angelinajordanofficial"
                  target="_blank"
                >
                  <span className="text-blue-500">Facebook</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://twitter.com/angelinajordanA"
                  target="_blank"
                >
                  <span className="text-blue-500">Twitter</span>
                </a>
                , and{" "}
                <a
                  href="https://www.tiktok.com/@angelinajordana"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="text-blue-500">TikTok</span>
                </a>
                . To support Angelina join her on{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.patreon.com/angelinajordan"
                  target="_blank"
                >
                  <span className="text-blue-500">Patreon</span>
                </a>
                . Read her{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.republicrecords.com/artists/angelina-jordan"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    profile on Republic Records
                  </span>
                </a>
                .{" "}
              </div>
              <div>
                This{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/channel/UChM_lpT4shdnsez93QMJPig/featured"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan Fanclub Mosarz
                  </span>
                </a>
                , run by her grandmother, posts clips she's taken of family and
                friends, concerts, and rare behind the scenes footage. Here are
                two examples:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/cfn-OMg0T14"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    rehearsing the song, What is Life? that she composed for the
                    orchestra and wrote the lyrics
                  </span>
                </a>
                , and an{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/vq6ek06Q4RU"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    exclusive backstage rehearsal for AGT
                  </span>
                </a>
                .{" "}
              </div>
              <div>
                See{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.wiki.angelinajordanfanclub.com/about-the-wiki/"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan Fan Club '; The Shield
                  </span>
                </a>{" "}
                mentioned above and their{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/channel/UCJnLWcns8O7hZC1bD9IYyhQ"
                  target="_blank"
                >
                  <span className="text-blue-500">YouTube compilations</span>
                </a>
                .
              </div>
              <div>
                Visit{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtube.com/playlist?list=PL2v8kgVeo4EbQD6l_WAVjOfItquzW7oEc"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Rusty Shackelford's YouTube Channel
                  </span>
                </a>{" "}
                for a complete list of every song Angelina has performed. In
                Rusty's complimentary response to voice coach{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/channel/UCEGRUdwLqrUJFydtZg5bl9A"
                  target="_blank"
                >
                  <span className="text-blue-500">Julia Nilon's</span>
                </a>
                in-depth technical reaction to Angelina's performance of I Put A
                Spell On You he gives her{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=hmIqzsYUz0k'lc=Ugw2nMLPFYGWKoTfjWN4AaABAg"
                  target="_blank"
                >
                  <span className="text-blue-500">a comprehensive review</span>
                </a>{" "}
                of the young singer's history that's worth reading.
              </div>
              <div>
                YouTuber,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/c/pa1189j/featured"
                  target="_blank"
                >
                  <span className="text-blue-500">pa1189j</span>
                </a>
                , created a library of individual and mashup quality videos of
                Angelina Jordan.{" "}
              </div>
              <div>
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/user/ooshta"
                  target="_blank"
                >
                  <span className="text-blue-500">My Time</span>
                </a>{" "}
                also created a great compilation of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=mM_a68MdydU'list=PL54XsLUTxk4hbzix016aa_9rXWR3hJL44"
                  target="_blank"
                >
                  <span className="text-blue-500">Angie's Music +</span>
                </a>
                .{" "}
              </div>
              <div>
                Claudio Marcucci created{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=9TwFRt8JyZI'list=PLA5e9F7iFbOELK0a8SAdhbwQLPjq44O-H"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan'; A Decade of Dedication 86 song medley
                  </span>
                </a>{" "}
                [1:04:47].
              </div>
              <div>
                Andy Schnell, another knowledgeable fan, usually informs new
                reactors to Angelina's music with a brief comprehensive history
                of her accomplishments. Here is{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=4HIWXZ4HQ6M'lc=UgzLwID340oceHudXMx4AaABAg"
                  target="_blank"
                >
                  <span className="text-blue-500">a recent one</span>
                </a>
                .{" "}
              </div>
              <div>
                See the first time vocal coach Fairy Voice Mother ever listened
                and reacted to Angelina sing. She gave an{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=9VuIWL_AR7E"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    excellent explanation and analysis
                  </span>
                </a>{" "}
                of how Angelina was creating the sounds in her voice while
                singing Bohemian Rhapsody on AGT, and was moved to tears
                listening to such a rare talent.{" "}
              </div>
              <div>
                Also see{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.wikiwand.com/en/Angelina_Jordan"
                  target="_blank"
                >
                  <span className="text-blue-500">Wikiwand’s page</span>
                </a>{" "}
                for Angelina Jordan. Gary Rogers{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/playlist?list=PLvdXi7X_SJN0ZxG5iBxZ4jyN3l8au1R2Q"
                  target="_blank"
                >
                  <span className="text-blue-500">posted a long list</span>
                </a>{" "}
                of Angelina Jordan interviews, clips and everything else about
                her.{" "}
              </div>
              <div>
                Added footnote: I just bought and finished reading the eBook of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://angelina-jordan-official-store.creator-spring.com/listing/between-two-hearts-english?product=1227"
                  target="_blank"
                >
                  <span className="text-blue-500">Between Two Hearts</span>
                </a>
                . I was just as moved by her story and the way she tells it of
                why she sings barefoot as I am when I hear her sing, even more
                so. What an evolved soul for such a young girl! Through the eyes
                of a child, Angelina innocently makes us see and understand the
                suffering of a homeless little girl, and why she was moved to do
                something about it in her own small way. This was definitely a
                life-transforming experience for Angelina that continues today.
                And probably for that homeless girl as well. I understand why
                she went on to raise money for homeless families. If they
                publish a hardback copy in English, I would buy it again. Her
                grandmother's childlike artwork adds a lot to the book.{" "}
              </div>
              <div>
                More updates: On July 31, 2021, Angelina posted an original
                slowed-down, jazzed-up cover version of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/xp67k9wk2Mw"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Michael Jackson's Billie Jean
                  </span>
                </a>
                . Check out the colorful sets. An amazing production! On August
                26, 2021, she followed that up with a similar treatment of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/orv_BqSSa2g"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    The Beatles song, Yesterday
                  </span>
                </a>
                .{" "}
              </div>
              <div>
                On October 14, 2021, after a 6-year absence, Adele posted her
                new song,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/H9NJenpBV2I"
                  target="_blank"
                >
                  <span className="text-blue-500">Easy On Me</span>
                </a>
                . The next day, Angelina's Fanclub posted a{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/fGxdQWCgCTo"
                  target="_blank"
                >
                  <span className="text-blue-500">TikTok clip</span>
                </a>{" "}
                of her singing the song. The day after that Angelina premiered
                her amazing cover of the song:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/Mpw5Q76hWWE"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan'; Easy On Me Adele Cover Live From Studio!
                  </span>
                </a>
                Republic Records produced the in-studio black and white video of
                Angelina at the mic with just her piano accompanist. Angelina
                pours her heart and soul into this song. Her voice continues to
                mature as well as her vocal dexterity. Surprisingly, she sounds
                even better! I{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=Mpw5Q76hWWE'lc=UgwCNRjSrSZ4mrvNkvl4AaABAg"
                  target="_blank"
                >
                  <span className="text-blue-500">posted a comment</span>
                </a>{" "}
                on the quality of the silence I felt at the end of the song.
                There have already been many videos posted on YouTube reacting
                to Angelina's cover of Adele's song. See this most effusive{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/M7ZOLmW0V6k"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    reaction from Adam Straughan
                  </span>
                </a>
                .{" "}
              </div>
              <div>
                Friday, Dec 10, 2021,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.imdb.com/title/tt8718158/"
                  target="_blank"
                >
                  <span className="text-blue-500">The Hating Game</span>
                </a>{" "}
                premiered in the USA. Republic Records released the{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://music.apple.com/us/album/the-hating-game-original-motion-picture-soundtrack/1597020142"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    original motion picture soundtrack
                  </span>
                </a>{" "}
                and featured{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=7Mthm-9jECM"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina’s cover version of “Mercy”
                  </span>
                </a>{" "}
                by Duffy to promote the film! You can listen on these music
                services:{" "}
                <a href="https://thehatinggame.lnk.to/OST">
                  <span className="text-blue-500">
                    https://thehatinggame.lnk.to/OST
                  </span>
                </a>
                .{" "}
              </div>
              <div>
                Thursday, Dec 23, 2021, 3pm CST:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.eventbrite.com/e/angelina-jordan-christmas-show-tickets-228166310577"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan Online Christmas Concert
                  </span>
                </a>{" "}
                live from Los Angeles. Visit her website for details:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.angelinajordanofficial.com"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    https://www.angelinajordanofficial.com
                  </span>
                </a>
                .
              </div>
              <div>Angelina Jordan turns 16 </div>
              <div>
                Jan 10, 2022: In honor of Angelina's 16th birthday Pontus
                Österlin posted{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/VHj5iSpCKk4"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    16 Reactors 1st Time Hearing Angelina Jordan
                  </span>
                </a>
                . Very amusing. Another great compilation from PO Talks in
                Sweden worth watching! BigAngieFan Chris Walker from Hawaii
                posted a wonderful compilation in the form of a quiz:
                <span className="text-blue-500">
                  {" "}
                  <a
                    rel="noreferrer noopener"
                    href="https://youtu.be/zr6HYPrDtik"
                    target="_blank"
                  >
                    Happy Birthday to Angelina Jordan! Can You Guess How Old She
                    Is?
                  </a>
                </span>{" "}
                I really enjoyed this musical mix by Kaleidoscope RMX:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=1wvOVwVk2Cc"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    🥳🥳🥳HAPPY BIRTHDAY ANGELINA JORDAN 🥳🥳🥳 👨‍👧
                  </span>
                </a>
              </div>
              <div>
                Valentine's Day: Angelina posts the best version of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=bWiLOnHJYxg"
                  target="_blank"
                >
                  <span className="text-blue-500">My Funny Valentine</span>
                </a>
                ! Remember when she sang it at{" "}
                <a
                  href="https://youtu.be/sZ25H4a2gPI"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="text-blue-500">10 years old</span>
                </a>
                ?{" "}
              </div>
              <div>
                April 11, 2022: Written by Willie Nelson and popularized by
                Patsy Cline,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.instagram.com/p/CcM93mYLczH/"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    listen to Angelina Jordan sing Crazy
                  </span>
                </a>{" "}
                and you'll go crazy for loving her!{" "}
              </div>
              <div>Honoring Elvis Presley</div>
              <div>
                June 22, 2022: Angelina Jordan honors Elvis Presley a day before
                the release of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://twitter.com/bazluhrmann/status/1539644430084235264"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Baz Luhrmann's film, Elvis
                  </span>
                </a>
                , singing a slow melancholy version of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=RTbKhkceR00"
                  target="_blank"
                >
                  <span className="text-blue-500">Suspicious Minds</span>
                </a>
                . The song was written by Memphis singer Mark James, an old
                friend of Elvis. When he heard{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=mFP0EP-Oi2I"
                  target="_blank"
                >
                  <span className="text-blue-500">the dcentero</span>
                </a>
                , Elvis told Mark he wanted the song and the female background
                vocalists. It went to{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://open.spotify.com/album/0uJJdEZ8sRLNPoKEkjvqTD"
                  target="_blank"
                >
                  <span className="text-blue-500">#1</span>
                </a>{" "}
                and{" "}
                <a href="https://www.songfacts.com/facts/elvis-presley/suspicious-minds">
                  <span className="text-blue-500">relaunched his career</span>
                </a>
                .{" "}
              </div>
              <div>
                In this video, Angelina wore a beehive hairdo like Priscilla,
                dressed in a black leather jumpsuit carrying a red guitar over
                her shoulder like Elvis in his televised{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/YZe_8u-rGWE"
                  target="_blank"
                >
                  <span className="text-blue-500">'68 Comeback Special</span>
                </a>
                . Rob Christie arranged the music and accompanied Angelina on
                piano. Rob's{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.instagram.com/p/CfGeryelgDJ/"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    red jumpsuit matches the guitar color
                  </span>
                </a>{" "}
                and is what Elvis' musicians wore in that '68 Special.{" "}
              </div>
              <div>
                Her uncle and manager, Michael Astar, arranged everything. His
                two young daughters and Angelina's sister{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/RTbKhkceR00?t=101"
                  target="_blank"
                >
                  <span className="text-blue-500">Juliette</span>
                </a>{" "}
                make brief appearances in the video. Grandma Mery Zamani was the
                executive producer. Cole McCarthy directed the video in the same
                location that Angelina sang{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=bWiLOnHJYxg"
                  target="_blank"
                >
                  <span className="text-blue-500">My Funny Valentine</span>
                </a>
                —an LA antique furniture and chandelier shop. This is an amazing
                performance and production!
              </div>
              <Center>Suspecious Minds</Center>
              <VideoWrapper>
                <LiteYouTubeEmbed
                  id="RTbKhkceR00"
                  title="Open air concert, at age 13"
                />
              </VideoWrapper>
              <h2 className="wp-block-heading">Summer Concerts in Norway</h2>
              <h3>June 22, 2022, Allsang på Grensen</h3>
              <div>
                Angelina will be performing at various venues in Norway this
                summer. At her first appearance she paid tribute to Freddie
                Mercury and Whitney Houston. She sang{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=TqMqyAi-bsc"
                  target="_blank"
                >
                  <span className="text-blue-500">Bohemian Rhapsody</span>
                </a>{" "}
                in a vibrant red pant suit and{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=AqtIVYFjapQ"
                  target="_blank"
                >
                  <span className="text-blue-500">I Have Nothing</span>
                </a>{" "}
                in a stunning ice blue gown, both televised by TV2 Norway.{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/c/AngelinaJordanVlogs/videos"
                  target="_blank"
                >
                  <span className="text-blue-500">Angelina Jordan Vlogs</span>
                </a>{" "}
                captured{" "}
                <a href="https://www.youtube.com/watch?v=TqMqyAi-bsc">
                  <span className="text-blue-500">part</span>
                </a>{" "}
                of Bohemian Rhapsody, and I Have Nothing{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=NoeJair7gAs"
                  target="_blank"
                >
                  <span className="text-blue-500">twice</span>
                </a>{" "}
                from the actual event. They also posted excerpts from the other
                upcoming concerts. Phillip
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/c/pa1189j"
                  target="_blank"
                >
                  <span className="text-blue-500">pa1189j</span>
                </a>
                later provided with the{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=LDZ4x0cFJRs"
                  target="_blank"
                >
                  <span className="text-blue-500">best audio version</span>
                </a>{" "}
                so far with a clean music intro.{" "}
              </div>
              <div>July 1, 2022, Kurbadhagen</div>
              <div>
                Angelina gave her own full concert at Kurbadhagen. Andy Schnell
                posted the{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=fOAmwRzzkpA'lc=UgyFKy7eA__TUjXi4St4AaABAg"
                  target="_blank"
                >
                  <span className="text-blue-500">playlist</span>
                </a>{" "}
                14 songs + 3 encores. She looks so happy and relaxed in front of
                a live audience again. And her band swings. Instead of singing
                in one spot, she moves freely about the stage, and interacts
                with the audience in between songs—a new development for her,
                and us. The lucky fans are thrilled, and she's loving it!
              </div>
              <div>
                Before singing Amy Winehouse's song, Tears Dry on Their Own,
                Angelina delivers her{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/sjGkvd8htI0?t=21"
                  target="_blank"
                >
                  <span className="text-blue-500">quintessential message</span>
                </a>
                : I'm probably repeating myself but, the most important thing is
                just to be yourself, be kind to each other, and just be happy.
                That's all that matters. Applause
              </div>
              <div>An audience member shouts out, You make us happy. </div>
              <div>
                Visibly moved, Angelina replies: Oh, that means so much.
              </div>
              <blockquote className="h-full w-full">
                <div>
                  The most important thing is just to be yourself, be kind to
                  each other, and just be happy. That’s all that matters.
                </div>
                <cite>
                  Angelina Jordan to her concert audience at Kurbadhagen
                </cite>
              </blockquote>
              <div>
                See this beautiful and succinct comment about Angelina Jordan
                posted by{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=LHlMrTpTWt4'lc=UgxpfEWYAxCqBTMMljB4AaABAg"
                  target="_blank"
                >
                  <span className="text-blue-500">Shodan Rich</span>
                </a>{" "}
                after hearing her sing Suspicious Minds, the 3rd and final
                encore of the show.
              </div>
              <div>
                Thanks to Kathrine Angeltveit for sharing these songs:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=fOAmwRzzkpA"
                  target="_blank"
                >
                  <span className="text-blue-500">Valerie</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=dxBOeYmcDno"
                  target="_blank"
                >
                  <span className="text-blue-500">All of Me</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=cRns0JACfRI"
                  target="_blank"
                >
                  <span className="text-blue-500">Yellow Brick Road</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=7oASxWtntTU"
                  target="_blank"
                >
                  <span className="text-blue-500">Love on the Brain</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=7xZGEJKw6DA"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    These Boots Are Made for Walkin'
                  </span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=eZ7kHOE5NKc"
                  target="_blank"
                >
                  <span className="text-blue-500">Million Miles</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=sjGkvd8htI0"
                  target="_blank"
                >
                  <span className="text-blue-500">Tears Dry on Their Own</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=QOrcx0OZx-w"
                  target="_blank"
                >
                  <span className="text-blue-500">Crazy</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=PI3p3mT-NNs"
                  target="_blank"
                >
                  <span className="text-blue-500">I'm Not the Only One</span>
                </a>{" "}
                and{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=LHlMrTpTWt4"
                  target="_blank"
                >
                  <span className="text-blue-500">Suspicious Minds</span>
                </a>
                .
              </div>
              <div>
                TheTomtomtom posted{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=dxBOeYmcDno"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Bohcenterian Rhapsody and Yellow Brick Road
                  </span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=JA8S2VibP8w"
                  target="_blank"
                >
                  <span className="text-blue-500">House of the Rising Sun</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=5tM_wUKV37E"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Mercy, Killing Me Softly and I’m Not the Only One
                  </span>
                </a>
                .
              </div>
              <div>
                Elin Men posted{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=Bu4S2wgKetE"
                  target="_blank"
                >
                  <span className="text-blue-500">Bang Bang</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=kCpGErK8dbk"
                  target="_blank"
                >
                  <span className="text-blue-500">Love on the Brain</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=EpdAY4NenIY"
                  target="_blank"
                >
                  <span className="text-blue-500">Bad Romance</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=WIwZ40mqOK4"
                  target="_blank"
                >
                  <span className="text-blue-500">7th Heaven</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=hwKeKXAB7a8"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Goodbye Yellow Brick Road
                  </span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=euX2F6NcbHI"
                  target="_blank"
                >
                  <span className="text-blue-500">Suspicious Minds</span>
                </a>
                .
              </div>
              <div>
                Mike Richards posted a{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/E7KO26ovuZk"
                  target="_blank"
                >
                  <span className="text-blue-500">video of concert photos</span>
                </a>{" "}
                taken by NiceShot.no.
              </div>
              <div>
                Rusty Shackleford posted a video of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=Oa6jaZZzhBs"
                  target="_blank"
                >
                  <span className="text-blue-500">House of the Rising Sun</span>
                </a>{" "}
                from Hege of The Shield fan group. He later posted a multi-cam
                video of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=7Q5WvL3P4bA"
                  target="_blank"
                >
                  <span className="text-blue-500">Suspicious Minds</span>
                </a>{" "}
                that he created from footage provided by many mcenterbers of the
                The Shield fan group.
              </div>
              <div>July 7, 2022, Kongsberg Jazz Festival</div>
              <div>
                Rusty later posted a clip from Øyvind Skogstad of The Shield Fan
                Group of Angelina opening the concert with an amazing new{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=cCINlfEEtQ4"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    cover of Labrinth's Mount Everest
                  </span>
                </a>
                . Rusty Shackleford later audio-corrected and video-edited Chris
                Walker's 4K footage of Angelina surprising everyone with{" "}
                <a
                  href="https://www.youtube.com/watch?v=DYVxnY06BWw"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="text-blue-500">
                    her version of Mount Everest
                  </span>
                </a>
                , especially her falsetto riffing with the guitarist.
              </div>
              <div>
                Kathrine posted a{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=1yPU9I9RXx8"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    TV interview by NRK Dagsrevyen
                  </span>
                </a>{" "}
                from that concert with Angelina singing a jazzy version of her
                song 7th Heaven. When asked how life is in the USA and if she is
                fully committed to the music, she replied:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/1yPU9I9RXx8?t=139"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Yes, I am fully committed to music. Music is my life
                  </span>
                </a>
                .{" "}
              </div>
              <blockquote className="h-full w-full">
                <div>I am fully committed to music. Music is my life.</div>
                <cite>Angelina Jordan answering a NRK interviewer</cite>
              </blockquote>
              <div>
                A month later, Kathrine posted{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=HKK66K5u1Fc"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan on “Festivalsommer” at NRK TV the 6th of
                    August, 2022
                  </span>
                </a>
                . Her section of the{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://tv.nrk.no/serie/festivalsommer/2022/MKDU45000422/avspiller"
                  target="_blank"
                >
                  <span className="text-blue-500">Kongsberg Jazz Festival</span>
                </a>{" "}
                7:45–17:20 opens with an interview followed by Angelina singing
                her original songs, 7th Heaven and Million Miles.{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/channel/UChFf2i9AM8r1cYvm5tBel1A"
                  target="_blank"
                >
                  <span className="text-blue-500">Boris Palenovski</span>
                </a>{" "}
                later enhanced the audio-visual quality of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/bnd-DkPzTPw"
                  target="_blank"
                >
                  <span className="text-blue-500">this NRK TV feature</span>
                </a>{" "}
                to 4K.{" "}
              </div>
              <div>
                Chris Walker, aka BigAngieFan, posted this sweet clip of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=CivEDM4uhJY"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina interacting with her audience
                  </span>
                </a>{" "}
                before singing Valerie telling thcenter how happy she is to be
                back in Norway after 3 years to sing for thcenter again. A month
                later Chris posted{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=vCnF-OlS04U"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan Live at Kongsberg 2022: All of Me and
                    Valerie
                  </span>
                </a>{" "}
                on{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/channel/UCSWmvV4K9GmaAVdPHcuEfug"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    The Hawaii Walkers Channel
                  </span>
                </a>
                . And these too:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=FFyKzY3GzLs"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    House of the Rising Sun and Killing Me Softly
                  </span>
                </a>
                . The closeup picture and sound are broadcast quality! Chris
                continues to add more songs, like{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=iLBBBudzSBE"
                  target="_blank"
                >
                  <span className="text-blue-500">You Don't Own Me</span>
                </a>
                , and{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=y8UqOgy6TVI"
                  target="_blank"
                >
                  <span className="text-blue-500">Crazy and Mercy</span>
                </a>{" "}
                with improved sound, and{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=UOA0Riz4thA"
                  target="_blank"
                >
                  <span className="text-blue-500">Bang Bang</span>
                </a>
                , followed by{" "}
                <a href="https://www.youtube.com/watch?v=fTCb4h2vS5I">
                  <span className="text-blue-500">
                    Bohcenterian Rhapsody ' Goodbye Yellow Brick Road
                  </span>
                </a>
                . He later added a translated Introduction, a Musical Intro, a
                brief talk by Angelina, and her singing{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=F9AyPJ3pOto"
                  target="_blank"
                >
                  <span className="text-blue-500">Mount Everest</span>
                </a>
                , a song most were not familiar with. It blew thcenter away!
                Angelina also performed the Amy Winehouse song{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=jfwP3NHAMq4"
                  target="_blank"
                >
                  <span className="text-blue-500">Tears Dry On Their Own</span>
                </a>
                . Chris created a hybrid version of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=bX-0UmxGhww"
                  target="_blank"
                >
                  <span className="text-blue-500">7th Heaven</span>
                </a>{" "}
                using NRK TV and fan footage. I recorded about 25% of the video
                and sound myself, and the other 75% is from NRK TV.
              </div>
              <div>
                Alan Papier posted{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=Odz7Ac3C89k"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    The Kongsberg Concert Interviews
                  </span>
                </a>{" "}
                with fans that came from around the world to listen to Angelina
                Jordan sing. He wrote: Thousands of Angelina Jordan's fans
                around the world wish they could have attended her recent
                concerts in Norway. In today's video, we try and recreate the
                atmosphere from her concert at the Kongsberg Jazz Festival for
                those who could not attend.{" "}
              </div>
              <div>July 10, 2022, Kurbadhagen, Sandefjord </div>
              <div>
                There are several posts from this concert. Steinar Hatlen's
                closeup recording of Angelina's powerful rendition of her song,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=yq5KAztslWw"
                  target="_blank"
                >
                  <span className="text-blue-500">Million Miles</span>
                </a>{" "}
                was posted by The Shield. Angelina introduced the song saying it
                is very meaningful to her about her grandpa and wanted to share
                a special message about losing someone you loved: I don't want
                anyone of you to think that, you know, that they left you.
                They're always going to be with you no matter where you are. So
                you're never alone, a reference to the repeated line, I'm never
                alone, in her song.
              </div>
              <div>
                Kathrine posted the complete new cover version of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=jdd_-lNnvVc"
                  target="_blank"
                >
                  <span className="text-blue-500">Mount Everest</span>
                </a>
                , which opened the show,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=haAhsQwICY0"
                  target="_blank"
                >
                  <span className="text-blue-500">Killing Me Softly</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=IfaA-2r83aA"
                  target="_blank"
                >
                  <span className="text-blue-500">Fly Me to the Moon</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=G6UD8CNVzWs"
                  target="_blank"
                >
                  <span className="text-blue-500">Mercy</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=Tw_osE6J_0o"
                  target="_blank"
                >
                  <span className="text-blue-500">You Don't Own Me</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=tMNWrkJL0uk"
                  target="_blank"
                >
                  <span className="text-blue-500">Suspicious Minds</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=yudm0IBDydU"
                  target="_blank"
                >
                  <span className="text-blue-500">Bohemian Rhapsody</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=gelFySO65TI"
                  target="_blank"
                >
                  <span className="text-blue-500">Yellow Brick Road</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=WpD821uKtDs"
                  target="_blank"
                >
                  <span className="text-blue-500">House of the Rising Sun</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/nQrzvsOe0_g"
                  target="_blank"
                >
                  <span className="text-blue-500">Tears Dry on Their Own</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/wIRWOWpaFr0"
                  target="_blank"
                >
                  <span className="text-blue-500">7th Heaven</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=KNcNxGN0NIM"
                  target="_blank"
                >
                  <span className="text-blue-500">Love on the Brain</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=hTm_yY5KeWo"
                  target="_blank"
                >
                  <span className="text-blue-500">All of Me</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=mW3hMsKsaFg"
                  target="_blank"
                >
                  <span className="text-blue-500">Valerie</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=JNjdUeT2488"
                  target="_blank"
                >
                  <span className="text-blue-500">Crazy</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=s-8RB1oYzVU"
                  target="_blank"
                >
                  <span className="text-blue-500">Bang Bang</span>,
                </a>{" "}
                and a better quality video of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=fhn4pIDunGg"
                  target="_blank"
                >
                  <span className="text-blue-500">Million Miles</span>
                </a>
                . From{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=fhn4pIDunGg't=280s"
                  target="_blank"
                >
                  <span className="text-blue-500">4:40–4:50</span>
                </a>
                , Angelina's voice kept soaring like never before. It surprised
                the audience, including the musicians. Thrilled, everyone
                applauded. Angelina gave thcenter a little smile and kept on
                singing. I{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=fhn4pIDunGg'lc=UgxadPplL92ziFsfVx14AaABAg"
                  target="_blank"
                >
                  <span className="text-blue-500">asked Kathrine</span>
                </a>{" "}
                what it must have felt like. Steve answered that he{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=fhn4pIDunGg'lc=UgxadPplL92ziFsfVx14AaABAg.9dO7C2C-5zU9dOOcLCRKIU"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    was only 10 feet away when she sang this '; it was spine
                    chilling
                  </span>
                </a>
                . Geir Stian Aaslund described it as a triple Angelina moment
                and wrote:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=fhn4pIDunGg'lc=UgzIEo-ZJDT-8PXScenterR4AaABAg"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    I almost fainted when I heard that part at the concert.
                  </span>
                </a>{" "}
              </div>
              <div>
                Kathrine posted{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=nTY8Dvy9LFs"
                  target="_blank"
                >
                  <span className="text-blue-500">I Have Nothing</span>
                </a>
                , which included Angelina's introduction. I want to dedicate
                this song to a very special person—my grandma. Applause She
                couldn't personally come this time because as you guys know,
                she's been sick, but she will be better soon. And I' I miss her
                so much. I miss every single second that I'm not with her. And'
                you guys enjoy. That powerful song concluded the concert.{" "}
              </div>
              <div>
                Mattias Axelsson recorded the Kurbadhagen concert in 4K. In his
                first video, he posted sound checks for{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/2b_d7PVAYMI"
                  target="_blank"
                >
                  <span className="text-blue-500">At last</span>
                </a>{" "}
                and{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/2b_d7PVAYMI?t=132"
                  target="_blank"
                >
                  <span className="text-blue-500">I Have Nothing</span>
                </a>
                , ending with visuals of people lined up to get in. He then
                posted all{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/playlist?list=PLB3ywC3nQj__BfXeSj4-b2VxQSBnQsV8r"
                  target="_blank"
                >
                  <span className="text-blue-500">18 songs</span>
                </a>{" "}
                in the order they were performed, starting with{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=KHCAgExJlCQ'list=PLB3ywC3nQj__BfXeSj4-b2VxQSBnQsV8r'index=2"
                  target="_blank"
                >
                  <span className="text-blue-500">Mount Everest</span>
                </a>{" "}
                and ending with{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=BkvsnY7J510'list=PLB3ywC3nQj__BfXeSj4-b2VxQSBnQsV8r'index=19"
                  target="_blank"
                >
                  <span className="text-blue-500">I Have Nothing</span>
                </a>
                . This secenters to be a complete quality compilation.{" "}
              </div>
              <div>
                Vidar Enerud also uploaded the{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/playlist?list=PLgVH9DUPH5QorN0ofzcbOYQSXXlDzyfA9"
                  target="_blank"
                >
                  <span className="text-blue-500">Full Playlist</span>
                </a>{" "}
                of 15 songs plus 3 encores, including a poster listing thcenter.{" "}
              </div>
              <div>
                The Foot Crew posted the show in one video 1:05:51:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=VkhcpiEqtgg"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan consert Kurbadhagen in Sandefjord in Norway!
                    It was insane.
                  </span>
                </a>
                . It's further from the stage, but the sound from the large
                speaker array systcenter is clearer.{" "}
              </div>
              <div>
                Tomas Odebrant posted{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/playlist?list=PL5OHYNhZE6vcUfPgFFzSGZBREt8RSQPa4"
                  target="_blank"
                >
                  <span className="text-blue-500">5 rehearsals</span>
                </a>
                : 1 At last, 2-4 I Have Nothing, 5 Bang Bang. Hallvard Ulsaker
                filmed a closeup of Angelina singing{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=gO8SaL0dE5M"
                  target="_blank"
                >
                  <span className="text-blue-500">I Have Nothing</span>
                </a>{" "}
                and{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=quBh8b1PlBc"
                  target="_blank"
                >
                  <span className="text-blue-500">Million Miles</span>
                </a>
                . Trond Andersen{" "}
                <a
                  href="https://www.youtube.com/playlist?list=PLj6IAyRjfQ-4AM5CcqN7G_E2JEFJshryM"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="text-blue-500">posted 11 songs</span>
                </a>{" "}
                so far. Geir Stian Aaslund posted{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=xZlRX-NYBPU"
                  target="_blank"
                >
                  <span className="text-blue-500">Suspicious Minds</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/rXvb5nkOetc"
                  target="_blank"
                >
                  <span className="text-blue-500">Bang Bang</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/kmhciQ1Qttc"
                  target="_blank"
                >
                  <span className="text-blue-500">Mercy</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=VCiW7SMcxzk"
                  target="_blank"
                >
                  <span className="text-blue-500">Valerie</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/v7jakMA7mYY"
                  target="_blank"
                >
                  <span className="text-blue-500">Fly Me to the Moon</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/tnr9N66imJs"
                  target="_blank"
                >
                  <span className="text-blue-500">Yellow Brick Road</span>
                </a>
                , an excerpt of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=hgUeTrP31eU"
                  target="_blank"
                >
                  <span className="text-blue-500">Million Miles</span>
                </a>{" "}
                including someone reacting to AJ's unexpected high riff, and{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/xV5fdKJsoqA"
                  target="_blank"
                >
                  <span className="text-blue-500">I Have Nothing</span>
                </a>
                , starting with her dedication to Grandma Mery.{" "}
              </div>
              <div className="inline">
                <div className="center content-center justify-center">
                  <a href="https://kenchawkin.files.wordpress.com/2022/07/angelina-makes-a-heart-sending-love-to-her-fans.png">
                    <Image
                      src={heartLove}
                      alt="heartLove"
                      className="flex h-60 w-96 content-center justify-center rounded-lg sm:col-span-2 sm:h-52 lg:col-span-full"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
              <div>
                The words to the song—I have nothing, nothing, nothing, if I
                don't have you—are true on two levels—her grandma and her
                audience. Without Mery Zamani introducing Angelina to jazz at a
                very early age and lovingly supporting and recording her
                God-given talent—she, and we, would have nothing. And without
                devoted fans, a singer has nothing.{" "}
              </div>
              <div>
                Angelina's career is all based on{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=B8M5WRqA00w't=80s"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    giving and receiving love
                  </span>
                </a>
                . She even gave{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/Oq4GV34zHsY?t=74"
                  target="_blank"
                >
                  <span className="text-blue-500">the heart sign</span>
                </a>{" "}
                twice while singing{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/Oq4GV34zHsY"
                  target="_blank"
                >
                  <span className="text-blue-500">All of Me</span>
                </a>
                . The love and appreciation the audience showed Angelina moved
                her to tears, just as her love and singing did for thcenter, and
                us.{" "}
              </div>
              <div>
                As you could see from the videos, everyone on and off the stage
                was very happy. It was a huge lovefest.
              </div>
              <div>
                July 11, 2022: An{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=d7THkVKsbLE"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan Bonus Podcast Episode of Wrapped in a Warm
                    Blanket
                  </span>
                </a>{" "}
                with co-hosts Alan Papier and Pontus Österlin from Kurbadhagen
                in Sandefjord, Norway. Alan and Pontus finally met there in
                person and shared their reflections on Angelina's concert. They
                also met Sara Astar, Angelina's mother. Nice to see such
                dedicated AJ reactors and podcasters looking fulfilled after
                seeing and hearing Angelina sing in person. She created a
                magical atmosphere beyond their expectations.{" "}
              </div>
              <div>
                July 20, 2022:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=J7VqgKMBaK8"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan Kurbadhagen '; The Sandefjord Concert
                    Interviews
                  </span>
                </a>
                . These interviews with fans from all over the world were very
                inspiring! It included a surprise visit with Egil, Angelina's
                guitarist from her earlier years in Norway.{" "}
              </div>
              <div>
                July 24, 2022:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=iX0g99jN26U"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan '; I Have Nothing Whitney Houston Cover
                  </span>
                </a>
                . Angelina just prcenteriered this cover song in black and
                white, filmed at the same LA antique furniture and chandelier
                store where she sang My Funny Valentine and Suspicious Minds.
                This is 3 years after she had recorded{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=eTcvvO6B3Io"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    her Whitney Houston tribute
                  </span>
                </a>{" "}
                mentioned above. As great as that recording was back then, the
                depth and dexterity of her maturing voice now is absolutely
                phenomenal! And she is only 16 years old!
              </div>
              <Center>I have Nothing</Center>
              <VideoWrapper>
                <LiteYouTubeEmbed id="iX0g99jN26U" title="I Have Nothing" />
              </VideoWrapper>
              <div>
                August 18, 2022: Chris Walker later created{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=AKDL8LLp8xc"
                  target="_blank"
                >
                  <span className="text-blue-500">a multi-camera edit</span>
                </a>{" "}
                of Angelina Jordan's centerotional performance of Elvis
                Presley's song Suspicious Minds at Kurbadhagen, Norway, on July
                10, 2022. The edit uses video shot by fans from five different
                angles.
              </div>
              <div>
                August 25, 2022: Rusty Shackleford later cleaned up and edited
                together footage from 4 fans' cameras of Angelina's powerful
                centerotional version{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=x9dVG5Pgq9o"
                  target="_blank"
                >
                  <span className="text-blue-500">Million Miles</span>
                </a>{" "}
                at Kurbadhagen on July 10, 2022.{" "}
              </div>
              <div>
                Septcenterber 16, 2022:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/channel/UChFf2i9AM8r1cYvm5tBel1A"
                  target="_blank"
                >
                  <span className="text-blue-500">Boris Palenovski</span>
                </a>{" "}
                posted the Septcenterber 13th visit of Jonathan Sugarfoot
                Moffett, Michael Jackson's drummer since 1979, to a Republic
                Records studio especially to hear Angelina Jordan sing. Sitting
                cross-legged on the edge of a small stage, Angelina sang all of
                Whitney Houston's{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=vaElvR9s5Ao"
                  target="_blank"
                >
                  <span className="text-blue-500">I Have Nothing</span>
                </a>
                , on Boris' YouTube, and part of{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.tiktok.com/@angelinajordana/video/7143172154266340650"
                  target="_blank"
                >
                  <span className="text-blue-500">Billie Jean</span>
                </a>{" "}
                for him on his and Angelina's TikTok.{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.tiktok.com/@jmoffettmjm/video/7143230619403734318?is_copy_url=1'is_from_webapp=v1"
                  target="_blank"
                >
                  <span className="text-blue-500">He wrote</span>
                </a>
                : You are SENSATIONAL!!!! ⭐️ and also answered someone's
                comment with: Why compare to Michael? This is her own version
                and tribute. And she sounds FANTASTIC! He also told Angelina: I
                can feel that it touched Michael's spirit. You delivered, you
                delivered. It touched her heart.
              </div>
              <div>
                October 23, 2022: Joey Farr prcenteriered{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=RYiQp3VQyNk't=331s"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan 4K July 10th 2022 Kurbadhagen / Full concert
                    edited
                  </span>
                </a>{" "}
                1:08:38. At the end of the video,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/RYiQp3VQyNk?t=4105"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Joey posted a composite photo of two selfies
                  </span>
                </a>{" "}
                he had taken at different times—one with Sarah and one with
                Angelina. A very lucky guy!!
              </div>
              <div>Wrapped in a Warm Blanket Podcast</div>
              <div>
                Last year, AJ reactors{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/user/thealanpapier"
                  target="_blank"
                >
                  <span className="text-blue-500">Alan Papier</span>
                </a>{" "}
                and Pontus Österlin{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/c/POTalksMusic"
                  target="_blank"
                >
                  <span className="text-blue-500">PO Talks</span>
                </a>{" "}
                collaborated to create{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://wrappedinawarmblanket.com/"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Wrapped in a Warm Blanket
                  </span>
                </a>
                , a podcast with heart-to-heart talks about Angelina Jordan’s
                artistry and how it affects our inner world. Their second season
                comes to{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/DI5qSQlSHT8"
                  target="_blank"
                >
                  <span className="text-blue-500">YouTube on Feb 10, 2022</span>
                </a>
                . Watch this beautifully edited{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=JLKoPc6shO8"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan's Podcast Teaser '; Season Two '; Wrapped in
                    a Warm Blanket
                  </span>
                </a>
                . See{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtube.com/c/Polarts"
                  target="_blank"
                >
                  <span className="text-blue-500">Polina</span>
                </a>
                &#8216;s beautiful watercolor painting of Angelina come together
                before your eyes. She captures her!
              </div>
              <div>
                Much to my surprise, co-hosts Alan and Pontus had seen this blog
                post and invited me on their podcast to talk about my
                experiences with meditation and listening to Angelina to see if
                there were similarities, and to shed more light on this topic.
                We had a long animated conversation, and it was later edited
                down for Season Two, Episode 4:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=YSyu6aAwLI4"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    It's All Mind '; Meditating on Angelina Jordan with Ken
                    Chawkin
                  </span>
                </a>
                . Watch the Prcenteriere with Live Chat on Thursday, March 24 at
                3pm London time 10am Central Daylight Time. It will then be
                available at this same link:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=YSyu6aAwLI4"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    https://youtu.be/YSyu6aAwLI4
                  </span>
                </a>
                . Appreciated the positive reactions, especially the amazing
                comment from{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=YSyu6aAwLI4'lc=UgwOAMgrikqcGPx9Gr14AaABAg"
                  target="_blank"
                >
                  <span className="text-blue-500">Jim Donaldson</span>
                </a>
                .{" "}
              </div>
              <div>
                Novcenterber 24, 2022: Born to Sing, The Angelina Jordan story
                is a documentary of Angelina Jordan's first eight years as an
                artist and as a great humanitarian. Produced by Alan Papier and
                Pontus Osterlin, here is the{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=BOSFYBZ9IGM"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    TEASER '; Born to Sing '; Angelina Jordan Documentary
                  </span>
                </a>
                , followed by the{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/jE6x9V8Cnyw"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan Documentary '; Born to Sing '; The Early
                    Years
                  </span>
                </a>
                .
              </div>
              <div>
                Deccenterber 8, 2022: Kaleidoscope RMX posted this stunning
                blended video:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=3fsh1okXVwk"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina Jordan My Funny Valentine Jazz Arrangcenterent 🎼🎶
                  </span>
                </a>
                . I don't know who the jazz trio is, but they are perfect in
                this mashup—how Angelina is meant to sound singing this jazz
                standard.
              </div>
              <div>
                Deccenterber 14, 2022: Using Zoom Pro and other software tweaks,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/@pa1189j"
                  target="_blank"
                >
                  <span className="text-blue-500">pa1189j</span>
                </a>{" "}
                created an enhanced audio livestream,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=oliyfdo67kQ"
                  target="_blank"
                >
                  <span className="text-blue-500">My Broadcast</span>
                </a>
                , of Angelina's 1-hour July 10th concert at Kurbadhagen. The
                sound quality is pristine. You can now hear every nuance of
                Angelina's amazing voice! He said he will try to separate and
                title each song before Christmas.{" "}
              </div>
              <div>
                January 10, 2023: For Angelina's 17th birthday today, Pontus
                Österlin at PO Talks posted{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=CU0tPGFTjUU"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    17 Reactors 1st Time Hearing Angelina Jordan
                  </span>
                </a>
                . Love it! Happy Birthday, Angelina!
              </div>
              <Center>17 Reactions</Center>
              <VideoWrapper>
                <LiteYouTubeEmbed
                  id="CU0tPGFTjUU"
                  title="Open air concert, at age 13"
                />
              </VideoWrapper>
              <div>
                January 13, 2023: With yesterday's sudden and unexpected passing
                of Lisa Marie Presley 54, Angelina Jordan posted an
                centerotional tribute with this message of condolences—You will
                never be forgotten Lisa Marie ❤️ Rest in Peace ❤️ and an Elvis
                Presley cover of Only Fools Rush In, to Priscilla and the
                Presley family on her{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.tiktok.com/@angelinajordana/video/7188094790016421166"
                  target="_blank"
                >
                  <span className="text-blue-500">TikTok</span>
                </a>
                ,{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.instagram.com/reel/CnWhq8YJr-0/"
                  target="_blank"
                >
                  <span className="text-blue-500">Instagram</span>
                </a>
                , and{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=f3wZU1vlSbs"
                  target="_blank"
                >
                  <span className="text-blue-500">YouTube</span>
                </a>
                .{" "}
              </div>
              <div>
                February 12, 2023: Kathrine Angeltveit translated a June 23,
                2014 TV2 interview with 8-year old Angelina after she had won
                NGT asking her what she was going to do with her winnings.{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://youtu.be/ZdzFXegRQBA?t=38"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Angelina's reply reveals her selfless compassionate heart
                  </span>
                </a>
                : I will use them on children who are all alone, and who don’t
                have any shoes nor clothes. I want to make them happy and I want
                to sing for them.” When asked when she is hoping to do this, she
                replies: “Forever.” As we know, Angelina went on to do just
                that—sing to raise millions for such charities!{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/watch?v=ZdzFXegRQBA'lc=Ugz-mbgBuW7985C9Mwx4AaABAg"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    In addition to her beautiful soul-stirring voice, she also
                    has the heart of an angel, a saint!
                  </span>
                </a>
              </div>
              <div>
                February 14, 2023: Released today. What a perfect Valentine's
                Day gift! On Deccenterber 17, 2022, Angelina Jordan was invited
                to perform during the 20th{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://unforgettablegala.com/"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Annual Asian American Awards
                  </span>
                </a>{" "}
                at the Beverly Hilton.{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://charactermedia.com/"
                  target="_blank"
                >
                  <span className="text-blue-500">Character Media</span>
                </a>
                ’s Caroline Yu wrote this wonderful article about it:{" "}
                <a
                  rel="noreferrer noopener"
                  href="https://charactermedia.com/watch-angelina-jordans-covers-of-whitney-houston-and-queen-from-the-2022-unforgettable-gala/"
                  target="_blank"
                >
                  <span className="text-blue-500">
                    Watch Angelina Jordan’s Covers of Whitney Houston and Queen
                    from the 2022 Unforgettable Gala
                  </span>
                </a>
                . Here are those two amazing performances.{" "}
              </div>
              <Center>Bohemian Rhapsody</Center>
              <VideoWrapper>
                <LiteYouTubeEmbed id="1pnY11EzKwM" title="Bohemian Rhapsody" />
              </VideoWrapper>
              <Center>I have Nothing</Center>
              <VideoWrapper>
                <LiteYouTubeEmbed id="dBjMxY-iiwY" title="I Have Nothing" />
              </VideoWrapper>
              <SingleAccordion label="FIFA Football Awards">
                <div>
                  February 27, 2023: The Best FIFA Football Awards™ 2022
                </div>
                <div>
                  Angelina Jordan and RedOne wrote and performed We're The Best,
                  the official song for The Best FIFA Football Awards 2022 in
                  Paris, at{" "}
                  <a
                    rel="noreferrer noopener"
                    href="https://www.fifa.com/fifaplus/en/watch/3T9UEx46wIl68ulx9xAV6r"
                    target="_blank"
                  >
                    <span className="text-blue-500">1:24:01</span>
                  </a>{" "}
                  into the celebration. It's also on the FIFA YouTube Channel at{" "}
                  <a
                    rel="noreferrer noopener"
                    href="https://www.youtube.com/live/usIdSbd1jPw?feature=share't=5303"
                    target="_blank"
                  >
                    <span className="text-blue-500">1:28:21</span>
                  </a>
                  . It was televised live to an audience of over 300 million.
                  <a
                    rel="noreferrer noopener"
                    href="https://www.instagram.com/p/CpLoocAtTO0/"
                    target="_blank"
                  >
                    <span className="text-blue-500">
                      Angelina posted a photo
                    </span>
                  </a>{" "}
                  on her Instagram with some of the best footballers in the
                  world.{" "}
                  <a
                    rel="noreferrer noopener"
                    href="https://www.instagram.com/p/CpLoocAtTO0/c/18272103988190274/"
                    target="_blank"
                  >
                    <span className="text-blue-500">One person commented</span>
                  </a>{" "}
                  that there were about 695,000 watching on YouTube when you
                  started singing! Angelina later{" "}
                  <a
                    rel="noreferrer noopener"
                    href="https://www.instagram.com/p/CpQAu3opzio/"
                    target="_blank"
                  >
                    <span className="text-blue-500">
                      posted her performance on Instagram
                    </span>
                  </a>
                  . You may noticed some technical difficulties with the FIFA
                  production. Here is an improved{" "}
                  <a
                    rel="noreferrer noopener"
                    href="https://www.youtube.com/watch?v=j3Atq-SOols"
                    target="_blank"
                  >
                    <span className="text-blue-500">Revised Audio</span>
                  </a>{" "}
                  version by{" "}
                  <a
                    rel="noreferrer noopener"
                    href="https://www.youtube.com/@most2dot0"
                    target="_blank"
                  >
                    <span className="text-blue-500">
                      AJ Playlists'; by most2dot0
                    </span>
                  </a>
                  .{" "}
                </div>
              </SingleAccordion>
              <Center>My Song (Visualizer)</Center>
              <div class="grid grid-cols-3 place-items-center gap-4">
                <div>My Love</div>
                <a href="https://www.youtube.com/watch?v=1U6WY_z8Vu8">
                  <Image
                    src={love}
                    alt="Love Don't Let Me Go!"
                    width={512}
                    height={512}
                    className="m-auto h-[512px] w-[512px] justify-center rounded-full object-center align-middle"
                    loading="lazy"
                  />
                </a>
                <div>Angelina Jordan</div>
              </div>
              <Center>Love Don't Let Me Go!</Center>
              <Center>Visualizer</Center>
              <div>
                <LiteYouTubeEmbed
                  id="1U6WY_z8Vu8"
                  activeClass="lyt-activated" // Default as "lyt-activated", gives control to wrapper once clicked
                  iframeClass="bg-slate-900" // Default none, gives control to add a class to iframe element itself
                  playerClass="lty-playbtn" // Default as "lty-playbtn" to control player button styles
                  wrapperClass="yt-lite"
                  title="Angelina Jordan - Love Don't Let Me Go (Visualizer)"
                />
              </div>
              <Center>
                Conclusion: Fill my heart with song and let me sing for
                evermore!
              </Center>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
