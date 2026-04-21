"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/** Component to lazy-play video only when visible in viewport */
function WorkVideo({ src, isActive }: { src: string; isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      });
    }, { threshold: 0.2 });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <video 
      ref={videoRef}
      src={src} 
      loop muted playsInline preload="metadata"
      className={`w-full h-full max-h-[40vh] lg:max-h-[55vh] object-contain transition-all duration-1000 ${isActive ? 'grayscale-0 opacity-100' : 'grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100'}`} 
    />
  );
}

export default function Work() {
  const container = useRef(null);
  const [activeWork, setActiveWork] = useState<number | null>(null);
  const { t } = useLanguage();

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

  const works: Array<{ title: string; category: string; img?: string; video?: string }> = [
    {
      title: "EC Agência",
      category: t("Web Design . Desenvolvimento", "Web Design . Development"),
      video: "/video/ec%20group.mp4"
    },
    {
      title: "Yogurtea",
      category: t("Redesign . Conteúdo", "Redesign . Content"),
      video: "/video/yogurtea.mp4"
    },
    {
      title: "Casa Norte Studio",
      category: t("Estratégia . Web Design", "Strategy . Web Design"),
      video: "/video/Casa%20Norte%20Estudio.mp4"
    },
    {
      title: "Oceano Saúde",
      category: t("Desenvolvimento . SEO", "Development . SEO"),
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section ref={container} id="trabalho" className="relative py-24 md:py-48 bg-[#EFECE6] text-[#121110] transition-colors duration-1000 overflow-hidden">
       
       {/* Section Header */}
       <div className="px-6 md:px-[60px] max-w-[1600px] mx-auto mb-20 md:mb-32">
         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#121110]/10 pb-12">
           <h2 className="font-serif text-[60px] md:text-[100px] lg:text-[130px] leading-[0.8] tracking-[-0.04em] text-[#121110]">
              {t("Os Nossos", "Our")}<br/><span className="italic text-[#C5A059]">{t("Projetos.", "Projects.")}</span>
            </h2>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#121110]/50 max-w-[200px] text-left md:text-right">
              {t("Trabalhos que mostram a diferença que fazemos.", "Work that shows the difference we make.")}
            </p>
         </div>
       </div>

       {/* The Editorial List Layout */}
       <div className="w-full border-b border-[#121110]/10">
         {works.map((work, i) => {
           const isEven = i % 2 === 0;
           const isActive = activeWork === i;

           return (
             <div 
               key={i} 
               onClick={() => setActiveWork(isActive ? null : i)}
               className={`work-row-anim group relative border-t border-[#121110]/10 transition-colors duration-500 cursor-pointer touch-manipulation ${isActive ? 'bg-[#121110]/[0.05]' : 'hover:bg-[#121110]/[0.02]'}`}
             >
                <div className="max-w-[1600px] mx-auto px-6 md:px-[60px] py-16 md:py-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                   
                   {/* Metadata */}
                   <div className={`w-full lg:w-1/5 flex flex-col gap-2 ${isEven ? 'lg:order-1' : 'lg:order-3'}`}>
                     <span className={`font-mono text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-500 ${isActive ? 'text-[#C5A059]' : 'text-[#C5A059]/50 group-hover:text-[#C5A059]'}`}>0{i+1}</span>
                     <span className="font-sans text-[12px] uppercase tracking-[0.2em] text-[#121110]/60 mt-2">{work.category}</span>
                   </div>

                   {/* Editorial Image/Video Frame */}
                   <div className={`w-full lg:w-3/5 relative h-[50vh] lg:h-[70vh] rounded-[2px] ${isEven ? 'lg:order-2' : 'lg:order-2'} ${work.video ? '' : 'overflow-hidden'}`}>
                     {work.video ? (
                       <div className={`absolute inset-0 flex items-center justify-center transition-colors duration-1000 rounded-[2px] p-4 sm:p-8 lg:p-12 ${isActive ? 'bg-[#121110]/10' : 'bg-[#121110]/5 group-hover:bg-[#121110]/10'}`}>
                         <div className={`relative flex items-center justify-center h-full w-full`}>
                           <div className={`relative overflow-hidden rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] border-2 border-[#121110]/5 bg-[#121110] ${isActive ? 'scale-100' : 'scale-[0.96] group-hover:scale-100'}`}>
                             <WorkVideo src={work.video} isActive={isActive} />
                           </div>
                         </div>
                       </div>
                     ) : (
                       <>
                         <img 
                           src={work.img} 
                           className={`work-parallax-img absolute top-[-15%] left-0 w-full h-[130%] object-cover transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] ${isActive ? 'grayscale-0 opacity-100 scale-[1.03]' : 'grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03]'}`} 
                           alt={work.title} 
                           loading="lazy"
                         />
                         <div className={`absolute inset-0 transition-colors duration-500 mix-blend-color-burn pointer-events-none ${isActive ? 'bg-[#C5A059]/10' : 'bg-[#C5A059]/0 group-hover:bg-[#C5A059]/10'}`}></div>
                       </>
                     )}
                   </div>

                   {/* Giant overlapping Title */}
                   <div className={`w-full lg:w-1/5 flex flex-col justify-center ${isEven ? 'lg:order-3' : 'lg:order-1'} relative z-10 mt-8 lg:mt-0`}>
                      <h3 className={`font-serif text-[clamp(40px,10vw,48px)] sm:text-[60px] lg:text-[7vw] leading-[0.85] tracking-[-0.02em] transition-all duration-500 text-[#121110] ${isActive ? 'italic' : 'group-hover:italic'} ${isEven ? 'lg:-ml-32 text-left' : 'lg:-mr-32 text-right'}`}>
                        {work.title.split(' ').map((word, idx) => (
                           <span key={idx} className="block">{word}</span>
                        ))}
                      </h3>
                      <div className={`mt-12 hidden lg:flex w-16 h-16 rounded-full border border-[#121110]/20 items-center justify-center transition-all duration-500 shadow-xl ${isActive ? 'bg-[#C5A059] border-[#C5A059] text-white' : 'group-hover:bg-[#C5A059] group-hover:border-[#C5A059] group-hover:text-white'} ${isEven ? 'self-start' : 'self-end'}`}>
                        <ArrowUpRight size={24} className={`transform transition-transform duration-500 ${isActive ? 'rotate-45' : 'group-hover:rotate-45'}`} />
                      </div>
                       <div className={`lg:hidden mt-6 flex items-center text-[10px] uppercase font-bold tracking-[0.2em] transition-colors ${isActive ? 'text-[#121110]' : 'text-[#C5A059] group-hover:text-[#121110]'}`}>
                          {t("Ver Projeto", "View Project")} <ArrowUpRight size={14} className="ml-2" />
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
