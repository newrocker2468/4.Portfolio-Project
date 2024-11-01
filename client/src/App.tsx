import "./App.css";
import "./index.css";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "./components/useTheme";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import { Scrollbar } from "smooth-scrollbar-react";
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";

function App() {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme, effectiveTheme } = useTheme();
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const scrollbar = useRef<BaseScrollbar | null>(null);

  useEffect(() => {
    console.log(scrollbar.current);
  }, []);
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
      {" "}
      <Scrollbar
        damping={0.1}
        thumbMinSize={10}
        renderByPixels={true}
        alwaysShowTracks={true}
        continuousScrolling={true}
        // plugins={{ overscroll: { effect: "bounce" } }}
        ref={scrollbar}
      >
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
              <Route path='/contactme' element={<ContactMe />} />
              <Route path='/qualifications' element={<ContactMe />} />
              <Route path='/skills' element={<ContactMe />} />
              <Route path='/projects' element={<ContactMe />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </div>
        </div>
      </Scrollbar>
    </>
  );
}

export default App;
