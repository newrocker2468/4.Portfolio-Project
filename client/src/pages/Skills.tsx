import Loader from "../components/Loader";
import "../styles/Skills.css";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../components/useTheme";
import { useLenis } from "lenis/react";

interface HomeProps {
  className?: string;
  loading?: boolean;
}

const skills = ["React Js", "Node Js", "Express Js", "MongoDB", "PostgreSQL", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap", "Jest", "Git", "GitHub", "Netlify", "Vercel", "Firebase", "REST Api", "Mapbox", "Tailwind Css", "Jwt", "Passport Js", "Nodemailer", "Shadcn", "NextUI", "EJs", "Handlebar Js", "Cloudinary", "Heroku","Unsplash API","Shadow DOM","Monaco Editor","Bash","Linux"]

const Skills = React.forwardRef<HTMLDivElement,HomeProps>(() => {
const { effectiveTheme } = useTheme();
   const [Loading, setLoading] = useState(true);
   const loaderRef = useRef<HTMLDivElement | null>(null);
   const lenis = useLenis();

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
      <h1 className='text-center'>My Skills</h1>
      <div className='container mx-auto flex justify-center items-center'>
        {/* <ReactFlowProvider>
          <ReactFlow
            colorMode={effectiveTheme} 
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
          />

          <Controls />
                  <MiniMap nodeColor={"grey"} nodeStrokeWidth={3} zoomable pannable />
          <Background gap={20} size={1} />
        </ReactFlowProvider> */}
        <div className='flex justify-center flex-wrap align-top w-3/5'>
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className='mr-1 mt-1 dark:bg-white  dark:text-black bg-black text-white rounded-2xl px-3 py-1 cursor-pointer hover:dark:bg-darkwhite hover:bg-lightblack '
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
});

export default Skills;
