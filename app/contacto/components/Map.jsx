// MapComponent.jsx
import React from "react";
import dynamic from 'next/dynamic';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = L.icon({
  iconUrl: '/logo.png',
  iconSize: [40, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const markerData = {
  coordinates: [25.6751, -100.4584], 
  title: "Del poniente #273, Col. Parque industrial Microempresarios del Pte. Santa Catarina, Nuevo León, 66369, México",
};

function MapComponent() {
  return (
    <MapContainer center={markerData.coordinates} zoom={11} style={{ height: "100%", width: "50vw" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={markerData.coordinates} icon={customIcon}>
        <Popup>{markerData.title}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default dynamic(() => Promise.resolve(MapComponent), { ssr: false });