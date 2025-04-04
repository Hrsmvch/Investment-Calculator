import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  duration?: number;
  delayStep?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, duration = 0.5, delayStep = 0.1 }) => {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration, delay: i * delayStep }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </>
  );
};

export default AnimatedText;