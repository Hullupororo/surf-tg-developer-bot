
import React from 'react';
import { SurfTrip } from '../types';

interface TripCardProps {
  trip: SurfTrip;
  onClick: (trip: SurfTrip) => void;
}

const TripCard: React.FC<TripCardProps> = ({ trip, onClick }) => {
  return (
    <div 
      onClick={() => onClick(trip)}
      className="group relative h-[600px] w-full overflow-hidden cursor-pointer bg-neutral-900"
    >
      <img 
        src={trip.imageUrl} 
        alt={trip.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="overflow-hidden">
          <p className="text-sm font-bold tracking-widest text-neutral-300 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
            {trip.location.toUpperCase()}
          </p>
          <h3 className="font-impact text-5xl md:text-6xl mb-4 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500 delay-75">
            {trip.title}
          </h3>
        </div>
        
        <div className="flex items-center gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
          <span className="px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest">{trip.level}</span>
          <span className="text-sm font-bold tracking-widest text-neutral-200">{trip.duration}</span>
        </div>

        <div className="mt-8 flex items-center gap-2 group/btn">
          <div className="w-10 h-[1px] bg-white group-hover/btn:w-20 transition-all duration-500"></div>
          <span className="font-impact text-lg uppercase">Explore Trip</span>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
