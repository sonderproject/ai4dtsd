import Image from "next/image";
import Reveal from "@/components/Reveal";
import SignupForm from "@/components/SignupForm";
import StickyCta from "@/components/StickyCta";
import skylineSunset from "@/assets/images/skyline-sunset.jpg";
import skylineBay from "@/assets/images/skyline-bay.jpg";
import downtownStreet from "@/assets/images/downtown-street.jpg";
import logoDowntown from "@/assets/images/logo-downtown.png";
import logoWonOfUs from "@/assets/images/logo-wonofus.png";
import logoSonder from "@/assets/images/logo-sonder.png";

const HERO_CHIPS = [
  "Free Entry",
  "Networking",
  "Live AI Demos",
  "Vendor Showcase",
  "Memberships & Packages",
];

const TICKER = [
  "Practical AI",
  "Networking",
  "Live Demos",
  "Local Case Studies",
  "Vendor Showcase",
  "Expert Panels",
  "Food & Drinks",
];

const LEARN_ITEMS = [
  {
    title: "Get hours back every week",
    body: "See exactly where AI can take the busywork off your plate — no big budget and no tech team required.",
  },
  {
    title: "Automate the repetitive stuff",
    body: "Scheduling, follow-ups, invoicing, data entry — hand off the tasks that eat your day so you can focus on customers.",
  },
  {
    title: "Win and keep more customers",
    body: "Practical AI for marketing, customer service, and operations that actually moves the needle for a local business.",
  },
  {
    title: "Learn from real local case studies",
    body: "Hear how Downtown San Diego businesses are putting AI to work right now — what's working and what to skip.",
  },
  {
    title: "Stay ahead of what's coming",
    body: "A clear, jargon-free look at the trends shaping the next 3–5 years so you can plan with confidence.",
  },
];

const EXPECT_ITEMS = [
  {
    title: "Network with Downtown's decision makers",
    body: "Meet owners, operators, and executives from across Downtown San Diego.",
    icon: (
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-.001M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    ),
  },
  {
    title: "See live AI demos",
    body: "Real tools solving real business problems — live, not slideware.",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    title: "Explore the vendor showcase",
    body: "Meet the tools and teams hands-on, and find the right fit for your business.",
    icon: (
      <>
        <path d="M3 9l1-5h16l1 5M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M3 9h18M9 20v-6h6v6" />
      </>
    ),
  },
  {
    title: "Hear expert speakers & panels",
    body: "Learn from the people building and using AI locally — with time for your questions.",
    icon: (
      <>
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
      </>
    ),
  },
  {
    title: "Enjoy food & refreshments",
    body: "Bites and drinks while you connect — come hungry and curious.",
    icon: (
      <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
    ),
  },
];

const ATTENDEES = [
  "Small Business Owners",
  "Entrepreneurs",
  "Executives",
  "Marketing Pros",
  "Operations Managers",
  "Tech Professionals",
];

const HOSTS = [
  {
    name: "Downtown San Diego Partnership",
    blurb:
      "The leading voice for a vibrant, prosperous Downtown and the businesses that power it.",
    offer: "Ask about Partnership memberships",
    url: "https://downtownsandiego.org/",
    logo: logoDowntown,
    logoClass: "h-12 w-auto object-contain",
  },
  {
    name: "Won of Us",
    blurb:
      "Connecting people and ideas to spark innovation across the local community.",
    offer: "Innovation programs & partnerships",
    url: "https://www.wonofuslimited.com/",
    logo: logoWonOfUs,
    logoClass: "h-7 w-auto object-contain",
  },
  {
    name: "Sonder Project",
    blurb:
      "An AI research and web development company helping businesses put AI to work.",
    offer: "AI implementation packages",
    url: "https://www.sonderproject.co",
    logo: logoSonder,
    logoClass: "h-12 w-auto object-contain",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative isolate flex min-h-screen items-center px-6 py-24 sm:py-28">
        <Image
          src={skylineSunset}
          alt="Downtown San Diego skyline at sunset over the harbor"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="-z-30 object-cover"
        />
        {/* deep gradient wash for legibility + mood */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,19,32,0.82) 0%, rgba(7,19,32,0.55) 40%, rgba(7,19,32,0.9) 100%)",
          }}
        />
        {/* floating color orbs */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="animate-floaty absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="animate-floaty-slow absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl" />
          <div className="animate-floaty absolute right-1/3 top-1/4 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
            <span className="animate-pulsedot h-2 w-2 rounded-full bg-cyan-300" />
            Free Event · Downtown San Diego
          </span>

          <h1 className="mt-7 font-heading text-5xl font-semibold leading-[0.98] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] sm:text-7xl md:text-[5.5rem]">
            AI for <span className="text-gradient">Downtown</span> Business
          </h1>
          <p className="mt-5 font-heading text-xl font-semibold uppercase tracking-[0.18em] text-gradient-warm sm:text-2xl">
            Networking · Innovation · Growth
          </p>

          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-200 sm:text-xl">
            Practical AI for your business — plus the people building it in San
            Diego.
          </p>

          {/* highlight chips */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {HERO_CHIPS.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur-md"
              >
                <svg
                  className="h-3.5 w-3.5 text-cyan-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="#signup"
              className="btn-glow rounded-2xl px-9 py-4 text-base sm:text-lg"
            >
              Reserve Your Spot — Free
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <p className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
              Free to attend · Seats are limited
            </p>
          </div>

          <p className="mt-12 text-xs uppercase tracking-[0.2em] text-slate-400">
            Hosted by Downtown San Diego Partnership · Won of Us · Sonder Project
          </p>
        </div>
      </section>

      {/* ───────────────── Scrolling keyword ticker ───────────────── */}
      <div className="overflow-hidden border-y border-white/10 bg-navy-deep py-4">
        <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
          {[...TICKER, ...TICKER].map((word, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-heading text-xl font-semibold text-white/90 sm:text-2xl">
                {word}
              </span>
              <span className="text-gradient text-2xl font-bold">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ──────────────────── What You'll Learn ──────────────────── */}
      <section className="dot-grid relative px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading
              eyebrow="What you'll walk away with"
              title={
                <>
                  Real takeaways you can use{" "}
                  <span className="text-gradient">Monday morning</span>
                </>
              }
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {LEARN_ITEMS.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 60}
                className={i === LEARN_ITEMS.length - 1 ? "sm:col-span-2" : ""}
              >
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-surface-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_50px_-20px_rgba(56,189,248,0.55)]">
                  {/* gradient hover wash */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-50 to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {/* oversized ghost number */}
                  <span className="pointer-events-none absolute -right-2 -top-6 font-heading text-8xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-cyan-100">
                    {i + 1}
                  </span>
                  <div className="relative">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 font-heading text-base font-bold text-white shadow-md">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 font-heading text-xl font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-slate-600">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── What to Expect ───────────────────── */}
      <section className="relative overflow-hidden bg-surface-alt px-6 py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-1/3 -z-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                {/* gradient frame */}
                <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 opacity-70 blur-lg" />
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src={downtownStreet}
                    alt="Downtown San Diego street and skyline in daylight"
                    placeholder="blur"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* floating badge */}
                <div className="absolute -bottom-5 -right-3 rotate-[-4deg] rounded-2xl bg-gradient-to-br from-amber-400 to-rose-500 px-5 py-3 text-center shadow-xl sm:-right-5">
                  <p className="font-heading text-lg font-bold leading-none text-white">
                    Free Entry
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/90">
                    Reserve your seat
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="What to expect"
                  title={
                    <>
                      An evening built for{" "}
                      <span className="text-gradient">connection</span> &amp;
                      ideas
                    </>
                  }
                />
              </Reveal>

              <div className="mt-8 space-y-4">
                {EXPECT_ITEMS.map((item, i) => (
                  <Reveal key={item.title} delay={i * 60}>
                    <div className="group flex gap-4 rounded-2xl border border-slate-200 bg-surface-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 shadow-md transition-transform group-hover:scale-110">
                        <svg
                          className="h-5 w-5 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          {item.icon}
                        </svg>
                      </span>
                      <div>
                        <h3 className="font-heading text-base font-semibold text-navy">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── Who Should Attend ──────────────────── */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Who should attend"
              title={
                <>
                  Made for the people who{" "}
                  <span className="text-gradient">run Downtown</span>
                </>
              }
              centered
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {ATTENDEES.map((chip) => (
                <span
                  key={chip}
                  className="cursor-default rounded-full border border-slate-200 bg-surface-card px-5 py-2.5 text-sm font-semibold text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 hover:text-white hover:shadow-lg"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────── Photo CTA band ─────────────────── */}
      <section className="relative isolate px-6 py-24 sm:py-28">
        <Image
          src={skylineBay}
          alt="Downtown San Diego skyline across the bay at dusk"
          fill
          placeholder="blur"
          sizes="100vw"
          className="-z-30 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,19,32,0.88) 0%, rgba(7,19,32,0.74) 100%)",
          }}
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="animate-floaty absolute left-1/4 top-0 h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl" />
          <div className="animate-floaty-slow absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
        </div>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-5xl">
            Come for the ideas. Leave with a{" "}
            <span className="text-gradient-warm">partner</span>.
          </h2>
          <p className="mt-4 text-lg text-slate-200">
            Free to attend, with limited seats. Meet the companies offering
            memberships, packages, and hands-on help to put AI to work in your
            business.
          </p>
          <a
            href="#signup"
            className="btn-glow mt-8 rounded-2xl px-9 py-4 text-base sm:text-lg"
          >
            Reserve Your Spot — Free
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Reveal>
      </section>

      {/* ───────────────────────── Hosted By ───────────────────────── */}
      <section className="bg-surface-alt px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading
              eyebrow="Hosted by"
              title={
                <>
                  A partnership rooted in{" "}
                  <span className="text-gradient">San Diego</span>
                </>
              }
              centered
            />
          </Reveal>
          <Reveal delay={60}>
            <p className="mx-auto mt-5 max-w-2xl text-center text-slate-600">
              Meet the teams behind the event — and explore the memberships,
              packages, and partnerships that can help you put AI to work in
              your business.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {HOSTS.map((host, i) => (
              <Reveal key={host.name} delay={i * 80}>
                <a
                  href={host.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-slate-200 bg-surface-card p-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {/* top gradient accent */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500" />
                  <div className="flex h-20 w-full items-center justify-center rounded-xl bg-navy px-6">
                    <Image
                      src={host.logo}
                      alt={`${host.name} logo`}
                      className={host.logoClass}
                    />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-navy">
                    {host.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{host.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent">
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                    {host.offer}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy transition-colors group-hover:text-accent">
                    Visit website
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Signup ───────────────────────── */}
      <section
        id="signup"
        className="dot-grid relative scroll-mt-8 px-6 py-20 sm:py-28"
      >
        <div className="relative mx-auto max-w-2xl">
          {/* glow halo behind the form */}
          <div
            aria-hidden="true"
            className="absolute -inset-x-8 top-24 -z-10 h-72 rounded-full bg-gradient-to-r from-cyan-300/30 via-blue-300/30 to-fuchsia-300/30 blur-3xl"
          />
          <Reveal>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-accent">
                Reserve your spot
              </span>
              <h2 className="mt-4 font-heading text-3xl font-semibold text-navy sm:text-5xl">
                Save your seat — it&apos;s{" "}
                <span className="text-gradient">free</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-slate-600">
                Date &amp; venue announced soon. Sign up to be notified first —
                space is limited.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <SignupForm />
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── Footer ───────────────────────── */}
      <footer className="relative bg-navy-deep px-6 py-14">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-2xl font-bold sm:text-3xl">
            <span className="text-gradient-warm">Space is limited.</span>
          </p>
          <p className="mt-4 text-sm font-medium text-slate-300">
            <a
              href="https://downtownsandiego.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent-bright"
            >
              Downtown San Diego Partnership
            </a>
            &nbsp;·&nbsp;
            <a
              href="https://www.wonofuslimited.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent-bright"
            >
              Won of Us
            </a>
            &nbsp;·&nbsp;
            <a
              href="https://www.sonderproject.co"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent-bright"
            >
              Sonder Project
            </a>
          </p>
          <p className="mt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} AI for Downtown Business. All rights
            reserved.
          </p>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <StickyCta />
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  centered = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-heading text-3xl font-semibold leading-tight text-navy sm:text-4xl md:text-5xl ${
          centered ? "mx-auto max-w-3xl" : "max-w-3xl"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
