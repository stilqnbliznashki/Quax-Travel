"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import type * as Leaflet from "leaflet";

export type MapPlace = {
  id: string;
  name: string;
  category: "hotel" | "restaurant" | "attraction" | "other";
  latitude: number;
  longitude: number;
  description?: string;
};

type TravelMapProps = {
  places: MapPlace[];
  center?: [number, number];
  zoom?: number;
};

const DEFAULT_CENTER: [number, number] = [42.6977, 23.3219];
const DEFAULT_ZOOM = 12;

function popupHtml(place: MapPlace) {
  return `
    <strong>${place.name}</strong>
    <br />
    ${place.category}
    ${place.description ? `<br />${place.description}` : ""}
  `;
}

export function TravelMap({
  places,
  center = DEFAULT_CENTER,
  zoom = DEFAULT_ZOOM,
}: TravelMapProps) {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const leafletRef = useRef<typeof Leaflet | null>(null);
  const mapRef = useRef<Leaflet.Map | null>(null);
  const markerLayerRef = useRef<Leaflet.LayerGroup | null>(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!mapElementRef.current || mapRef.current) return;

    let disposed = false;

    async function createMap() {
      const L = await import("leaflet");

      if (!mapElementRef.current || mapRef.current || disposed) return;

      leafletRef.current = L;

      const map = L.map(mapElementRef.current).setView(center, zoom);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      markerLayerRef.current = L.layerGroup().addTo(map);
      mapRef.current = map;
      setMapReady(true);
    }

    createMap();

    return () => {
      disposed = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markerLayerRef.current = null;
      leafletRef.current = null;
      setMapReady(false);
    };
  }, [center, zoom]);

  useEffect(() => {
    const L = leafletRef.current;

    if (!mapReady || !L || !mapRef.current || !markerLayerRef.current) return;

    markerLayerRef.current.clearLayers();

    places.forEach((place) => {
      L.marker([place.latitude, place.longitude])
        .bindPopup(popupHtml(place))
        .addTo(markerLayerRef.current!);
    });

    if (places.length > 0) {
      const bounds = L.latLngBounds(
        places.map((place) => [place.latitude, place.longitude])
      );

      mapRef.current.fitBounds(bounds, {
        padding: [32, 32],
        maxZoom: 14,
      });
    }
  }, [mapReady, places]);

  return (
    <div
      ref={mapElementRef}
      className="h-[520px] w-full rounded-lg border border-[#ded5c7]"
    />
  );
}
