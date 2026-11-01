import Image from "next/image";
import Link from "next/link";

const linkGroups = [
  {
    title: "Explore",
    links: [
      { title: "Education", href: "/Resume#education" },
      { title: "Certifications", href: "/Resume#certifications" },
      { title: "Resume", href: "/Resume" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "AI Contact Agent", href: "/blog" },
      { title: "About", href: "/about" },
    ],
  },
  {
    title: "Social",
    links: [
      {title: "GitHub", href: "https://github.com/Travisdb1"},
      {title: "Linkedin", href:"https://linkedin.com/in/travis-burke-868323293"}
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.07] bg-[#0a0a0b]">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-4 lg:grid-cols-[minmax(0,0.1fr)_repeat(3,minmax(0,0.2fr))] lg:gap-9">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/logo/travis-burke.jpg"
                alt="Travis Burke"
                width={100}
                height={235}
                className="h-[230px] w-[200px]"
              />
            </Link>
            <p className="mt-3 text-sm leading-7 text-white/45">
             The Uniform May Be Gone, but the Mission to Serve Continues.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/75">
                {group.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/45 transition hover:text-white/90"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.07] pt-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>TB. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
