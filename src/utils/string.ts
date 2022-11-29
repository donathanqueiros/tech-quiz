import prettier from "prettier";

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

const generateRandomString = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export { prettierString, generateRandomString };
