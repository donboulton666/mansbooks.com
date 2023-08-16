import { ConfUser } from "@lib/types";
import { nanoid } from "nanoid";
import { Redis } from "@upstash/redis";

const redis =
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN &&
  process.env.REDIS_EMAIL_TO_ID_SECRET
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : undefined;

export async function getUserByUsername(username: string): Promise<ConfUser> {
  const [name, ticketNumber] = await redis!.hmget(
    `user:${username}`,
    "name",
    "ticketNumber"
  );
  return {
    name,
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : null,
  };
}

export async function getUserById(id: string): Promise<ConfUser> {
  const [name, username, createdAt] = await redis!.hmget(
    `id:${id}`,
    "name",
    "username",
    "createdAt"
  );
  return { name, username, createdAt: parseInt(createdAt!, 10) };
}

export async function createUser(id: string, email: string): Promise<ConfUser> {
  const ticketNumber = await redis!.incr("count");
  const createdAt = Date.now();
  await redis!.hmset(
    `id:${id}`,
    "email",
    email,
    "ticketNumber",
    ticketNumber,
    "createdAt",
    createdAt
  );
  return { id, email, ticketNumber, createdAt };
}

export async function getTicketNumberByUserId(
  id: string
): Promise<string | null> {
  return await redis!.hget(`id:${id}`, "ticketNumber");
}

export async function createGitHubUser(user: any): Promise<string> {
  const token = nanoid();
  const key = `github-user:${token}`;

  await redis!
    .multi()
    .hmset(key, "id", user.id, "login", user.login, "name", user.name || "")
    .expire(key, 60 * 10) // 10m TTL
    .exec();
  return token;
}

export async function updateUserWithGitHubUser(
  id: string,
  token: string,
  ticketNumber: string
): Promise<ConfUser> {
  const [username, name] = await redis!.hmget(
    `github-user:${token}`,
    "login",
    "name"
  );
  if (!username) {
    throw new Error("Invalid or expired token");
  }

  const key = `id:${id}`;
  const userKey = `user:${username}`;

  await redis!
    .multi()
    .hsetnx(key, "username", username)
    .hsetnx(key, "name", name || "")
    // Also save username → data pair
    .hsetnx(userKey, "name", name || "")
    .hsetnx(userKey, "ticketNumber", ticketNumber)
    .exec();

  return { username, name };
}
