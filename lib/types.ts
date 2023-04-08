/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export type Image = {
  url: string;
  blurDataURL?: string;
};

export type Video = {
  url: string;
  provider: string;
  providerUid: string;
  thumbnailUrl: string;
  title: string;
  width: string;
};

export type Picture = {
  fileName: string;
  alt: string;
};
export type Author = {
  picture: Picture;
  name: string;
};

export type Speaker = {
  name: string;
  bio: string;
  title: string;
  slug: string;
  twitter: string;
  github: string;
  company: string;
  talk: Talk;
  image: Image;
  imageSquare: Image;
};

export type Stage = {
  name: string;
  slug: string;
  stream: string;
  discord: string;
  schedule: Talk[];
  isLive: boolean;
  roomId: string;
  stagePeers: string[];
  backstagePeers: string[];
};

export type Talk = {
  title: string;
  description: string;
  start: string;
  end: string;
  speaker: Speaker[];
};

export type Link = {
  url: string;
};

export type Sponsor = {
  name: string;
  description: string;
  slug: string;
  website: string;
  callToAction: string;
  callToActionLink: string;
  links: SponsorLink[];
  discord: string;
  tier: string;
  cardImage: Image;
  logo: Image;
  youtubeSlug: string;
};

export type Post = {
  title: string;
  date: string;
  coverImage: Image;
  author: Author;
  video: Video;
};

export type SponsorLink = {
  text: string;
  url: string;
};

export type Job = {
  id: string;
  companyName: string;
  title: string;
  description: string;
  discord: string;
  link: string;
  rank: number;
};

export type ConfUser = {
  id?: string;
  email: string;
  ticketNumber: number;
  name?: string;
  username?: string;
  createdAt: number;
};

export type BooleanString = "0" | "1";

export type InputPosition = "top" | "bottom";

export type Repo = `${string}/${string}`;

export type Mapping =
  | "url"
  | "title"
  | "og:title"
  | "specific"
  | "number"
  | "pathname";

export type GenericString = string & Record<never, never>;

export type Theme =
  | "light"
  | "light_high_contrast"
  | "light_protanopia"
  | "dark"
  | "dark_high_contrast"
  | "dark_protanopia"
  | "dark_dimmed"
  | "transparent_dark"
  | "preferred_color_scheme"
  | `https://${string}`
  | GenericString;

export type AvailableLanguage =
  | "de"
  | "gsw"
  | "en"
  | "es"
  | "fr"
  | "id"
  | "it"
  | "ja"
  | "ko"
  | "pl"
  | "ro"
  | "ru"
  | "tr"
  | "vi"
  | "zh-CN"
  | "zh-TW"
  | GenericString;

export type Loading = "lazy" | "eager";

export interface GiscusProps {
  id?: string;
  repo: Repo;
  repoId: string;
  category?: string;
  categoryId?: string;
  mapping: Mapping;
  term?: string;
  theme?: Theme;
  reactionsEnabled?: BooleanString;
  emitMetadata?: BooleanString;
  inputPosition?: InputPosition;
  lang?: AvailableLanguage;
  loading?: Loading;
}

export type GitHubOAuthData =
  | {
      type: "token";
      token: string;
    }
  | {
      type: "user";
      name: string;
      login: string;
    };
