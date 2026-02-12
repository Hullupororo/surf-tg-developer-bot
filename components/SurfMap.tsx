import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { SurfTrip } from '../types';

interface SurfMapProps {
  trips: SurfTrip[];
  onTripClick: (trip: SurfTrip) => void;
}

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom surf marker icon
const createSurfIcon = () => {
  return L.divIcon({
    className: 'custom-surf-marker',
    html: `
      <div class="relative">
        <div class="absolute -inset-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div class="relative bg-green-500 rounded-full w-8 h-8 flex items-center justify-center border-4 border-black shadow-lg hover:scale-110 transition-transform cursor-pointer">
          <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

// Component to handle map invalidation after mount
const MapInvalidator: React.FC = () => {
  const map = useMap();
  
  useEffect(() => {
    // Force map to recalculate its size after initial render
    const timer1 = setTimeout(() => {
      map.invalidateSize();
    }, 100);
    
    const timer2 = setTimeout(() => {
      map.invalidateSize();
    }, 300);

    const timer3 = setTimeout(() => {
      map.invalidateSize();
    }, 600);
    
    // Handle window resize
    const handleResize = () => {
      map.invalidateSize();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('resize', handleResize);
    };
  }, [map]);
  
  return null;
};

const SurfMap: React.FC<SurfMapProps> = ({ trips, onTripClick }) => {
  const mapRef = useRef<L.Map | null>(null);

  return (
    <div className="w-full h-[600px] md:h-[700px] relative bg-neutral-900">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
        scrollWheelZoom={true}
        zoomControl={true}
        dragging={true}
        touchZoom={true}
        doubleClickZoom={true}
        boxZoom={true}
        keyboard={true}
        minZoom={2}
        maxZoom={18}
        worldCopyJump={true}
        ref={mapRef}
      >
        <MapInvalidator />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains={['a', 'b', 'c', 'd']}
        />
        
        {trips.map((trip) => (
          <Marker
            key={trip.id}
            position={trip.coordinates}
            icon={createSurfIcon()}
            eventHandlers={{
              click: (e) => {
                // Prevent map from panning to marker
                const map = e.target._map;
                if (map) {
                  // Store current view
                  const currentCenter = map.getCenter();
                  const currentZoom = map.getZoom();
                  
                  // Trigger modal
                  onTripClick(trip);
                  
                  // Restore view immediately to prevent any panning
                  setTimeout(() => {
                    map.setView(currentCenter, currentZoom, { animate: false });
                  }, 0);
                }
              },
            }}
          >
            <Popup 
              className="custom-popup"
              autoPan={false}
              autoClose={false}
              closeOnClick={false}
            >
              <div className="bg-black text-white p-4 min-w-[250px]">
                <h3 className="font-impact text-2xl mb-2">{trip.title}</h3>
                <p className="text-neutral-400 text-sm mb-3">{trip.location}</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs bg-green-500 text-black px-2 py-1 font-bold">{trip.level}</span>
                  <span className="text-sm font-bold">{trip.duration}</span>
                </div>
                <p className="text-neutral-300 text-sm mb-4 line-clamp-2">{trip.description}</p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onTripClick(trip);
                  }}
                  className="w-full bg-white text-black py-2 font-impact text-sm hover:bg-neutral-200 transition-colors"
                >
                  VIEW DETAILS
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Map Legend */}
      <div className="absolute bottom-6 left-6 z-[1000] bg-black/90 backdrop-blur-sm p-4 border border-neutral-800">
        <h4 className="font-impact text-lg mb-3">SURF DESTINATIONS</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-neutral-400">Click pins to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurfMap;
