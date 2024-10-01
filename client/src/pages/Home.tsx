import { forwardRef } from "react";
import Loader from "../components/Loader";
interface HomeProps {
  className?: string;
  loading?: boolean;
}
const Home = forwardRef<HTMLDivElement, HomeProps>(({ className,loading }, ref) => {
  return (
    <>
      {loading && <Loader ref={ref} />}
      <div className={`dark:text-white ${className}`}>
        <h1></h1>
      </div>
    </>
  );
});
export default Home;