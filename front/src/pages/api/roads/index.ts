import {
  createNewBranch,
  createOrUpdateFile,
  createPullRequest,
  getLastModificationSha,
} from "@/services/gitService";
import { createFile, createFolder } from "@/utils/fs";
import { prettierString } from "@/utils/string";
import data from "data/data";
import { Road } from "data/road";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

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

    const roadName = road.name.toLowerCase().replace(" ", "-");

    let content = 'import { Road } from "data/road";';

    content += ` export default ${JSON.stringify(road)} as Road;`;

    content = prettierString(content, "typescript");

    const branchName = `road-${road.id}-${road.name
      .split(" ")
      .join("-")
      .toLowerCase()}`;
    const filePath = `front/src/data/${roadName}/index.ts`;
    const messageCommit = `feat: add road ${road.name}`;

    const sha = await getLastModificationSha();

    await createNewBranch(branchName, sha);

    await createOrUpdateFile({
      branchName,
      filePath,
      messageCommit,
      content,
      commiter: {
        name: "teste",
        email: "teste@teste.com",
      },
    });

    createPullRequest({
      branchName,
      title: `feat: add road ${road.name}`,
      body: `feat: add road ${road.name}`,
    });

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
