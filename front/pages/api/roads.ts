import data from "data/data";
import { Road } from "data/road";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Road[]>
) {
  res.status(200).json(data);
}
