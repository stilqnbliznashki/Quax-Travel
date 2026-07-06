"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Map, Tag, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/src/context/CartContext";

const TABS = [
  { href: "/", label: "Home", icon: Compass },
  { href: "/destinations", label: "Explore", icon: Map },
  { href: "/deals", label: "Deals", icon: Tag },
  { href: "/cart", label: "Cart", icon: ShoppingCart, badge: true },
  { href: "/dashboard", label: "Profile", icon: User },
];

export function MobileNav() {
  const pathname = usePathname();
  const { totalCount } = useCart();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-100 flex justify-around items-center h-16">
      {TABS.map(({ href, label, icon: Icon, badge }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`relative flex flex-col items-center justify-center gap-1 min-w-11 min-h-11 px-2 ${
              active ? "text-primary-600" : "text-neutral-400"
            }`}
          >
            <Icon className="w-5 h-5" strokeWidth={active ? 2.5 : 2} />
            {badge && totalCount > 0 && (
              <span className="absolute top-0 right-1 bg-accent-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {totalCount}
              </span>
            )}
            <span className="text-[11px] font-medium">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
