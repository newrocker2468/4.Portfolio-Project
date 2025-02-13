import { FC, useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListView from "../components/ListView";
import GridView from "../components/GridView";
import Switcher from "../components/Switcher";
import { useTheme } from "../components/useTheme";
import "../styles/Home.css";
import Loader from "../components/Loader";
import { quotes, projects } from "../data/DataArchive";
import { useLenis } from "lenis/react";
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
  const [Loading, setLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const listViewRef = useRef(null);
  const gridViewRef = useRef(null);
  const lenis = useLenis();

  const handleLoad = React.useCallback(() => {
    lenis?.scrollTo("top"); // Scroll to the top of the page

    document.body.style.overflow = "hidden"; // standard no-scroll implementation
    document.body.setAttribute("data-lenis-prevent", "true");

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



  return (
    <>
      {Loading && (
        <Loader
          ref={loaderRef}
          className={effectiveTheme === "dark" ? "bg-black" : "bg-white"}
        />
      )}
      <div className='blue-blurred'></div>
      <div className='pink-patch'></div>

      <main className={`dark:text-white ${className} min-h-dvh`}>
        {/* <EnterAnimation
          props={{
            initial: { opacity: 0, y: -100 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -100 },
            transition: {
              duration: 0.2,
              type: "spring",
              damping: 20,
              stiffness: 100,
            },
          }}
          loading={Loading}
        > */}
        <div className='flex items-center justify-center m-5 text-center text-4xl text-shadow-custom'>
          <h1 className='mx-10 md:mx-20 lg:mx-70 xl:mx-80'>
            {quote.quote} - {quote.author}
          </h1>
        </div>
        {/* </EnterAnimation> */}
        <EnterAnimation
          props={{
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 100 },
            transition: {
              duration: 1,
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: 0.3,
            },
          }}
          loading={Loading}
        >
          <div className='text-center my-[1rem]'>
            <div className='flex justify-center my-[2rem]'>
              <section className='relative w-3/4'>
                <div className='absolute sm:left-0 md:left-10 hidden md:block  '>
                  <Switcher View={View} SetView={SetView} />
                </div>
                <h2 className='text-xl'>Projects</h2>
              </section>
            </div>
          </div>
          <TransitionGroup className='my-4'>
            <CSSTransition
              key={View}
              timeout={300}
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
                  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-[2rem]'
                >
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
