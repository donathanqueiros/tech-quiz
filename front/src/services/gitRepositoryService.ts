import path from "path";
import fs from "fs";
import { promisify } from "util";
import prettier from "prettier";
const readFileAsync = promisify(fs.readdir);

export const updateData = async () => {
  const directoryPath = path.resolve(path.resolve("./", "src", "data"));

  let string = "";
  const files = [] as string[];
  const folders = [] as string[];

  const filess = await readFileAsync(directoryPath);

  filess.forEach(function (file) {
    if (file.indexOf(".") === -1) {
      folders.push(file);
    } else {
      files.push(file);
    }
  });

  for (const folder of folders) {
    console.log(folder);
    string += `import ${folder} from "./${folder}";`;
  }

  string += 'import { Road } from "./road";';

  string += `export default [${folders}] as Road[];`;

  createFile(directoryPath + "/teste.ts", prettierString(string, "typescript"));
};

const createFile = async (name: string, content: string) => {
  fs.writeFile(name, content, function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
};

const prettierString = (
  string: string,
  parser:
    | prettier.LiteralUnion<prettier.BuiltInParserName, string>
    | prettier.CustomParser
) => {
  return prettier.format(string, {
    parser: parser,
  });
};
