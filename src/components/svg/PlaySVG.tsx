interface PlaySVGProps {
  customClasses?: string;
}

function PlaySVG({ customClasses = "" }: PlaySVGProps) {
  return (
    <svg
      width="367"
      height="469"
      viewBox="0 0 367 469"
      xmlns="http://www.w3.org/2000/svg"
      className={customClasses}
      fill="white"
      aria-hidden="true"
    >
      <path d="M366.495 234.252L0.495117 468.079V0.425583L366.495 234.252Z" />
    </svg>
  );
}

export default PlaySVG;
