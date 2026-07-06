"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Heart, User, ShoppingCart, X } from "lucide-react";
import { useCart } from "@/src/context/CartContext";
const NAV_LINKS = [
  { href: "/destinations", label: "Explore" },
  { href: "/deals", label: "Deals" },
  { href: "/dashboard/favorites", label: "Saved" },
];

export function Navbar() 
{
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const { totalCount } = useCart();

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (searchValue.trim()) 
    {
      router.push(`/destinations?search=${encodeURIComponent(searchValue.trim())}`);
      setSearchOpen(false);
      setSearchValue("");
    }
  }
   return (
    <header className="hidden lg:block sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/placeholder.png" alt="Iter logo" width={140} height={40} priority />
        </Link>
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-primary-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {searchOpen ? 
          (
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
              <input
                autoFocus
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search destinations..."
                className="border border-neutral-200 rounded-full px-4 py-1.5 text-sm w-56 focus:outline-none focus:border-primary-500"
              />
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search" className="p-2 rounded-full hover:bg-neutral-100">
                <X className="w-4 h-4 text-neutral-600" />
              </button>
            </form>
          ) : 
          (
            <button onClick={() => setSearchOpen(true)} aria-label="Search" className="p-2 rounded-full hover:bg-neutral-100">
              <Search className="w-5 h-5 text-neutral-600" />
            </button>
          )}

          <Link href="/dashboard/favorites" aria-label="Favorites" className="p-2 rounded-full hover:bg-neutral-100">
            <Heart className="w-5 h-5 text-neutral-600" />
          </Link>

          <Link href="/cart" aria-label="Cart" className="relative p-2 rounded-full hover:bg-neutral-100">
            <ShoppingCart className="w-5 h-5 text-neutral-600" />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalCount}
              </span>
            )}
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
