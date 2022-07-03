import { useState, useRef, useCallback } from "react";

const DEVIATION = 0.0002;

export default function useMap() {
  const mapRef = useRef(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleNavigateToPoint = useCallback(
    (id, lat, long, zoom = 18.5) => {
      if (mapRef) {
        mapRef.current.animateCamera(
          {
            center: {
              latitude: lat - DEVIATION,
              longitude: long,
            },
            zoom,
          },
          500
        );
      }
      setSelectedMarker(id);
    },
    [mapRef, setSelectedMarker]
  );

  return {
    mapRef,
    selectedMarker,
    handleNavigateToPoint,
  };
}
