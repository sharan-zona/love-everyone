import './index.css';
import './App.css';

const PARTICLE_COLORS = [
  '#f06292',
  '#D4537E',
  '#fc0256',
  '#e62a5f',
  '#ce93d8',
  '#ff80ab',
];

function Particles() {
  const items = Array.from({ length: 14 }, (_, i) => {
    const angle  = (i / 14) * 360;
    const radius = 40 + (i % 3) * 10;
    const rad    = (angle * Math.PI) / 180;
    const cx = 100, cy = 105;
    const x    = cx + radius * Math.cos(rad);
    const y    = cy + radius * Math.sin(rad);
    const size = 5 + (i % 3) * 2;

    return (
      <div
        key={i}
        className="particle"
        style={{
          left:              x,
          top:               y,
          width:             size,
          height:            size,
          background:        PARTICLE_COLORS[i % PARTICLE_COLORS.length],
          animationDuration: `${2.4 + (i % 3) * 0.4}s`,
          animationDelay:    `${i * 0.22}s`,
        }}
      />
    );
  });

  return <div className="particles">{items}</div>;
}

function HeartSVG() {
  return (
    <svg
      className="heart-svg"
      width="120"
      height="110"
      viewBox="0 0 120 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#d02424" />
          <stop offset="50%"  stopColor="#db4545" />
          <stop offset="100%" stopColor="#f40e72" />
        </linearGradient>
        <linearGradient id="shimmer" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%"   stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Main heart shape */}
      <path
        d="M60 98 C60 98 10 62 10 33 C10 18 22 8 35 8
           C45 8 55 15 60 22 C65 15 75 8 85 8
           C98 8 110 18 110 33 C110 62 60 98 60 98 Z"
        fill="url(#heartGrad)"
      />

      {/* Shimmer highlight */}
      <path
        d="M25 20 C22 27 22 36 28 46"
        stroke="url(#shimmer)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}

export default function App() {
  return (
    <div className="heart-scene" role="main" aria-label="Heart animation">
      <h1 className="heart-title">Spread love everywhere.</h1>

      <div className="heart-container">
        <div className="ring ring-1" aria-hidden="true" />
        <div className="ring ring-2" aria-hidden="true" />
        <div className="ring ring-3" aria-hidden="true" />

        <Particles />
        <HeartSVG />
        <div className="pulse-dot" aria-hidden="true" />
      </div>

      <p className="heart-subtitle">Love is patient..Love is kind</p>
    </div>
  );
}