import fs from "fs";

const createFolder = (path: string) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
};

const createFile = async (name: string, content: string, path?: string) => {
  if (path) {
    name = path + "/" + name;
  }

  fs.writeFile(name, content, function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
};

export { createFolder, createFile };
