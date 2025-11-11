"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageCarouselProps {
  images: { src: string; alt?: string }[];
}
const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length);
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length);
  }, [length]);

  const resetAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 4000);
  }, [nextSlide]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[350px] sm:h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 pointer-events-none z-10"></div>

      {images.map((img, index) => {
        const isActive = index === current;
        const isPrev = index === (current - 1 + length) % length;
        const isNext = index === (current + 1) % length;

        let transform = "translateX(0) scale(0.8)";
        let zIndex = 0;
        let opacity = 0;

        if (isActive) {
          transform = "translateX(0) scale(1)";
          zIndex = 30;
          opacity = 1;
        } else if (isPrev) {
          transform = "translateX(-70%) scale(0.85)";
          zIndex = 20;
          opacity = 0.6;
        } else if (isNext) {
          transform = "translateX(70%) scale(0.85)";
          zIndex = 20;
          opacity = 0.6;
        }

        return (
          <div
            key={index}
            className={`absolute transition-all duration-700 ease-in-out overflow-hidden 
                ${isActive ? "rounded-lg shadow-2xl shadow-yellow-900/30" : "rounded-xl"} 
                ${isActive ? "w-[85%] sm:w-[80%] max-w-[600px] sm:max-w-[500px] h-[300px] sm:h-[400px]" : "w-[70%] sm:w-[60%] max-w-[500px] sm:max-w-[400px] h-[250px] sm:h-[300px]"}`}
            style={{
                transform,
                zIndex,
                opacity,
                border: isActive ? "2px solid rgba(255, 215, 0, 0.3)" : "none",
            }}
          >
            <Image
              src={img.src}
              alt={`slide-${index}`}
              fill
              className="w-full h-full object-cover"
            />
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            )}
          </div>
        );
      })}

      {/* Navigation buttons with gold theme */}
      <button
        onClick={() => {
          prevSlide();
          resetAutoSlide();
        }}
        className="absolute left-2 sm:left-0 p-2 sm:p-3 cursor-pointer transition-all duration-300 z-40 hover:scale-110 active:scale-95 shadow-lg shadow-yellow-900/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-yellow-500" />
      </button>

      <button
        onClick={() => {
          nextSlide();
          resetAutoSlide();
        }}
        className="absolute right-2 sm:right-0 p-2 sm:p-3 cursor-pointer transition-all duration-300 z-40 hover:scale-110 active:scale-95 shadow-lg shadow-yellow-900/20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-yellow-500" />
      </button>

      {/* Dot indicators with gold theme */}
      <div className="absolute bottom-10 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              resetAutoSlide();
            }}
            className={`transition-all duration-300 ${
              index === current
                ? "w-8 h-2 bg-gradient-to-r from-yellow-600 to-yellow-400 shadow-lg shadow-yellow-500/50"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
