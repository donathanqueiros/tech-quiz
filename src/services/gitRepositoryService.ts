import path from "path";
import util from "util";
import fs from "fs";
import { prettierString } from "@/utils/string";
import { Road } from "@/data/road";

const createUpdateData = async (
  includeNames?: string[],
  ignoredNames?: string[]
) => {
  const readFileAsync = util.promisify(fs.readdir);
  const directoryPath = path.resolve("./", "src", "data");

  let string = "";
  const files = [] as string[];
  const folders = [] as string[];
  if (includeNames) {
    includeNames.forEach((name) => {
      folders.push(name.toLowerCase().replace(" ", "_"));
    });
  }

  const filess = await readFileAsync(directoryPath);

  filess.forEach(function (file) {
    if (file.indexOf(".") === -1) {
      if (ignoredNames && !ignoredNames.includes(file)) {
        folders.push(file);
      }
    } else {
      if (ignoredNames && !ignoredNames.includes(file)) {
        files.push(file);
      }
    }
  });

  for (const folder of folders) {
    console.log(folder);
    string += `import ${folder} from "./${folder}";`;
  }

  string += 'import { Road } from "./road";';

  string += `export default [${folders}] as Road[];`;

  string = prettierString(string, "typescript");

  return string;
};

const createRoadFileString = (road: Road) => {
  let content = 'import { Road } from "data/road";';

  content += ` export default ${JSON.stringify(road)} as Road;`;

  content = prettierString(content, "typescript");

  return content;
};

export { createRoadFileString, createUpdateData };
