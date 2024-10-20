import "./App.css";
import "./index.css";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "./components/useTheme";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";

function App() {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme, effectiveTheme } = useTheme();

const loaderRef = useRef<HTMLDivElement | null>(null);



  document.documentElement.style.minHeight = "100dvh";

  // useEffect(() => {
  //   console.log(theme);
  // }, [theme]);

  useEffect(() => {
    const handleLoad = () => {
      // console.log(loaderRef.current);
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
      <NavBar
        theme={theme}
        toggleTheme={() => {
          toggleTheme();
        }}
        effectiveTheme={effectiveTheme}
      />
      <Routes>
        <Route path='/' element={<Home ref={loaderRef} loading={loading} />} />
        <Route path='/contactme' element={<ContactMe />} />
        <Route path='/qualifications' element={<ContactMe />} />
        <Route path='/skills' element={<ContactMe />} />
        <Route path='/projects' element={<ContactMe />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
