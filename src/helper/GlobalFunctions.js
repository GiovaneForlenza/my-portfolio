function handleOver(projectId) {
  document.getElementById(`content-project-id-${projectId}`).style.transform =
    "scale(1.02)";
  document.getElementById(`side-project-id-${projectId}`).style.fontSize =
    "18px";
  document.getElementById(`side-project-id-${projectId}`).style.paddingLeft =
    "8px";
}

function handleLeave(projectId, onlySide) {
  if (!onlySide) {
    document.getElementById(`content-project-id-${projectId}`).style.transform =
      "scale(1)";
  }
  document.getElementById(`side-project-id-${projectId}`).style.fontSize =
    "16px";
  document.getElementById(`side-project-id-${projectId}`).style.paddingLeft =
    "0px";
}

export { handleOver, handleLeave };
