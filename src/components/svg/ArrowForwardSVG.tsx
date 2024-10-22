interface ArrowForwardSVGProps {
  customClasses?: string;
}

function ArrowForwardSVG({ customClasses = "" }: ArrowForwardSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#FFF"
      aria-label="Next"
      className={customClasses}
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  );
}

export default ArrowForwardSVG;