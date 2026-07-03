import Link from "next/link";

const FOOTER_LINKS = {
  Explore: [
    { href: "/destinations", label: "Destinations" },
    { href: "/offers", label: "Offers" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/partners", label: "Partners" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="hidden lg:block bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-4 gap-8">
        <div>
          <p className="font-display text-lg text-white mb-2">Iter</p>
          <p className="text-lg text-white">Better trips start here.</p>
        </div>
        {Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section}>
            <p className="text-sm font-bold text-neutral-100 mb-3">{section}</p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white hover:text-orange-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-black py-4 text-center text-xs text-white">
        © {new Date().getFullYear()} Iter. All rights are reserved.
      </div>
    </footer>
  );
}
