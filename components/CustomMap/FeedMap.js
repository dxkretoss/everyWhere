"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";

// Default icons
const houseIcon = new L.Icon({
  iconUrl: "/house.png",
  iconSize: [60, 66],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const buildingIcon = new L.Icon({
  iconUrl: "/building.png",
  iconSize: [60, 66],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

// Worker icon
const workerIcon = new L.Icon({
  iconUrl: "/mapPerson.png",
  iconSize: [60, 66],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export default function FeedMap({ value }) {
  const mapRef = useRef(null);

  // Default markers
  const defaultMarkers = [
    {
      id: 1,
      position: [48.8566, 2.3522], // Paris
      icon: houseIcon,
      popup: "House in Paris",
    },
    {
      id: 2,
      position: [48.8606, 2.3376], // Louvre
      icon: buildingIcon,
      popup: "Musée du Louvre",
    },
    {
      id: 3,
      position: [48.853, 2.3499], // Another spot
      icon: buildingIcon,
      popup: "Notre Dame",
    },
  ];

  // Worker markers (all inside Paris, slightly different spots)
  const workerMarkers = [
    {
      id: "w1",
      position: [48.8566, 2.3522], // Paris center
      icon: workerIcon,
      popup: "Worker near Hôtel de Ville",
    },
    {
      id: "w2",
      position: [48.8606, 2.3376], // Louvre
      icon: workerIcon,
      popup: "Worker near Louvre Museum",
    },
    {
      id: "w3",
      position: [48.8584, 2.2945], // Eiffel Tower
      icon: workerIcon,
      popup: "Worker near Eiffel Tower",
    },
    {
      id: "w4",
      position: [48.8738, 2.295], // Arc de Triomphe
      icon: workerIcon,
      popup: "Worker near Arc de Triomphe",
    },
  ];

  const markers = value === "worker" ? workerMarkers : defaultMarkers;

  return (
    <MapContainer
      center={[48.8566, 2.3522]} // Paris
      zoom={13} // zoomed to city-level
      style={{ height: "100%", width: "100%", borderRadius: "8px" }}
      zoomControl={false}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Render markers */}
      {markers.map((m) => (
        <Marker key={m.id} position={m.position} icon={m.icon}>
          <Popup>{m.popup}</Popup>
        </Marker>
      ))}

      <ZoomControl position="topright" />
    </MapContainer>
  );
}
