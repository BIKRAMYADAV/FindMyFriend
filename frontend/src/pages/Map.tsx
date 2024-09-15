// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl h-96 rounded-lg shadow-lg overflow-hidden">
        <MapContainer
          center={[20.2376, 84.2700]} 
          zoom={13}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* The attribution is required while using open street maps */}
          <Marker position={[20.2376, 84.2700]}>
            <Popup>
             Friend 1
            </Popup>
          </Marker>
         

        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
