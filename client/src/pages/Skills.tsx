import Loader from "../components/Loader";
import "../styles/Skills.css";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../components/useTheme";
import { useLenis } from "lenis/react";
import CertificationsCard from "../components/CertificationsCard";
import EnterAnimation from "../components/EnterAnimation";
import {skills,animation} from "../data/DataArchive";
import { FC } from "react";
interface HomeProps {
  className?: string;
  loading?: boolean;
}


const Skills:FC<HomeProps> = (() => {
const { effectiveTheme } = useTheme();
   const [Loading, setLoading] = useState(true);
   const loaderRef = useRef<HTMLDivElement | null>(null);
   const lenis = useLenis();

  const handleLoad = React.useCallback(() => {
    lenis?.scrollTo("top"); // Scroll to the top of the page

    document.body.style.overflow = "hidden"; // standard no-scroll implementation
    document.body.setAttribute("data-lenis-prevent", "true");

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
    <>
      {Loading && (
        <Loader
          ref={loaderRef}
          className={effectiveTheme === "dark" ? "bg-black" : "bg-white"}
        />
      )}
      <h1 className='text-center text-xl'>My Skills</h1>
      <div className='container mx-auto flex justify-center items-center mb-10'>
        <div className='flex justify-center flex-wrap align-top md:w-2/3  sm:w-full min-h-72 lg:min-h-32'>
          {skills.map((skill, index) => {
            return (
              <EnterAnimation
                props={{
                  ...animation[Math.floor(Math.random() * animation.length)],
                  transition: {
                    duration: 1,
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: index * 0.1,
                  },
                }} // Random animation
                loading={Loading}
                key={index}
              >
                <div
                  key={index}
                  className='mr-1 mt-1 dark:bg-white dark:text-black bg-black text-white rounded-2xl px-3 py-1 cursor-pointer hover:dark:bg-darkwhite hover:bg-lightblack'
                >
                  {skill}
                </div>
              </EnterAnimation>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className='text-center text-xl'>Certifications</h2>
        <CertificationsCard />
      </div>
    </>
  );
});

export default Skills;
