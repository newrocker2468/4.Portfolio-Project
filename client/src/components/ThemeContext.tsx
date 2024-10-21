import React, { createContext, useState, useEffect } from "react";

interface ThemeContextType {
  theme: "light" | "dark" | "system";
  effectiveTheme: "light" | "dark" | "system";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme as "light" | "dark" | "system";
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState<"light" | "dark" | "system">(getInitialTheme);
  const [effectiveTheme, setEffectiveTheme] = useState<"light" | "dark" | "system">(
    getInitialTheme() === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : getInitialTheme()
  );


  useEffect(() => {
    const className = "dark";
    const element = document.documentElement;

    const applyTheme = (theme: "light" | "dark" | "system") => {
      if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
              setEffectiveTheme("dark");

        element.classList.add(className);
      } else {
           setEffectiveTheme("light");
        element.classList.remove(className);
      }
    };

    applyTheme(theme);

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        applyTheme(e.matches ? "dark" : "light");
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : prevTheme === "dark" ? "system" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, effectiveTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
