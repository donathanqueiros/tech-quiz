import { Octokit } from "@octokit/core";
var fs = require("fs");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const createNewBranch = async (branchName: string, sha: string) => {
  return await octokit.request("POST /repos/{owner}/{repo}/git/refs", {
    owner: "donathanqueiros",
    repo: "tech-quiz",
    ref: "refs/heads/" + branchName,
    sha,
  });
};

const getLastModificationSha = async (): Promise<string> => {
  const res = await octokit.request("GET /repos/{owner}/{repo}/git/ref/{ref}", {
    owner: "donathanqueiros",
    repo: "tech-quiz",
    ref: "heads/main",
  });

  const sha = res.data.object.sha as string;

  return sha;
};

const createOrUpdateFile = async ({
  branchName,
  filePath,
  content,
  messageCommit,
  commiter,
}: {
  branchName: string;
  filePath: string;
  content: string;
  messageCommit: string;
  commiter: {
    name: string;
    email: string;
  };
}) => {
  const base64Encode = (str: string) => {
    return Buffer.from(str).toString("base64");
  };
  const contentBase64 = base64Encode(content);

  await octokit.request("PUT /repos/{owner}/{repo}/contents/{path}", {
    owner: "donathanqueiros",
    repo: "tech-quiz",
    branch: branchName,

    path: filePath,
    message: messageCommit,
    committer: {
      name: commiter.name,
      email: commiter.email,
    },
    content: contentBase64,
  });
};

const createPullRequest = async ({
  branchName,
  title,
  body,
}: {
  branchName: string;
  title: string;
  body: string;
}) => {
  return await octokit.request("POST /repos/{owner}/{repo}/pulls", {
    owner: "donathanqueiros",
    repo: "tech-quiz",
    head: branchName,
    base: "main",
    title,
    body,
  });
};

export {
  createNewBranch,
  getLastModificationSha,
  createOrUpdateFile,
  createPullRequest,
};
