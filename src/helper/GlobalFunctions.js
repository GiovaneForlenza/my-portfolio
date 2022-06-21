function handleOver(projectId) {
  document.getElementById(`content-project-id-${projectId}`).style.transform =
    "scale(1.02)";
  document.getElementById(`side-project-id-${projectId}`).style.fontSize =
    "17px";
}

function handleLeave(projectId) {
  document.getElementById(`content-project-id-${projectId}`).style.transform =
    "scale(1)";
  document.getElementById(`side-project-id-${projectId}`).style.fontSize =
    "16px";
}

export { handleOver, handleLeave };
