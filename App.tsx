import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TripCard from './components/TripCard';
import TripModal from './components/TripModal';
import { SURF_TRIPS } from './constants';
import { SurfTrip } from './types';

const App: React.FC = () => {
  const [selectedTrip, setSelectedTrip] = useState<SurfTrip | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTripClick = (trip: SurfTrip) => {
    setSelectedTrip(trip);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-40" 
            alt="Hero Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h2 className="text-neutral-400 font-impact text-xl md:text-2xl mb-4 tracking-[0.2em] animate-pulse">
            BEYOND THE BREAK
          </h2>
          <h1 className="font-impact text-8xl md:text-[12rem] leading-none mb-8 tracking-tighter text-green-500">
            LE SURF <br />
            <span className="text-green-500">SOLIDAIRE</span>
          </h1>
          <p className="max-w-xl mx-auto text-neutral-400 text-lg md:text-xl font-medium mb-12 italic">
            "Curating the world's most immersive surf expeditions for the conscious traveler."
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button 
              onClick={() => document.getElementById('trips')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black font-impact text-2xl px-12 py-4 hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95"
            >
              EXPLORE TRIPS
            </button>
            <div className="flex items-center gap-4 text-white/50 group cursor-pointer hover:text-white transition-colors">
              <span className="font-impact text-xl">WATCH FILM</span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
          <span className="font-impact text-xs tracking-widest vertical-rl">SCROLL</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-impact text-5xl md:text-7xl mb-8 leading-tight">
              A RADICAL <br /> APPROACH TO <br /> DISCOVERY.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-neutral-400 text-xl leading-relaxed">
              The Surf Project is more than a travel agency. It's a collective of wanderers and wave-hunters dedicated to sustainable exploration. We don't just take you to the beach; we immerse you in the culture that surrounds it.
            </p>
            <p className="text-neutral-400 text-xl leading-relaxed">
              From the heavy swells of the Atlantic to the spiritual warmth of the Indian Ocean, our expeditions are designed to challenge your limits and broaden your horizons.
            </p>
            <div className="pt-8">
              <a href="#" className="font-impact text-2xl border-b-2 border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-all">
                OUR MANIFESTO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trips Grid */}
      <section id="trips" className="py-20">
        <div className="flex justify-between items-end px-6 md:px-12 mb-16">
          <h2 className="font-impact text-6xl md:text-8xl">CURRENT <br /> MISSIONS</h2>
          <div className="hidden md:block">
            <span className="font-impact text-xl text-neutral-500 uppercase">Worldwide / 2024-25 Season</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SURF_TRIPS.map(trip => (
            <TripCard key={trip.id} trip={trip} onClick={handleTripClick} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-40 px-6 md:px-12 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-impact text-5xl md:text-8xl mb-8">JOIN THE TRIBE.</h3>
          <p className="text-neutral-400 text-xl mb-12 font-bold tracking-widest uppercase">GET EARLY ACCESS TO NEW EXPEDITIONS AND OFF-GRID LOCATIONS.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-1 bg-black border-none p-6 font-impact text-2xl focus:ring-1 ring-white"
            />
            <button className="bg-white text-black font-impact text-2xl px-12 py-6 hover:bg-neutral-200 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-neutral-900">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h4 className="font-impact text-4xl mb-6">THE SURF PROJECT</h4>
            <p className="text-neutral-500 max-w-xs font-bold tracking-widest uppercase text-xs">
              ORGANISATION À BUT NON LUCRATIF ENGAGÉE POUR L'AVENIR DU SURF.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <span className="font-impact text-xl text-neutral-600">LINKS</span>
              <a href="#" className="font-impact text-lg hover:text-neutral-400">HOME</a>
              <a href="#" className="font-impact text-lg hover:text-neutral-400">TRIPS</a>
              <a href="#" className="font-impact text-lg hover:text-neutral-400">STORY</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-impact text-xl text-neutral-600">SOCIAL</span>
              <a href="#" className="font-impact text-lg hover:text-neutral-400">INSTAGRAM</a>
              <a href="#" className="font-impact text-lg hover:text-neutral-400">FACEBOOK</a>
              <a href="#" className="font-impact text-lg hover:text-neutral-400">VIMEO</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-impact text-xl text-neutral-600">LEGAL</span>
              <a href="#" className="font-impact text-lg hover:text-neutral-400 text-xs">PRIVACY POLICY</a>
              <a href="#" className="font-impact text-lg hover:text-neutral-400 text-xs">TERMS OF USE</a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-12 border-t border-neutral-900 flex justify-between items-center text-neutral-600 font-impact tracking-widest text-sm">
          <span>© 2024 THE SURF PROJECT</span>
          <span>MADE FOR THE WILD</span>
        </div>
      </footer>

      {/* Donate Button Float */}
      <div className="fixed bottom-0 right-0 z-30 m-6 hidden md:block">
        <button className="bg-black text-white px-8 py-4 font-impact text-xl border border-neutral-800 hover:bg-white hover:text-black transition-all origin-bottom-right -rotate-90 translate-x-[calc(50%-2rem)] translate-y-[-50%] uppercase">
          Support The Project
        </button>
      </div>

      <TripModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        trip={selectedTrip} 
      />
    </div>
  );
};

export default App;
