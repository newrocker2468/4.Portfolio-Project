import React from "react";
import Project from "../types/Project"
import { useTheme } from "../components/useTheme";
import Loader from "../components/Loader";
import {projects} from "../data/DataArchive"
import { useParams } from "react-router-dom";
interface HomeProps {
  className?: string;
  loading?: boolean;
}

const ProjectDescription = React.forwardRef<HTMLDivElement,HomeProps>(({loading},ref) => {
  const { name } = useParams();
  const Project = projects.find((project) => project.name === name) as Project;
  const {effectiveTheme} = useTheme();
  const location= window.location.pathname;
  console.log(location);
    return (
    <>
      {loading && (
        <Loader
          ref={ref}
          className={effectiveTheme === "dark" ? "bg-black" : "bg-white"}
        />
      )}
      <h1>Project Name:{Project?.name}</h1>
    </>
  );
});
export default ProjectDescription;