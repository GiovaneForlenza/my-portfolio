import React, { useContext } from "react";
import { DisplayContext } from "../contexts/DisplayContext";

import "../style/content.scss";
import Project from "./Project";
import ProjectPage from "./ProjectPage/ProjectPage";

function Content() {
  const { whatToDisplay, projectSelected } = useContext(DisplayContext);
  return (
    <div className="content-container">
      {/* <div className="about">
     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
     repudiandae impedit natus ipsa temporibus nam enim consequuntur
     molestias officia sint! Tempora modi exercitationem illum nam atque
     provident. Illo, nostrum ratione.
     </div>
     <div className="contact">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt provident,
     aliquid quibusdam eveniet at numquam ad mollitia itaque distinctio
     reiciendis enim iusto eum repudiandae, quis corporis voluptatibus
     commodi accusamus cum?
    </div> */}
      {whatToDisplay === "home" ? (
        <div className="projects-container">
          {/* //*Make a map loop from the data file */}
          <Project title={"Project Title"} projectId={1} />
          <Project title={"Project Title"} projectId={2} />
          <Project title={"Project Title"} projectId={3} />
          <Project title={"Project Title"} projectId={4} />
          <Project title={"Project Title"} projectId={5} />
          <Project title={"Project Title"} projectId={6} />
          <Project title={"Project Title"} projectId={7} />
          <Project title={"Project Title"} projectId={8} />
        </div>
      ) : (
        <ProjectPage />
      )}
    </div>
  );
}

export default Content;
