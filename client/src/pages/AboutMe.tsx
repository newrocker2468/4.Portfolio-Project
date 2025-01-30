import InfoCard from "../components/InfoCard";
import InfiniteTimer from "../components/InfiniteTimer";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Profile } from "../types/Profile";
import React from "react";
import Loader from "../components/Loader";
import { useTheme } from "../components/useTheme";
import EnterAnimation from "../components/EnterAnimation";
interface HomeProps {
  className?: string;
  loading?: boolean;
}

const AboutMe = React.forwardRef<HTMLDivElement, HomeProps>(() => {
  const [Profile, setProfile] = useState<Profile | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  const isFirstLoad = useRef(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const { effectiveTheme } = useTheme();
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
  const fetchProfile = async () => {
    try {
      const response = await axios.get("http://localhost:3000/profile");
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching Discord profile:", error);
    }
  };
  useEffect(() => {
    fetchProfile();
    if (isFirstLoad.current) {
      window.addEventListener("load", handleLoad);
      isFirstLoad.current = false;
    } else handleLoad();

    return () => window.removeEventListener("load", handleLoad);
  }, [Loading, isFirstLoad]);


  return (
    <>
      {Loading && (
        <Loader
          ref={loaderRef}
          className={effectiveTheme === "dark" ? "bg-black" : "bg-white"}
        />
      )}
      <h1 className='text-center'>My DashBoard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[2rem] justify-center items-center lg:mx-72 md:mx-20 overflow-hidden'>
        <EnterAnimation
          props={{
            initial: { opacity: 0, y: -100 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -100 },
            transition: {
              duration: 1.2,
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: 0.2,
            },
          }}
          loading={Loading}
        >
          <InfoCard title={"My Age"} desc={<InfiniteTimer />} />
        </EnterAnimation>
        <EnterAnimation
          props={{
            initial: { opacity: 0, y: -100 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -100 },
            transition: {
              duration: 1.2,
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: 0.2,
            },
          }}
          loading={Loading}
        >
          <InfoCard title={"My Age"} desc={"21"} />
        </EnterAnimation>
        <EnterAnimation
          props={{
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 100 },
            transition: {
              duration: 1.4,
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: 0.3,
            },
          }}
          loading={Loading}
        >
          <InfoCard title={"My Age"} desc={"21"} />
        </EnterAnimation>
        <EnterAnimation
          props={{
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 100 },
            transition: {
              duration: 1.4,
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: 0.3,
            },
          }}
          loading={Loading}
        >
          {" "}
          <InfoCard discord={true} profile={Profile} />
        </EnterAnimation>
      </div>
    </>
  );
});
export default AboutMe;
