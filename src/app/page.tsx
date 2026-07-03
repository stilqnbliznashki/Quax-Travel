import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col">
      <section className="flex-1 bg-orange-500 flex flex-col items-center justify-evenly px-6 py-16 text-center">
        <h1 className="font-display text-5xl sm:text-7xl font-bold text-white max-w-2xl">
          Better trips start here
        </h1>
        <p className="text-white max-w-xl mx-auto text-xl">
          Find the best attractions, restaurants, and places to stay, all on one map.
        </p>
        <Link
          href="/destinations"
          className="px-10 py-4 rounded-full bg-primary-600 text-white font-medium text-lg hover:bg-blue-700 transition-colors"
        >
          Explore here
        </Link>
      </section>
    </main>
  );
}
