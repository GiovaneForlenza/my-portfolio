import React from "react";

import { handleOver, handleLeave } from "../helper/GlobalFunctions";
function Project({ title, projectId }) {
  return (
    <div
      className="project"
      id={`content-project-id-${projectId}`}
      onMouseOver={() => handleOver(projectId)}
      onMouseLeave={() => handleLeave(projectId)}
    >
      <div className="photo">
        <img
          src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
          alt=""
        />
      </div>
      <div className="title">{title}</div>
    </div>
  );
}

export default Project;
