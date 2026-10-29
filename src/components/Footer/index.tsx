import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo/logo.svg";

const linkGroups = [
  {
    title: "Explore",
    links: [
      { title: "AI tools", href: "/ai-examples" },
      { title: "Platform", href: "/#features" },
      { title: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Documentation", href: "/docs" },
      { title: "Blog", href: "/blog" },
      { title: "About", href: "/about" },
    ],
  },
  {
    title: "Account",
    links: [
      { title: "Sign in", href: "/auth/signin" },
      { title: "Create account", href: "/auth/signup" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.07] bg-[#0a0a0b]">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))] lg:gap-10">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex">
              <Image src={logo} alt="AI Tool" width={137} height={30} />
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/45">
              A flexible Next.js foundation for building and launching
              AI-powered products.
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
          <span>AI Tool. All rights reserved.</span>
          <span>Built for what comes next.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
