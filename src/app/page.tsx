import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
      <section className="flex-1 relative flex flex-col items-center justify-evenly px-6 py-16 text-center overflow-hidden">
        <Image
          src="/MainSiteLogo.jpeg"
          alt=""
          fill
          priority
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/40 -z-10" />
        <h1 className="font-display text-5xl sm:text-7xl font-bold text-white max-w-2xl relative z-10">
          Better trips start here
        </h1>
        <p className="text-white max-w-xl mx-auto text-xl relative z-10">
          Find the best attractions, restaurants, and places to stay, all on one map.
        </p>
        <Link
          href="/destinations"
          className="px-10 py-4 rounded-full bg-primary-600 text-white font-medium text-lg hover:bg-blue-700 transition-colors relative z-10"
        >
          Explore here
        </Link>
      </section>
  );
}
