# Genius Sales & Services — Static Site

Fully static Next.js site. No database, no forms, no Supabase, no server
actions — just three pages (Home, Services, Contact) with the business
phone number and email shown as plain text/links.

## Before you push this

1. **Swap the logo.** `src/components/layout/Logo.tsx` and
   `src/app/icon.svg` are currently a simple placeholder shield in the
   same navy/red colours as the real logo. Resend the original logo
   image to get the exact traced artwork dropped back in.
2. **Check the Services copy.** `src/lib/site.ts` has a first-draft list
   of six services (Static Guarding, Mobile Patrol, Key Holding, CCTV
   Monitoring, Event Security, Corporate Security) with generic
   descriptions — edit these to match what the business actually offers.
3. **Confirm contact details** in `src/lib/site.ts` (`phone`, `email`,
   `addressLine`) are correct.

## Setting this up on the client's own accounts (no dynamic dependencies)

1. Create a GitHub account (client's own email) and a new empty repo.
2. From this folder:
   ```
   git init
   git add .
   git commit -m "Initial static site"
   git branch -M main
   git remote add origin <client's new repo URL>
   git push -u origin main
   ```
3. Create a Vercel account via "Continue with GitHub" (keeps it tied to
   the same login, no separate password to manage).
4. In Vercel: "Add New Project" → import the repo you just pushed →
   deploy. No environment variables needed — there's nothing dynamic.
5. In the Vercel project's Domains settings, add the domain already
   purchased, then update the DNS records at the domain registrar as
   Vercel instructs (usually an A record or CNAME, shown on screen).

No Supabase account needed at all for this version of the site.
