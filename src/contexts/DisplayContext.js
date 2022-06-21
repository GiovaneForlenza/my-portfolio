import React, { useState, createContext } from "react";

export const DisplayContext = createContext();

export const DisplayContextProvider = (props) => {
  const [whatToDisplay, setWhatToDisplay] = useState("home");
  const [isProjectSelected, setIsProjectSelected] = useState(false);
  const [projectSelected, setProjectSelected] = useState({});
  return (
    <DisplayContext.Provider
      value={{
        whatToDisplay,
        setWhatToDisplay,
        isProjectSelected,
        setIsProjectSelected,
        projectSelected,
        setProjectSelected,
      }}
    >
      {props.children}
    </DisplayContext.Provider>
  );
};
