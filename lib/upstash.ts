import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "https://usw1-certain-osprey-33919.upstash.io",
  token: process.env.UPSTASH_REDIS_REST_TOKEN
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = await redis.set("emailToId", "name");

export function emailToId(email: string) {
  if (process.env.REDIS_EMAIL_TO_ID_SECRET) {
    const hmac = crypto.createHmac(
      "sha1",
      process.env.REDIS_EMAIL_TO_ID_SECRET
    );
    hmac.update(email);
    const result = hmac.digest("hex");
    return result;
  } else {
    throw new Error("REDIS_EMAIL_TO_ID_SECRET is missing");
  }
}

export default redis