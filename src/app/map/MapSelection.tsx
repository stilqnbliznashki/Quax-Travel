import { type MapPlace } from "@/components/Map";

export function MapSelection({ place }: { place: MapPlace }) {
  return (
    <div className="space-y-5">
      <div>
        <span className="inline-flex rounded-md bg-[#e7f0dc] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0] text-[#31543d]">
          {place.category}
        </span>
        <h2 className="mt-3 text-2xl font-bold leading-tight text-[#17211c]">
          {place.name}
        </h2>
        {place.description ? (
          <p className="mt-3 text-sm leading-6 text-[#526158]">
            {place.description}
          </p>
        ) : null}
      </div>

      <dl className="grid gap-3 rounded-lg border border-[#ded5c7] bg-[#f7f3ec] p-4 text-sm">
        <div>
          <dt className="font-semibold text-[#526158]">Latitude</dt>
          <dd className="mt-1 font-medium text-[#17211c]">
            {place.latitude.toFixed(4)}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-[#526158]">Longitude</dt>
          <dd className="mt-1 font-medium text-[#17211c]">
            {place.longitude.toFixed(4)}
          </dd>
        </div>
      </dl>

      <button
        type="button"
        className="w-full rounded-md bg-[#17211c] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#31543d]"
      >
        View details
      </button>
    </div>
  );
}
