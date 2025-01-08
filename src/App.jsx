import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`js
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == "" && lastLine == "") {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
| ------------ | ------------- | ---------------- |
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const getMarkdownOutput = (markdown) => {
    return { __html: marked(markdown) };
  };

  const handleEditorChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="container">
      <div className="row my-5 justify-content-center">
        <div className="col-12 col-md-4 mb-5 md-mb-0">
          <label className="text-center bg-dark-subtle m-0 w-100 fs-4">
            Editor
          </label>
          <textarea
            className="bg-transparent overflow-y-scroll p-3 w-100"
            id="editor"
            value={markdown}
            onChange={handleEditorChange}
            rows="14"
          ></textarea>
        </div>
        <div className="col-md-8 ">
          <label className="text-center bg-dark-subtle m-0 w-100 fs-4">
            Preview
          </label>
          <div
            id="preview"
            className="border border-black p-3 overflow-none min-h-75 "
            dangerouslySetInnerHTML={getMarkdownOutput(markdown)}
          ></div>
        </div>
      </div>
    </div>
  );
}
