import React from "react";
import MDEditor from "@uiw/react-md-editor";

function MarkDownWithHighlight({ source }) {
  const updatedMarkdownText = source.replace(/==(.+?)==/g, "<mark>$1</mark>");

  return <MDEditor.Markdown source={updatedMarkdownText} />;
}

export default MarkDownWithHighlight;
