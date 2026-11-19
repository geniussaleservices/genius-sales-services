import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="text-lg font-bold tracking-tight text-navy">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition hover:text-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${site.phone.replace(/\s+/g, "")}`}
          className="inline-flex items-center rounded-full bg-red px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Call Us
        </a>
      </div>
    </header>
  );
}
