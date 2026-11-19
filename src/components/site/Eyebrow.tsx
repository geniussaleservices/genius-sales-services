export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-red px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
      {children}
    </span>
  );
}
