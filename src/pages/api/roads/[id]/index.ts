import { updateRoad } from "@/services/roadService";
import data from "@/data";
import { Road } from "data/road";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Road | any>
) {
  if (req.method === "GET") {
    const { id } = req.query;

    const road = data.find((road) => road.id === Number(id));

    if (road) {
      res.status(200).json(road);
    } else {
      res.status(404).json({ message: `Road with id: ${id} not found.` });
    }
  }

  if (req.method === "PUT") {
    const { id } = req.query;
    const road = req.body as Road;

    const roadIndex = data.findIndex((road) => road.id === Number(id));

    if (roadIndex > -1) {
      updateRoad(Number(id), road);
      res.status(200).json(road);
    } else {
      res.status(404).json({ message: `Road with id: ${id} not found.` });
    }
  }
}
