import React, { useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import { useTheme } from "../components/useTheme";
import { useLenis } from "lenis/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";



interface HomeProps {
  className?: string;
  loading?: boolean;
}

const ContactMe = React.forwardRef<HTMLDivElement, HomeProps>(() => {
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
    <div className='min-h-[70dvh]'>
      {Loading && (
        <Loader
          ref={loaderRef}
          className={effectiveTheme === "dark" ? "bg-black" : "bg-white"}
        />
      )}
      <h1 className='text-center text-3xl'>Wanna Get In Touch ? </h1>
      <p className='text-center text-lg mt-4'>
        Fill the form below to get in touch with me.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-[3rem]'>
        <div className='flex md:justify-end justify-center col-span-2 md:col-span-1'>
          <div className='w-1/2 grid grid-cols-1'>
            <span className='w-full text-start my-[0.3rem]'>Name :</span>
            <Input type='text' placeholder='Enter yours or companys' />
          </div>
        </div>
        <div className='flex md:justify-start justify-center col-span-2 md:col-span-1'>
          <div className='w-1/2 grid grid-cols-1'>
            <span className='w-full text-start my-[0.3rem]'>Email :</span>
            <Input type='email' placeholder='Your Mail ID' />
          </div>
        </div>
        <div className='flex justify-center col-span-2'>
          <div className='w-1/2 grid grid-cols-1'>
            <span className='w-full text-start my-[0.3rem]'>Subject :</span>
            <Input type='text' placeholder='Subject' />
          </div>
        </div>
        <div className='flex justify-center col-span-2'>
          <div className='w-1/2 grid grid-cols-1'>
            <span className='w-full text-start my-[0.3rem]'>Message :</span>
            <Textarea className='w-full' placeholder="Enter your message here "/>
          </div>
        </div>

        <div className='flex justify-center col-span-2'>
          <button
            className={`px-4 py-2 ${
              effectiveTheme == "dark"
                ? "bg-white text-black"
                : " bg-black text-white"
            }  rounded-lg w-1/2 dark:hover:bg-slate-200 hover:bg-[#515151]`}
          >
            Send
          </button>
        </div>
      </div>
      <div>
        <h2 className='text-center my-4'>
          If you prefer not to fill out the form, no problem at all. You can
          reach me directly via email at hello@jaskaran.dev.
        </h2>
      </div>
    </div>
  );
});

export default ContactMe;
