import { Octokit } from "@octokit/core";
import fs from "fs";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const createNewBranch = async (branchName: string, sha: string) => {
  const res = await octokit.request("POST /repos/{owner}/{repo}/git/refs", {
    owner: "donathanqueiros",
    repo: "tech-quiz",
    ref: "refs/heads/" + branchName,
    sha,
  });

  console.log("create new branch sucess");

  return res;
};

const getLastModificationSha = async (): Promise<string> => {
  const res = await octokit.request("GET /repos/{owner}/{repo}/git/ref/{ref}", {
    owner: "donathanqueiros",
    repo: "tech-quiz",
    ref: "heads/main",
  });

  const sha = res.data.object.sha as string;

  console.log("get last modification sha sucess");

  return sha;
};

const createOrUpdateFile = async ({
  branchName,
  filePath,
  content,
  messageCommit,
  commiter,
  sha,
}: {
  branchName: string;
  filePath: string;
  content: string;
  messageCommit: string;
  commiter: {
    name: string;
    email: string;
  };
  sha?: string;
}) => {
  const base64Encode = (str: string) => {
    return Buffer.from(str).toString("base64");
  };
  const contentBase64 = base64Encode(content);

  const res = await octokit.request(
    "PUT /repos/{owner}/{repo}/contents/{path}",
    {
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
      sha,
    }
  );

  console.log("create or update file sucess");

  return res;
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
  const res = await octokit.request("POST /repos/{owner}/{repo}/pulls", {
    owner: "donathanqueiros",
    repo: "tech-quiz",
    head: branchName,
    base: "main",
    title,
    body,
  });

  console.log("create pull request sucess");

  return res;
};

const deleteBranch = async (branchName: string) => {
  const res = await octokit.request(
    "DELETE /repos/{owner}/{repo}/git/refs/{ref}",
    {
      owner: "donathanqueiros",
      repo: "tech-quiz",
      ref: "heads/" + branchName,
    }
  );
};

const deleteFile = async ({
  branchName,
  filePath,
  messageCommit,
  commiter,
}: {
  branchName: string;
  filePath: string;
  messageCommit: string;
  commiter: {
    name: string;
    email: string;
  };
}) => {
  const res = await octokit.request(
    "DELETE /repos/{owner}/{repo}/contents/{path}",
    {
      owner: "donathanqueiros",
      repo: "tech-quiz",
      branch: branchName,

      path: filePath,
      message: messageCommit,
      committer: {
        name: commiter.name,
        email: commiter.email,
      },
    }
  );

  console.log("delete content file sucess");

  return res;
};

const getFileContent = async ({
  branchName,
  filePath,
}: {
  branchName: string;
  filePath: string;
}) => {
  const res = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: "donathanqueiros",
      repo: "tech-quiz",
      branch: branchName,

      path: filePath,
    }
  );

  console.log("get file content sucess");

  return res.data as ContentGitResponse;
};

export {
  createNewBranch,
  getLastModificationSha,
  createOrUpdateFile,
  createPullRequest,
  deleteBranch,
  deleteFile,
  getFileContent,
};

export interface Links {
  git: string;
  self: string;
  html: string;
}

export interface ContentGitResponse {
  type: string;
  encoding: string;
  size: number;
  name: string;
  path: string;
  content: string;
  sha: string;
  url: string;
  git_url: string;
  html_url: string;
  download_url: string;
  _links: Links;
}
