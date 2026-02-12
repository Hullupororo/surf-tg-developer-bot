
import React, { useEffect, useState } from 'react';
import { ModalProps } from '../types';

const TripModal: React.FC<ModalProps> = ({ isOpen, onClose, trip }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => setIsVisible(true), 10);
    } else {
      document.body.style.overflow = 'auto';
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen || !trip) return null;

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center transition-all duration-500 ${isVisible ? 'bg-black/90 opacity-100' : 'bg-transparent opacity-0'}`}>
      <div 
        className={`bg-neutral-950 w-full h-full md:h-[90vh] md:w-[90vw] md:max-w-6xl md:rounded-lg overflow-y-auto relative transition-transform duration-700 ease-out ${isVisible ? 'translate-y-0 scale-100' : 'translate-y-20 scale-95'}`}
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-[70] bg-white text-black p-3 rounded-full hover:bg-neutral-200 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column: Images */}
          <div className="h-[400px] lg:h-full sticky top-0">
            <div className="h-full w-full overflow-hidden">
                <img src={trip.imageUrl} className="w-full h-full object-cover" alt={trip.title} />
            </div>
            <div className="absolute bottom-12 left-12">
               <h2 className="font-impact text-8xl leading-none opacity-20">{trip.location.split(',')[0].toUpperCase()}</h2>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="p-8 md:p-16 flex flex-col justify-between">
            <div>
              <span className="text-neutral-500 font-impact text-xl block mb-4">SURF EXPEDITION</span>
              <h1 className="font-impact text-6xl md:text-7xl mb-6">{trip.title}</h1>
              <div className="flex gap-6 mb-8 border-b border-neutral-800 pb-8">
                <div>
                   <span className="block text-xs text-neutral-500 uppercase font-bold tracking-widest mb-1">Duration</span>
                   <span className="font-impact text-2xl">{trip.duration}</span>
                </div>
                <div>
                   <span className="block text-xs text-neutral-500 uppercase font-bold tracking-widest mb-1">Level</span>
                   <span className="font-impact text-2xl">{trip.level}</span>
                </div>
                <div>
                   <span className="block text-xs text-neutral-500 uppercase font-bold tracking-widest mb-1">From</span>
                   <span className="font-impact text-2xl text-emerald-400">{trip.price}</span>
                </div>
              </div>

              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                {trip.description}
              </p>

              <div className="mb-12">
                <h4 className="font-impact text-xl mb-4">WHAT'S INCLUDED</h4>
                <div className="grid grid-cols-2 gap-4">
                  {trip.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-neutral-300">
                      <div className="w-1.5 h-1.5 bg-white"></div>
                      <span className="text-sm uppercase font-bold tracking-wider">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 p-8 border border-neutral-800">
              <h4 className="font-impact text-2xl mb-6">RESERVE YOUR SPOT</h4>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Booking submitted (Mock)'); }}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="FULL NAME" className="bg-neutral-800 border-none p-4 font-impact text-lg focus:ring-1 ring-white" required />
                  <input type="email" placeholder="EMAIL ADDRESS" className="bg-neutral-800 border-none p-4 font-impact text-lg focus:ring-1 ring-white" required />
                </div>
                <button type="submit" className="w-full bg-white text-black py-4 font-impact text-xl hover:bg-neutral-200 transition-colors">
                  REQUEST BOOKING
                </button>
                <p className="text-neutral-500 text-xs text-center font-bold tracking-widest">NO PAYMENT REQUIRED UNTIL CONFIRMATION</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripModal;
