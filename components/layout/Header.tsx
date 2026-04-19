"use client";
import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.8,
        ease: "power4.out",
      });
      gsap.fromTo(".mobile-nav-item", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.3 }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.8,
        ease: "power4.in",
      });
    }
  }, { dependencies: [isOpen] });

  const navItems = ["Manifesto", "Serviços", "Trabalho", "Processo", "FAQ", "Contacto"];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-[60px] py-6 md:py-[40px] flex justify-between items-center mix-blend-difference text-white">
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="nav-item font-serif text-[24px] font-bold tracking-[-1px] hover:italic transition-all cursor-pointer hover:scale-105 active:scale-95 origin-left"
      >
        Eleva.
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-[40px] text-[10px] uppercase tracking-[0.2em] font-semibold">
        {navItems.map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="nav-item hover:opacity-100 opacity-60 transition-all relative group flex flex-col items-center hover:scale-105 active:scale-95"
          >
            <span>{item}</span>
            <div className="absolute -bottom-2 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-out"></div>
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div 
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center space-x-2 cursor-pointer group active:scale-95"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] group-hover:tracking-[0.2em] transition-all duration-300">Menu</span>
        <Menu size={16} />
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        ref={menuRef}
        className="fixed inset-0 w-full h-screen bg-[#121110] z-[60] flex flex-col items-center justify-center p-12 translate-x-full md:hidden"
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-white hover:text-[#C5A059] transition-colors p-2"
        >
          <X size={32} strokeWidth={1} />
        </button>

        <div className="flex flex-col items-center space-y-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="mobile-nav-item font-serif text-[40px] md:text-[60px] text-white hover:italic hover:text-[#C5A059] transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="absolute bottom-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2">Social</p>
          <div className="flex space-x-6 text-[12px] uppercase tracking-[0.1em]">
            <a href="#" className="hover:text-[#C5A059]">Instagram</a>
            <a href="#" className="hover:text-[#C5A059]">LinkedIn</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
