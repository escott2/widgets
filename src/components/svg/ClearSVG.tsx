interface ClearSVGProps {
  customClasses?: string;
}

function ClearSVG({ customClasses = "" }: ClearSVGProps) {
  return (
    <svg
      width="345"
      height="345"
      viewBox="0 0 345 345"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={customClasses}
      aria-hidden="true"
    >
      <rect
        x="285.914"
        y="1"
        width="83.4309"
        height="402.929"
        transform="rotate(45 285.914 1)"
      />
      <rect
        x="0.852539"
        y="59.6707"
        width="83.4309"
        height="402.929"
        transform="rotate(-45 0.852539 59.6707)"
      />
    </svg>
  );
}

export default ClearSVG;
