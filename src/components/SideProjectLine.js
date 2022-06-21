import React, { useContext } from "react";
import { DisplayContext } from "../contexts/DisplayContext";

import { handleOver, handleLeave } from "../helper/GlobalFunctions";

function SideProjectLine({ title, projectId }) {
  const {
    isProjectSelected,
    setWhatToDisplay,
    setIsProjectSelected,
    setProjectSelected,
  } = useContext(DisplayContext);
  function handleClick(projectId) {
    setWhatToDisplay("project");
    setIsProjectSelected(true);
    setProjectSelected({ projectId, projectName: "Name" });
  }
  return (
    <div
      className="line"
      onMouseOver={() => (!isProjectSelected ? handleOver(projectId) : null)}
      onMouseLeave={() => (!isProjectSelected ? handleLeave(projectId) : null)}
      onClick={() => (!isProjectSelected ? handleClick(projectId) : null)}
    >
      <span id={`side-project-id-${projectId}`}>{title}</span>
    </div>
  );
}

export default SideProjectLine;
