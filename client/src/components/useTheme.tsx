// useTheme.ts
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);
// if(context?.theme === "system") {
// const ans =  window.matchMedia("(prefers-color-scheme: dark)").matches;
// context.theme = ans ? "dark" :"light";
// } 
console.log(context)

  if (!context) {
     throw new Error("useTheme must be used within a ThemeProvider");
   }
  return context;
}

