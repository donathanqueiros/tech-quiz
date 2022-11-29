import data from "@/data";
import { generateRandomString, prettierString } from "@/utils/string";
import { Road } from "data/road";
import api from "shared/api";
import { createRoadFileString, createUpdateData } from "./gitRepositoryService";
import {
  createNewBranch,
  createOrUpdateFile,
  createPullRequest,
  deleteBranch,
  deleteFile,
  getFileContent,
  getLastModificationSha,
} from "./gitService";

const url = "/roads";

const getRoads = async () => {
  const response = await api.get<Road[]>(url);
  return response.data;
};

const getRoadById = async (id: string) => {
  const response = await api.get<Road>(`${url}/${id}`);
  return response.data;
};

const createRoad = async (road: Road) => {
  const fileString = createRoadFileString(road);

  const randomString = generateRandomString(5);

  const branchName = `${randomString}_new-road-${road.name
    .split(" ")
    .join("-")
    .toLowerCase()}`;

  const roadName = road.name.toLowerCase().replace(" ", "_");

  const filePath = `front/src/data/${roadName}/index.ts`;
  const messageCommit = `feat: add road ${road.name} - ${randomString}`;

  const sha = await getLastModificationSha();

  await createNewBranch(branchName, sha);

  try {
    await createOrUpdateFile({
      branchName,
      filePath,
      messageCommit,
      content: fileString,
      commiter: {
        name: "teste",
        email: "teste@teste.com",
      },
    });

    const updatedDate = await createUpdateData([road.name]);

    const messageCommitDataUpdate = `feat: update data - ${randomString}`;

    const filePathData = `front/src/data/index.ts`;

    await createOrUpdateFile({
      branchName,
      filePath: filePathData,
      messageCommit: messageCommitDataUpdate,
      content: updatedDate,
      commiter: {
        name: "teste",
        email: "teste@teste.com",
      },
    });

    await createPullRequest({
      branchName,
      title: `feat: add road ${road.name} - ${randomString}`,
      body: `feat: add road ${road.name} - ${randomString}`,
    });
  } catch (error: any) {
    await deleteBranch(branchName);

    console.error(error);

    throw new Error(error);
  }
};

const updateRoad = async (id: number, road: Road) => {
  const roadFound = data.find((road) => road.id === id);

  if (!roadFound) {
    throw new Error("Road not found");
  }

  const changedName = roadFound?.name !== road.name;

  const fileString = createRoadFileString(road);

  const randomString = generateRandomString(5);

  const branchName = `${randomString}_new-road-${road.name
    .split(" ")
    .join("-")
    .toLowerCase()}`;

  const roadName = roadFound.name.toLowerCase().replace(" ", "_");

  const filePath = `front/src/data/${roadName}/index.ts`;
  const messageCommit = `feat: update road ${road.name} - ${randomString}`;

  const sha = await getLastModificationSha();

  await createNewBranch(branchName, sha);

  try {
    const file = await getFileContent({
      branchName,
      filePath,
    });
    console.log(file);

    await createOrUpdateFile({
      branchName,
      filePath,
      messageCommit,
      content: fileString,
      commiter: {
        name: "teste",
        email: "teste@teste.com",
      },
      sha: file.sha,
    });

    if (changedName) {
      const updatedData = await createUpdateData([road.name], [roadFound.name]);
      const messageCommitDataUpdate = `feat: update data - ${randomString}`;
      const filePathData = `front/src/data/index.ts`;

      const file = await getFileContent({
        branchName,
        filePath: filePathData,
      });

      await createOrUpdateFile({
        branchName,
        filePath: filePathData,
        messageCommit: messageCommitDataUpdate,
        content: updatedData,
        commiter: {
          name: "teste",
          email: "teste@teste.com",
        },
        sha: file.sha,
      });
    }

    await createPullRequest({
      branchName,
      title: `feat: update road ${road.name} - ${randomString}`,
      body: `feat: update road ${road.name} - ${randomString}`,
    });
  } catch (error: any) {
    await deleteBranch(branchName);

    console.error(error);

    throw new Error(error);
  }
};

export { getRoads, getRoadById, createRoad, updateRoad };
