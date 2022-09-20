import data from "data/data";
import { Road } from "data/road";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Road | any>
) {
  const { id } = req.query;

  const road = data.find((road) => road.id === id);

  if (road) {
    res.status(200).json(road);
  } else {
    res.status(404).json({ message: `Road with id: ${id} not found.` });
  }
}
