
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 pointer-events-none">
        <div className="pointer-events-auto">
          <a href="/" className="font-impact text-2xl tracking-tighter hover:opacity-80 transition-opacity">
            THE SURF PROJECT
          </a>
        </div>
        
        <div className="pointer-events-auto">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white text-black px-4 py-2 flex items-center gap-4 hover:bg-neutral-200 transition-colors"
          >
            <div className="flex flex-col gap-1 w-6">
              <span className={`h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
            <span className="font-impact text-lg">{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-700 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full flex flex-col md:flex-row items-center justify-center gap-12 p-12">
           <div className="flex flex-col space-y-4 text-center md:text-left">
              <span className="text-neutral-500 font-impact text-xl">01</span>
              <a href="#" className="font-impact text-6xl md:text-8xl hover:text-neutral-400 transition-colors">HOME</a>
              <span className="text-neutral-500 font-impact text-xl mt-8">02</span>
              <a href="#" className="font-impact text-6xl md:text-8xl hover:text-neutral-400 transition-colors">PROJECTS</a>
              <span className="text-neutral-500 font-impact text-xl mt-8">03</span>
              <a href="#" className="font-impact text-6xl md:text-8xl hover:text-neutral-400 transition-colors">ABOUT</a>
           </div>
           
           <div className="hidden md:block w-px h-64 bg-neutral-800"></div>

           <div className="flex flex-col items-center md:items-start space-y-6">
              <div className="w-48 h-64 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-500">
                <img src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Surf culture" />
              </div>
              <div className="flex gap-6 font-impact text-xl text-neutral-400">
                <a href="#" className="hover:text-white">INSTAGRAM</a>
                <a href="#" className="hover:text-white">TWITTER</a>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
