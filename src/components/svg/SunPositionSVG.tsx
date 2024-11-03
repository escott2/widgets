interface SunPositionSVGProps {
  percentage: number;
  customClasses?: string;
}

const SunPositionSVG = ({ percentage, customClasses }: SunPositionSVGProps) => {
  const radius = 333;
  const angle = (percentage / 100) * Math.PI;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return (
    <svg
      viewBox="0 0 834 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClasses}
    >
      <g clip-path="url(#clip0_4_17)">
        <path
          id="sun-arc"
          d="M749 389.5C749 301.05 713.863 216.223 651.32 153.68C588.777 91.1365 503.95 56 415.5 56C327.05 56 242.223 91.1365 179.68 153.68C117.137 216.223 82 301.05 82 389.5L415.5 389.5H749Z"
          fill="#edf5f8"
        />
        <ellipse
          id="sun"
          cx={415 + x}
          cy={385 - y}
          rx="45"
          ry="45"
          fill="#EC6E4C"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_17">
          <rect width="834" height="500" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SunPositionSVG;
