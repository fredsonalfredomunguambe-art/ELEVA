"use client";
import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { X, Menu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { lang, toggleLanguage, t } = useLanguage();

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

  const navItems = [
    { pt: "Manifesto", en: "Manifesto" },
    { pt: "Serviços", en: "Services" },
    { pt: "Trabalho", en: "Work" },
    { pt: "Processo", en: "Process" },
    { pt: "FAQ", en: "FAQ" },
    { pt: "Contacto", en: "Contact" },
  ];

  // Anchors always use the Portuguese IDs
  const navAnchors = ["manifesto", "serviços", "trabalho", "processo", "faq", "contacto"];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-[60px] py-6 md:py-[40px] flex justify-between items-center mix-blend-difference text-white">
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="nav-item font-serif text-[24px] font-bold tracking-[-1px] hover:italic transition-all cursor-pointer hover:scale-105 active:scale-95 origin-left"
      >
        Eleva.
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-[40px] text-[10px] uppercase tracking-[0.2em] font-semibold">
        {navItems.map((item, idx) => (
          <a 
            key={item.pt} 
            href={`#${navAnchors[idx]}`} 
            className="nav-item hover:opacity-100 opacity-60 transition-all relative group flex flex-col items-center hover:scale-105 active:scale-95"
          >
            <span>{lang === "pt" ? item.pt : item.en}</span>
            <div className="absolute -bottom-2 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 ease-out"></div>
          </a>
        ))}

        {/* Language Toggle Button — Desktop */}
        <button
          id="lang-toggle-desktop"
          onClick={toggleLanguage}
          className="nav-item relative flex items-center gap-[6px] ml-4 px-[14px] py-[7px] rounded-full border border-white/20 hover:border-white/60 transition-all duration-500 cursor-pointer group hover:scale-105 active:scale-95"
          aria-label="Toggle language"
        >
          <span className={`text-[10px] font-bold tracking-[0.15em] transition-all duration-400 ${lang === "pt" ? "opacity-100" : "opacity-40"}`}>PT</span>
          <div className="relative w-[28px] h-[14px] rounded-full bg-white/10 border border-white/20 overflow-hidden">
            <div 
              className="absolute top-[1.5px] w-[9px] h-[9px] rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.4)] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
              style={{ left: lang === "pt" ? "2px" : "15px" }}
            />
          </div>
          <span className={`text-[10px] font-bold tracking-[0.15em] transition-all duration-400 ${lang === "en" ? "opacity-100" : "opacity-40"}`}>EN</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-3">
        {/* Language Toggle — Mobile (compact) */}
        <button
          id="lang-toggle-mobile"
          onClick={toggleLanguage}
          className="nav-item flex items-center gap-1 px-[10px] py-[5px] rounded-full border border-white/20 hover:border-white/50 transition-all duration-300 cursor-pointer active:scale-90"
          aria-label="Toggle language"
        >
          <span className={`text-[9px] font-bold tracking-[0.1em] transition-all duration-300 ${lang === "pt" ? "opacity-100" : "opacity-30"}`}>PT</span>
          <div className="relative w-[22px] h-[12px] rounded-full bg-white/10 border border-white/15">
            <div
              className="absolute top-[1px] w-[8px] h-[8px] rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.3)] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
              style={{ left: lang === "pt" ? "1.5px" : "11px" }}
            />
          </div>
          <span className={`text-[9px] font-bold tracking-[0.1em] transition-all duration-300 ${lang === "en" ? "opacity-100" : "opacity-30"}`}>EN</span>
        </button>

        <div 
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 cursor-pointer group active:scale-95"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] group-hover:tracking-[0.2em] transition-all duration-300">Menu</span>
          <Menu size={16} />
        </div>
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
          {navItems.map((item, idx) => (
            <a 
              key={item.pt} 
              href={`#${navAnchors[idx]}`}
              onClick={() => setIsOpen(false)}
              className="mobile-nav-item font-serif text-[40px] md:text-[60px] text-white hover:italic hover:text-[#C5A059] transition-all"
            >
              {lang === "pt" ? item.pt : item.en}
            </a>
          ))}
        </div>

        {/* Mobile overlay lang toggle */}
        <div className="absolute bottom-24 flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 hover:border-[#C5A059]/60 transition-all duration-500 active:scale-90"
          >
            <span className={`text-[12px] font-bold tracking-[0.2em] transition-all duration-400 ${lang === "pt" ? "text-[#C5A059]" : "text-white/40"}`}>PT</span>
            <div className="relative w-[32px] h-[16px] rounded-full bg-white/10 border border-white/20">
              <div
                className="absolute top-[2px] w-[10px] h-[10px] rounded-full bg-[#C5A059] shadow-[0_0_8px_rgba(197,160,89,0.5)] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
                style={{ left: lang === "pt" ? "3px" : "17px" }}
              />
            </div>
            <span className={`text-[12px] font-bold tracking-[0.2em] transition-all duration-400 ${lang === "en" ? "text-[#C5A059]" : "text-white/40"}`}>EN</span>
          </button>
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
