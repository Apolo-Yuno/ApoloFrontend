import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React, { useEffect, useState, useCallback } from 'react';
const containerStyle = {
  width: '100%',
  height: '100%'
};


interface Location {
  lat: number;
  lng: number;
  name?: string;
  icon?: any;
}

interface MapProps {
  locations?: Location[];
}

export default function InteractiveMap({ locations = [] }: MapProps) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBmSX5305EUPHA58uu9DcUOHDXzx3cSSjk"
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);

    const onLoad = useCallback(function callback(mapInstance: google.maps.Map) {
        setMap(mapInstance);
    }, []);

    const onUnmount = useCallback(function callback() {
        setMap(null);
    }, []);

    useEffect(() => {
        if (map && locations.length > 0 && window.google) {
            const bounds = new window.google.maps.LatLngBounds();
            
            locations.forEach((loc) => {
                bounds.extend({ lat: loc.lat, lng: loc.lng });
            });

            map.fitBounds(bounds);
            
            if (locations.length === 1) {
                const listener = google.maps.event.addListener(map, "idle", () => { 
                    map.setZoom(12); 
                    google.maps.event.removeListener(listener); 
                });
            }
        }
    }, [map, locations]);
    
    if (!isLoaded) return <div className="flex items-center justify-center h-[600px]">Cargando mapa...</div>;
    
    return (
    <div className="p-3 rounded-lg mb-2">
      <div className="relative w-full h-[230px] rounded-lg overflow-hidden">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={locations[0] || {lat: 0, lng: 0}}
          zoom={12}
          onLoad={onLoad}      
          onUnmount={onUnmount}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            zoomControl: false
          }}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={{lat: location.lat, lng: location.lng}}
              title={location.name}
              icon={{
                url: location.icon,
                scaledSize: new window.google.maps.Size(40,40),
                origin: new window.google.maps.Point(0,0),
                anchor: new window.google.maps.Point(20, 20)
            }}
            />
            
          ))}


        </GoogleMap>
      </div>
    </div>
  );

}