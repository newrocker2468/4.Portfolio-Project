import { FC, useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListView from "../components/ListView";
import GridView from "../components/GridView";
import Switcher from "../components/Switcher";
import { useTheme } from "../components/useTheme";
import "../styles/Home.css";
import Loader from "../components/Loader";
import { quotes, projects } from "../data/DataArchive";

interface HomeProps {
  className?: string;
}

const quote = quotes[Math.floor(Math.random() * quotes.length)];

const Home: FC<HomeProps> = ({ className }) => {
  const { effectiveTheme } = useTheme();
  const [View, SetView] = useState("grid");
  const [, setActiveView] = useState(View);
  const [Loading, setLoading] = useState(true);
  const isFirstLoad = useRef(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const listViewRef = useRef(null);
  const gridViewRef = useRef(null);
  const handleLoad = () => {
    setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.style.transition = "opacity 0.5s ease-out";
        loaderRef.current.style.opacity = "0";
      }
      setTimeout(() => {
        setLoading(false);
      }, 500); // Duration of the fade-out effect
    }, 2000); // Delay before the fade-out effect starts (2 seconds)
  };

  useEffect(() => {
    setActiveView(View);
    if (isFirstLoad.current) {
      window.addEventListener("load", handleLoad);
      isFirstLoad.current = false;
    } else handleLoad();

    return () => window.removeEventListener("load", handleLoad);
  }, [View, Loading, isFirstLoad]);

  return (
    <>
      {Loading && (
        <Loader
          ref={loaderRef}
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
                <ListView projects={projects} />
              </div>
            ) : (
              <div
                ref={gridViewRef}
                className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-10 mx-[2rem]'
              >
                <GridView projects={projects} />
              </div>
            )}
          </CSSTransition>
        </TransitionGroup>
      </main>
    </>
  );
};

export default Home;
