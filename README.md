# AI for Downtown Business — Event Landing Page

A single-page event landing page built with **Next.js (App Router)** and
**Tailwind CSS**.

**Event:** AI for Downtown Business — Networking, Innovation & Growth
A collaboration between Downtown San Diego Partnership, Won of Us, and Sonder Project.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/page.tsx` — the single landing page (all sections).
- `app/layout.tsx` — fonts (Fraunces + Inter) and global metadata.
- `app/api/signup/route.ts` — signup endpoint. Currently logs the payload and
  returns success. **TODO:** wire up the database insert (lead store owned by
  Sonder Project).
- `components/` — `SignupForm`, `Reveal` (scroll-reveal), `StickyCta`
  (sticky mobile CTA).

## Notes

- Lead data from the signup form is owned by **Sonder Project**.
- No date/time/venue is shown yet — copy reads
  "Date & venue announced soon. Sign up to be notified first."
