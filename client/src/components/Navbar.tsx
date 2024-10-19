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
      name: "Home",
      Route: "/",
    },
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
        <div className='flex justify-between flex-row items-center m-[0.5rem] hover:bg-darkwhite dark:hover:bg-lightblack p-2 rounded-2xl cursor-pointer border-2 border-transparent  active:border-black dark:active:border-white'>
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

      <div className='flex justify-around items-center gap-2'>
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
          className='flex justify-center items-center hover:bg-darkwhite dark:hover:bg-lightblack p-2 rounded-2xl transition duration-200 ease-in-out border-2 border-transparent active:border-black dark:active:border-white '
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
              src='coffee_light.svg'
              alt=''
              width={30}
              height={30}
              className=''
            />
          )}
        </Link>
        <Link
          to='https://buymeacoffee.com/jaskaransingh'
          className='flex justify-center items-center hover:bg-darkwhite dark:hover:bg-lightblack p-2 rounded-2xl transition duration-200 ease-in-out border-2 border-transparent  active:border-black dark:active:border-white'
        >
          {isDark ? (
            <img
              src='linkedin_light.svg'
              alt=''
              width={27}
              height={30}
              className=''
            />
          ) : (
            <img
              src='linkedin_dark.svg'
              alt=''
              width={27}
              height={30}
              className=''
            />
          )}
        </Link>
        <Link
          to='https://github.com/newrocker2468'
          className='hover:bg-darkwhite dark:hover:bg-lightblack p-2 rounded-2xl transition duration-200 ease-in-out border-2 border-transparent  active:border-black dark:active:border-white'
        >
          {isDark ? (
            <img src='github_dark.svg' alt='' width={30} height={30} />
          ) : (
            <img src='github_light.svg' alt='' width={30} height={30} />
          )}
        </Link>
        <Link
          to=''
          className='link bg-black dark:bg-grey dark:text-black text-white dark:hover:bg-white  rounded-2xl
  flex justify-center items-center px-3 py-1  hover:bg-lightblack transition duration-200 ease-in-out active:scale-95'
        >
          Resume <Arrow isDark={isDark} w={10} h={10} style='ml-1.5 arrow' />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
