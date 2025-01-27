import React from "react";
import * as motion from "motion/react-client";
import { FC } from "react";
interface Props {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  exit: { opacity: number; y: number };
  transition: { duration: number };
}
interface EnterAnimationProps {
  children: React.ReactNode;
  props?: Props;
}
const EnterAnimation: FC<EnterAnimationProps> = ({ children, props = {} }) => {
  {
    const defaultProps: Props = {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
      transition: { duration: 0.5 },
    };
    const finalProps = { ...defaultProps, ...props };
    return (
      <motion.div
        initial={finalProps.initial}
        animate={finalProps.animate}
        exit={finalProps.exit}
        transition={finalProps.transition}
      >
        {" "}
        {children}{" "}
      </motion.div>
    );
  }
};

export default EnterAnimation;
