"use client";

import { useEffect, useRef } from "react";
import { MapPin, Utensils, Landmark, Bike, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NearbyPlace } from "@/lib/sanity/types";

interface LocationSectionProps {
  location: string;
  areaDescription?: string;
  nearbyPlaces?: NearbyPlace[];
  coordinates?: { lat: number; lng: number };
}

const placeTypeIcons: Record<string, React.ElementType> = {
  restaurant: Utensils,
  attraction: Landmark,
  activity: Bike,
  grocery: Store,
};

export function LocationSectionNew({
  location,
  areaDescription,
  nearbyPlaces = [],
  coordinates,
}: LocationSectionProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  // Group nearby places by type
  const restaurants = nearbyPlaces.filter((p) => p.type === "restaurant");
  const attractions = nearbyPlaces.filter(
    (p) => p.type === "attraction" || p.type === "activity",
  );

  // Initialize Mapbox map
  useEffect(() => {
    if (!coordinates || !mapRef.current) return;

    const loadMapbox = async () => {
      if ((window as any).mapboxgl) {
        initMap((window as any).mapboxgl);
        return;
      }

      const link = document.createElement("link");
      link.href = "https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src = "https://api.mapbox.com/mapbox-gl-js/v3.0.1/mapbox-gl.js";
      script.onload = () => initMap((window as any).mapboxgl);
      document.head.appendChild(script);
    };

    const initMap = (mapboxgl: any) => {
      if (!mapRef.current || !coordinates) return;

      const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

      if (!token) {
        const staticUrl = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/static/${coordinates.lng},${coordinates.lat},11,0/800x400@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw`;
        mapRef.current.innerHTML = `<img src="${staticUrl}" alt="Map of ${location}" class="w-full h-full object-cover" />`;
        return;
      }

      mapboxgl.accessToken = token;

      const map = new mapboxgl.Map({
        container: mapRef.current,
        style: "mapbox://styles/mapbox/outdoors-v12",
        center: [coordinates.lng, coordinates.lat],
        zoom: 11,
        interactive: true,
      });

      new mapboxgl.Marker({ color: "#000" })
        .setLngLat([coordinates.lng, coordinates.lat])
        .addTo(map);

      map.addControl(new mapboxgl.NavigationControl(), "top-right");
    };

    loadMapbox();
  }, [coordinates, location]);

  return (
    <section className="py-12 border-b border-gray-200" id="location">
      {/* Map */}
      {coordinates && (
        <div className="relative mb-8">
          <div
            ref={mapRef}
            className="w-full h-[300px] lg:h-[350px] rounded-2xl overflow-hidden bg-gray-100"
          />
          {/* Search button overlay */}
          <button className="absolute top-4 left-4 bg-white rounded-full p-2.5 shadow-md hover:shadow-lg transition-shadow">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </div>
      )}

      {/* Nearby places - Two columns */}
      {(restaurants.length > 0 || attractions.length > 0) && (
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          {/* Restaurants column */}
          {restaurants.length > 0 && (
            <div>
              <h3 className="text-[15px] font-semibold text-gray-900 mb-4">
                Restaurants
              </h3>
              <ul className="space-y-3">
                {restaurants.map((place, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Utensils className="h-4 w-4 text-gray-500" />
                    </div>
                    <span className="text-[14px] text-gray-700">
                      {place.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Attractions column */}
          {attractions.length > 0 && (
            <div>
              <h3 className="text-[15px] font-semibold text-gray-900 mb-4">
                Attractions
              </h3>
              <ul className="space-y-3">
                {attractions.map((place, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Landmark className="h-4 w-4 text-gray-500" />
                    </div>
                    <span className="text-[14px] text-gray-700">
                      {place.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Learn more button */}
      <Button
        variant="outline"
        className="mt-8 rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 px-6"
      >
        Learn more about the area
      </Button>
    </section>
  );
}
