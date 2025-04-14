"use client";

import React from "react";

const MarqueeBar: React.FC = () => {
  const text =
    "Free Shipping on Orders Over $50 · New Arrivals In Stock · Shop Now";

  return (
    <div className="w-full bg-black py-2">
      <div className="overflow-hidden whitespace-nowrap relative">
        <div className="animate-marquee inline-block">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-white text-sm mx-4 uppercase tracking-wider"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBar;
