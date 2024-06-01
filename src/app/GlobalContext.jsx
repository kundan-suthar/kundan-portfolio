import { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [aboutRef, setAboutRef] = useState(false);
  const [contactIsInView, setContactIsInView] = useState(false);
  const [projectsIsInView, setProjecctsIsInView] = useState(false);
  const [expIsInView, setExpIsInView] = useState(false);

  const aboutRefSetter = (refValue) => {
    setAboutRef(refValue);
  };

  const contactIsInViewSetter = (isInView) => {
    setContactIsInView(isInView);
  };

  const projectsIsInViewSetter = (isInView) => {
    setProjecctsIsInView(isInView);
  };
  const expIsInViewSetter = (isInView) => {
    setExpIsInView(isInView);
  };

  return (
    <AppContext.Provider
      value={{
        aboutRef,
        aboutRefSetter,
        contactIsInView,
        contactIsInViewSetter,
        projectsIsInView,
        projectsIsInViewSetter,
        expIsInView,
        expIsInViewSetter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
