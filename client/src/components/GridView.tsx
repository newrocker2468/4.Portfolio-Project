import { FC } from "react";
import ProjectStatus from "./ProjectStatus";
import TrimmerFunction from "../middlewares/TrimmerFunction";
import TechCard from "./TechCard";
import Project from "../types/Project"
import {Link} from "react-router-dom"
import LazyImage from "./LazyImage";
interface GridViewProps {
  projects: Project[];
}

const GridView: FC<GridViewProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <Link
          to={`/projects/${project.name}`}
          key={index}
          className='dark:bg-actgrey bg-white rounded-xl shadow-xl overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer'
        >
          <div className='p-4'>
            <div className='flex justify-start mb-2'>
              <ProjectStatus status={project?.status} />
            </div>
            <h2 className='text-xl text-center mt-[2rem] mb-2 text-gray-900 dark:text-gray-100'>
              {project.name}
            </h2>
            <LazyImage
              src={project.image}
              alt={project.name}
              className='object-cover rounded-md mb-4 mx-auto'
              width="100%"
              height="100%"
        
            />
            <p className='text-gray-700 dark:text-gray-300 mb-4'>
              {TrimmerFunction(project.description)}
            </p>
            <div className='flex flex-wrap justify-start'>
              {project.technologies.map((tech, index) => (
                <span key={index}>
                  <TechCard techName={tech} />
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default GridView;
