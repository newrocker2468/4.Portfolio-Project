import "../styles/NavBar.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import Arrow from "../icons/Arrow";
interface NavBarProps {
  theme: string;
  ToggleDarkMode: () => void;
}
const NavBar: FC<NavBarProps> = ({ theme, ToggleDarkMode }) => {
  let isDark = false;
  if (theme == "dark") {
    isDark = true;
  } else {
    isDark = false;
  }

  const links = [
    {
      name: "Projects",
      Route: "/projects",
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
    <nav className={`flex justify-around items-center mt-5 mb-5 z-50`}>
      <div className='flex items-center gap-[1rem]  '>
        <div className='flex justify-between flex-row items-center m-[0.5rem] border-0 border-b-gray-500 border-solid'>
          {isDark ? (
            <img
              src='sun.svg'
              alt=''
              width={30}
              height={30}
              className='sun'
              onClick={ToggleDarkMode}
            />
          ) : (
            <img
              src='moon.svg'
              alt=''
              width={30}
              height={30}
              className='moon'
              onClick={ToggleDarkMode}
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

      <div>
        <ul className='flex justify-around gap-[1rem]'>
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link to={link.Route}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='flex justify-around items-center gap-1'>
        {/* <label className='switch'>
            <input
              type='checkbox'
              checked={isDark}
              onChange={ToggleDarkMode}
              name='darkmode'
            />
            <span className='slider'></span>
          </label> */}

        <Link
          to='https://buymeacoffee.com/jaskaransingh'
          className='flex justify-center items-center'
        >
          {isDark ? (
            <img
              src='coffee_dark.svg'
              alt=''
              width={30}
              height={30}
              className=''
            />
          ) : (
            <img
              src='coffee_light1.svg'
              alt=''
              width={30}
              height={30}
              className=''
            />
          )}
        </Link>
        <Link
          to='/'
          className='link border-2 border-black rounded-2xl
 flex justify-center items-center px-3 py-1  dark:border-white'
        >
          Resume <Arrow isDark={isDark} w={10} h={10} style='ml-1.5 arrow' />
          {/* <img
            src='arrow.svg'
            alt=''
            width={10}
            height={10}
            className='arrow ml-1.5'
          /> */}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
