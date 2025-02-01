import { FC, useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListView from "../components/ListView";
import GridView from "../components/GridView";
import Switcher from "../components/Switcher";
import { useTheme } from "../components/useTheme";
import "../styles/Home.css";
import Loader from "../components/Loader";
import { quotes, projects } from "../data/DataArchive";
import {useLenis} from "lenis/react"
import React from "react";
import EnterAnimation from "../components/EnterAnimation";
import { useLocation } from "react-router-dom";

interface HomeProps {
  className?: string;
}

const quote = quotes[Math.floor(Math.random() * quotes.length)];

const Home: FC<HomeProps> = ({ className }) => {
  const { effectiveTheme } = useTheme();
  const [View, SetView] = useState("list");
  const [, setActiveView] = useState(View);
  const [Loading, setLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const listViewRef = useRef(null);
  const gridViewRef = useRef(null);
const lenis=useLenis()
const handleLoad = React.useCallback(() => {
  lenis?.scrollTo("top"); // Scroll to the top of the page

   document.body.style.overflow = "hidden"; // standard no-scroll implementation
      document.body.setAttribute("data-lenis-prevent", "true");
  // lenis?.stop();

  setTimeout(() => {

    if (loaderRef.current) {
      loaderRef.current.style.transition = "opacity 0.5s ease-out";
      loaderRef.current.style.opacity = "0";
    }

    setTimeout(() => {
      setLoading(false);
         document.body.removeAttribute("data-lenis-prevent");
 document.body.style.overflow = "auto";
        
    }, 500); // Duration of the fade-out effect
  }, 2000); // Delay before the fade-out effect starts
}, [lenis]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);
  useEffect(() => {
    setActiveView(View);
  }, [View]);

  return (
    <>
      {Loading && (
        <Loader
          ref={loaderRef}
          className={effectiveTheme === "dark" ? "bg-black" : "bg-white"}
        />
      )}
      <main className={`dark:text-white ${className}`}>
        <EnterAnimation
          props={{
            initial: { opacity: 0, y: -100 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -100 },
            transition: {
              duration: 2,
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: 0.3,
            },
          }}
          loading={Loading}
        >
          <div className='flex items-center justify-center m-5 text-center text-5xl text-shadow-custom'>
            <span className='mx-80'>
              {quote.quote} - {quote.author}
            </span>
          </div>
        </EnterAnimation>
        <EnterAnimation
          props={{
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 100 },
            transition: {
              duration: 2,
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: 0.6,
            },
          }}
          loading={Loading}
        >
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
                    <ListView projects={projects} />
                  </div>
              ) : (
                  <div
                    ref={gridViewRef}
                    className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-10 mx-[2rem]'
                  >
                    {" "}
                    <GridView projects={projects} />
                  </div>
              )}
            </CSSTransition>
          </TransitionGroup>
        </EnterAnimation>
      </main>
    </>
  );
};

export default Home;
