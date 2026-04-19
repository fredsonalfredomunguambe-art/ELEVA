"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Superior Preloader Animation (Cassie Evans style)
    tl.to(".preloader-text", { y: 0, duration: 1, ease: "expo.out", delay: 0.2 })
      .to(".preloader-text", { y: -100, opacity: 0, duration: 0.8, ease: "expo.in", delay: 0.4 })
      .to(document.querySelector(".preloader-overlay"), { height: 0, duration: 1.2, ease: "power4.inOut" }, "-=0.2")
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

    // Elite Continuous Animations
    gsap.to(gsap.utils.toArray('.spin-text'), {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1
    });

    const words = gsap.utils.toArray('.dynamic-word') as HTMLElement[];
    if (words.length > 0) {
      gsap.set(words.slice(1), { y: 20, opacity: 0 });
      gsap.set(words[0], { y: 0, opacity: 1 });
      
      const wordTl = gsap.timeline({ repeat: -1 });
      
      words.forEach((word, index) => {
        const nextWord = words[(index + 1) % words.length];
        wordTl.to(word, { y: -20, opacity: 0, duration: 0.8, ease: "power3.inOut" }, "+=2.5")
              .fromTo(nextWord, 
                { y: 20, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.inOut" }, 
                "<");
      });
    }

    // Continuous breathing effect for the hero image
    gsap.to(".hero-image", {
      scale: 1.15,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Magnetic logic
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
    <section ref={container} className="relative h-[100svh] w-full flex flex-col items-center justify-center px-6 pt-24 pb-8 md:pb-12 bg-[#C5A059] overflow-hidden rounded-b-[40px] md:rounded-b-[80px] z-20 transition-colors duration-1000">

      {/* Background massive typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10 z-0">
        <span className="font-serif text-[40vw] leading-none whitespace-nowrap text-[#121110]">ELEVA</span>
      </div>

      {/* Central Architectural Image Cutout */}
      <div className="hero-image-wrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] md:w-[35vw] h-[65svh] overflow-hidden rounded-t-full border border-[#121110]/10 z-10 bg-[#EFECE6] shadow-2xl shadow-black/20">
        <img
          src="/fotos/hero imagem.jpeg"
          alt="Eleva Hero"
          className="hero-image w-[120%] h-[120%] object-cover object-center absolute -top-[10%] -left-[10%] opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#C5A059] via-transparent to-transparent opacity-100"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full max-w-[1600px] h-full flex flex-col justify-between items-center text-center">

        <div className="mt-12 md:mt-24"></div>

        <h1 className="font-serif text-[20vw] lg:text-[14vw] leading-[0.8] tracking-[-0.02em] flex overflow-hidden mix-blend-color-burn text-[#121110] pointer-events-none mt-8 md:mt-12">
          {title.map((char, i) => (
            <span key={i} className="hero-char inline-block" style={{ transformOrigin: "bottom center" }}>
              {char}
            </span>
          ))}
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-end w-full pb-8 md:pb-4 gap-12 md:gap-0 relative z-20">
          
          <div className="hero-sub flex flex-col items-start w-full md:w-1/3 order-3 md:order-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[9px] uppercase font-mono tracking-[0.3em] text-[#121110]/50">
                Localização
              </span>
              <div className="w-4 h-[1px] bg-[#121110]/30"></div>
            </div>
            <p className="text-[10px] md:text-[11px] text-[#121110]/80 uppercase tracking-[0.2em] font-mono leading-[1.6]">
              Sediados em Portugal<br />Alcance Global
            </p>
          </div>

          <div className="w-full md:w-1/3 flex justify-start md:justify-center order-1 md:order-2">
            <a href="#contacto" className="hero-sub magnetic-btn hidden md:flex w-32 h-32 rounded-full items-center justify-center text-[#121110] relative group group-hover:scale-105 transition-transform duration-500">
              {/* Spinning text ring */}
              <div className="absolute inset-0 w-full h-full spin-text pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-70">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text className="text-[8.5px] uppercase font-mono tracking-[0.25em] fill-current">
                    <textPath href="#circlePath" startOffset="0%">
                      DESCUBRA O NOSSO TRABALHO • DESCUBRA O NOSSO TRABALHO • 
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Inner button */}
              <div className="w-14 h-14 rounded-full border border-[#121110]/20 flex items-center justify-center group-hover:bg-[#121110] group-hover:text-[#C5A059] transition-colors duration-500 bg-[#EFECE6]/30 backdrop-blur-md">
                <ArrowDown size={20} strokeWidth={1} />
              </div>
            </a>
          </div>

          <div className="hero-sub flex flex-col items-start md:items-end text-left md:text-right w-full md:w-1/3 order-2 md:order-3 pt-6 md:pt-0">
            <div className="flex items-center md:flex-row-reverse gap-3 mb-3">
              <span className="text-[9px] uppercase font-mono tracking-[0.3em] text-[#121110]/50">
                O Que Fazemos
              </span>
              <div className="w-4 h-[1px] bg-[#121110]/30"></div>
            </div>
            <div className="text-[10px] md:text-[11px] leading-[1.8] text-[#121110]/80 uppercase tracking-[0.1em] max-w-[280px]">
              Sites profissionais <br className="hidden md:block"/>
              e presença digital forte, <br className="hidden md:block"/>
              tudo pensado para fazer crescer <span className="relative inline-flex h-[1.5em] w-[120px] md:w-[140px] overflow-visible align-bottom">
                {["o seu negócio.", "a sua marca.", "a sua visão.", "os seus resultados."].map((word, i) => (
                  <span 
                    key={i} 
                    className={`dynamic-word absolute bottom-0 left-0 md:left-auto md:right-0 md:text-right text-[#121110] font-serif italic normal-case text-[16px] md:text-[18px] tracking-normal w-full ${i === 0 ? 'opacity-100' : 'opacity-0'}`}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
