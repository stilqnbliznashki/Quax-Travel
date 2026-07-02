import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/hotels", label: "Hotels" },
  { href: "/restaurants", label: "Restaurants" },
  { href: "/attractions", label: "Attractions" },
  { href: "/offers", label: "Offers" },
  { href: "/map", label: "Map" }
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#17211c]">
      <header className="border-b border-[#ded5c7] bg-[#fffaf2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="text-xl font-bold tracking-[0]">
            Quax Travel
          </Link>
          <nav className="flex flex-wrap gap-2 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-[#304238] transition hover:bg-[#e7f0dc]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
