import { motion } from "framer-motion";

interface TypingAnimationProps {
  text: string;
  customClasses?: string;
}

function TypingAnimation({ text, customClasses = "" }: TypingAnimationProps) {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: (index: number) => ({
      opacity: 1,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <div className={customClasses}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          custom={index}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

export default TypingAnimation;
