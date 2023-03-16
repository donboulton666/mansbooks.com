import { Redis } from "@upstash/redis";

export const databaseName =
  process.env.NODE_ENV === "development" ? "mansbooks" : "mansbooks";

const redis = Redis.fromEnv();

export default redis;
