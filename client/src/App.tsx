import "./App.css";
import "./index.css";
import { useEffect, useState, useRef } from "react";
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
    // const lenis = useLenis(({ scroll }) => {
    //   // called every scroll
    // });
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme, effectiveTheme } = useTheme();
  const loaderRef = useRef<HTMLDivElement | null>(null);
 
  useEffect(() => {
    const handleLoad = () => {
        if (loaderRef.current) {
          loaderRef.current.style.transition = "opacity 0.5s ease-out";
          loaderRef.current.style.opacity = "0";
          setTimeout(() => {
            setLoading(false);
          }, 500); 
        }
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <ReactLenis root>
        <div id='scroll-container' className='app-content'>
          <NavBar
            theme={theme}
            toggleTheme={() => toggleTheme()}
            effectiveTheme={effectiveTheme}
          />
          <div style={{ padding: "20px" }}>
            <Routes>
              <Route
                path='/'
                element={<Home ref={loaderRef} loading={loading} />}
              />
              <Route
                path='/aboutme'
                element={<AboutMe ref={loaderRef} loading={loading} />}
              />
              <Route
                path='/qualifications'
                element={<Qualifications ref={loaderRef} loading={loading} />}
              />
              <Route
                path='/skills'
                element={<Skills ref={loaderRef} loading={loading} />}
              />
              <Route
                path='/projects/:name'
                element={<ProjectDescription ref={loaderRef} loading={loading} />}
              />
              <Route path='*' element={"Not Found"} />
            </Routes>
          </div>
        </div>
      </ReactLenis>
    </>
  );
}

export default App;
