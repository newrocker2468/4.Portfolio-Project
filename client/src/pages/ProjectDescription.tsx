import React, { useEffect, useRef, useState } from "react";
import Project from "../types/Project";
import { useTheme } from "../components/useTheme";
import Loader from "../components/Loader";
import { projects } from "../data/DataArchive";
import { Link, useParams } from "react-router-dom";
import ProjectStatus from "../components/ProjectStatus";
import Arrow from "../icons/Arrow";
import { useLenis } from "lenis/react";
import EnterAnimation from "../components/EnterAnimation";


interface HomeProps {
  className?: string;
  loading?: boolean;
}

const ProjectDescription = React.forwardRef<HTMLDivElement, HomeProps>(() => {
  const { name } = useParams();
  const [Loading, setLoading] = useState(true);
  const lenis = useLenis();
const handleLoad = React.useCallback(() => {
  lenis?.scrollTo("top");
  // Set attribute to prevent scrolling
  document.body.setAttribute("data-lenis-prevent", "true");
  document.body.style.overflow = "hidden"; // Lock scrolling

  setTimeout(() => {
    if (loaderRef.current) {
      loaderRef.current.style.transition = "opacity 0.5s ease-out";
      loaderRef.current.style.opacity = "0";
    }

    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto"; // Unlock scrolling
      document.body.removeAttribute("data-lenis-prevent");
    }, 500); // Duration of the fade-out effect
  }, 2000); // Delay before the fade-out effect starts
}, [lenis]);

useEffect(() => {
  handleLoad();
}, [Loading, handleLoad]);


  const loaderRef = useRef<HTMLDivElement | null>(null);
  const Project = projects.find((project) => project.name === name) as Project;
  const { effectiveTheme } = useTheme();
  return (
    <>
      {Loading && (
        <Loader
          ref={loaderRef}
          className={effectiveTheme === "dark" ? "bg-black" : "bg-white"}
        />
      )}
      <div className='flex justify-start items-center transition-all duration-1000 ease-in-out'>
        <Link
          to={"/"}
          className='dark:bg-white dark:text-black  flex justify-start items-center py-1 px-3 rounded-2xl cursor-pointer hover:bg-[#565656] bg-black text-white transition-all duration-700 ease-in-out'
        >
          <Arrow w={15} h={15} rotate={135} theme={effectiveTheme} />{" "}
          <span className='ml-[0.6rem] relative top-[-1px]'>Back</span>
        </Link>
      </div>
      <EnterAnimation
        props={{
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
          transition: {
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          },
        }}
        loading={Loading}
      >
        <div className='mt-5 flex flex-col justify-center items-center gap-2'>
          <h1 className='text-2xl'>{Project?.name}</h1>
          <img
            src={`/${Project?.image}`}
            alt={Project?.name}
            width='80%'
            height='80%'
            className='rounded-2xl'
          />
        </div>
      </EnterAnimation>
      <EnterAnimation
        props={{
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
          transition: {
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 50,
          },
        }}
        loading={Loading}
      >
        <div className='grid grid-cols-1 md:grid-cols-1 gap-[3rem] lg:grid-cols-2 lg:mx-[10rem] md:mx-[2rem] my-[3rem]  text-md'>
          <section className='flex justify-center flex-col items-center '>
            Project Name
            <span className='dark:text-[#a3a3a3] m-1'> {Project?.name}</span>
          </section>
          <section className='text-md flex justify-center flex-col items-center '>
            Project Status
            <ProjectStatus
              status={`${Project?.status}`}
              position='relative'
              className='mt-2'
            />
          </section>
          <section className='flex justify-center flex-col items-center text-md'>
            <span className='mt-5  font-nunito'>Github - Source Code</span>
            <a
              href={`${Project?.github}`}
              target='_blank'
              className={`dark:text-[#a3a3a3] text-center dark:hover:text-${
                Project.status == "Work in progress!" ? "[#ffc400]" : ""
              } hover:underline cursor-pointer transition-colors duration-500`}
            >
              {Project?.github}
            </a>
          </section>
          <section className='flex justify-center flex-col items-center text-md'>
            <span className='mt-5  font-nunito'>Live Demo</span>
            <a
              href={`${Project?.github}`}
              target='_blank'
              className={`dark:text-[#a3a3a3] text-center dark:hover:text-${
                Project.status == "Work in progress!" ? "[#ffc400]" : ""
              } hover:underline cursor-pointer transition-colors duration-500`}
            >
              {Project?.website}
            </a>
          </section>

          <div className='lg:col-span-2 flex justify-center flex-col items-center'>
            <span className='text-lg'>Project Overview</span>
            <p className='text-md dark:text-[#a3a3a3]'>
              {Project?.description}
            </p>
          </div>
        </div>
      </EnterAnimation>
    </>
  );
});
export default ProjectDescription;
