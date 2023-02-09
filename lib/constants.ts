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

export const SITE_URL = 'https://mansbooks.com';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = '@donboulton';
export const BRAND_NAME = 'Webinar,';
export const SITE_NAME_MULTILINE = ['Angies', ' Video Webinar'];
export const SITE_NAME = 'Angies Video Webinar';
export const META_DESCRIPTION = 'Angelina Jordans Video and Webinar Site.';
export const SITE_DESCRIPTION = 'An interactive online experience by the community, free for everyone.';
export const DATE = '10 January 2023';
export const SHORT_DATE = 'Jan 10 - 12:00am PST';
export const FULL_DATE = 'Jan 10th 12am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT = 'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/donaldboulton/mansbooks.com';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Chat Stage',
    route: '/stage/a'
  },
  {
    name: 'Covers Stage',
    route: '/stage/c'
  },
  {
    name: 'Originals Stage',
    route: '/stage/m'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Songs',
    route: '/speakers'
  },
  {
    name: 'Videos',
    route: '/expo'
  },
  {
    name: 'Social',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';
