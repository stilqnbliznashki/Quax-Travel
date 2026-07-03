"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/hotels", label: "Hotels" },
  { href: "/restaurants", label: "Restaurants" },
  { href: "/attractions", label: "Attractions" },
  { href: "/offers", label: "Offers" },
  { href: "/map", label: "Map" },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#17211c]">
      <header className="sticky top-0 z-50 border-b border-[#ded5c7] bg-[#fffaf2]/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-xl font-bold tracking-[0]"
              onClick={() => setIsMenuOpen(false)}
            >
              Quax Travel
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#ded5c7] text-[#304238] transition hover:bg-[#e7f0dc] md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="flex w-5 flex-col gap-1.5">
                <span className="h-0.5 rounded-full bg-current" />
                <span className="h-0.5 rounded-full bg-current" />
                <span className="h-0.5 rounded-full bg-current" />
              </span>
            </button>

            <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-3 py-2 transition ${
                      isActive
                        ? "bg-[#17211c] text-white"
                        : "text-[#304238] hover:bg-[#e7f0dc]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {isMenuOpen ? (
            <nav className="mt-4 grid gap-2 border-t border-[#ded5c7] pt-4 text-sm font-medium md:hidden">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-md px-3 py-3 transition ${
                      isActive
                        ? "bg-[#17211c] text-white"
                        : "text-[#304238] hover:bg-[#e7f0dc]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          ) : null}
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
