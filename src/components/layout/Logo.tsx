// PLACEHOLDER LOGO — swap this file with the traced version of the real
// Genius Sales & Services logo once the source logo image is resent.
// Keeps the same navy/red/white colour system so the rest of the site
// doesn't need to change when the real artwork goes in.
export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M50 4 L92 20 V48 C92 74 74 92 50 98 C26 92 8 74 8 48 V20 Z"
        fill="var(--navy)"
      />
      <path
        d="M50 12 L84 25 V48 C84 70 69 85 50 90 C31 85 16 70 16 48 V25 Z"
        fill="var(--red)"
      />
      <path
        d="M50 22 L75 32 V48 C75 65 64 77 50 81 C36 77 25 65 25 48 V32 Z"
        fill="var(--surface)"
      />
      <path d="M50 30 L50 72" stroke="var(--red)" strokeWidth="6" strokeLinecap="round" />
      <path d="M34 50 L50 62 L68 40" fill="none" stroke="var(--navy)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
