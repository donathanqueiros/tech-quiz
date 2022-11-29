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

export { prettierString };
