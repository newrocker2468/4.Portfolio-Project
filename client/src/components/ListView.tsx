import  { FC, useState } from "react";
import ProjectStatus from "./ProjectStatus";
interface Project {
  name: string;
  status: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  website: string;
}

interface ExtentedViewProps {
  projects: Project[];
}

const ExtentedView: FC<ExtentedViewProps> = ({ projects }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className='dark:bg-actgrey bg-white  shadow-2xl border-paragrey dark:border-black rounded-2xl sm:w-[70%] h-auto p-5 m-5 mb-[5rem] relative overflow-hidden cursor-pointer '
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <ProjectStatus status={project?.status} />
          <br />
          <div className='m-2 text-center text-xl'> {project.name}</div>
          <p className='text-paragrey m-2'>{project.description}</p>
          <div className='flex items-center justify-center'>
            <img
              src={project.image}
              alt={project.name}
              className={`rounded-2xl  p-2 transition-all duration-700 ease-in-out ${
                hoveredIndex !== index ? "translate-y-[15%]" : "translate-y-[0]"
              }`}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ExtentedView;
