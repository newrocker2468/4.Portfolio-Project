import { useTheme } from "../components/useTheme";
import { Dispatch, FC, SetStateAction } from "react";

interface GridViewIconProps {
  View: string;
  SetView: Dispatch<SetStateAction<string>>;
}

const GridViewIcon: FC<GridViewIconProps> = ({ View, SetView }) => {
  const handleClick = () => {
    SetView("grid");
  };

  const { effectiveTheme } = useTheme();

  return (
    <div className="relative group">
      <div
        className={`p-3 rounded-lg cursor-pointer transition-colors duration-300 ${View === "grid"
            ? "bg-darkwhite dark:bg-lightblack "
            : "hover:bg-darkwhite dark:hover:bg-lightblack"
          }`}
        onClick={handleClick}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 1C9.65685 1 11 2.34315 11 4V8C11 9.65685 9.65685 11 8 11H4C2.34315 11 1 9.65685 1 8V4C1 2.34315 2.34315 1 4 1H8ZM8 3C8.55228 3 9 3.44772 9 4V8C9 8.55228 8.55228 9 8 9H4C3.44772 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H8Z"
            fill={effectiveTheme === "light" ? "#0F0F0F" : "#FFFFFF"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 13C9.65685 13 11 14.3431 11 16V20C11 21.6569 9.65685 23 8 23H4C2.34315 23 1 21.6569 1 20V16C1 14.3431 2.34315 13 4 13H8ZM8 15C8.55228 15 9 15.4477 9 16V20C9 20.5523 8.55228 21 8 21H4C3.44772 21 3 20.5523 3 20V16C3 15.4477 3.44772 15 4 15H8Z"
            fill={effectiveTheme === "light" ? "#0F0F0F" : "#FFFFFF"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 4C23 2.34315 21.6569 1 20 1H16C14.3431 1 13 2.34315 13 4V8C13 9.65685 14.3431 11 16 11H20C21.6569 11 23 9.65685 23 8V4ZM21 4C21 3.44772 20.5523 3 20 3H16C15.4477 3 15 3.44772 15 4V8C15 8.55228 15.4477 9 16 9H20C20.5523 9 21 8.55228 21 8V4Z"
            fill={effectiveTheme === "light" ? "#0F0F0F" : "#FFFFFF"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 13C21.6569 13 23 14.3431 23 16V20C23 21.6569 21.6569 23 20 23H16C14.3431 23 13 21.6569 13 20V16C13 14.3431 14.3431 13 16 13H20ZM20 15C20.5523 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 20.5523 15 20V16C15 15.4477 15.4477 15 16 15H20Z"
            fill={effectiveTheme === "light" ? "#0F0F0F" : "#FFFFFF"}
          />
        </svg>
      </div>
      <span className="text-xs absolute transform left-[-0.6rem] z-10 bg-black text-white rounded-lg px-2 py-1 hidden group-hover:block whitespace-nowrap">
        Grid View
      </span>

    </div>
  );
};

export default GridViewIcon;
