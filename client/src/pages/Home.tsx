// import  { useEffect } from "react";
import { forwardRef } from "react";
import Loader from "../components/Loader";
import { useTheme } from "../components/useTheme";
import ProjectCard from "../components/ProjectCard";


interface HomeProps {
  className?: string;
  loading?: boolean;
}





const quotes = [
  {
    quote: "Websites promote you 24/7: No employee will do that.",
    author: "Paul Cookson",
  },
  {
    quote:
      "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    quote:
      "Web development is the art of turning ideas into digital experiences that shape the world.",
    author: "Unknown",
  },
  {
    quote:
      "In the world of web development, there are no limits to what you can create. The only limit is your imagination.",
    author: "Unknown",
  },
  {
    quote: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
  },
  { quote: "Code is poetry.", author: "Unknown" },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
];
const project = [
  {
    name: "Portfolio",
    status: "Work in progress!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam error laboriosam culpa quam possimus laborum consequuntur vero aperiam officia perspiciatis, libero repellendus exercitationem animi autem explicabo, eum cum! Quae!",
    image: "Corenexui (2).png",
    technologies: ["React", "Tailwind CSS"],
    github: "Testing.com",
    website: "Testing.com",
  },
  {
    name: "Corenex UI",
    status: "Work in progress!",
    description:
      "Corenex UI is a versatile UI library inspired by uiverse.io, designed to help developers build modern web applications with ease. It offers features like Image to Table Data (Beta), CSS Challenges, ready-to-use CSS Elements, and a powerful Admin Panel for managing posts. The library also integrates Shadow DOM for better component isolation, provides event management features, and includes a Notes Upload feature in early beta. Perfect for enhancing user interaction and streamlining web development!",
    image: "Corenexui (2).png",
    technologies: [
      "React Js",
      "Tailwind CSS",
      "Shadow DOM",
      "JWT",
      "Node Js",
      "Express Js",
      "MongoDB",
      "Passport JS",
      "NodeMailer",
    ],
    github: "https://github.com/newrocker2468/CoreNexUI",
    website: "https://corenexui.jaskaran.dev/home",
  },
];
const quote = quotes[Math.floor(Math.random() * quotes.length)];

const Home = forwardRef<HTMLDivElement, HomeProps>(
  ({ className, loading }, ref) => {
    const { effectiveTheme } = useTheme();

//     useEffect(() => {
//   console.log("Home component mounted");
//   console.log(loading)

// }, [loading,theme]);
    // useEffect(() => {
    //   // console.log("Home component mounted");
    //   console.log(document.documentElement.classList);
    // }, [ theme]);

    return (
      <>
        {loading && (
          <Loader
            ref={ref}
            className={effectiveTheme === "dark" ? "bg-black" : "bg-white"}
          />
        )}
    
          <main className={`dark:text-white ${className}`}>
            <div className='flex items-center justify-center m-5 text-center text-5xl text-shadow-custom'>
              <span className='mx-80'>
                {" "}
                {quote.quote} - {quote.author}
              </span>
            </div>

            <div className='text-center my-[10rem] '>
              <h1 className='text-xl'>Projects</h1>
              <div className='flex items-center justify-center flex-col'>
                <ProjectCard projects={project} />
              </div>
            </div>
          </main>
       
      </>
    );
  }
);

export default Home;
