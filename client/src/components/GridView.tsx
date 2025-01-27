import { FC } from "react";
import ProjectStatus from "./ProjectStatus";
import TrimmerFunction from "../middlewares/TrimmerFunction";
import TechCard from "./TechCard";
import Project from "../types/Project"
import {Link} from "react-router-dom"
interface GridViewProps {
  projects: Project[];
}

const GridView: FC<GridViewProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <Link to={`/projects/${project.name}`}
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
            <img
              src={project.image}
              alt={project.name}
              className='w-full h-48 object-cover rounded-md mb-4'
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
            {/* <div className='mt-4 flex justify-between items-center'>
              <a
                href={project.github}
                className='relative inline-block text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition duration-300 ease-in-out'
              >
                <span className='absolute inset-0 transform -skew-x-12 bg-blue-300 dark:bg-blue-700 opacity-0 hover:opacity-50 transition duration-300 ease-in-out'></span>
                <span className='relative'>GitHub</span>
              </a>
              <a
                href={project.website}
                className='relative inline-block text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition duration-300 ease-in-out'
              >
                <span className='absolute inset-0 transform -skew-x-12 bg-blue-300 dark:bg-blue-700 opacity-0 hover:opacity-50 transition duration-300 ease-in-out'></span>
                <span className='relative'>Website</span>
              </a>
            </div> */}
          </div>
        </Link>
      ))}
    </>
  );
};

export default GridView;
