import type { MapPlace } from "./Map";

export const markerEvents = new EventTarget();

export type MarkerClickedEvent = CustomEvent<MapPlace>;