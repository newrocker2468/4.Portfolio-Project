// src/App.jsx
import "./App.css";
import "./index.css";
import { useEffect, useState } from "react";
import { useTheme } from "./components/useTheme";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const ToggleDarkMode = () => {
    toggleTheme();
  };

  document.documentElement.style.minHeight = "100dvh";

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  useEffect(() => {
    const handleLoad = () => {
      // setTimeout(() => {
        setLoading(false);
      // }, 2000);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loading && <Loader className={loading ? "" : "fade-out"} />}
      <NavBar theme={theme} ToggleDarkMode={ToggleDarkMode} />
      <Routes>
        <Route path='/' element={<Home />} />
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
