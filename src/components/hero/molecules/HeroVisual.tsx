import React from 'react';

interface HeroVisualProps {
  imageSrc: string;
  alt: string;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ imageSrc, alt }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 lg:p-0">
      {/* 装饰性光晕 (可选) */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" /> */}
      
      <img 
        src={imageSrc} 
        alt={alt} 
        className="w-full max-w-lg h-auto object-contain rounded-xl shadow-2xl transform transition-transform hover:scale-105 duration-500"
      />
    </div>
  );
};