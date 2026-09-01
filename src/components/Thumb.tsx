import React from 'react';

/**
 * Procedural thumbnails — one abstract mark per project, keyed to what it is.
 * Placeholders for real screenshots / capture GIFs in a later pass.
 */

const box = {
  fill: 'var(--panel)',
} as const;

const svgProps = {
  viewBox: '0 0 320 180',
  preserveAspectRatio: 'xMidYMid slice',
  className: 'absolute inset-0 h-full w-full',
  role: 'img',
} as const;

const line = 'var(--line-strong)';
const dim = 'var(--ink-dim)';
const accent = 'var(--accent)';
const accentDim = 'var(--accent-dim)';

function CoinHop() {
  return (
    <svg {...svgProps} aria-label="Stacked platforms with a coin arc">
      <rect width="320" height="180" {...box} />
      <g stroke={line} strokeWidth="2" fill="none">
        <rect x="24" y="138" width="88" height="13" rx="2" />
        <rect x="146" y="108" width="78" height="13" rx="2" />
        <rect x="58" y="74" width="68" height="13" rx="2" />
        <rect x="192" y="54" width="84" height="13" rx="2" />
      </g>
      <path
        d="M38 138 C 86 34, 146 34, 192 58"
        stroke={accent}
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 5"
      />
      <circle cx="192" cy="58" r="9" fill={accent} />
      <circle cx="192" cy="58" r="4" fill="var(--panel)" />
    </svg>
  );
}

function CyberSpider() {
  return (
    <svg {...svgProps} aria-label="Radial web with a node">
      <rect width="320" height="180" {...box} />
      <g stroke={line} strokeWidth="1.5" fill="none">
        <circle cx="160" cy="90" r="26" />
        <circle cx="160" cy="90" r="52" />
        <circle cx="160" cy="90" r="78" />
        <path d="M160 90 L160 8 M160 90 L238 44 M160 90 L238 136 M160 90 L160 172 M160 90 L82 136 M160 90 L82 44" />
      </g>
      <path
        d="M160 40 L198 70 L184 118 L136 118 L122 70 Z"
        stroke={accent}
        strokeWidth="2"
        fill={accentDim}
      />
      <circle cx="160" cy="90" r="6" fill={accent} />
    </svg>
  );
}

function Digit() {
  return (
    <svg {...svgProps} aria-label="Pixel grid forming a seven beside a bar chart">
      <rect width="320" height="180" {...box} />
      <g stroke={line} strokeWidth="1" opacity="0.5">
        {[30, 44, 58, 72, 86, 100, 114, 128].map((y) => (
          <line key={y} x1="40" y1={y} x2="138" y2={y} />
        ))}
        {[40, 54, 68, 82, 96, 110, 124, 138].map((x) => (
          <line key={x} x1={x} y1="30" x2={x} y2="128" />
        ))}
      </g>
      <g fill={accent}>
        <rect x="41" y="31" width="83" height="12" />
        <rect x="97" y="43" width="13" height="13" />
        <rect x="83" y="57" width="13" height="13" />
        <rect x="69" y="71" width="13" height="13" />
        <rect x="69" y="85" width="13" height="13" />
        <rect x="55" y="99" width="13" height="13" />
        <rect x="55" y="113" width="13" height="13" />
      </g>
      <g>
        <rect x="192" y="104" width="14" height="26" fill={line} />
        <rect x="214" y="82" width="14" height="48" fill={line} />
        <rect x="236" y="50" width="14" height="80" fill={accent} />
        <rect x="258" y="96" width="14" height="34" fill={line} />
        <rect x="182" y="130" width="102" height="1.5" fill={dim} />
      </g>
    </svg>
  );
}

function P5() {
  return (
    <svg {...svgProps} aria-label="Layered sine waves">
      <rect width="320" height="180" {...box} />
      <path
        d="M0 118 C 40 54, 80 54, 120 118 S 200 182, 240 118 S 320 54, 360 118"
        fill="none"
        stroke={line}
        strokeWidth="2"
      />
      <path
        d="M0 100 C 40 36, 80 36, 120 100 S 200 164, 240 100 S 320 36, 360 100"
        fill="none"
        stroke={dim}
        strokeWidth="2"
        opacity="0.6"
      />
      <path
        d="M0 90 C 45 138, 90 138, 135 90 S 225 42, 270 90 S 360 138, 405 90"
        fill="none"
        stroke={accent}
        strokeWidth="2.5"
      />
    </svg>
  );
}

function Drawing() {
  return (
    <svg {...svgProps} aria-label="Overlapping brush strokes">
      <rect width="320" height="180" {...box} />
      <path
        d="M28 138 C 88 34, 148 174, 216 62"
        fill="none"
        stroke={line}
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M66 54 C 126 128, 196 18, 282 108"
        fill="none"
        stroke={dim}
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.55"
      />
      <g fill={accent}>
        {[
          [243, 50, 2.2],
          [253, 43, 1.6],
          [236, 41, 1.4],
          [260, 55, 1.8],
          [248, 60, 1.3],
          [268, 47, 1.2],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} />
        ))}
      </g>
      <path
        d="M38 152 C 108 108, 178 136, 288 86"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Braai() {
  return (
    <svg {...svgProps} aria-label="Browser window with hexagon avatars">
      <rect width="320" height="180" {...box} />
      <rect x="54" y="34" width="212" height="112" rx="6" fill="none" stroke={line} strokeWidth="2" />
      <line x1="54" y1="54" x2="266" y2="54" stroke={line} strokeWidth="2" />
      <g fill={dim}>
        <circle cx="64" cy="44" r="2.5" />
        <circle cx="73" cy="44" r="2.5" />
        <circle cx="82" cy="44" r="2.5" />
      </g>
      <g stroke={accent} strokeWidth="2" fill={accentDim}>
        <path d="M96 84 l14 -8 l14 8 l0 16 l-14 8 l-14 -8 Z" />
        <path d="M146 84 l14 -8 l14 8 l0 16 l-14 8 l-14 -8 Z" />
        <path d="M196 84 l14 -8 l14 8 l0 16 l-14 8 l-14 -8 Z" />
      </g>
      <rect x="96" y="118" width="128" height="6" rx="3" fill={line} />
      <rect x="116" y="130" width="88" height="6" rx="3" fill={line} />
    </svg>
  );
}

const MAP: Record<string, React.FC> = {
  coinhop: CoinHop,
  cyberspider: CyberSpider,
  'digit-classification': Digit,
  'p5-assignments': P5,
  'drawing-app': Drawing,
  braaimasters: Braai,
};

export default function Thumb({ id }: { id: string }) {
  const C = MAP[id] ?? P5;
  return <C />;
}
