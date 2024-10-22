interface SunSVGProps {
  customClasses?: string;
}

function SunSVG({ customClasses = "" }: SunSVGProps) {
  return (
    <svg
      width="230"
      height="230"
      viewBox="0 0 230 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClasses}
    >
      <circle cx="115" cy="115" r="115" fill="#EC6E4C" />
    </svg>
  );
}

export default SunSVG;
