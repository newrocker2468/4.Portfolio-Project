import "./App.css";
import "./index.css";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "./components/useTheme";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import AboutMe from "./pages/AboutMe";

function App() {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme, effectiveTheme } = useTheme();
  const loaderRef = useRef<HTMLDivElement | null>(null);
 
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        if (loaderRef.current) {
          loaderRef.current.style.transition = "opacity 0.5s ease-out";
          loaderRef.current.style.opacity = "0";
          setTimeout(() => {
            setLoading(false);
          }, 500); // Match this duration with the transition duration
        }
      }, 2000);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
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
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/qualifications' element={<AboutMe />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/' element={<Home />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
