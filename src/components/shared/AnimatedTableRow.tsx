import React from "react";
import { motion } from "framer-motion";

interface AnimatedTableRowProps {
  children: React.ReactNode;
  index: number;
  rowKey: string | number;
}

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const AnimatedTableRow: React.FC<AnimatedTableRowProps> = ({ children, index, rowKey }) => {
  return (
    <motion.tr
      key={rowKey}
      custom={index} 
      initial="hidden"
      animate="visible"
      variants={rowVariants}
    >
      {children}
    </motion.tr>
  );
};

export default AnimatedTableRow;