const SOURCES = ["Search", "Maps", "Referrals"] as const;
const SYSTEMS = ["Booking", "CRM", "Analytics"] as const;

// Column centers for the three-up rows, in viewBox units.
const COLUMNS = [52, 180, 308];

/**
 * A measured schematic of the thing this business actually sells: the path
 * from how people find a company, through its website, into the systems that
 * run it. Drawn in hairlines so it reads as a technical drawing, not an
 * illustration.
 */
export function SystemDiagram() {
  return (
    <svg
      viewBox="0 0 360 264"
      role="img"
      aria-label="Diagram: search, maps and referral traffic flows into a website, which connects to booking, CRM and analytics systems."
      className="h-auto w-full max-w-[24rem] font-sans"
    >
      <g stroke="var(--border)" strokeWidth="1" fill="none">
        <path d="M52 34 V52 H308 V34" />
        <path d="M180 34 V70" />
        <path d="M180 190 V208" />
        <path d="M52 208 H308" />
        <path d="M52 208 V230 M180 208 V230 M308 208 V230" />
      </g>

      <circle cx="180" cy="52" r="2.5" fill="var(--accent)" />
      <circle cx="180" cy="208" r="2.5" fill="var(--accent)" />

      {COLUMNS.map((cx, i) => (
        <g key={SOURCES[i]}>
          <rect
            x={cx - 52}
            y="0"
            width="104"
            height="34"
            rx="4"
            fill="var(--surface)"
            stroke="var(--border)"
          />
          <text
            x={cx}
            y="21"
            textAnchor="middle"
            fontSize="11"
            fill="var(--muted-foreground)"
          >
            {SOURCES[i]}
          </text>
        </g>
      ))}

      <rect
        x="40"
        y="70"
        width="280"
        height="120"
        rx="6"
        fill="var(--surface)"
        stroke="var(--border)"
      />
      <text x="56" y="91" fontSize="11" fontWeight="500" fill="var(--primary)">
        Your website
      </text>
      <path d="M40 100 H320" stroke="var(--border)" strokeWidth="1" />

      <g fill="var(--border)">
        <rect x="56" y="112" width="124" height="9" rx="2" />
        <rect x="56" y="129" width="156" height="6" rx="3" />
        <rect x="56" y="141" width="126" height="6" rx="3" />
      </g>
      <rect x="56" y="157" width="86" height="20" rx="4" fill="var(--primary)" />

      <rect x="222" y="112" width="82" height="65" rx="4" fill="var(--accent-soft)" />
      <g fill="var(--accent)" opacity="0.4">
        <rect x="232" y="124" width="62" height="5" rx="2.5" />
        <rect x="232" y="136" width="62" height="5" rx="2.5" />
        <rect x="232" y="148" width="40" height="5" rx="2.5" />
      </g>
      <rect x="232" y="159" width="46" height="10" rx="2" fill="var(--accent)" />

      {COLUMNS.map((cx, i) => (
        <g key={SYSTEMS[i]}>
          <rect
            x={cx - 52}
            y="230"
            width="104"
            height="34"
            rx="4"
            fill="var(--accent-soft)"
            stroke="var(--border)"
          />
          <text
            x={cx}
            y="251"
            textAnchor="middle"
            fontSize="11"
            fontWeight="500"
            fill="var(--primary)"
          >
            {SYSTEMS[i]}
          </text>
        </g>
      ))}
    </svg>
  );
}
