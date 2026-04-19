"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const container = useRef(null);

  useGSAP(() => {
    // Parallax text effect in footer
    gsap.fromTo(".footer-giant-text", 
       { yPercent: -50, scale: 0.9, opacity: 0 },
       { yPercent: 0, scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: container.current, start: "top bottom", end: "bottom bottom", scrub: true } }
    );
  }, { scope: container });

  return (
    <footer ref={container} id="contacto" className="relative pt-[160px] pb-[40px] px-6 md:px-[60px] bg-[#121110] overflow-hidden flex flex-col text-left border-t border-[#EFECE6]/10">
      <div className="absolute top-0 bottom-0 left-[20px] right-[20px] md:left-[60px] md:right-[60px] z-0 grid grid-cols-4 md:grid-cols-12 pointer-events-none opacity-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-[#EFECE6]/10 h-full hidden md:block"></div>
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 w-full max-w-[1600px] mx-auto">
        <div className="col-span-12 md:col-span-8 flex flex-col">
           <p className="text-[#C5A059] font-mono text-[11px] uppercase tracking-[0.3em] mb-[30px]">Pronto para dar o próximo passo?</p>
           
           <a href="mailto:hello@eleva.pt" className="group/footer-title">
             <h2 className="footer-giant-text font-serif text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] leading-[0.8] tracking-[-0.04em] mb-12 text-[#EFECE6] transform-origin-top-left transition-all duration-700 group-hover/footer-title:text-[#C5A059] group-hover/footer-title:italic">
               <span className="italic block">Vamos</span>
               Começar.
             </h2>
           </a>
           
           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[30px] mb-12 sm:mb-24 mt-8 w-full">
             <a href="mailto:hello@eleva.pt" className="magnetic-btn bg-[#C5A059] text-[12px] font-bold text-[#121110] uppercase tracking-[0.1em] rounded-[2px] px-[40px] py-[22px] transition-all duration-500 hover:bg-[#EFECE6] hover:scale-105 inline-flex items-center w-full sm:w-auto justify-center">
               Falar Connosco <ArrowUpRight size={16} className="inline ml-2" />
             </a>
             <div className="flex flex-col space-y-2">
               <span className="text-[#EFECE6]/50 font-mono text-[10px] uppercase tracking-[0.2em]">Contacte-nos</span>
               <a href="mailto:hello@eleva.pt" className="text-[#EFECE6] text-[16px] md:text-[20px] font-serif italic border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors">
                 hello@eleva.pt
               </a>
             </div>
           </div>
        </div>

        <div className="col-span-12 md:col-span-4 flex md:justify-end items-end pb-24 md:pb-0">
           <div className="border border-[#EFECE6]/10 p-6 md:p-8 bg-[#121110]/50 backdrop-blur-md max-w-[300px]">
             <div className="flex items-center gap-2 mb-4">
               <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></div>
               <span className="text-[10px] font-bold text-[#EFECE6] uppercase tracking-[0.2em]">Agência Disponível</span>
             </div>
             <p className="font-light text-[#EFECE6]/70 text-[14px] leading-relaxed">
               Aceitamos apenas um número restrito de projetos por mês para garantir o mais alto nível qualitativo e foco.
             </p>
           </div>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-[10px] text-[#EFECE6]/40 uppercase tracking-[0.1em] border-t border-[#EFECE6]/10 pt-[40px] text-left z-10 items-center">
        <p className="order-3 md:order-1 mt-4 md:mt-0 text-center md:text-left">2026 © ELEVA Studio. Todos os Direitos Reservados.</p>
        <div className="order-1 md:order-2 md:text-center text-[#C5A059] flex items-center justify-center md:justify-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#EFECE6] transition-colors">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#EFECE6] transition-colors">Behance</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#EFECE6] transition-colors">LinkedIn</a>
        </div>
        <div className="order-2 md:order-3 text-center md:text-right">
          Otimizado para Resultados
        </div>
      </div>
    </footer>
  );
}
