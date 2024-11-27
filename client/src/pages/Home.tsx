import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListView from "../components/ListView";
import GridView from "../components/GridView";
import Switcher from "../components/Switcher";
import { useTheme } from "../components/useTheme";
import "../styles/Home.css"; // Ensure your CSS file with fade classes is imported
import Loader from "../components/Loader";

interface HomeProps {
  className?: string;
  loading?: boolean;
}

const project = [
  {
    name: "Portfolio",
    status: "Work in progress!",
    description: "Lorem ipsum dolor sit amet...",
    image: "Corenexui (2).png",
    technologies: ["React", "Tailwind CSS"],
    github: "Testing.com",
    website: "Testing.com",
  },
  {
    name: "Corenex UI",
    status: "Work in progress!",
    description: "Corenex UI is a versatile UI library...",
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

const quotes = [
  { quote: "Websites promote you 24/7...", author: "Paul Cookson" },
  {
    quote: "A designer knows he has achieved...",
    author: "Antoine de Saint-Exupéry",
  },
  { quote: "Web development is the art of...", author: "Unknown" },
  { quote: "In the world of web development...", author: "Unknown" },
  { quote: "The best error message is the one...", author: "Thomas Fuchs" },
  { quote: "Code is poetry.", author: "Unknown" },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
];

const quote = quotes[Math.floor(Math.random() * quotes.length)];

const Home = React.forwardRef<HTMLDivElement, HomeProps>(
  ({ className, loading }, ref) => {
    const { effectiveTheme } = useTheme();
    const [View, SetView] = useState("list");
    const [, setActiveView] = useState(View);

    useEffect(() => {
      setActiveView(View);
    }, [View]);

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
              {quote.quote} - {quote.author}
            </span>
          </div>
          <div className='text-center my-[1rem]'>
            <div className='flex justify-center my-[2rem]'>
              <section className='relative w-3/4'>
                <div className='absolute left-10'>
                  <Switcher View={View} SetView={SetView} />
                </div>
                <h1 className='text-xl'>Projects</h1>
              </section>
            </div>
          </div>
          <TransitionGroup className='my-4'>
            <CSSTransition key={View} timeout={500} classNames='fade'>
              {View === "list" ? (
                <div className='flex items-center justify-center flex-col'>
                  <ListView projects={project} />
                </div>
              ) : (
                  <div className='grid grid-cols-3 gap-10'>
                    <GridView projects={project} />
                  </div>
              )}
            </CSSTransition>
          </TransitionGroup>
        </main>
      </>
    );
  }
);

export default Home;
