import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1543857508-3a1373970b4a?q=80&w=2070&auto=format&fit=crop", // Flood/Disaster thematic
      alt: "Banjir Aceh 1"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1599583163359-522db9ee3213?q=80&w=2070&auto=format&fit=crop", // People/Aid
      alt: "Banjir Aceh 2"
    },
    {
       id: 3,
       image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop", // Storm/Rain
       alt: "Banjir Aceh 3"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[800px] bg-gray-900 overflow-hidden group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.alt} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Hero Text Content (Overlay) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
         <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-4 drop-shadow-lg">
            Darurat Bencana Aceh
         </h1>
         <p className="text-xl text-white/90 max-w-2xl font-light">
            Bersama kita pulihkan harapan saudara kita di Aceh yang terdampak banjir bandang.
         </p>
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        <button 
           onClick={prevSlide}
           className="pointer-events-auto p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all text-white border border-white/20 hover:scale-105"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
           onClick={nextSlide}
           className="pointer-events-auto p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all text-white border border-white/20 hover:scale-105"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-32 md:bottom-24 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-brand-red w-8' : 'bg-white/50 hover:bg-white'
                }`}
            />
        ))}
      </div>
    </div>
  );
}
