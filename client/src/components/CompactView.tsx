import { FC } from "react";

interface Project {
  name: string;
  status: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  website: string;
}

interface CompactViewProps {
  projects: Project[];
}

const CompactView: FC<CompactViewProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className='bg-white dark:bg-black dark:border rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out cursor-pointer'
        >
          <div className='p-4'>
            <div className='flex justify-start mb-2'>
              <span className='bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold'>
                {project.status}
              </span>
            </div>
            <h2 className='text-xl font-bold mb-2 text-gray-900 dark:text-gray-100'>
              {project.name}
            </h2>
            <img
              src={project.image}
              alt={project.name}
              className='w-full h-48 object-cover rounded-md mb-4'
            />
            <p className='text-gray-700 dark:text-gray-300 mb-4'>
              {project.description}
            </p>
            <div className='flex flex-wrap justify-start'>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full text-sm font-medium mr-2 mb-2'
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className='mt-4 flex justify-between items-center'>
              <a
                href={project.github}
                className='text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300'
              >
                GitHub
              </a>
              <a
                href={project.website}
                className='text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300'
              >
                Website
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CompactView;
