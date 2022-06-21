import React from "react";

import "../style/sidebar.scss";
import SideProjectLine from "./SideProjectLine";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="content">
        <div className="group">
          <div className="line">About Me</div>
          <div className="line">Contact</div>
        </div>
        <div className="group">
          <div className="line">
            <div className="title bold">Projects</div>
          </div>
          <SideProjectLine title={"Project Title"} projectId={1} />
          <SideProjectLine title={"Project Title"} projectId={2} />
          <SideProjectLine title={"Project Title"} projectId={3} />
          <SideProjectLine title={"Project Title"} projectId={4} />
          <SideProjectLine title={"Project Title"} projectId={5} />
          <SideProjectLine title={"Project Title"} projectId={6} />
          <SideProjectLine title={"Project Title"} projectId={7} />
          <SideProjectLine title={"Project Title"} projectId={8} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
