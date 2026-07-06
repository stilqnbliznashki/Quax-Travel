import Link from "next/link";
import Image from "next/image";
import { Search, Heart, User } from "lucide-react";
const NAV_LINKS = [
  { href: "/attractions", label: "Explore" },
  { href: "/offers", label: "Offers" },
  { href: "/restaurants", label: "Restaurants" },
  { href: "/hotels", label: "Hotels" },
  { href: "/map", label: "Map" }
];

export function Navbar() {
  return (
<header className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
  <Image
    src="/placeholder.png"
    alt="Iter logo"
    width={100}
    height={100}
    priority
  />
</Link>
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-black hover:text-orange-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="p-2 rounded-full hover:bg-neutral-100">
            <Search className="w-5 h-5 text-neutral-600" />
          </button>
          <Link href="/dashboard/favorites" aria-label="Favorites" className="p-2 rounded-full hover:bg-neutral-100">
            <Heart className="w-5 h-5 text-neutral-600" />
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
          >
            <User className="w-4 h-4" />
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
