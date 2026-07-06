"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Map, Tag, Heart, User } from "lucide-react";

const TABS = [
  { href: "/", label: "Home", icon: Heart },
  { href: "/destinations", label: "Map", icon: Map },
  { href: "/deals", label: "Deals", icon: Tag },
  { href: "/dashboard/favorites", label: "Saved", icon: Heart },
  { href: "/dashboard", label: "Profile", icon: User },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-100 flex justify-around items-center h-16">
      {TABS.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center gap-1 min-w-11 min-h-11 px-2 ${
              active ? "text-primary-600" : "text-neutral-400"
            }`}
          >
            <Icon className="w-5 h-5" strokeWidth={active ? 2.5 : 2} />
            <span className="text-[11px] font-medium">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
