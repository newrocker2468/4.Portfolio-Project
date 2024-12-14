import "../styles/NavBar.css";
import { FC } from "react";
import { Link } from "react-router-dom";
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

  const links = [
    {
      name: "Projects",
      Route: "/Projects",
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
      name: "Contact Me",
      Route: "/contactme",
    },
  ];
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

      <div className=''>
        
        <ul className='flex justify-around gap-4 bg-navglassbg bg-opacity-30 backdrop-blur-md px-7 py-2 rounded-3xl'>
          {links.map((link) => (
            <li key={link.name} className=''>
              <Link to={link.Route} className=''>
                
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
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
          className='link bg-black dark:bg-grey dark:text-black text-white dark:hover:bg-white  rounded-2xl
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
