import { FC } from "react";
import CloseIcon from "../assets/CloseIcon";
import { useTheme } from "../components/useTheme";
import { Routes } from "../data/DataArchive";
import { Link } from "react-router-dom";
interface HamBurgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const HamBurgerMenu: FC<HamBurgerMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const { effectiveTheme } = useTheme();
  return (
    <>
      <div
        className={`${
          effectiveTheme == "dark" ? "bg-black bg-opacity-90" : "bg-white"
        } text-white w-full h-screen fixed top-0 right-0 z-50 flex justify-start items-center flex-col transform transition-transform duration-500 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className='p-4 absolute top-[1.5rem] right-6'
          onClick={() => setIsMenuOpen(false)}
        >
          <CloseIcon />
        </div>
        <div></div>
        <ul className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
          {Routes.map((route) => {
            return (
              <Link
                to={`${route.Route}`}
                onClick={() => setIsMenuOpen(false)}
                className={`ms-5 text-xl ${effectiveTheme == "dark" ? "text-white" : "text-black"}`}
                key={route.name}
              >
                <li>{route.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default HamBurgerMenu;
