//ThemeProvider.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const lightTheme = {
    body: "white",
    text: "black",
    linkColor: "rgba(0, 0, 0, 1)",
    linkHoverColor: "rgba(255, 148, 66, 1)",
    background: "white",
  };

  const darkTheme = {
    body: "black",
    text: "white",
    linkColor: "rgba(255, 255, 255, 1)",
    linkHoverColor: "rgba(255, 148, 66, 1)",
    background: "black",
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <StyledComponentsThemeProvider theme={currentTheme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};
