import NextAuth, { NextAuthOptions } from "next-auth"
import { NextApiRequest, NextApiResponse } from 'next';
import { COOKIE } from '@lib/constants';
import redis from '@lib/redis';
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains

    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),    
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    */
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
     /*
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),   
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
    */
  ],
  theme: {
    colorScheme: "dark",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
})

export default NextAuth(authOptions)

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const id = req.cookies[COOKIE];
  if (!id) {
    return res.status(401).json({
      error: {
        code: 'missing_cookie',
        message: 'Missing cookie'
      }
    });
  }

  if (redis) {
    const ticketNumberString = await redis.hget(`id:${id}`, 'ticketNumber');

    if (!ticketNumberString) {
      return res.status(401).json({
        error: {
          code: 'not_registered',
          message: 'This user is not registered'
        }
      });
    }
  }

  return res.status(200).json({ loggedIn: true });
}
