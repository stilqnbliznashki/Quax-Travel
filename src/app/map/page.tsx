import { AppShell } from "@/components/AppShell";
import { TravelMap, type MapPlace } from "@/components/Map";

const samplePlaces: MapPlace[] = [
  {
    id: "1",
    name: "Example Hotel",
    category: "hotel",
    latitude: 42.6977,
    longitude: 23.3219,
    description: "Temporary marker for testing.",
  },
  {
    id: "2",
    name: "Example Restaurant",
    category: "restaurant",
    latitude: 42.695,
    longitude: 23.325,
    description: "This can later come from Supabase.",
  },
];

export default function MapPage() {
  return (
    <AppShell>
      <section className="mx-auto max-w-6xl px-5 py-12">
        <h1 className="text-4xl font-bold">Map</h1>
        <div className="mt-6">
          <TravelMap places={samplePlaces} />
        </div>
      </section>
    </AppShell>
  );
}