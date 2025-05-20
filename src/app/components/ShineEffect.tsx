"use client";

import { useEffect, useRef } from "react";

export default function ShineEffect() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = line.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const percentage = (y / rect.height) * 100;

      const shineElement = line.querySelector(".shine-effect") as HTMLElement;
      if (shineElement) {
        shineElement.style.transform = `translateY(${percentage}%)`;
      }
    };

    line.addEventListener("mousemove", handleMouseMove);
    return () => line.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={lineRef}
      className="absolute left-[calc(25%-1px)] top-0 bottom-0 w-[2px] bg-white/10 overflow-hidden"
    >
      {/* Main shine effect */}
      <div className="shine-effect absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent transform -translate-y-full transition-transform duration-1000"></div>

      {/* Sprinkles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
