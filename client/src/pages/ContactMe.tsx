import React, { useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import { useTheme } from "../components/useTheme";
import { useLenis } from "lenis/react";

interface HomeProps {
  className?: string;
  loading?: boolean;
}

const ContactMe = React.forwardRef<HTMLDivElement, HomeProps>(() => {
  const { effectiveTheme } = useTheme();
  const [Loading, setLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const lenis = useLenis();
  const handleLoad = React.useCallback(() => {
    lenis?.scrollTo("top"); // Scroll to the top of the page

    document.body.style.overflow = "hidden"; // standard no-scroll implementation
    document.body.setAttribute("data-lenis-prevent", "true");
    // lenis?.stop();

    setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.style.transition = "opacity 0.5s ease-out";
        loaderRef.current.style.opacity = "0";
      }

      setTimeout(() => {
        setLoading(false);
        document.body.removeAttribute("data-lenis-prevent");
        document.body.style.overflow = "auto";
      }, 500); // Duration of the fade-out effect
    }, 2000); // Delay before the fade-out effect starts
  }, [lenis]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);
  return (
    <div className="min-h-[70dvh]">
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
    </div>
  );
});

export default ContactMe;
