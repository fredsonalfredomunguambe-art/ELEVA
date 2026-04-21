"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/context/LanguageContext";

export default function Team() {
  const container = useRef(null);
  const [activeM, setActiveM] = useState<number | null>(null);
  const { t } = useLanguage();

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>('.team-member').forEach(member => {
      gsap.fromTo(member,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: member, start: 'top 85%' } }
      );
    });
  }, { scope: container });

  const team = [
    { name: "Eduardo", role: t("Estrategista", "Strategist"), img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop", position: "center" },
    { name: "Fredson", role: t("Head de Criação", "Creative Lead"), img: "/fotos/fredson.png", position: "center 20%" },
    { name: "Miguel", role: t("Engenheiro de Software", "Software Engineer"), img: "/fotos/miguel.jpeg", position: "center 15%" }
  ];

  return (
    <section ref={container} id="equipa" className="relative py-24 md:py-48 px-6 md:px-[60px] bg-[#D9D2C5] text-[#0C0C0C] overflow-hidden">
      <div className="absolute top-0 bottom-0 left-[20px] right-[20px] md:left-[60px] md:right-[60px] z-0 grid grid-cols-4 md:grid-cols-12 pointer-events-none opacity-[0.05]">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-[#0C0C0C] h-full hidden md:block"></div>
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24 lg:mb-32 text-center">
          <h2 className="font-serif text-[clamp(40px,8vw,80px)] leading-[0.85] tracking-[-0.04em] mb-8">
            {t("Quem Somos.", "Who We Are.")}
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#0C0C0C]/70 max-w-lg font-light">
            {t(
              "A equipa por detrás da Eleva. Jovens com visão, dedicados a transformar a presença digital de cada cliente com criatividade, estratégia e paixão pelo que fazemos.",
              "The team behind Eleva. Young visionaries dedicated to transforming every client's digital presence with creativity, strategy, and passion for what we do."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {team.map((m, i) => {
            const isActive = activeM === i;
            return (
              <div 
                key={i} 
                onClick={() => setActiveM(isActive ? null : i)}
                className="team-member flex flex-col items-center group cursor-pointer touch-manipulation"
              >
                <div className="w-[85vw] h-[105vw] sm:w-[50vw] sm:h-[65vw] md:w-[260px] md:h-[340px] lg:w-[320px] lg:h-[400px] border border-[#0C0C0C]/10 overflow-hidden rounded-t-full mb-8 relative">
                  <div className={`absolute inset-0 bg-[#C5A059] transition-opacity duration-700 z-10 mix-blend-multiply ${isActive ? 'opacity-10' : 'opacity-0 group-hover:opacity-10'}`}></div>
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    style={{ objectPosition: m.position }}
                    className={`w-full h-full object-cover transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] ${isActive ? 'grayscale-0 scale-[1.05]' : 'grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-[1.05]'}`}
                  />
                </div>
                <h3 className={`font-serif text-[32px] lg:text-[40px] text-[#0C0C0C] transition-all duration-500 ${isActive ? 'italic text-[#C5A059]' : 'group-hover:italic'}`}>{m.name}</h3>
                <p className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-500 ${isActive ? 'text-[#C5A059] tracking-[0.3em]' : 'text-[#0C0C0C]/60'} mt-3 border-b border-[#0C0C0C]/20 pb-1 group-hover:text-[#C5A059]`}>{m.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
