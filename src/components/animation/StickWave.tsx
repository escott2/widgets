import { motion } from "framer-motion";
import Wave1 from "../../assets/Wave1.svg"; // Import your SVGs
import Wave2 from "../../assets/Wave2.svg";
import Wave3 from "../../assets/Wave3.svg";
import Wave4 from "../../assets/Wave4.svg";

const StickWave = () => {
  const variants = {
    hidden: { opacity: 0 },
    animate: { opacity: [1, 0] },
  };

  return (
    <div>
      <motion.img
        src={Wave1}
        variants={variants}
        initial="hidden"
        animate={{
          ...variants.animate,
          transition: { delay: 0.2, repeat: 3, time: [0, 0.2] },
        }}
      />
      <motion.img
        src={Wave2}
        variants={variants}
        initial="hidden"
        animate={{
          ...variants.animate,
          transition: { delay: 0.4, repeat: 3, time: [0, 0.2] },
        }}
      />
      <motion.img
        src={Wave3}
        variants={variants}
        initial="hidden"
        animate={{
          ...variants.animate,
          transition: { delay: 0.6, repeat: 3, time: [0, 0.2] },
        }}
      />
      <motion.img
        src={Wave4}
        variants={variants}
        initial="hidden"
        animate={{
          ...variants.animate,
          transition: { delay: 0.8, repeat: 3, time: [0, 0.2] },
        }}
      />
    </div>
  );
};

export default StickWave;
