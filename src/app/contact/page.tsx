import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <div className="flex flex-col items-center text-center">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
          Get In Touch
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted">
          Whether you need security cover for a site or you're interested in
          working with us, contact us by email or phone and we'll get back to
          you.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <a
          href={`tel:${site.phone.replace(/\s+/g, "")}`}
          className="flex items-center gap-4 rounded-xl border border-border bg-white p-6 shadow-sm transition hover:border-red/40"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red/10">
            <Phone className="h-5 w-5 text-red" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Phone
            </p>
            <p className="text-base font-semibold text-ink">
              {site.phoneDisplay}
            </p>
          </div>
        </a>

        <a
          href={`mailto:${site.email}`}
          className="flex items-center gap-4 rounded-xl border border-border bg-white p-6 shadow-sm transition hover:border-red/40"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red/10">
            <Mail className="h-5 w-5 text-red" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Email
            </p>
            <p className="text-base font-semibold text-ink">{site.email}</p>
          </div>
        </a>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
        <MapPin className="h-4 w-4 text-red" />
        {site.addressLine}
      </div>

      <p className="mt-12 text-center text-sm font-medium text-navy">
        Interested in working with us? Get in touch by email or phone.
      </p>
    </section>
  );
}
