// src/components/Loader.tsx
import React from "react";
import "../styles/Loader.css"; // Optional: for additional styling
interface LoaderProps {
    className?: string;
}
const Loader:React.FC<LoaderProps>  = ({className}) => {
  return (
    /* From Uiverse.io by aryamitra06 */
    <div className={`loader ${className}`}>
      <span className='bar'></span>
      <span className='bar'></span>
      <span className='bar'></span>
    </div>
  );
};

export default Loader;
