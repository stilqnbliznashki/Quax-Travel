import { Star } from "lucide-react";

export function RatingStars({ rating, reviewCount }: { rating: number; reviewCount?: number }) {
  return (
    <div className="flex items-center gap-1">
      <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
      <span className="text-sm font-medium text-neutral-900">{rating.toFixed(1)}</span>
      {reviewCount !== undefined && (
        <span className="text-sm text-neutral-400">({reviewCount})</span>
      )}
    </div>
  );
}
