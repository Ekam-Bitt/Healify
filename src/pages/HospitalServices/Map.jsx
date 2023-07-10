import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import React, { useEffect, useState } from "react";

export default function Maps() {
  const position = [22.46701, 88.31285];
  return (
    <div className="map" id="map">
      <MapContainer center={position} zoom={36} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>???</Popup>
        </Marker>
      </MapContainer>
      <div />
    </div>
  );
}
