"use client";

// src/components/MyMapComponent.tsx

import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Button } from "@/components/ui/button"

type LatLng = {
  lat: number;
  lng: number;
};

type MapComponentProps = {
  onLocationSelect: (location: LatLng) => void;
};

const MapComponent: React.FC<MapComponentProps> = ({ onLocationSelect }) => {
  const [mapOpen, setMapOpen] = useState<boolean>(false);
  const [mapLocation, setMapLocation] = useState<LatLng | null>(null);

  const openMap = () => {
    if (mapOpen === false) {
      setMapOpen(true);
      return;
    }
    if (mapOpen === true) {
      setMapOpen(false);
      return;
    }
  };

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const location = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      setMapLocation(location);
      onLocationSelect(location); // Send selected location to the parent component
    }
  };

  return (
    <div>
      <Button onClick={openMap} className="w-full text-white" >{mapOpen ? "Close Map" : "Open Map"}</Button>

      {mapOpen && (
        <div className="w-full h-1/4 mt-10"> 
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
            <GoogleMap
              id="map"
              mapContainerStyle={{ width: "100%", height: "500px" }}
              zoom={10}
              center={{ lat: 7.8731, lng: 80.7718 }} // Default center (Sri Lanka)
              onClick={handleMapClick}
            >
              {mapLocation && (
                <Marker position={mapLocation} title="Selected Location" />
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
