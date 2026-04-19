import React from "react";

export default function GridOverlay() {
  return (
    <div className="absolute top-0 bottom-0 left-[20px] right-[20px] md:left-[60px] md:right-[60px] z-0 grid grid-cols-4 md:grid-cols-12 pointer-events-none opacity-30">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="border-r border-[#F2F0ED]/10 h-full hidden md:block"></div>
      ))}
      {[...Array(4)].map((_, i) => (
        <div key={`mob-${i}`} className="border-r border-[#F2F0ED]/10 h-full md:hidden"></div>
      ))}
    </div>
  );
}
