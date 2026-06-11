import Reveal from "@/components/Reveal";
import SignupForm from "@/components/SignupForm";
import StickyCta from "@/components/StickyCta";

const LEARN_ITEMS = [
  {
    title: "Save time and cut costs",
    body: "Practical ways AI is already helping local businesses do more with less — without a big budget or a tech team.",
  },
  {
    title: "Automate the repetitive stuff",
    body: "Hand off the busywork — scheduling, follow-ups, data entry — so you and your team can focus on customers.",
  },
  {
    title: "AI for marketing, service & operations",
    body: "Sharper marketing, faster customer service, and smoother day-to-day operations using tools you can actually use.",
  },
  {
    title: "Real local case studies",
    body: "Hear how Downtown San Diego businesses are putting AI to work right now — what worked and what didn't.",
  },
  {
    title: "Where this is heading",
    body: "A clear, jargon-free look at the trends shaping the next 3–5 years so you can plan with confidence.",
  },
];

const EXPECT_ITEMS = [
  {
    title: "Networking",
    body: "Meet other owners and decision makers from across Downtown San Diego.",
    icon: (
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-.001M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    ),
  },
  {
    title: "Live AI demos",
    body: "See real tools in action — not slideware. Watch AI solve everyday business problems.",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    title: "Expert speakers & panels",
    body: "Hear from people building and using AI locally, with time for your questions.",
    icon: (
      <>
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
      </>
    ),
  },
  {
    title: "Food & refreshments",
    body: "Enjoy bites and drinks while you connect — come hungry and curious.",
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
      "Championing a vibrant, prosperous Downtown and the businesses that make it thrive.",
  },
  {
    name: "Won of Us",
    blurb:
      "Connecting people and ideas to spark innovation across the local community.",
  },
  {
    name: "Sonder Project",
    blurb:
      "Helping businesses and communities grow through practical, people-first innovation.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative isolate px-6 pb-20 pt-16 sm:pt-24">
        {/* soft radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(125,211,252,0.14), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-accent/30 bg-teal-accent/10 px-4 py-1.5 text-sm font-medium text-teal-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-accent" />
            Date: Coming Soon
          </span>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            AI for Downtown Business
          </h1>
          <p className="mt-3 font-heading text-xl font-medium text-teal-accent sm:text-2xl">
            Networking, Innovation &amp; Growth
          </p>

          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
            Practical AI for your business — plus the people building it in San
            Diego.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4">
            <a
              href="#signup"
              className="inline-flex items-center justify-center rounded-lg bg-teal-accent px-8 py-3.5 text-base font-semibold text-navy-deep shadow-lg shadow-teal-accent/20 transition hover:bg-white"
            >
              Reserve Your Spot
            </a>
            <p className="text-sm text-slate-400">
              Date &amp; venue announced soon. Sign up to be notified first.
            </p>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            A collaboration between Downtown San Diego Partnership, Won of Us
            &amp; Sonder Project.
          </p>
        </div>
      </section>

      {/* ──────────────────── What You'll Learn ──────────────────── */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading
              eyebrow="What you'll learn"
              title="Real takeaways you can use Monday morning"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {LEARN_ITEMS.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 60}
                className={
                  // make the last (5th) item span full width on 2-col layouts
                  i === LEARN_ITEMS.length - 1 ? "sm:col-span-2" : ""
                }
              >
                <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-navy-card p-6 transition hover:border-teal-accent/40">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-accent/15 font-heading text-base font-semibold text-teal-accent">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-slate-300">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── What to Expect ───────────────────── */}
      <section className="bg-navy-deep px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading
              eyebrow="What to expect"
              title="An evening built for connection and ideas"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EXPECT_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-card p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-accent/15">
                    <svg
                      className="h-5 w-5 text-teal-accent"
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
                  <h3 className="mt-4 font-heading text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-300">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── Who Should Attend ──────────────────── */}
      <section className="px-6 py-16 sm:py-20">
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
                  className="rounded-full border border-teal-accent/25 bg-teal-accent/5 px-5 py-2.5 text-sm font-medium text-slate-100"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── Hosted By ───────────────────────── */}
      <section className="bg-navy-deep px-6 py-16 sm:py-20">
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
                <div className="flex h-full flex-col items-center rounded-2xl border border-white/10 bg-navy-card p-8 text-center">
                  {/* Logo placeholder */}
                  <div className="flex h-20 w-full items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.03] px-4 text-xs uppercase tracking-wider text-slate-500">
                    Logo
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                    {host.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{host.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Signup ───────────────────────── */}
      <section id="signup" className="scroll-mt-8 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="text-center">
              <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
                Reserve your spot
              </h2>
              <p className="mx-auto mt-4 max-w-md text-slate-300">
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
      <footer className="border-t border-white/10 bg-navy-deep px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-xl font-semibold text-teal-accent">
            Space is limited.
          </p>
          <p className="mt-4 text-sm text-slate-300">
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
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-accent">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-heading text-3xl font-semibold text-white sm:text-4xl ${
          centered ? "mx-auto max-w-2xl" : "max-w-2xl"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
