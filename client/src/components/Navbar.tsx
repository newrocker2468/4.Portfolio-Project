import "/styles/NavBar.css";
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Arrow from "../assets/Arrow";
import SystemIcon from "../assets/SystemIcon";
import LinkedinIcon from "../assets/LinkedinIcon";
import GithubIcon from "../assets/GithubIcon";
import CoffeeIcon from "../assets/CoffeeIcon";
import HamBurger from "../assets/HamBurgerIcon";
import HamBurgerMenu from "./HamburgerMenu";
import { Routes } from "../data/DataArchive";
import JSConfetti from "js-confetti";

interface NavBarProps {
  theme: string;
  effectiveTheme: string;
  toggleTheme: () => void;
}

const NavBar: FC<NavBarProps> = ({ theme, toggleTheme, effectiveTheme }) => {
  const canvas = document.getElementById("#root");
  const jsConfetti = new JSConfetti({ canvas: canvas as HTMLCanvasElement });

  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, setSelectedRoute] = useState(location.pathname);
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  useEffect(() => {
    setSelectedRoute(location.pathname);
  }, [location.pathname]);
  const onButtonClick = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("Resume.pdf");
      const blob = await response.blob();
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "Resume.pdf";
      window.open(fileURL, "_blank");
    } catch (error) {
      console.error("Error fetching the PDF file:", error);
    } finally {
      setLoading(false);
    }
  };

  const links = useMemo(() => Routes, []);

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
  }, [location.pathname, links]);

  useEffect(() => {
    updateOffsets();
    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, [updateOffsets]);

  const handleconfetti = () => {
    jsConfetti.addConfetti({
      confettiColors: [`${effectiveTheme == "dark" ? "grey" : "black"}`],
      confettiRadius: 6,
      confettiNumber: 500,
    });
    // jsConfetti.clearCanvas();
  };
  return (
    <nav
      className={`${
        isAtTop ? "bg-transparent" : " dark:bg-black bg-white"
      } flex justify-between sm:justify-around items-center py-1 z-10 sticky top-0 w-full `}
    >
      <div className='flex items-center sm:gap-0 md:gap-[1rem] z-10 ml-5 sm:ml-0'>
        <div className='flex justify-between flex-row items-center m-[0.5rem] hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-2xl cursor-pointer border-2 border-transparent active:border-black dark:active:border-white z-10'>
          {theme === "system" ? (
            <SystemIcon
              effectiveTheme={effectiveTheme}
              toggleTheme={toggleTheme}
            />
          ) : effectiveTheme == "dark" ? (
            <img
              src='/sun.svg'
              alt=''
              width={30}
              height={30}
              className='sun z-10'
              onClick={toggleTheme}
            />
          ) : (
            <img
              src='/moon.svg'
              alt=''
              width={30}
              height={30}
              className='moon z-10'
              onClick={toggleTheme}
            />
          )}
        </div>
        <div className='flex justify-center flex-col z-10'>
          <span className='font-medium z-10'>
            <span onClick={handleconfetti} className='cursor-pointer'>
              Jaskaran Singh
            </span>
          </span>
          <span className='text-gray-400 z-10'>Full Stack Dev</span>
        </div>
      </div>

      <div className='relative sm:flex justify-center items-center h-16 z-10 hidden'>
        <ul className='relative flex z-10 justify-around gap-4 border-2 dark:border-gray-700 border-gray-300 bg-opacity-20 overflow-hidden rounded-3xl'>
          {location.pathname ==
            links.find((link) => link.Route == location.pathname)?.Route && (
            <>
              <div
                className={`z-10 absolute top-0 bottom-0 left-0 bg-black dark:text-black dark:bg-white w-20 h-full rounded-2xl transition-transform duration-500 ease-in-out before:content-[""] before:absolute before:top-[1px] before:right-[47%] before:w-[2.5px] before:h-[0.25rem] before:dark:bg-black before:bg-white before:rounded-full`}
                style={{
                  transform: `translateX(${offset.left}rem)`,
                  width: `${offset.width}rem`,
                }}
              ></div>
            </>
          )}
          {links.map((link, index) => (
            <li
              key={link.name}
              ref={(el) => (navRefs.current[index] = el)}
              className={`${
                location.pathname === link.Route
                  ? "text-white dark:text-black"
                  : "dark:text-white text-black hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white"
              } relative py-2 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out z-10`}
            >
              <Link to={link.Route} className='relative z-10 py-2 px-2 lg:px-4'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex justify-around items-center z-10 gap-2'>
        <Link
          to='https://buymeacoffee.com/jaskaransingh'
          className='lg:flex justify-center items-center hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-2xl transition duration-200 ease-in-out border-2 border-transparent active:border-black dark:active:border-white hidden'
        >
          <CoffeeIcon />
        </Link>
        <Link
          to='https://www.linkedin.com/in/jaskaransc'
          className='md:flex justify-center items-center z-10 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-2xl transition duration-200 ease-in-out border-2 border-transparent active:border-black dark:active:border-white hidden'
        >
          <LinkedinIcon />
        </Link>
        <Link
          to='https://github.com/newrocker2468'
          className='hover:bg-gray-200 dark:hover:bg-gray-800 p-2 z-10 rounded-2xl transition duration-200 ease-in-out border-2 border-transparent active:border-black dark:active:border-white hidden lg:flex'
        >
          <GithubIcon />
        </Link>
        <a
          className={`link bg-black dark:bg-white z-10 dark:text-black text-white dark:hover:bg-gray-300 rounded-2xl hidden sm:flex justify-center items-center transition-all duration-1000 ease-in-out active:scale-95 cursor-pointer ${
            loading ? "ml-[1rem] px-1 py-1 " : "px-3 py-1"
          }`}
          onClick={onButtonClick}
        >
          {loading ? (
            <svg
              className='animate-spin h-5 w-5 my-1 mx-2 z-10 border-[3.5px] border-t-transparent dark:border-black border-white rounded-full transition-all duration-1000 ease-in-out'
              viewBox='0 0 24 24'
            ></svg>
          ) : (
            <>
              Resume
              <Arrow
                theme={effectiveTheme}
                w={10}
                h={10}
                style='ml-1.5 arrow z-10'
              />
            </>
          )}
        </a>
        <div className='sm:hidden mr-10' onClick={() => setIsMenuOpen(true)}>
          <HamBurger />
        </div>
        <HamBurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
