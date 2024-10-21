interface SunHorizonSVGProps {
  customClasses?: string;
}

function SunHorizonSVG({ customClasses }: SunHorizonSVGProps) {
  return (
    <svg
      width="234"
      height="125"
      viewBox="0 0 234 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={customClasses}
    >
      <g clip-path="url(#clip0_3_9)">
        <path
          d="M232 126C232 95.5001 219.884 66.2494 198.317 44.6827C176.751 23.116 147.5 11 117 11C86.5001 11 57.2494 23.116 35.6827 44.6827C14.116 66.2494 2 95.5001 2 126L117 126H232Z"
          fill="#F7C5B7"
        />
        <path
          d="M209 125.5C209 100.967 199.254 77.4397 181.907 60.0926C164.56 42.7455 141.033 33 116.5 33C91.9675 33 68.4397 42.7455 51.0926 60.0926C33.7455 77.4397 24 100.967 24 125.5L116.5 125.5H209Z"
          fill="#F29A82"
        />
        <path
          d="M185 125C185 106.965 177.836 89.6692 165.083 76.9167C152.331 64.1643 135.035 57 117 57C98.9653 57 81.6692 64.1643 68.9167 76.9167C56.1643 89.6692 49 106.965 49 125L117 125H185Z"
          fill="#EC6E4C"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_9">
          <rect width="234" height="125" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SunHorizonSVG;
