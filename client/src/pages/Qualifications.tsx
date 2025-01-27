import React from "react";
import Loader from "../components/Loader";
import { useTheme } from "../components/useTheme";
interface HomeProps {
  className?: string;
  loading?: boolean;
}

const Qualifications = React.forwardRef<HTMLDivElement, HomeProps>(
  ({ loading }, ref) => {
    const { effectiveTheme } = useTheme();
    return (
      <>
        {loading && (
          <Loader
            ref={ref}
            className={effectiveTheme === "dark" ? "bg-black" : "bg-white"}
          />
        )}
        <h1 className="text-center text-3xl">Qualifications</h1>
        <div className="flex justify-center items-center">
            <h2>Education</h2>
       
        </div>
      </>
    );
  }
);

export default Qualifications;
