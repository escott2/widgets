interface PauseSVGProps {
  customClasses?: string;
}

function PauseSVG({ customClasses = "" }: PauseSVGProps) {
  return (
    <svg
      width="307"
      height="348"
      viewBox="0 0 307 348"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={customClasses}
      aria-hidden="true"
    >
      <rect width="109" height="348" />
      <rect x="198" width="109" height="348" />
    </svg>
  );
}

export default PauseSVG;
