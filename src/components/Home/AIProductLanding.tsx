import Link from "next/link";

const tools = [
  {
    number: "01",
    category: "Writing",
    title: "Content writing",
    description: "Turn a blank page into a polished first draft.",
    href: "/ai-examples/content-writing-tool",
    color: "#8199ff",
    size: "md:col-span-7",
  },
  {
    number: "02",
    category: "Strategy",
    title: "Business names",
    description: "Find a name that gives your next idea a point of view.",
    href: "/ai-examples/business-name-generator",
    color: "#d0a6ff",
    size: "md:col-span-5",
  },
  {
    number: "03",
    category: "Products",
    title: "Product names",
    description: "Explore memorable names for products and launches.",
    href: "/ai-examples/product-name-generator",
    color: "#8fd5c2",
    size: "md:col-span-4",
  },
  {
    number: "04",
    category: "Editorial",
    title: "Article titles",
    description: "Give your next article a sharper opening line.",
    href: "/ai-examples/article-title-generator",
    color: "#f0b887",
    size: "md:col-span-4",
  },
  {
    number: "05",
    category: "Data",
    title: "Spreadsheets",
    description: "Shape rough instructions into useful spreadsheet output.",
    href: "/ai-examples/spreadsheet-generator",
    color: "#a9c5ff",
    size: "md:col-span-4",
  },
  {
    number: "06",
    category: "Interviewing",
    title: "Interview questions",
    description: "Prepare thoughtful questions for the conversation ahead.",
    href: "/ai-examples/interview-question-generator",
    color: "#e9a7c7",
    size: "md:col-span-4",
  },
];

const platformFeatures = [
  {
    number: "01",
    title: "A real AI foundation",
    description:
      "Start with an OpenAI integration and working examples, not a collection of empty screens.",
  },
  {
    number: "02",
    title: "Product essentials included",
    description:
      "Authentication, database wiring, and a content-ready blog help move your product forward.",
  },
  {
    number: "03",
    title: "Built for your next step",
    description:
      "A Next.js and TypeScript codebase gives you a clear foundation to customize and grow.",
  },
];

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-white/45">
          <span className="h-px w-8 bg-white/20" />
          {eyebrow}
        </div>
        <h2 className="mt-5 text-3xl font-medium leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}{" "}
          <span className="font-serif font-normal italic text-white/65">
            {accent}
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function AIProductLanding() {
  return (
    <main
      data-slot="ai-product-landing"
      className="overflow-hidden bg-[#0a0a0b] text-[#f5f5f5]"
    >
      <section
        id="home"
        className="relative flex min-h-[min(920px,100svh)] scroll-mt-24 flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-32 text-center sm:px-8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 20%, rgba(81, 93, 150, 0.2), transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(54, 72, 120, 0.12), transparent 45%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[68%] opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "linear-gradient(to bottom, black, transparent 88%)",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-white/60 sm:text-xs">
            <span className="size-1.5 rounded-full bg-[#9cb7e5] shadow-[0_0_12px_#9cb7e5]" />
            Your AI product launchpad
          </span>
          <h1
            className="max-w-5xl font-medium leading-[0.98] tracking-[-0.055em] text-white"
            style={{ fontSize: "clamp(2rem, 9vw, 6.5rem)" }}
          >
            Big ideas,
            <br />
            meet{" "}
            <span className="font-serif font-normal italic">momentum.</span>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            Build and launch AI-powered products with a production-ready
            foundation, practical examples, and the essentials already in place.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/ai-examples"
              className="group inline-flex items-center gap-2 rounded-full bg-[#f3f3f0] px-6 py-3 text-sm font-medium text-[#111113] transition hover:bg-white"
            >
              Explore AI tools
              <ArrowUpRight />
            </Link>
            <Link
              href="/docs"
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/75 transition hover:border-white/30 hover:bg-white/[0.04] hover:text-white"
            >
              Read the docs
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-16 w-full max-w-4xl text-left sm:mt-20">
          <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#101012]/90 shadow-[0_40px_140px_rgba(0,0,0,.5)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-white/20" />
                <span className="size-2 rounded-full bg-white/20" />
                <span className="size-2 rounded-full bg-white/20" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                AI Tool / Workspace
              </span>
              <span className="hidden text-xs text-white/35 sm:block">
                Your next idea starts here
              </span>
            </div>
            <div className="grid gap-px bg-white/[0.07] sm:grid-cols-3">
              {tools.slice(0, 3).map((tool) => (
                <Link
                  key={tool.number}
                  href={tool.href}
                  className="group relative min-h-40 overflow-hidden bg-[#101012] p-5 transition hover:bg-[#151518] sm:min-h-48 sm:p-7"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -right-10 -top-14 size-36 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
                    style={{ backgroundColor: tool.color }}
                  />
                  <span className="relative text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {tool.category}
                  </span>
                  <span className="relative mt-8 block text-lg font-medium tracking-tight text-white/90 sm:mt-12">
                    {tool.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-5 right-5 text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  >
                    <ArrowUpRight />
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 border-t border-white/[0.08] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <span className="text-xs text-white/45">
                One flexible foundation. Room to make it yours.
              </span>
              <Link
                href="/ai-examples"
                className="text-xs text-white/75 transition hover:text-white"
              >
                Browse all examples <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <a
          href="#tools"
          className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-white/35 transition hover:text-white/65 sm:flex"
        >
          Explore
          <span className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </a>
      </section>

      <section
        id="tools"
        className="scroll-mt-24 border-t border-white/[0.06] bg-[#0a0a0b] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="AI examples"
            title="A good place to"
            accent="begin."
            description="Try focused tools for the everyday work of making something new. Each example is ready to explore and easy to build on."
          />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-12 md:gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.number}
                href={tool.href}
                className={`group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-[22px] border border-white/[0.09] bg-[#101012] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#131316] sm:min-h-72 sm:p-8 ${tool.size}`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full opacity-[0.12] blur-[70px] transition-opacity duration-500 group-hover:opacity-25"
                  style={{ backgroundColor: tool.color }}
                />
                <div className="relative flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                    {tool.number} &nbsp; / &nbsp; {tool.category}
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition group-hover:border-white/25 group-hover:text-white">
                    <ArrowUpRight />
                  </span>
                </div>
                <div className="relative mt-14">
                  <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                    {tool.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/45">
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="features"
        className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="The foundation"
            title="More than a prompt."
            accent="A product."
            description="A thoughtful starting point for the pieces that make an AI idea feel like a real, shippable product."
          />

          <div className="grid gap-3 md:grid-cols-3 md:gap-4">
            {platformFeatures.map((feature) => (
              <article
                key={feature.number}
                className="rounded-[22px] border border-white/[0.09] bg-white/[0.025] p-6 sm:p-8"
              >
                <span className="font-serif text-3xl italic text-white/35">
                  {feature.number}
                </span>
                <h3 className="mt-10 text-lg font-medium text-white/90">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/45">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="scroll-mt-24 border-t border-white/[0.06] px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[28px] border border-white/10 bg-[#101012] px-6 py-16 text-center sm:px-12 sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse at 50% 110%, rgba(102, 125, 183, 0.24), transparent 55%)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/45">
              Make the next move
            </span>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-white sm:text-6xl">
              Start with an idea.
              <br />
              Leave with{" "}
              <span className="font-serif italic text-white/65">
                a launchpad.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
              Explore the examples, find your starting point, and shape the
              foundation around your product.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/ai-examples"
                className="inline-flex items-center gap-2 rounded-full bg-[#f3f3f0] px-6 py-3 text-sm font-medium text-[#111113] transition hover:bg-white"
              >
                Explore AI tools
                <ArrowUpRight />
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/75 transition hover:border-white/30 hover:bg-white/[0.04] hover:text-white"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
