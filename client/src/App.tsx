import { Toaster, toast } from "sonner";
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
import { useCallback, useEffect } from "react";
import Footer from "./components/Footer";

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

  // Function to get a random quote based on theme
  const getRandomQuote = useCallback((theme: string) => {
    const darkModeQuotes = [
      "Dark Mode Engaged. Let the productivity (or procrastination) begin!",
      "Embrace the darkness. It's easier on the eyes.",
      "Welcome to the dark side. We have cookies.",
    ];

    const lightModeQuotes = [
      "Light Mode Activated. Sunglasses may be required. 😎",
      "Bright and shiny! Enjoy the light mode.",
      "Let there be light! And it was good.",
    ];

    const systemModeQuotes = [
      "System Preference: Because sometimes, you just can't decide.",
      "System theme activated. Let's go with the flow.",
      "Trusting your system's choice. Best of both worlds.",
    ];

    const quotes =
      theme === "dark"
        ? darkModeQuotes
        : theme === "light"
        ? lightModeQuotes
        : systemModeQuotes;
    return quotes[Math.floor(Math.random() * quotes.length)];
  }, []);

  // Helper function for toast styling
  const getToastStyles = (theme: string) => ({
    backgroundColor: theme === "dark" ? "black" : "white",
    color: theme === "dark" ? "white" : "black",
    padding: "1rem",
  });

  useEffect(() => {
    const quote = getRandomQuote(theme);
    toast(
      `${
        theme == "dark"
          ? "Dark Mode"
          : theme == "light"
          ? "Light Mode"
          : "System Preference"
      } Applied!`,
       {
        description: `${quote}`,
        action: {
          label: "Dismiss",
          onClick: () => console.log(""),
        },
        style: getToastStyles(theme),
      }
    );
  }, [getRandomQuote, theme]);

  return (
    <>
      <Toaster />
      <ReactLenis root>
        <NavBar
          theme={theme}
          toggleTheme={() => toggleTheme()}
          effectiveTheme={effectiveTheme}
        />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/ContactMe' element={<ContactMe />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects/:name' element={<ProjectDescription />} />
          <Route path='*' element={"Not Found"} />
        </Routes>
        <Footer />
      </ReactLenis>
    </>
  );
}

export default App;
