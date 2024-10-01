import "../styles/NavBar.css";
import { FC } from "react";
import { Link } from "react-router-dom";
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
      <div className='flex items-center gap-[1rem] ml-[-7rem] '>
        <div className='flex justify-between flex-row items-center m-[0.5rem] bg-black'></div>
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

      <div>
        {/* <label className='switch'>
            <input
              type='checkbox'
              checked={isDark}
              onChange={ToggleDarkMode}
              name='darkmode'
            />
            <span className='slider'></span>
          </label> */}

        <label
          htmlFor='themeToggle'
          className='themeToggle st-sunMoonThemeToggleBtn'
          style={{
            color: isDark ? "#fff" : "#000",
          }}
        >
          <input
            type='checkbox'
            id='themeToggle'
            className='themeToggleInput'
            checked={isDark}
            onChange={ToggleDarkMode}
            name='darkmode'
          />
          <svg
            width='35'
            height='35'
            viewBox='0 0 20 20'
            fill='currentColor'
            stroke='none'
            className="darkmodesvg"
          >
            <mask id='moon-mask'>
              <rect x='0' y='0' width='20' height='20' fill='white'></rect>
              <circle cx='11' cy='3' r='8' fill='black'></circle>
            </mask>
            <circle
              className='sunMoon'
              cx='10'
              cy='10'
              r='8'
              mask='url(#moon-mask)'
            ></circle>
            <g>
              <circle
                className='sunRay sunRay1'
                cx='18'
                cy='10'
                r='1.5'
              ></circle>
              <circle
                className='sunRay sunRay2'
                cx='14'
                cy='16.928'
                r='1.5'
              ></circle>
              <circle
                className='sunRay sunRay3'
                cx='6'
                cy='16.928'
                r='1.5'
              ></circle>
              <circle
                className='sunRay sunRay4'
                cx='2'
                cy='10'
                r='1.5'
              ></circle>
              <circle
                className='sunRay sunRay5'
                cx='6'
                cy='3.1718'
                r='1.5'
              ></circle>
              <circle
                className='sunRay sunRay6'
                cx='14'
                cy='3.1718'
                r='1.5'
              ></circle>
            </g>
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default NavBar;
