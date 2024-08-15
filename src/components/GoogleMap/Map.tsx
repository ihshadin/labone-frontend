"use client";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Libraries,
} from "@react-google-maps/api";
import { useMemo } from "react";

const center = { lat: 23.970489927980527, lng: 90.26691204836276 };

function Maps() {
  const googleMapsApiOptions = useMemo(
    () => ({
      googleMapsApiKey: ""!,
      libraries: ["places", "drawing", "geometry"] as Libraries,
    }),
    [],
  );

  const { isLoaded } = useJsApiLoader(googleMapsApiOptions);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "400px" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default Maps;
