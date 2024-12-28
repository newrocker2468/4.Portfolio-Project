import React, { useState, useEffect, useRef } from "react";
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
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A consequatur ad, omnis repellat quos dolorum corrupti cupiditate nisi ratione tenetur neque velit illum doloribus veniam excepturi earum dolorem in accusamus.",
    image: "Corenexui (2).png",
    technologies: ["React JS", "Tailwind CSS"],
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
      "Node Mailer",
      "Shadcn",
      "Next UI",
      "Firebase",
      "Rest API",
    ],
    github: "https://github.com/newrocker2468/CoreNexUI",
    website: "https://corenexui.jaskaran.dev/home",
  },
  {
    name: "YelpCamp",
    status: "Completed!",
    description:
      "YelpCamp is a community-driven web platform designed to bring together camping lovers from around the globe. Whether you're a seasoned adventurer or a novice exploring the world of camping, YelpCamp offers a space to share your experiences, discover new locations, and connect with like-minded individuals.",
    image: "YelpCamp.png",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Passport.js",
      "Bootstrap",
      "EJS",
      "Mapbox",
      "Cloudinary",
      "Heroku",
      "Unsplash API",
    ],
    github: "https://github.com/yourusername/YelpCamp",
    website: "https://yelpcamp.example.com",
  },
  {
    name: "YelpCamp",
    status: "Completed!",
    description:
      "YelpCamp is a community-driven web platform designed to bring together camping lovers from around the globe. Whether you're a seasoned adventurer or a novice exploring the world of camping, YelpCamp offers a space to share your experiences, discover new locations, and connect with like-minded individuals.",
    image: "YelpCamp.png",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Passport.js",
      "Bootstrap",
      "EJS",
      "Mapbox",
      "Cloudinary",
      "Heroku",
      "Unsplash API",
    ],
    github: "https://github.com/yourusername/YelpCamp",
    website: "https://yelpcamp.example.com",
  },
];


const quotes = [
  { quote: "Websites promote you 24/7: No employee will do that.", author: "Paul Cookson" },
  { quote: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
  { quote: "Web development is the art of turning ideas into interactive experiences.", author: "Unknown" },
  { quote: "In the world of web development, the only limit is your imagination.", author: "Unknown" },
  { quote: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { quote: "Code is poetry.", author: "Unknown" },
  { quote: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { quote: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
  { quote: "The power of the web is in its universality. Access by everyone regardless of disability is an essential aspect.", author: "Tim Berners-Lee" },
  { quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { quote: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { quote: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
  { quote: "It’s not a bug. It’s an undocumented feature.", author: "Unknown" },
  { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { quote: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { quote: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { quote: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
  { quote: "Code never lies, comments sometimes do.", author: "Ron Jeffries" },
];

const quote = quotes[Math.floor(Math.random() * quotes.length)];

const Home = React.forwardRef<HTMLDivElement, HomeProps>(
  ({ className, loading }, ref) => {
    const { effectiveTheme } = useTheme();
    const [View, SetView] = useState("grid");
    const [, setActiveView] = useState(View);
      const listViewRef = useRef(null); 
      const gridViewRef = useRef(null);
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
            <CSSTransition
              key={View}
              timeout={500}
              classNames='fade'
              nodeRef={View === "list" ? listViewRef : gridViewRef}
            >
              {View === "list" ? (
                <div
                  ref={listViewRef}
                  className='flex items-center justify-center flex-col'
                >
                  <ListView projects={project} />
                </div>
              ) : (
                <div
                  ref={gridViewRef}
                  className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-10 mx-[2rem]'
                >
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
