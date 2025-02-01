import React, { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  initial?: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    rotate?: number;
  };
  animate?: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    rotate?: number;
  };
  exit?: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    rotate?: number;
  };
  transition?: {
    duration: number;
    delay?: number;
    easing?: string;
    rotate?: number;
    type?: string;
    damping?: number;
    stiffness?: number;
  };// Updated to accept more properties
}

interface EnterAnimationProps {
  children: React.ReactNode;
  props: Props;
  loading: boolean;
  className?: string;
}

const EnterAnimation: FC<EnterAnimationProps> = ({
  children,
  props,
  loading,
  className,
}) => {
  const defaultProps: Props = {
    initial: { opacity: 0, y: -50, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 50, scale: 0.8 },
    transition: { duration: 0.5, easing: "easeInOut" },
  };

  const finalProps = { ...defaultProps, ...props };

  if (!loading) {
    return (
      // {loading ? <div>Loading...</div> : ()}
      <motion.div
        initial={finalProps.initial}
        animate={finalProps.animate}
        exit={finalProps.exit}
        transition={finalProps.transition}
        {...finalProps} // Pass remaining props to the motion.div
        className={`${className}`}
      >
        {children}
      </motion.div>
    );
  }
};

export default EnterAnimation;
