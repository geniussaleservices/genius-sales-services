import type { Metadata } from "next";
import { Eyebrow } from "@/components/site/Eyebrow";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
};

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mb-12 flex flex-col items-center text-center">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
          Our Security Services
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted">
          Every officer we provide is SIA licensed and fully insured.
          Pricing is tailored to each site, so get in touch and we'll
          provide a quote based on exactly what you need.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-xl border border-border bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-ink">{service.title}</h2>
            <p className="mt-2 text-sm text-muted">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-xl border border-border bg-neutral-50 p-8 text-center">
        <h2 className="text-xl font-semibold text-navy">
          Prices Available On Request
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
          Call or email us with a few details about your site and we'll get
          back to you with pricing.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${site.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center rounded-full bg-red px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Call {site.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-neutral-50"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
