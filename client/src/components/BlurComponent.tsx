import { useRef, useEffect, ReactNode } from "react";
import "../styles/BlurContainer.css"; // Import the CSS for styling

interface BlurContainerProps {
  className?: string;
  children: ReactNode;
  ref?: unknown;
}

const BlurContainer = ({ className, children }: BlurContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      if (containerRef.current && blurRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - blurRef.current.offsetWidth / 2;
        const y = e.clientY - rect.top - blurRef.current.offsetHeight / 2;
        blurRef.current.style.transform = `translate(${x}px, ${y}px)`;

        // Hide the blur effect during repositioning
        blurRef.current.style.display = "none";

        // Delay the display to ensure it's fully repositioned
        setTimeout(() => {
          blurRef.current!.style.display = "block";
        }, 0); // A small delay should be enough
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && blurRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        blurRef.current.style.transform = `translate(${x - 220}px, ${
          y - 80
        }px)`;
      }
    };

    const handleMouseLeave = () => {
      if (blurRef.current) {
        blurRef.current.style.display = "none";
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup event listeners on unmount
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div ref={containerRef} className={`blur-container ${className}`}>
      {children}
      <div ref={blurRef} className='blur-effect'></div>
    </div>
  );
};

export default BlurContainer;
