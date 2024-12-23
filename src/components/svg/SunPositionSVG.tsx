import { motion } from "framer-motion";

interface SunPositionSVGProps {
  percentDaylightRemaining: number | null | undefined;
}

type SunPosition = {
  x: number;
  y: number;
  dayProgressFraction: number;
};

const SunPositionSVG = ({ percentDaylightRemaining }: SunPositionSVGProps) => {
  const calculatePosition = (percentDaylightRemaining: number) => {
    const radius = 333;
    const angle = (percentDaylightRemaining / 100) * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    const dayProgressFraction = (100 - percentDaylightRemaining) / 100;
    return { x, y, dayProgressFraction };
  };

  const getPosition = (
    percentDaylightRemaining: number | null | undefined
  ): SunPosition => {
    const isSunUp = percentDaylightRemaining && percentDaylightRemaining <= 100;
    const isBeforeSunrise =
      percentDaylightRemaining && percentDaylightRemaining > 100;

    if (isSunUp) {
      const sunPosition = calculatePosition(percentDaylightRemaining);
      return sunPosition;
    } else if (isBeforeSunrise) {
      const sunPosition = calculatePosition(100);
      return sunPosition;
    } else {
      const sunPosition = calculatePosition(0);
      return sunPosition;
    }
  };

  const { x, y, dayProgressFraction } = getPosition(percentDaylightRemaining);

  const arcVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: dayProgressFraction,
      transition: { duration: 2 },
    },
  };

  const sunVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 2 },
    },
  };

  return (
    <svg viewBox="0 0 834 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <g id="sun-arc">
          <path
            d="M82 389.5C82 301.05 117.136 216.223 179.68 153.68C242.223 91.1365 327.05 56 415.5 56C503.95 56 588.777 91.1365 651.32 153.68C713.863 216.223 749 301.05 749 389.5L415.5 389.5H82Z"
            fill="#c8e1ea"
          />
        </g>
        <motion.ellipse
          id="sun"
          cx={415 + x}
          cy={385 - y}
          rx="45"
          ry="45"
          fill="#EC6E4C"
          variants={sunVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          id="sun-arc-top-path"
          d="M82 389.5C82 301.05 117.136 216.223 179.68 153.68C242.223 91.1365 327.05 56 415.5 56C503.95 56 588.777 91.1365 651.32 153.68C713.863 216.223 749 301.05 749 389.5"
          stroke="#EC6E4C"
          strokeWidth="20"
          variants={arcVariants}
          initial="hidden"
          animate="visible"
        />
      </g>
    </svg>
  );
};

export default SunPositionSVG;
