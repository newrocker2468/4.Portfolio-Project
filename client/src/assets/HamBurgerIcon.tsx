import { useTheme } from "../components/useTheme";
const HamBurger = () => {
  const { effectiveTheme } = useTheme();
    return (
      <svg
        width={35}
        height={35}
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M4 18L20 18'
          stroke={`${effectiveTheme === "dark" ? "#fff" : "#000"}`}
          strokeWidth='2'
          strokeLinecap='round'
        />
        <path
          d='M4 12L20 12'
          stroke={`${effectiveTheme === "dark" ? "#fff" : "#000"}`}
          strokeWidth='2'
          strokeLinecap='round'
        />
        <path
          d='M4 6L20 6'
          stroke={`${effectiveTheme === "dark" ? "#fff" : "#000"}`}
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    );
}

export default HamBurger;