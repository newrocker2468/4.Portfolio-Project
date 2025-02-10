import "./App.css";
import "./index.css";
import { useTheme } from "./components/useTheme";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import AboutMe from "./pages/AboutMe";
import { ReactLenis } from "lenis/react";
import ProjectDescription from "./pages/ProjectDescription";
import ContactMe from "./pages/ContactMe";
import { useEffect } from "react";

function App() {
  const { theme, toggleTheme, effectiveTheme } = useTheme();

  useEffect(() => {
    const htmlElement = document.documentElement;
    const darkClassPresent = htmlElement.classList.contains("dark");

    // Apply the scrollbar class to the html tag
    if (darkClassPresent) {
      htmlElement.classList.add("dark-scrollbar");
      htmlElement.classList.remove("light-scrollbar");
    } else {
      htmlElement.classList.add("light-scrollbar");
      htmlElement.classList.remove("dark-scrollbar");
    }
  }, [effectiveTheme]);

  return (
    <>
      <ReactLenis root>
        <NavBar
          theme={theme}
          toggleTheme={() => toggleTheme()}
          effectiveTheme={effectiveTheme}
        />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/ContactMe' element={<ContactMe />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects/:name' element={<ProjectDescription />} />
          <Route path='*' element={"Not Found"} />
        </Routes>
      </ReactLenis>
    </>
  );
}

export default App;
