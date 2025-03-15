import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import React from "react";

const Document: React.FC = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title">Share</p>
        </div>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
