// MapComponent.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {

const [latitude,setLatitude] = useState<number | null>();
const [longitude,setLongitude] = useState<number | null>(); 

useEffect(() => {
  try{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {latitude, longitude} = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        }
      )
    }
  }
 
  catch(error){
    console.error("There was an error in fetching the current location",error);
  }
}, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl h-96 rounded-lg shadow-lg overflow-hidden">
        {
          latitude && longitude && 
          <MapContainer
          center={[latitude, longitude]} 
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
        }
    
      </div>
    </div>
  );
};

export default Map;
