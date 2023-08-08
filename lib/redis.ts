import Redis from "@upstash/redis";
import crypto from "crypto";

const redis =
  process.env.UPSTASH_REDIS_REST_TOKEN &&
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.EMAIL_TO_ID_SECRET
    ? new Redis({
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
        url: process.env.UPSTASH_REDIS_REST_URL,
        tls:
          process.env.REDIS_SSL_ENABLED &&
          process.env.REDIS_SSL_ENABLED != "false"
            ? {}
            : undefined,
      })
    : undefined;

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

export default redis;
