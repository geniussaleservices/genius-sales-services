import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <span className="text-base font-bold">{site.name}</span>
          </div>
          <p className="mt-4 text-sm text-white/70">{site.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="text-white/80 hover:text-white">Home</Link></li>
            <li><Link href="/services" className="text-white/80 hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Get In Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2 text-white/80">
              <Phone className="h-4 w-4 text-red" />
              <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <Mail className="h-4 w-4 text-red" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-white/80">
              <MapPin className="h-4 w-4 text-red" />
              {site.addressLine}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {currentYear} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
