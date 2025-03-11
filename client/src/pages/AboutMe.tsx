
// import InfiniteTimer from "../components/InfiniteTimer";
import { useEffect, useRef, useState } from "react";
import { Profile } from "../types/Profile";
import React from "react";
import Loader from "../components/Loader";
import { useTheme } from "../components/useTheme";
// import EnterAnimation from "../components/EnterAnimation";
import Signature from "@/assets/Signature";
import { useLenis } from "lenis/react";
import fetchProfile from "../middlewares/DiscordProfileFetcher";
interface HomeProps {
  className?: string;
  loading?: boolean;
}

const AboutMe = React.forwardRef<HTMLDivElement, HomeProps>(() => {
  const [, setProfile] = useState<Profile | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const { effectiveTheme } = useTheme();
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

  useEffect(() => {
    fetchProfile(setProfile);
  }, []);

  return (
    <div className='min-h-[70dvh]'>
      {Loading && (
        <Loader
          ref={loaderRef}
          className={effectiveTheme === "dark" ? "bg-black" : "bg-white"}
        />
      )}
      <div className='text-center my-3'>
        <h1 className=' text-3xl text-shadow-custom mb-2'>
          "The best way to predict the future is to create it - one line of code
          at a time."
        </h1>
        <span className='text-paragrey text-shadow-custom'>
          Based in Melbourne, Australia
        </span>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-2 place-items-center'>
        <div className='w-full flex justify-center items-center overflow-hidden'>
          <img
            src='ProfilePic.webp'
            alt=''
            className='h-[30rem] w-[20rem] rounded-3xl object-cover '
          />
        </div>

        <div className='text-start mx-20 '>
          <span className=''>Background</span>
          <p className='text-paragrey'>
            I am a Full Stack Developer with a Bachelor's degree in Computer
            Applications, currently pursuing my Master's in Information
            Technology at the Royal Melbourne Institute of Technology (RMIT)
            University. I love connecting with fellow tech enthusiasts and
            professionals. If you've found value in my work or have a shared
            passion for technology, let's connect on LinkedIn or Twitter. I'm
            always eager to exchange ideas, collaborate on projects, and learn
            from others in the field.
          </p>

          <p className='text-paragrey mt-3'>
            Additionally, for potential employers, I bring a combination of
            technical proficiency, problem-solving skills, and a collaborative
            mindset to every project. My experience spans both front-end and
            back-end development, and I thrive in dynamic environments where I
            can contribute to innovative solutions and impactful products. I'm
            currently seeking new opportunities in software development, so
            please don't hesitate to reach out if you think I'd be a good fit
            for your team.
          </p>


          <div className="flex justify-center items-center mt-4 ">
            <span className="flex justify-center items-center flex-col">
              <span className='text-paragrey mb-2'>Thanks for stopping by!</span>
            <Signature width='20rem' height='5rem' />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
export default AboutMe;
