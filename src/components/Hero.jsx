function StackIllustration() {
  return (
    <svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of stacked technology layers">
      <defs>
        <radialGradient id="glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="topFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c7a4ff" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="leftFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef3d84" />
          <stop offset="100%" stopColor="#b32567" />
        </linearGradient>
        <linearGradient id="rightFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb7a2b" />
          <stop offset="100%" stopColor="#e35f16" />
        </linearGradient>
        <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fb7a2b" />
          <stop offset="50%" stopColor="#ef3d84" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      <circle cx="210" cy="195" r="180" fill="url(#glow)" />

      {}
      <ellipse cx="210" cy="230" rx="150" ry="34" fill="none" stroke="url(#ring)" strokeWidth="2" opacity="0.35" />

      {}
      <g transform="translate(0,58)">
        <polygon points="210,150 300,190 210,230 120,190" fill="url(#topFace)" opacity="0.55" />
        <polygon points="120,190 210,230 210,250 120,210" fill="url(#leftFace)" opacity="0.55" />
        <polygon points="300,190 210,230 210,250 300,210" fill="url(#rightFace)" opacity="0.55" />
      </g>

      {}
      <g transform="translate(0,24)">
        <polygon points="210,120 300,160 210,200 120,160" fill="url(#topFace)" opacity="0.78" />
        <polygon points="120,160 210,200 210,220 120,180" fill="url(#leftFace)" opacity="0.78" />
        <polygon points="300,160 210,200 210,220 300,180" fill="url(#rightFace)" opacity="0.78" />
      </g>

      {}
      <g>
        <polygon points="210,90 300,130 210,170 120,130" fill="url(#topFace)" />
        <polygon points="120,130 210,170 210,190 120,150" fill="url(#leftFace)" />
        <polygon points="300,130 210,170 210,190 300,150" fill="url(#rightFace)" />
      </g>

      {}
      <g opacity="0.9">
        <rect x="52" y="150" width="30" height="30" rx="8" fill="#fff" stroke="#e8e5f0" />
        <text x="67" y="170" textAnchor="middle" fontFamily="Sora, sans-serif" fontSize="13" fontWeight="700" fill="#2f6fed">JS</text>
      </g>
      <g opacity="0.9">
        <rect x="336" y="118" width="30" height="30" rx="8" fill="#fff" stroke="#e8e5f0" />
        <text x="351" y="138" textAnchor="middle" fontFamily="Sora, sans-serif" fontSize="13" fontWeight="700" fill="#0e9f9c">DB</text>
      </g>
      <g opacity="0.9">
        <rect x="320" y="252" width="30" height="30" rx="8" fill="#fff" stroke="#e8e5f0" />
        <text x="335" y="272" textAnchor="middle" fontFamily="Sora, sans-serif" fontSize="12" fontWeight="700" fill="#16a34a">{'</>'}</text>
      </g>

      <circle cx="90" cy="260" r="4" fill="#ef3d84" />
      <circle cx="330" cy="90" r="3" fill="#fb7a2b" />
      <circle cx="120" cy="90" r="3" fill="#8b5cf6" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>
            Build Your Ideal
            <br />
            <span className="gradient-text">Development Stack</span>
          </h1>
          <p>
            Explore frontend, backend, database, and tooling options, compare them side by
            side, and put together the stack that fits your next project.
          </p>
          <div className="hero-actions">
            <a href="#technologies" className="btn btn-primary">Explore Technologies</a>
            <a href="#footer" className="btn btn-outline">Learn More</a>
          </div>
        </div>
        <div className="hero-visual">
          <img  
  src="/banner-stack.png" 
  alt="Development Stack" 
  className="floating-img" 
 />
        </div>
      </div>
    </section>
  )
}
