import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";

import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const EditorComponent = () => (
  <Editor
    toolbar={{
      options: [
        "inline",
        "blockType",
        "fontSize",
        "fontFamily",
        "list",
        "textAlign",
        "colorPicker",
        "link",
        "embedded",
        "emoji",
        "image",
        "remove",
        "history",
      ],
    }}
  />
);

export default EditorComponent;
