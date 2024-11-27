import { FC } from "react";
interface ProjectStatusProps {
  status: string;
}
const ProjectStatus: FC<ProjectStatusProps> = ({ status }) => {

  const statusClasses: { [key: string]: string[] } = {
    "workinprogress!": ["bg-darkyellow", "dark:text-darkyellow", "dark:bg-lightyellow"], 
    "completed!": ["bg-darkgreen1", "text-completed"],
    "inactive!": ["bg-red", "text-white", "border-red"],
  }; 
  const normalizeStatus = (status: string): string => {
    return status.toLowerCase().replace(/ /g, "");
  };


  const getClassesForStatus = (status: string): string => {
    const normalizedStatus = normalizeStatus(status);
    const classes = statusClasses[normalizedStatus] || ["bg-default", "text-default"]; // Default classes if status not found 
    return classes.join(' ');
  }
 

  return (
    <>
      <span className={`${getClassesForStatus(status)} absolute left-7 top-5 ${status == 'Work in progress1' ? 'bg-darkyellow  dark:text-darkyellow dark:bg-lightyellow' : ""} bg-opacity-90 px-2 py-1 rounded-2xl text-xs font-semibold`}>
        {status}
      </span>
    </>
  );
};
export default ProjectStatus;











