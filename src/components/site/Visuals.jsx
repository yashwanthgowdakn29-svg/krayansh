/* ──────────────────────────────────────────────────────────────
   Hero artwork, drawn entirely in SVG + CSS.

   The reference design leans on stock photography of glowing blue
   particle waves and dotted globes. Rebuilding those as vector art
   keeps the page free of large image payloads, keeps every edge
   crisp at any viewport, and lets the accent colour stay in sync
   with the design tokens instead of being baked into a JPEG.
   ────────────────────────────────────────────────────────────── */

/* Three ribbons, each a thick stroked curve used as a mask over a dot
   pattern — that is what produces the "particle wave" read without
   emitting thousands of individual <circle> nodes. */
const ribbons = [
  { id: 'a', d: 'M-60 470 C 160 360 330 590 540 500 S 840 320 1020 400 S 1200 500 1280 452', width: 96, opacity: 0.95, dur: 26 },
  { id: 'b', d: 'M-60 536 C 190 440 340 646 560 566 S 860 396 1040 470 S 1210 560 1280 520', width: 68, opacity: 0.6, dur: 34 },
  { id: 'c', d: 'M-60 404 C 140 306 350 520 520 436 S 820 262 1010 336 S 1200 424 1280 386', width: 44, opacity: 0.4, dur: 42 },
];

export function WaveField({ className = '' }) {
  return (
    <svg
      className={`kg-wave ${className}`.trim()}
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="kg-dot-pattern" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="1.6" cy="1.6" r="1.15" fill="currentColor" />
        </pattern>

        {/* Ribbons fade in and out at the edges so they never end abruptly. */}
        <linearGradient id="kg-ribbon-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.16" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.86" stopColor="#fff" stopOpacity="0.6" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>

        {ribbons.map((ribbon) => (
          <mask key={ribbon.id} id={`kg-ribbon-${ribbon.id}`} maskUnits="userSpaceOnUse" x="0" y="0" width="1200" height="700">
            <rect width="1200" height="700" fill="#000" />
            <path
              d={ribbon.d}
              fill="none"
              stroke="url(#kg-ribbon-fade)"
              strokeWidth={ribbon.width}
              strokeLinecap="round"
            />
          </mask>
        ))}
      </defs>

      {/* Soft light beneath the ribbons. */}
      <g className="kg-wave-glow">
        {ribbons.map((ribbon) => (
          <path key={ribbon.id} d={ribbon.d} fill="none" strokeWidth={ribbon.width * 0.5} opacity={ribbon.opacity * 0.5} />
        ))}
      </g>

      {/* The dotted ribbons themselves. */}
      {ribbons.map((ribbon) => (
        <g key={ribbon.id} className="kg-wave-band" style={{ '--dur': `${ribbon.dur}s`, opacity: ribbon.opacity }}>
          <rect x="-60" width="1320" height="700" fill="url(#kg-dot-pattern)" mask={`url(#kg-ribbon-${ribbon.id})`} />
        </g>
      ))}

      {/* A handful of brighter particles catching the light. */}
      <g className="kg-wave-sparks">
        {[[240, 452], [468, 512], [612, 470], [806, 372], [944, 392], [1088, 438], [352, 486], [712, 404]].map(([cx, cy], index) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={index % 3 === 0 ? 2.6 : 1.9} style={{ animationDelay: `${index * 0.7}s` }} />
        ))}
      </g>
    </svg>
  );
}

/* Latitude/longitude sphere over a dot field — the reference's dotted world
   map, abstracted so it reads as a global network rather than a specific
   (and inevitably slightly wrong) political map. */
export function DotSphere({ className = '' }) {
  const meridians = [12, 30, 48, 66, 84];
  const parallels = [-64, -40, -18, 4, 26, 50, 72];

  return (
    <svg
      className={`kg-sphere ${className}`.trim()}
      viewBox="0 0 400 400"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="kg-sphere-dots" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="1.7" cy="1.7" r="1.2" fill="currentColor" />
        </pattern>
        <radialGradient id="kg-sphere-fade" cx="0.42" cy="0.36" r="0.72">
          <stop offset="0" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="0.62" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.06" />
        </radialGradient>
        <mask id="kg-sphere-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="400">
          <circle cx="200" cy="200" r="158" fill="url(#kg-sphere-fade)" />
        </mask>
      </defs>

      <rect width="400" height="400" fill="url(#kg-sphere-dots)" mask="url(#kg-sphere-mask)" />

      <g className="kg-sphere-lines" mask="url(#kg-sphere-mask)">
        <circle cx="200" cy="200" r="158" />
        {meridians.map((rx) => (
          <ellipse key={`m${rx}`} cx="200" cy="200" rx={rx * 1.72} ry="158" />
        ))}
        {parallels.map((offset) => {
          const dy = offset * 1.9;
          // Chord half-width at this latitude keeps each parallel inside the sphere.
          const rx = Math.sqrt(Math.max(158 * 158 - dy * dy, 1));
          return <ellipse key={`p${offset}`} cx="200" cy={200 + dy} rx={rx} ry="7" />;
        })}
      </g>
    </svg>
  );
}

/* Faint engineering grid used behind dark bands. */
export function GridGlow({ className = '' }) {
  return (
    <svg className={`kg-grid ${className}`.trim()} aria-hidden="true" focusable="false">
      <defs>
        <pattern id="kg-grid-pattern" width="64" height="64" patternUnits="userSpaceOnUse">
          <path d="M64 0H0V64" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kg-grid-pattern)" />
    </svg>
  );
}
