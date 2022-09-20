import data from "data/data";
import { Road } from "data/road";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Road[] | any>
) {
  const response = data.map((road) => ({
    id: road.id,
    name: road.name,
    description: road.description,
    color: road.color,
  }));

  res.status(200).json(response);
}
