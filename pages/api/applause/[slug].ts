import { getLoves, registerLoves } from "@lib/loves";
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  message?: string;
  status?: number;
  count?: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  const slug = req.query.slug.toString();

  if (!slug) {
    return res.status(400).json({ message: `invalid slug` });
  }
  if (req.method == `POST`) {
    await registerApplause(slug);
  }
  const count = await getApplause(slug);
  return res.status(200).json({ count: count });
}
