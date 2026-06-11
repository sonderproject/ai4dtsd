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
    logo: logoDowntown,
    logoClass: "h-12 w-auto object-contain",
  },
  {
    name: "Won of Us",
    blurb:
      "Connecting people and ideas to spark innovation across the local community.",
    logo: logoWonOfUs,
    logoClass: "h-7 w-auto object-contain",
  },
  {
    name: "Sonder Project",
    blurb:
      "An AI research and web development company helping businesses put AI to work.",
    logo: logoSonder,
    logoClass: "h-12 w-auto object-contain",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative isolate flex min-h-[88vh] items-center px-6 py-20 sm:py-28">
        <Image
          src={skylineSunset}
          alt="Downtown San Diego skyline at sunset over the harbor"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="-z-20 object-cover"
        />
        {/* navy gradient overlay for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,19,32,0.78) 0%, rgba(7,19,32,0.62) 45%, rgba(7,19,32,0.85) 100%)",
          }}
        />

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-bright/40 bg-accent-bright/10 px-4 py-1.5 text-sm font-semibold text-accent-bright backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
            Free Event · Downtown San Diego
          </span>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl">
            AI for Downtown Business
          </h1>
          <p className="mt-4 font-heading text-xl font-medium text-accent-bright sm:text-2xl">
            Networking, Innovation &amp; Growth
          </p>

          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-200 sm:text-xl">
            Practical AI for your business — plus the people building it in San
            Diego.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4">
            <a
              href="#signup"
              className="inline-flex items-center justify-center rounded-xl bg-accent-bright px-8 py-4 text-base font-bold text-navy-deep shadow-xl shadow-black/30 transition hover:bg-white sm:text-lg"
            >
              Reserve Your Spot — Free
            </a>
            <p className="text-sm font-medium text-slate-300">
              Free to attend · Seats are limited
            </p>
          </div>

          <p className="mt-12 text-xs uppercase tracking-[0.2em] text-slate-400">
            Hosted by Downtown San Diego Partnership · Won of Us · Sonder Project
          </p>
        </div>
      </section>

      {/* ──────────────────── What You'll Learn ──────────────────── */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading
              eyebrow="What you'll walk away with"
              title="Real takeaways you can put to work Monday morning"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {LEARN_ITEMS.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 60}
                className={i === LEARN_ITEMS.length - 1 ? "sm:col-span-2" : ""}
              >
                <div className="flex h-full gap-4 rounded-2xl border border-slate-200 bg-surface-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 font-heading text-base font-semibold text-accent">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-navy">
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
      <section className="bg-surface-alt px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={downtownStreet}
                  alt="Downtown San Diego street and skyline in daylight"
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="What to expect"
                  title="An evening built for connection, ideas, and real tools"
                />
              </Reveal>

              <div className="mt-8 space-y-4">
                {EXPECT_ITEMS.map((item, i) => (
                  <Reveal key={item.title} delay={i * 60}>
                    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-surface-card p-5 shadow-sm">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                        <svg
                          className="h-5 w-5 text-accent"
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
              title="Made for the people who run Downtown"
              centered
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {ATTENDEES.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-accent/25 bg-accent/5 px-5 py-2.5 text-sm font-semibold text-navy"
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
          className="-z-20 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,19,32,0.82) 0%, rgba(7,19,32,0.72) 100%)",
          }}
        />
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            It&apos;s free — but seats are limited.
          </h2>
          <p className="mt-4 text-lg text-slate-200">
            Downtown&apos;s business community is coming together for this one.
            Claim your spot before it fills.
          </p>
          <a
            href="#signup"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent-bright px-8 py-4 text-base font-bold text-navy-deep shadow-xl shadow-black/30 transition hover:bg-white sm:text-lg"
          >
            Reserve Your Spot — Free
          </a>
        </Reveal>
      </section>

      {/* ───────────────────────── Hosted By ───────────────────────── */}
      <section className="bg-surface-alt px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading
              eyebrow="Hosted by"
              title="A partnership rooted in San Diego"
              centered
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {HOSTS.map((host, i) => (
              <Reveal key={host.name} delay={i * 80}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-surface-card p-8 text-center shadow-sm">
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
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Signup ───────────────────────── */}
      <section id="signup" className="scroll-mt-8 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Reserve your spot
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-navy sm:text-4xl">
                Save your seat — it&apos;s free
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
      <footer className="bg-navy-deep px-6 py-14">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-2xl font-semibold text-accent-bright">
            Space is limited.
          </p>
          <p className="mt-4 text-sm font-medium text-slate-300">
            Downtown San Diego Partnership &nbsp;·&nbsp; Won of Us &nbsp;·&nbsp;
            Sonder Project
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
  title: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-heading text-3xl font-semibold text-navy sm:text-4xl ${
          centered ? "mx-auto max-w-2xl" : "max-w-2xl"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
