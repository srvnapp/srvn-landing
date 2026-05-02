type Props = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 32, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      role="img"
      aria-label="srvn"
      className={className}
    >
      <rect width="140" height="140" rx="32" fill="#000000" />
      <path
        d="M96 46C96 30 84 22 70 22C56 22 42 31 42 46C42 61 55 67 70 70"
        stroke="#F26B3A"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M44 94C44 110 56 118 70 118C84 118 98 109 98 94C98 79 85 73 70 70"
        stroke="#F26B3A"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="32" cy="70" r="10" fill="#F26B3A" />
      <circle cx="108" cy="70" r="10" fill="#3d2440" />
    </svg>
  );
}
