import React, { useEffect, useRef, useState } from "react";
import Project from "../types/Project";
import { useTheme } from "../components/useTheme";
import Loader from "../components/Loader";
import { projects } from "../data/DataArchive";
import { useParams } from "react-router-dom";
interface HomeProps {
  className?: string;
  loading?: boolean;
}

const ProjectDescription = React.forwardRef<HTMLDivElement, HomeProps>(() => {
  const { name } = useParams();
  const [Loading, setLoading] = useState(true);
  const isFirstLoad = useRef(true);
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
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const Project = projects.find((project) => project.name === name) as Project;
  const { effectiveTheme } = useTheme();
  const location = window.location.pathname;
  console.log(location);
  return (
    <>
      {Loading && (
        <Loader
          ref={loaderRef}
          className={effectiveTheme === "dark" ? "bg-black" : "bg-white"}
        />
      )}
      <h1>Project Name:{Project?.name}</h1>
    </>
  );
});
export default ProjectDescription;
