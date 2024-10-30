interface SunPositionSVGProps {
  percentage: number;
}

const SunPositionSVG = ({ percentage }: SunPositionSVGProps) => {
  const percenteRemaining = 100 - percentage;
  const radius = 363;
  const angle = (percenteRemaining / 100) * Math.PI;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return (
    <svg viewBox="0 0 756 392" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame 2" clip-path="url(#clip0_4_17)">
        <path
          id="sun-arc"
          d="M741 392C741 295.726 702.755 203.396 634.68 135.32C566.604 67.2445 474.274 29 378 29C281.726 29 189.396 67.2445 121.32 135.32C53.2446 203.396 15 295.726 15 392L378 392H741Z"
          fill="#D9D9D9"
        />
        <circle id="sun" cx={380 + x} cy={408 - y} r="45" fill="#EC6E4C" />
      </g>
      <defs>
        <clipPath id="clip0_4_17">
          <rect width="756" height="392" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SunPositionSVG;
