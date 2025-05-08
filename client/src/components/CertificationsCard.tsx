import Calender from "@/assets/Calender";
import "../styles/CertificationsCard.css";
import { useTheme } from "./useTheme";
const certifications = [
  {
    title: "The Web Developer Bootcamp 2024",
    issuer: "Udemy",
    issueDate: "Feb 2024",
    url: "https://www.udemy.com/certificate/UC-29bdea29-1c68-4d51-9c73-9078f1bc902e",
    description:
      "A comprehensive course covering all aspects of web development.",
    learned: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "React", "Bootstrap","Cloudinary","MapBox"],
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    issueDate: "July 2024",
    url: "https://www.coursera.org/account/accomplishments/records/6SK3V2HB5QCZ",
    description: "An introductory course to front-end development.",
    learned: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta",
    issueDate: "July 2024",
    url: "https://www.coursera.org/account/accomplishments/records/9FDNZLKLM7J2",
    description: "A course focused on JavaScript programming.",
    learned: ["JavaScript", "ES6+", "Asynchronous Programming"],
  },
  {
    title: "Version Control",
    issuer: "Meta",
    issueDate: "July 2024",
    url: "https://www.coursera.org/account/accomplishments/records/5L484KWTZ4HK",
    description: "A course on using version control systems.",
    learned: [
      "Git",
      "GitHub",
      "Branching and Merging",
      "Collaborative Workflows",
    ],
  },
  {
    title: "HTML and CSS in Depth",
    issuer: "Meta",
    issueDate: "Nov 2024",
    url: "https://www.coursera.org/account/accomplishments/records/5V72GOOWN2LN",
    description: "An in-depth exploration of HTML and CSS.",
    learned: ["Advanced HTML", "Advanced CSS", "Responsive Design"],
  },
  {
    title: "React Basics",
    issuer: "Meta",
    issueDate: "Jan 2024",
    url: "https://www.coursera.org/account/accomplishments/records/19N64L1R6519",
    description: "A foundational course on React.js.",
    learned: ["React Components", "State Management", "React Hooks"],
  },
  {
    title: "Introduction to Back-End Development",
    issuer: "Meta",
    issueDate: "July 2024",
    url: "https://www.coursera.org/account/accomplishments/records/4VVBZG637RUQ",
    description: "An introductory course to back-end development.",
    learned: ["Node.js", "Express", "APIs", "Databases"],
  },
];
// <div
//     key={index}
//     className='dark:border-gray-800 border border-gray-200 shadow-lg rounded-2xl p-6 m-4 transition-transform transform hover:scale-105 hover:shadow-xl '
//   >
//     <h2 className='text-lg font-semibold mb-4 dark:text-white text-gray-800'>
//       {certification.title}
//     </h2>
//     <p className='text-gray-600 dark:text-gray-400'>
//       {certification.issuer}
//     </p>
//     <p className='text-gray-500 dark:text-gray-500 mb-4'>
//       {certification.issueDate}
//     </p>
//     <a
//       href={certification.url}
//       className='dark:bg-white dark:text-black bg-black text-white rounded-2xl px-4 py-2 cursor-pointer hover:dark:bg-darkwhite hover:bg-lightblack transition-colors'
//       target='_blank'
//       rel='noopener noreferrer'
//     >
//       View Certificate
//     </a>
//   </div>
const CertificationsCard = () => {
  const {effectiveTheme} = useTheme();
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
      {certifications.map((certification, index) => (
        <div
          className={`${
            effectiveTheme == "dark"
              ? "bg-black text-white "
              : "bg-white text-black "
          } rounded-2xl p-6 m-4 transition-transform transform hover:scale-105 hover:shadow-xl shadow-xl border border-grey dark:border-gray-800 flex flex-col justify-around items-start`}
          key={index}
        >
          <div className='flex justify-between w-full'>
            <div className='flex flex-col w-[60%] gap-1'>
              <h2 className='text-lg font-semibold '>{certification.title}</h2>
              <span className='text-paragrey'>{certification.issuer}</span>
            </div>

            <div className='w-2/6 flex items-center justify-center'>
              <div className='flex items-center justify-end ml-3'>
                {/* <span className='text-paragrey'>Logo</span> */}
              </div>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex items-center justify-start my-1 gap-1'>
              <Calender width={18} height={18} />
              <span className='text-paragrey'>
                Issued : {certification.issueDate}
              </span>
            </div>
            <div className='flex flex-wrap gap-1 my-2 '>
              {certification.learned.map((skill, index) => {
                return (
                  <span
                    key={index}
                    className={`text-xs ${
                      effectiveTheme == "dark"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    } rounded-2xl px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-black transition-colors mx-[0.1rem]`}
                  >
                    {skill}
                  </span>
                );
              })}
              <p>{certification.description}</p>
            </div>

          </div>
            <div className='my-2'>
              <a
                href={certification.url}
                className={`${
                  effectiveTheme == "dark"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                } rounded-xl px-2 py-1 text-md mt-3 cursor-pointer hover:bg-gray-200 hover:text-black transition-colors max-w-[8rem]`}
                target='_blank'
                rel='noopener noreferrer'
              >
                View Certificate
              </a>
            </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationsCard;
