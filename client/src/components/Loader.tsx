import  { forwardRef } from "react";
import "../styles/Loader.css"; // Optional: for additional styling

interface LoaderProps {
  className?: string;

}

const Loader = forwardRef<HTMLDivElement, LoaderProps>(({ className }, ref) => {

  return (
    <div ref={ref} className={`loader-bg  ${className}`}>
      <div className="loader">
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </div>
  );
});

export default Loader;
