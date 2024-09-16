import FireFlameCardDark from "./FireFlameCardDark";
import "../styles/NavBar.css";
import { useState, useEffect} from "react";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
 const [Num, setNum] = useState(0);

  const ToggleDarkMode = () => {
    if (import.meta.env.MODE === "development") {
   if (Num === 0) {
     setNum(1);
   } else {
     setIsDarkMode((prevMode) => {
       setNum(0);
       return !prevMode;
     });
   } 
    }
    else{
      setIsDarkMode((prevMode) => {
        return !prevMode;
      });
    }
 
  };

  useEffect(() => {
  
    console.log(isDarkMode ? "Dark Mode is On" : "Dark Mode is Off");
  }, [isDarkMode]);

  return (
    <nav className='flex justify-around items-center mt-5 mb-5'>
      <div className='flex items-center gap-[1rem] ml-[-7rem]'>
        <div className='flex justify-between flex-row items-center m-[0.5rem]'>
          <FireFlameCardDark />
        </div>
        <div className='flex justify-center flex-col'>
          <span className='font-medium'>Jaskaran Singh</span>
          <span className='text-gray-400'>Full Stack Dev</span>
        </div>
      </div>

      <div>
        <ul className='flex justify-around gap-[1rem]'>
          <li>Work</li>
          <li>Projects</li>
          <li>Tech Stack</li>
          <li>Qualification</li>
        </ul>
      </div>

      <div>
        {/* <button>Sign In</button>
        <button>Sign Up</button> */}
        <span></span>
        <label className='switch' onClick={ToggleDarkMode}>
          <input type='checkbox' />
          <span className='slider'></span>
        </label>
      </div>
    </nav>
  );
};

export default NavBar;
