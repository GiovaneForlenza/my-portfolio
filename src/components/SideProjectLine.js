import React from "react";

import { handleOver, handleLeave } from "../helper/GlobalFunctions";

function SideProjectLine({ title, projectId }) {
  return (
    <div
      className="line"
      id={`side-project-id-${projectId}`}
      onMouseOver={() => handleOver(projectId)}
      onMouseLeave={() => handleLeave(projectId)}
    >
      {title}
    </div>
  );
}

export default SideProjectLine;
