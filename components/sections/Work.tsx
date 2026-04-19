"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

export default function Work() {
  const container = useRef(null);

  useGSAP(() => {
    // Reveal List Rows
    gsap.utils.toArray<HTMLElement>('.work-row-anim').forEach((row) => {
      gsap.fromTo(row,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: row, start: 'top 90%' } }
      );
    });

    // Parallax on images inside list
    gsap.utils.toArray<HTMLElement>('.work-parallax-img').forEach(img => {
       gsap.to(img, {
         yPercent: 20,
         ease: "none",
         scrollTrigger: {
           trigger: img.parentElement,
           start: "top bottom",
           end: "bottom top",
           scrub: true
         }
       });
    });

  }, { scope: container });

  const works = [
    {
      title: "Arquitetura H&M",
      category: "Web Design . Desenvolvimento",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Finanças Alpha",
      category: "Redesign . Conteúdo",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      title: "Consultora Strat",
      category: "Estratégia . Web Design",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
    },
    {
      title: "Oceano Saúde",
      category: "Desenvolvimento . SEO",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section ref={container} id="trabalho" className="relative py-24 md:py-48 bg-[#EFECE6] text-[#121110] transition-colors duration-1000 overflow-hidden">
       
       {/* Section Header */}
       <div className="px-6 md:px-[60px] max-w-[1600px] mx-auto mb-20 md:mb-32">
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#121110]/10 pb-12">
           <h2 className="font-serif text-[60px] md:text-[100px] lg:text-[130px] leading-[0.8] tracking-[-0.04em] text-[#121110]">
              Os Nossos<br/><span className="italic text-[#C5A059]">Projetos.</span>
            </h2>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#121110]/50 max-w-[200px] text-left md:text-right">
              Trabalhos que mostram a diferença que fazemos.
            </p>
         </div>
       </div>

       {/* The Editorial List Layout */}
       <div className="w-full border-b border-[#121110]/10">
         {works.map((work, i) => {
           const isEven = i % 2 === 0;
           return (
             <div key={i} className="work-row-anim group relative border-t border-[#121110]/10 hover:bg-[#121110]/[0.02] transition-colors duration-500 cursor-pointer">
                <div className="max-w-[1600px] mx-auto px-6 md:px-[60px] py-16 md:py-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                   
                   {/* Metadata */}
                   <div className={`w-full lg:w-1/5 flex flex-col gap-2 ${isEven ? 'lg:order-1' : 'lg:order-3'}`}>
                     <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-[0.3em] font-bold">0{i+1}</span>
                     <span className="font-sans text-[12px] uppercase tracking-[0.2em] text-[#121110]/60 mt-2">{work.category}</span>
                   </div>

                   {/* Editorial Image Frame */}
                   <div className={`w-full lg:w-3/5 relative overflow-hidden h-[50vh] lg:h-[70vh] rounded-[2px] ${isEven ? 'lg:order-2' : 'lg:order-2'}`}>
                     <img 
                       src={work.img} 
                       className="work-parallax-img absolute top-[-15%] left-0 w-full h-[130%] object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]" 
                       alt={work.title} 
                       loading="lazy"
                     />
                     <div className="absolute inset-0 bg-[#C5A059]/0 group-hover:bg-[#C5A059]/10 transition-colors duration-500 mix-blend-color-burn pointer-events-none"></div>
                   </div>

                   {/* Giant overlapping Title */}
                   <div className={`w-full lg:w-1/5 flex flex-col justify-center ${isEven ? 'lg:order-3' : 'lg:order-1'} relative z-10 mt-8 lg:mt-0`}>
                      <h3 className={`font-serif text-[40px] sm:text-[60px] lg:text-[7vw] leading-[0.85] tracking-[-0.02em] group-hover:italic transition-all duration-500 text-[#121110] ${isEven ? 'lg:-ml-32 text-left' : 'lg:-mr-32 text-right'}`}>
                        {work.title.split(' ').map((word, idx) => (
                           <span key={idx} className="block">{word}</span>
                        ))}
                      </h3>
                      <div className={`mt-12 hidden lg:flex w-16 h-16 rounded-full border border-[#121110]/20 items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] group-hover:text-white transition-all duration-500 shadow-xl ${isEven ? 'self-start' : 'self-end'}`}>
                        <ArrowUpRight size={24} className="transform group-hover:rotate-45 transition-transform duration-500" />
                      </div>
                       <div className="lg:hidden mt-6 flex items-center text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A059] group-hover:text-[#121110]">
                          Ver Projeto <ArrowUpRight size={14} className="ml-2" />
                       </div>
                   </div>

                </div>
             </div>
           );
         })}
       </div>
    </section>
  );
}
