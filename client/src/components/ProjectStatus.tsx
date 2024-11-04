import { FC } from "react";
interface ProjectStatusProps {
    status: string;
}
const ProjectStatus:FC<ProjectStatusProps> = ({status}) => {
  return (
    <>
      <span className='absolute left-7 top-5 bg-darkyellow dark:bg-lightyellow bg-opacity-90 px-2 py-1 rounded-2xl dark:text-darkyellow text-xs font-semibold'>
        {status}
      </span>
    </>
  );
};
export default ProjectStatus;
