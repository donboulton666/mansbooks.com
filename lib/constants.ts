export const EXAMPLE_PATH = "https://mansbooks.com";
export const IS_CAPTCHA_ENABLED = false;
export const CMS_NAME = "Mansbooks";
export const CMS_URL = "https://mansbooks.com";
export const SITE_URL = "https://mansbooks.com";
export const HOME_OG_IMAGE_URL = "https://mansbooks.com/twitter-card.jpg";
export const SITE_ORIGIN =
  process.env.DATOCMS_READ_ONLY_API_TOKEN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = "@donboulton";
export const BRAND_NAME = "Webinar,";
export const SITE_NAME_MULTILINE = ["Angies", " Video Webinar"];
export const SITE_NAME = "Angies Video Webinar";
export const META_DESCRIPTION = "Angelina Jordans Video and Webinar's.";
export const SITE_DESCRIPTION =
  "An interactive online experience by the community, free for everyone.";
export const DATE = "10 January 2024";
export const SHORT_DATE = "Jan 10 - 12:00am PST";
export const FULL_DATE = "Jan 10th 12am Pacific Time (GMT-7)";
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = "user-id";

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT = "https://mansbooks.com/privacy/code-of-conduct";
export const REPO = "https://github.com/donaldboulton/mansbooks.com";
export const SAMPLE_TICKET_NUMBER = 1234;

export const NAVIGATION = [
  {
    name: "Live Stage",
    route: "/stage/a",
  },
  {
    name: "100ms Stage",
    route: "/stage/m",
  },
  {
    name: "Albums",
    route: "/blog",
  },
  {
    name: "Gallery",
    route: "/gallery",
  },
  {
    name: "Videos",
    route: "/expo",
  },
  {
    name: "Schedule",
    route: "/schedule",
  },
];

export const SOCIAL = [
  {
    email: "mailto:donaldboulton@gmail.com",
  },
  {
    phone: "tel:+405-863-2165",
  },
  {
    facebook: "https://www.facebook.com/donboulton",
  },
  {
    instagram: "https://www.instagram.com/boulton3662",
  },
  {
    twitter: "https://twitter.com/donboulton",
  },
  {
    linkedin: "https://www.linkedin.com/donboulton",
  },
  {
    github: "https://github.com/donaldboulton/",
  },
];

export type TicketGenerationState = "default" | "loading";
