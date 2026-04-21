"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Superior Preloader Animation
    tl.to(".preloader-text", { y: 0, duration: 1, ease: "expo.out", delay: 0.2 })
      .to(".preloader-text", { y: -100, opacity: 0, duration: 0.8, ease: "expo.in", delay: 0.4 })
      .to(document.querySelector(".preloader-overlay"), { 
        opacity: 0, 
        autoAlpha: 0, 
        duration: 1.2, 
        ease: "power4.inOut" 
      }, "-=0.2")
      // Spectacular Hero Entrance
      .fromTo(".hero-image-wrap",
        { scale: 1.2, opacity: 0, y: 100 },
        { scale: 1, opacity: 1, y: 0, duration: 1.8, ease: "expo.out" }, "-=0.8")
      .fromTo(".hero-char",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.05, ease: "power4.out" }, "-=1.2")
      .fromTo(".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: "power2.out" }, "-=1")
      .fromTo(document.querySelectorAll(".nav-item"),
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }, "-=1.4");

    // Scroll Parallax for Hero Image
    gsap.to(".hero-image", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Continuous rotation for spin text
    gsap.to(gsap.utils.toArray('.spin-text'), {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1
    });

    // Continuous breathing effect for the hero image
    gsap.to(".hero-image", {
      scale: 1.15,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Magnetic interaction - optimized for performance
    const magnets = gsap.utils.toArray('.magnetic-btn') as HTMLElement[];
    magnets.forEach((btn) => {
      btn.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.8, ease: "power3.out" });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
      });
    });
  }, { scope: container });

  const title = "ELEVA.".split("");

  return (
    <section ref={container} className="relative min-h-[100svh] w-full flex flex-col items-center justify-center px-6 pt-24 pb-12 md:pb-20 bg-[#C5A059] overflow-hidden rounded-b-[40px] md:rounded-b-[80px] z-20">

      {/* Background massive typography - perfectly centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.08] z-0">
        <span className="font-serif text-[45vw] leading-none whitespace-nowrap text-[#121110]">ELEVA</span>
      </div>

      {/* Central Architectural Image Cutout - sized for all viewports */}
      <div className="hero-image-wrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] h-[60svh] md:h-[65svh] overflow-hidden rounded-t-full border border-[#121110]/10 z-10 bg-[#EFECE6] shadow-2xl shadow-black/20">
        <img
          src="/fotos/hero imagem.jpeg"
          alt="Eleva Hero"
          className="hero-image w-[120%] h-[120%] object-cover object-center absolute -top-[10%] -left-[10%] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#C5A059] via-transparent to-transparent opacity-80"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full max-w-[1700px] h-full flex flex-col justify-between items-center text-center py-12">

        <div className="mt-8 md:mt-16 invisible md:visible"></div>

        <h1 className="font-serif text-[clamp(80px,22vw,350px)] lg:text-[14vw] leading-[0.75] tracking-[-0.03em] flex flex-wrap justify-center overflow-hidden mix-blend-color-burn text-[#121110] pointer-events-none mt-16 md:mt-24">
          {title.map((char, i) => (
            <span key={i} className="hero-char inline-block px-[0.01em]" style={{ transformOrigin: "bottom center" }}>
              {char}
            </span>
          ))}
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full mt-auto pt-16 gap-12 md:gap-0 relative z-30">
          
          {/* Spacer to balance layout on desktop */}
          <div className="hidden md:block w-1/3"></div>

          {/* Central Call to Action */}
          <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
            <a href="#contacto" className="hero-sub flex w-28 h-28 md:w-36 md:h-36 rounded-full items-center justify-center text-[#121110] relative group cursor-pointer touch-manipulation">
              {/* Elegant curved textbadge */}
              <div className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-[1.5s] ease-out group-hover:rotate-180">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path id="curve" d="M 20, 50 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" fill="none" />
                  <text className="text-[7.5px] uppercase font-mono tracking-[0.25em] fill-[#121110]/80">
                    <textPath href="#curve" startOffset="0%">
                      {t(
                        "• DESCUBRA O NOSSO TRABALHO • DESCUBRA O NOSSO TRABALHO",
                        "• DISCOVER OUR WORK • DISCOVER OUR WORK"
                      )}
                    </textPath>
                  </text>
                </svg>
              </div>
              
              {/* Floating button core */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#121110]/20 flex items-center justify-center bg-[#EFECE6]/40 backdrop-blur-md group-hover:bg-[#121110] group-hover:text-[#C5A059] group-active:scale-90 transition-all duration-500 z-10 shadow-lg">
                <ArrowDown size={24} strokeWidth={1} className="group-hover:translate-y-1 transition-transform duration-500" />
              </div>
            </a>
          </div>

          {/* Value Proposition */}
          <div className="hero-sub flex flex-col items-center md:items-end text-center md:text-right w-full md:w-1/3 order-2 md:order-3">
            <div className="flex items-center md:flex-row-reverse gap-3 mb-4">
              <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#121110]/60 font-medium">
                {t("O Que Fazemos", "What We Do")}
              </span>
              <div className="w-6 h-[1px] bg-[#121110]/30 hidden md:block"></div>
            </div>
            <div className="text-[11px] md:text-[12px] leading-[1.8] text-[#121110]/90 uppercase tracking-[0.1em] max-w-[300px] px-4 md:px-0">
              {t("Sites profissionais", "Professional websites")} <br className="hidden md:block"/>
              {t("e presença digital forte,", "and a strong digital presence,")} <br className="hidden md:block"/>
              {t("tudo pensado para fazer crescer", "all designed to grow")} <br className="hidden md:block"/>
              <span className="text-[#121110] font-serif italic normal-case text-[18px] md:text-[22px] block mt-1">
                {t("o seu negócio.", "your business.")}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
