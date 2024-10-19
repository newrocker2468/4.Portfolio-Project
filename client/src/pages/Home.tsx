import { forwardRef } from "react";
import Loader from "../components/Loader";
import { useTheme } from "../components/useTheme";
interface HomeProps {
  className?: string;
  loading?: boolean;
}
const Home = forwardRef<HTMLDivElement, HomeProps>(
  ({ className, loading }, ref) => {
    const {theme} = useTheme();
    return (
      <>
        {loading && <Loader ref={ref} className={theme === "dark" ? "bg-black" : "bg-white"} />}
        <div className={`dark:text-white ${className}`}>
          
        </div>
      </>
    );
  }
);
export default Home;
