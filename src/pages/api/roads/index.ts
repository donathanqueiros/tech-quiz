import { createRoad } from "@/services/roadService";
import data from "@/data";
import { Road } from "data/road";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Road[] | any>
) {
  if (req.method === "GET") {
    const response = data.map((road) => ({
      id: road.id,
      name: road.name,
      description: road.description,
      color: road.color,
      topics: road.topics,
    }));

    res.status(200).json(response);
  }

  if (req.method === "POST") {
    const road = req.body as Road;

    createRoad(road);

    res.status(200).json("ok");
  }
}

const validateRoad = (road: Road) => {
  const fieldsErrors = [];

  if (!road.id) {
    fieldsErrors.push({ field: "id", message: "Id is required" });
  }

  if (!road.name) {
    fieldsErrors.push({ field: "name", message: "Name is required" });
  }
};
