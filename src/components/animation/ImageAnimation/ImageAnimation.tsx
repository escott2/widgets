import { useEffect, useState } from "react";
import { motion, useAnimation, useCycle } from "framer-motion";

interface ImageComponentProps {
  image1: string;
  image2: string;
}

const ImageAnimation = ({ image1, image2 }: ImageComponentProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animation, cycleAnimation] = useCycle(0, 1);
  // const imageAnimation = useAnimation();

  useEffect(() => {
    if (isHovered) {
      // imageAnimation.start({});
      cycleAnimation();
    } else {
      // imageAnimation.stop();
    }
  }, [isHovered, animation, cycleAnimation]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        src={animation === 0 ? image1 : image2}
        // animate={imageAnimation}
        transition={{ duration: 5 }}
      />
    </motion.div>
  );
};

export default ImageAnimation;
