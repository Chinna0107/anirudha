import React, { useState, useRef } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    let clientX = 0;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      if ((e as React.MouseEvent).buttons !== 1 && e.type !== 'mousedown') return;
      clientX = (e as React.MouseEvent).clientX;
    }
    
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative select-none border border-slate-200">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] md:aspect-[16/9] cursor-ew-resize group"
        onMouseMove={handleMove}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMove}
        onMouseDown={handleMove}
        style={{ touchAction: 'none' }}
      >
        {/* Background / After Image (Full width) */}
        <img 
          src={afterImage} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        />
        <div className="absolute bottom-4 right-4 bg-brand-primary/90 backdrop-blur-md text-white px-4 py-2 rounded-xl font-display text-xs md:text-sm font-bold shadow-lg z-0 transition-opacity group-hover:opacity-100">
          {afterLabel}
        </div>

        {/* Foreground / Before Image (Clipped) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={beforeImage} 
            alt="Before" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-brand-primary px-4 py-2 rounded-xl font-display text-xs md:text-sm font-bold shadow-lg z-0 transition-opacity group-hover:opacity-100">
            {beforeLabel}
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 pointer-events-none transition-all duration-75"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white transition-transform group-hover:scale-110">
            <MoveHorizontal className="w-5 h-5 md:w-7 md:h-7 text-brand-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
