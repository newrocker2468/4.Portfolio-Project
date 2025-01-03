import "../styles/Skills.css";
import React from "react";




const skills = ["React Js", "Node Js", "Express Js", "MongoDB", "PostgreSQL", "TypeScript", "JavaScript", "HTML", "CSS", "Bootstrap", "Jest", "Git", "GitHub", "Netlify", "Vercel", "Firebase", "REST Api", "Mapbox", "Tailwind Css", "Jwt", "Passport Js", "Nodemailer", "Shadcn", "NextUI", "EJs", "Handlebar Js", "Cloudinary", "Heroku","Unsplash API","Shadow DOM","Monaco Editor","Bash","Linux"]

const Skills: React.FC = () => {

  return (
      <>
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
   <div className="flex justify-center flex-wrap align-top w-3/5">
          {skills.map((skill, index) => {
            return <div key={index} className='mr-1 mt-1 dark:bg-white  dark:text-black bg-black text-white rounded-2xl px-3 py-1 cursor-pointer hover:dark:bg-darkwhite hover:bg-lightblack '>{skill}</div>
          })}
   </div>




      </div>
    </>
  );
};

export default Skills;
