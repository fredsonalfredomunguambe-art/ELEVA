import React from "react";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-40 px-6 md:px-[60px] py-6 md:py-[40px] flex justify-between items-baseline mix-blend-difference text-white">
      <div className="nav-item font-serif text-[24px] font-bold tracking-[-1px] hover:italic transition-all cursor-pointer hover:scale-105 active:scale-95 origin-left">
        Eleva.
      </div>
      <div className="hidden md:flex space-x-[40px] text-[10px] uppercase tracking-[0.2em] font-semibold">
        {["Fundamentos", "Serviços", "Trabalho", "Processo", "Contacto"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="nav-item hover:opacity-100 opacity-60 transition-all relative group flex flex-col items-center hover:scale-105 active:scale-95">
            <span>{item}</span>
            <div className="absolute -bottom-2 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-out"></div>
          </a>
        ))}
      </div>
      <div className="md:hidden font-mono text-[10px] uppercase tracking-[0.1em] text-white hover:text-[#C5A059] transition-colors cursor-pointer group active:scale-95">
        <span className="group-hover:tracking-[0.2em] transition-all duration-300">Menu</span>
      </div>
    </nav>
  );
}
