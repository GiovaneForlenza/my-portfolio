import React, { useContext } from "react";
import { DisplayContext } from "../contexts/DisplayContext";

import { handleOver, handleLeave } from "../helper/GlobalFunctions";

function Project({ title, projectId }) {
  const { setWhatToDisplay, setIsProjectSelected, setProjectSelected } =
    useContext(DisplayContext);

  function handleClick(projectId) {
    setWhatToDisplay("project");
    setIsProjectSelected(true);
    setProjectSelected({ projectId, projectName: "Name" });
  }
  return (
    <div
      className="project"
      id={`content-project-id-${projectId}`}
      onMouseOver={() => handleOver(projectId)}
      onMouseLeave={() => handleLeave(projectId)}
      onClick={() => handleClick(projectId)}
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
