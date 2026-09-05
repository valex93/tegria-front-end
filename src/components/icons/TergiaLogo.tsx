interface IconProps {
  size?: number;
  className?: string;
}

export function TergiaLogo({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <rect width="24" height="24" rx="6" fill="url(#tergia-grad)" />
      <path
        d="M7 8h10M12 8v9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="tergia-grad" x1="0" y1="0" x2="24" y2="24">
          <stop stopColor="#4ade80" />
          <stop offset="1" stopColor="#22c55e" />
        </linearGradient>
      </defs>
    </svg>
  );
}
