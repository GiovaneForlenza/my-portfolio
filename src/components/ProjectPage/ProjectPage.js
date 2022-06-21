import React, { useContext } from "react";
import { DisplayContext } from "../../contexts/DisplayContext";

import { IoMdArrowBack } from "react-icons/io";
import { handleLeave } from "../../helper/GlobalFunctions";

function ProjectPage() {
  const {
    projectSelected,
    setWhatToDisplay,
    setProjectSelected,
    setIsProjectSelected,
  } = useContext(DisplayContext);

  function handleBackClick() {
    setWhatToDisplay("home");
    setIsProjectSelected(false);
    setProjectSelected({});
    handleLeave(projectSelected.projectId, true);
  }
  return (
    <div className="project-page-container">
      <div className="arrow-back-container" onClick={handleBackClick}>
        <IoMdArrowBack />
      </div>
      <h1>{projectSelected.projectName}</h1>
    </div>
  );
}

export default ProjectPage;
