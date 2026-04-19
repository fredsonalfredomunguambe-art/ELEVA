"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GridOverlay from "@/components/ui/GridOverlay";

export default function Team() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>('.team-member').forEach(member => {
      gsap.fromTo(member,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: member, start: 'top 85%' } }
      );
    });
  }, { scope: container });

  const team = [
    { name: "Eduardo", role: "Estrategista", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop", position: "center" },
    { name: "Fredson", role: "Head de Criação", img: "/fotos/fredson.png", position: "center 20%" },
    { name: "Miguel", role: "Engenheiro de Software", img: "/fotos/miguel.jpeg", position: "center 15%" }
  ];

  return (
    <section ref={container} id="equipa" className="relative py-24 md:py-48 px-6 md:px-[60px] bg-[#D9D2C5] text-[#0C0C0C]">
      <div className="absolute top-0 bottom-0 left-[20px] right-[20px] md:left-[60px] md:right-[60px] z-0 grid grid-cols-4 md:grid-cols-12 pointer-events-none opacity-[0.05]">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-[#0C0C0C] h-full hidden md:block"></div>
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-24 lg:mb-32 text-center">
          <h2 className="font-serif text-[50px] md:text-[80px] leading-[0.85] tracking-[-0.04em] mb-8">Quem Somos.</h2>
          <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#0C0C0C]/70 max-w-lg font-light">
            A equipa por detrás da Eleva. Jovens com visão, dedicados a transformar a presença digital de cada cliente com criatividade, estratégia e paixão pelo que fazemos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {team.map((m, i) => (
            <div key={i} className="team-member flex flex-col items-center group">
              <div className="w-[80vw] h-[100vw] sm:w-[50vw] sm:h-[65vw] md:w-[260px] md:h-[340px] lg:w-[320px] lg:h-[400px] border border-[#0C0C0C]/10 overflow-hidden rounded-t-full mb-8 relative">
                <div className="absolute inset-0 bg-[#C5A059] opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-10 mix-blend-multiply"></div>
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  style={{ objectPosition: m.position }}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                />
              </div>
              <h3 className="font-serif text-[32px] lg:text-[40px] text-[#0C0C0C] group-hover:italic transition-all">{m.name}</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0C0C0C]/60 mt-3 border-b border-[#0C0C0C]/20 pb-1">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
