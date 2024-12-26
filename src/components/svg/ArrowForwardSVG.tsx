interface ArrowForwardSVGProps {
  customClasses?: string;
}

function ArrowForwardSVG({ customClasses = "" }: ArrowForwardSVGProps) {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClasses}
      aria-hidden="true"
    >
      <path
        d="M0.59 1.41L5.17 6L0.59 10.59L2 12L8 6L2 0L0.59 1.41Z"
        fill="white"
      />
    </svg>
  );
}

export default ArrowForwardSVG;
