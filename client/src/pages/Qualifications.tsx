import React, { useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import { useTheme } from "../components/useTheme";
interface HomeProps {
  className?: string;
  loading?: boolean;
}

const Qualifications = React.forwardRef<HTMLDivElement, HomeProps>(
  () => {
    const { effectiveTheme } = useTheme();
       const [Loading, setLoading] = useState(true);
       const isFirstLoad = useRef(true);
       const loaderRef = useRef<HTMLDivElement | null>(null);
           const handleLoad = () => {
             setTimeout(() => {
               if (loaderRef.current) {
                 loaderRef.current.style.transition = "opacity 0.5s ease-out";
                 loaderRef.current.style.opacity = "0";
               }
               setTimeout(() => {
                 setLoading(false);
               }, 500); // Duration of the fade-out effect
             }, 2000); // Delay before the fade-out effect starts (2 seconds)
           };
             useEffect(() => {
               if (isFirstLoad.current) {
                 window.addEventListener("load", handleLoad);
                 isFirstLoad.current = false;
               } else handleLoad();

               return () => window.removeEventListener("load", handleLoad);
             }, [Loading, isFirstLoad]);
    return (
      <>
        {Loading && (
          <Loader
            ref={loaderRef}
            className={effectiveTheme === "dark" ? "bg-black" : "bg-white"}
          />
        )}
        <h1 className='text-center text-3xl'>Qualifications</h1>
        <div className='flex justify-center items-center'>
          <h2>Education</h2>
        </div>
      </>
    );
  }
);

export default Qualifications;
