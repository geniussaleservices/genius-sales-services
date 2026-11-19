import Link from "next/link";
import {
  ShieldCheck,
  BadgeCheck,
  Clock,
  Camera,
  Mail,
  Phone,
} from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { site, services } from "@/lib/site";

const badges = [
  { icon: ShieldCheck, label: "SIA Licensed" },
  { icon: BadgeCheck, label: "Fully Insured" },
  { icon: Clock, label: "24/7 Available" },
  { icon: Camera, label: "SIA CCTV Licence" },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red/10">
            <ShieldCheck className="h-8 w-8 text-red" />
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
            {site.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-red px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Get In Touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-neutral-50"
            >
              View Services
            </Link>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-white p-4"
              >
                <Icon className="h-6 w-6 text-red" />
                <span className="text-xs font-medium text-ink/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex flex-col items-center text-center">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">
            What We Offer
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="text-sm font-semibold text-red hover:underline"
          >
            See all services →
          </Link>
        </div>
      </section>

      <section className="border-t border-border bg-navy">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <span className="inline-flex items-center rounded-full bg-red px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Join Our Team
          </span>
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Interested In Working With Us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/70">
            We're always happy to talk to experienced, licensed security
            professionals. Reach out by phone or email and we'll arrange a
            time to meet.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
