"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialIcons } from "@/components/ui/social-icons";

const navigation = [
  { label: "Education", href: "/Resume#education" },
  { label: "Certifications", href: "/Resume#certifications" },
  { label: "Resume", href: "/Resume" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] flex justify-center px-3 pt-4 sm:px-4 sm:pt-6">
      <nav
        aria-label="Main navigation"
        className="flex w-full max-w-max items-center gap-1 rounded-full border border-white/10 bg-[#111113]/85 p-1.5 shadow-lg shadow-black/20 backdrop-blur-xl"
      >
        <Link
          href="/"
          aria-label="Introduction"
          className="group relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#a5bde8] to-[#5076ae] text-[11px] font-semibold tracking-[-0.08em] text-[#0b0c10] transition-transform hover:scale-105"
        >
          TB
        </Link>

        <span
          aria-hidden="true"
          className="mx-1 hidden h-5 w-px bg-white/10 sm:block"
        />

        <div className="flex items-center gap-0.5">
          {navigation.map((item, index) => {
            const isActive =
              (item.href === "/Resume" && pathname === "/Resume");
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`rounded-full px-2.5 py-2 text-[11px] transition-colors sm:px-3.5 sm:text-xs ${
                  index > 1 || index === 1 ? "hidden sm:block" : ""
                } ${
                  isActive
                    ? "bg-white/[0.08] text-white"
                    : "text-white/55 hover:bg-white/[0.06] hover:text-white/90"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <span
          aria-hidden="true"
          className="mx-1 hidden h-5 w-px bg-white/10 sm:block"
        />

        <SocialIcons />
      </nav>
    </header>
  );
};

export default Header;
