export default function VfIcon({ width = 30, height = 22 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="navGrad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EDEDF2" />
          <stop offset="45%" stopColor="#C9C3F5" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <polygon points="40,20 72,20 150,200 118,200" fill="url(#navGrad)" />
      <polygon points="170,20 202,20 150,200 118,200" fill="url(#navGrad)" />
      <rect x="202" y="20" width="32" height="160" fill="url(#navGrad)" />
      <rect x="202" y="20" width="64" height="32" fill="url(#navGrad)" />
      <rect x="202" y="84" width="50" height="28" fill="url(#navGrad)" />
    </svg>
  );
}