import "../styles/NavBar.css";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Arrow from "../icons/Arrow";
import SystemIcon from "../icons/SystemIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/GithubIcon";
import CoffeeIcon from "../icons/CoffeeIcon";
interface NavBarProps {
  theme: string;
  effectiveTheme: string;
  toggleTheme: () => void;
}

const NavBar: FC<NavBarProps> = ({ theme, toggleTheme, effectiveTheme }) => {
  const location = useLocation();
  const [, setSelectedRoute] = useState(location.pathname);
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  useEffect(() => {
    setSelectedRoute(location.pathname);
  }, [location.pathname]);
  const onButtonClick = async (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Prevent the default link behavior
    try {
      const response = await fetch("Resume.pdf");
      const blob = await response.blob();
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Resume.pdf"; // Set the desired filename here
      alink.click();
    } catch (error) {
      console.error("Error fetching the PDF file:", error);
    }
  };

  let isDark = false;
  if (effectiveTheme == "dark") {
    isDark = true;
  } else {
    isDark = false;
  }

  const links = useMemo(
    () => [
      {
        name: "Home",
        Route: "/",
      },

      {
        name: "Qualifications",
        Route: "/qualifications",
      },
      {
        name: "Skills",
        Route: "/skills",
      },
      {
        name: "About Me",
        Route: "/aboutme",
      },
    ],
    []
  );

  const [offset, setOffset] = useState({ left: 0, width: 0, height: 0 });
  const updateOffsets = useCallback(() => {
    const currentLinkIndex = links.findIndex(
      (link) => link.Route === location.pathname
    );
    if (currentLinkIndex !== -1 && navRefs.current[currentLinkIndex]) {
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      const element = navRefs.current[currentLinkIndex];
      setOffset({
        left: element.offsetLeft / rootFontSize,
        width: element.offsetWidth / rootFontSize,
        height: element.offsetHeight / rootFontSize,
      });
    }
  }, [links, location.pathname]);
  useEffect(() => {
    updateOffsets(); 
    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, [updateOffsets]); 
  return (
    <nav className={`flex justify-around items-center my-5 z-50`}>
      <div className='flex items-center gap-[1rem]  '>
        {theme === "system" ? "System" : theme === "light" ? "Light" : "Dark"}
        <div className='flex justify-between flex-row items-center m-[0.5rem] hover:bg-darkwhite dark:hover:bg-lightblack p-2 rounded-2xl cursor-pointer border-2 border-transparent  active:border-black dark:active:border-white'>
          {theme === "system" ? (
            <SystemIcon
              effectiveTheme={effectiveTheme}
              toggleTheme={toggleTheme}
            />
          ) : isDark ? (
            <img
              src='sun.svg'
              alt=''
              width={30}
              height={30}
              className='sun'
              onClick={toggleTheme}
            />
          ) : (
            <img
              src='moon.svg'
              alt=''
              width={30}
              height={30}
              className='moon'
              onClick={toggleTheme}
            />
          )}
        </div>
        <div className='flex justify-center flex-col'>
          <span className='font-medium'>
            <Link to='/'>Jaskaran Singh</Link>
          </span>
          <span className='text-gray-400'>Full Stack Dev</span>
        </div>
      </div>

      <div className='relative flex justify-center items-center h-16'>
        <ul className='relative flex justify-around gap-4 border-2 dark:border-navborder border-grey bg-opacity-20 overflow-hidden  rounded-3xl'>
          {" "}
          <div
            className='absolute top-0 bottom-0 left-0 bg-black dark:text-black  dark:bg-white  w-20 h-full rounded-2xl transition-transform duration-500 ease-in-out before:content-[""] before:absolute before:top-1px before:right-[47%] before:w-2.5  before:h-[0.25rem] before:dark:bg-black before:bg-white before:rounded-full'
            style={{
              transform: `translateX(${offset.left}rem)`,
              width: `${offset.width}rem`,
            }}
          ></div>{" "}
          {links.map((link, index) => (
            <li
              key={link.name}
              ref={(el) => (navRefs.current[index] = el)}
              className={`${
                location.pathname === link.Route
                  ? "text-white dark:text-black"
                  : "dark:text-white text-black hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white"
              } relative py-2 rounded-2xl cursor-pointer  transition-all duration-300 ease-in-out z-10`}
            >
              <Link to={link.Route} className='relative z-10 py-2 px-4'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>{" "}
      </div>

      <div className='flex justify-around items-center gap-2'>
        <Link
          to='https://buymeacoffee.com/jaskaransingh'
          className='flex justify-center items-center hover:bg-darkwhite dark:hover:bg-lightblack p-2 rounded-2xl transition duration-200 ease-in-out border-2 border-transparent active:border-black dark:active:border-white '
        >
          <CoffeeIcon />
        </Link>
        <Link
          to='https://www.linkedin.com/in/jaskaransc'
          className='flex justify-center items-center hover:bg-darkwhite dark:hover:bg-lightblack p-2 rounded-2xl transition duration-200 ease-in-out border-2 border-transparent  active:border-black dark:active:border-white'
        >
          <LinkedinIcon />
        </Link>
        <Link
          to='https://github.com/newrocker2468'
          className='hover:bg-darkwhite dark:hover:bg-lightblack p-2 rounded-2xl transition duration-200 ease-in-out border-2 border-transparent  active:border-black dark:active:border-white'
        >
          <GithubIcon />
        </Link>
        <a
          className='link bg-black dark:bg-white dark:text-black text-white dark:hover:bg-grey  rounded-2xl
  flex justify-center items-center px-3 py-1  hover:bg-lightblack transition duration-200 ease-in-out active:scale-95 cursor-pointer'
          onClick={onButtonClick}
        >
          Resume <Arrow isDark={isDark} w={10} h={10} style='ml-1.5 arrow' />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
