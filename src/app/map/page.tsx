"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { TravelMap, type MapPlace } from "@/components/Map";
import { markerEvents, type MarkerClickedEvent } from "@/components/markerEvents";
import { MapSelection } from "./MapSelection";

markerEvents.addEventListener("marker-clicked", ((event: MarkerClickedEvent) => {
  const markerInfo = event.detail;
  console.log("Marker clicked:", markerInfo);
}) as EventListener);


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
  const [selectedPlace, setSelectedPlace] = useState<MapPlace | null>(null);

  useEffect(() => {
    function handleMarkerClick(event: Event) {
      const markerEvent = event as MarkerClickedEvent;
      console.log("Marker clicked:", markerEvent.detail);
      setSelectedPlace(markerEvent.detail);
    }

    markerEvents.addEventListener("marker-clicked", handleMarkerClick);

    return () => {
      markerEvents.removeEventListener("marker-clicked", handleMarkerClick);
    };
  }, []);

  return (
    <AppShell>
      <section className="mx-auto grid w-full max-w-6xl gap-5 overflow-x-hidden px-3 py-6 sm:px-5 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:py-10">
        <div className="min-w-0">
          <h1 className="text-3xl font-bold sm:text-4xl">Map</h1>
          <div className="mt-4 max-w-full overflow-hidden rounded-lg border border-[#ded5c7] bg-[#fffaf2] p-1.5 sm:mt-5 sm:p-2">
            <TravelMap places={samplePlaces} onPlaceClick={setSelectedPlace} />
          </div>
        </div>

        <aside className="rounded-lg border border-[#ded5c7] bg-[#fffaf2] p-5 shadow-sm lg:sticky lg:top-24">
          {
            selectedPlace ? 
            (
            <MapSelection place={selectedPlace}>
            </MapSelection>) : (<>
              <h2 className="text-xl font-bold">No place selected</h2>
              <p className="mt-2 text-sm leading-6 text-[#526158]">
                Click on a marker to see details about a place.
              </p>
            </>)
          }
        </aside>

        <div className="rounded-lg border border-dashed border-[#ded5c7] bg-[#fffaf2]/60 p-5 lg:col-span-2">
          <h2 className="text-xl font-bold">Nearby places</h2>
          <p className="mt-2 text-sm leading-6 text-[#526158]">
            This section can later show selected places, filters, or route details.
          </p>
        </div>
      </section>
    </AppShell>
  );
}

