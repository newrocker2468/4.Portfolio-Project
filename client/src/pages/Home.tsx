import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListView from "../components/ListView";
import GridView from "../components/GridView";
import Switcher from "../components/Switcher";
import { useTheme } from "../components/useTheme";
import "../styles/Home.css"; // Ensure your CSS file with fade classes is imported
import Loader from "../components/Loader";
// import { motion } from "motion/react";
import { quotes, project } from "../data/DataArchive";

interface HomeProps {
  className?: string;
  loading?: boolean;
}

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
