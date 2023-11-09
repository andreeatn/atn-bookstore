import React from "react";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const ThemeContext = React.createContext({
  theme: "",
  baseColor: "",
  setTheme: (theme: string) => {},
});

export default ThemeContext;

export function ThemeProvider({ children }: Props) {
  const localSessionItemKey = "atn-bookstore-theme";
  const cachedTheme = localStorage.getItem(localSessionItemKey);

  const [currentTheme, setCurrentTheme] = useState(
    cachedTheme ? cachedTheme : "dark"
  );
  const [baseColor, setBaseColor] = useState(
    cachedTheme ? (cachedTheme === "dark" ? "black" : "white") : "black"
  );

  const setCachedTheme = (currentTheme: string) => {
    let newTheme: string = "";

    if (cachedTheme) {
      cachedTheme === currentTheme
        ? (newTheme = "")
        : (newTheme = currentTheme);
    } else if (!cachedTheme) {
      newTheme = currentTheme;
    }

    if (newTheme) {
      localStorage.setItem(localSessionItemKey, newTheme);
      setCurrentTheme(newTheme);

      newTheme === "dark" ? setBaseColor("black") : setBaseColor("white");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        baseColor: baseColor,
        setTheme: setCachedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
