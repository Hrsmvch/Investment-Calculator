import { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface AnimatedWrapperProps {
  children: ReactNode;
  initial?: MotionProps["initial"];
  animate?: MotionProps["animate"];
  transition?: MotionProps["transition"];
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  initial = { opacity: 0, y: -20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
}) => {
  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;