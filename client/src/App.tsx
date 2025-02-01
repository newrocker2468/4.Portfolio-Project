import "./App.css";
import "./index.css";
import { useTheme } from "./components/useTheme";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import AboutMe from "./pages/AboutMe";
import Qualifications from "./pages/Qualifications";
import { ReactLenis } from "lenis/react";
import ProjectDescription from "./pages/ProjectDescription";

function App() {
  const { theme, toggleTheme, effectiveTheme } = useTheme();
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
          <Route path='/qualifications' element={<Qualifications />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects/:name' element={<ProjectDescription />} />
          <Route path='*' element={"Not Found"} />
        </Routes>
      </ReactLenis>
    </>
  );
}

export default App;
