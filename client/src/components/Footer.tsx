import { SparklesCore } from "./ui/sparkles";
import { useTheme } from "./useTheme";

const Footer = () => {
  const { effectiveTheme } = useTheme();

  return (
    <div
      id='footer'
      className={`bg-inherit flex flex-col items-center justify-center overflow-hidden rounded-md `}
    >
      <h1 className='text-2xl font-bold text-center relative'>Jaskaran</h1>
      <p className='text-sm text-center text-paragrey'>
        © {new Date().getFullYear()} Jas. All rights reserved.
      </p>
      <div className='w-2/3 h-20 relative bg-inherit'>
        {/* Gradients */}
        {/* Core component */}
        <SparklesCore
          background='transparent'
          minSize={0.4}
          maxSize={1}
          particleDensity={700}
          className='w-full h-full'
          particleColor={`${effectiveTheme == "dark" ? "#FFFFFF" : "#000000"}`}
        />
        {/* Radial Gradient to prevent sharp edges */}
  <div className={`absolute inset-0 w-full h-full ${effectiveTheme ==="dark" ? "bg-black" : "bg-white"} [mask-image:radial-gradient(550px_200px_at_top,transparent_20%,white)]`}></div>
    
      </div>
    </div>
  );
};

export default Footer;
