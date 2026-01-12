import { Users, BedDouble, Bath, Bed } from "lucide-react";

interface QuickStatsProps {
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

export function QuickStats({
  guests,
  bedrooms,
  beds,
  bathrooms,
}: QuickStatsProps) {
  const stats = [
    { icon: Users, value: guests, label: "guests" },
    { icon: BedDouble, value: bedrooms, label: "bedrooms" },
    { icon: Bed, value: beds, label: "beds" },
    {
      icon: Bath,
      value: bathrooms,
      label: bathrooms === 1 ? "bathroom" : "bathrooms",
    },
  ];

  return (
    <div className="flex items-center gap-5 py-3 text-[13px] text-gray-600">
      {stats.map((stat, index) => (
        <div key={stat.label} className="flex items-center gap-1.5">
          <stat.icon className="h-[15px] w-[15px]" />
          <span>
            {stat.value} {stat.label}
          </span>
          {index < stats.length - 1 && (
            <span className="ml-5 text-gray-300">·</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function QuickStatsMobile({
  guests,
  bedrooms,
  beds,
  bathrooms,
}: QuickStatsProps) {
  return (
    <div className="flex items-center justify-center gap-2 py-3 text-sm text-muted-foreground flex-wrap">
      <span>{guests} guests</span>
      <span className="text-muted-foreground/50">·</span>
      <span>{bedrooms} bedrooms</span>
      <span className="text-muted-foreground/50">·</span>
      <span>{beds} beds</span>
      <span className="text-muted-foreground/50">·</span>
      <span>{bathrooms} bath</span>
    </div>
  );
}
