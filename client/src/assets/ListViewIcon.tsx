import { useTheme } from "../components/useTheme";
import { Dispatch, FC, SetStateAction } from "react";

interface ListViewIconProps {
  View: string;
  SetView: Dispatch<SetStateAction<string>>;
}

const ListViewIcon: FC<ListViewIconProps> = ({ View, SetView }) => {
  const handleClick = () => {
    SetView("list");
  };
  const { effectiveTheme } = useTheme();

  

  return (
    <div className="relative group">

   
    <div
      className={`p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
        View === "list"
          ? "bg-darkwhite dark:bg-lightblack"
          : "hover:bg-darkwhite dark:hover:bg-lightblack"
      }`}
      onClick={handleClick}
    >
      <svg
        width='15'
        height='15'
        viewBox='0 0 18 18'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g
          fill={effectiveTheme === "light" ? "#0F0F0F" : "#FFFFFF"}
          fillRule='evenodd'
        >
          <rect width='18' height='4' rx='2' />
          <rect width='18' height='4' y='7' rx='2' />
          <rect width='18' height='4' y='14' rx='2' />
        </g>
      </svg>

    </div>
      <span className="text-xs absolute transform left-[-0.6rem] z-10 bg-black text-white rounded-lg px-2 py-1 hidden group-hover:block whitespace-nowrap">
        List View
      </span>
    </div>
  );
};

export default ListViewIcon;
