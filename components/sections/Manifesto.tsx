"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GridOverlay from "@/components/ui/GridOverlay";
import { useLanguage } from "@/context/LanguageContext";

export default function Manifesto() {
  const container = useRef(null);
  const { t } = useLanguage();

  useGSAP(() => {
     // Paragraph line-by-line reveal for ultra-premium reading experience
     gsap.fromTo(".manifesto-line", 
       { opacity: 0, y: 30, filter: "blur(5px)" }, 
       { 
         opacity: 1, 
         y: 0, 
         filter: "blur(0px)",
         duration: 1.2, 
         stagger: 0.15,
         ease: "power2.out", 
         scrollTrigger: { 
           trigger: container.current, 
           start: "top 75%" 
         } 
       });

     // Staggered numbered blocks
     gsap.fromTo(".logic-block", 
       { opacity: 0, x: 40 }, 
       { opacity: 1, x: 0, duration: 1, stagger: 0.2, ease: "expo.out", scrollTrigger: { trigger: ".logic-container", start: "top 80%" } });
       
     // Line expand
     gsap.fromTo(".sep-line", 
       { width: 0 }, 
       { width: "64px", duration: 1.5, ease: "power3.inOut", scrollTrigger: { trigger: container.current, start: "top 75%" }});
       
  }, { scope: container });

  return (
    <section ref={container} id="fundamentos" className="relative py-24 md:py-48 px-6 md:px-[60px] bg-[#EFECE6] border-t border-[#121110]/10 transition-colors duration-1000">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 relative z-10 text-[#121110]">
        
        <div className="lg:col-span-6 lg:pr-10">
          <h2 className="font-serif text-[40px] md:text-[60px] lg:text-[70px] leading-[0.9] tracking-[-0.04em] mb-10 overflow-hidden">
            <div className="manifesto-line text-[#121110]">{t("O seu negócio merece", "Your business deserves")}</div>
            <div className="manifesto-line text-[#121110]">{t("ser visto como", "to be seen as it")}</div>
            <div className="manifesto-line text-[#C5A059] italic">{t("realmente é.", "truly is.")}</div>
          </h2>
          <div className="sep-line h-[1px] bg-[#C5A059] mb-12"></div>
          
          <p className="manifesto-line text-[16px] md:text-[20px] leading-[1.6] text-[#121110]/90 mb-8 max-w-lg font-light">
            {t(
              "Na Eleva, não criamos apenas sites bonitos. Construímos presenças digitais que transmitem a verdadeira qualidade do seu negócio e conquistam a confiança dos seus clientes desde o primeiro segundo.",
              "At Eleva, we don't just build beautiful websites. We craft digital presences that convey the true quality of your business and earn your clients' trust from the very first second."
            )}
          </p>
          <p className="manifesto-line text-[15px] md:text-[18px] leading-[1.6] text-[#121110]/70 max-w-xl font-light">
            {t(
              "Um site fraco ou inexistente faz com que potenciais clientes duvidem do seu valor — mesmo que o seu trabalho seja excelente. Intervimos em dois cenários onde podemos fazer toda a diferença.",
              "A weak or non-existent website makes potential clients doubt your value — even when your work is excellent. We step in for two scenarios where we can make all the difference."
            )}
          </p>
        </div>
        
        <div className="logic-container lg:col-span-6 flex flex-col justify-center space-y-16 border-l border-[#121110]/10 pl-6 md:pl-16 relative">
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-[#C5A059] to-transparent bg-[length:100%_200%] opacity-30"></div>
          
          <div className="logic-block group cursor-default">
            <div className="text-[50px] md:text-[80px] font-serif tracking-[-0.05em] text-[#121110]/10 mb-4 transition-all duration-500 group-hover:text-[#C5A059] group-hover:scale-105 origin-left">01</div>
            <h3 className="text-[14px] font-bold uppercase tracking-[0.1em] text-[#121110] mb-4">
              {t("Negócios Sem Presença Online", "Businesses Without an Online Presence")}
            </h3>
            <p className="text-[16px] leading-[1.6] text-[#121110]/80 max-w-md font-light">
              {t(
                "Muitos negócios vivem de recomendações e do boca-a-boca, mas quando um potencial cliente vai pesquisar online, não encontra nada. Criamos um site profissional que dá ao seu negócio a visibilidade e a credibilidade que ele merece.",
                "Many businesses thrive on recommendations and word-of-mouth, but when a potential client searches online, they find nothing. We create a professional website that gives your business the visibility and credibility it deserves."
              )}
            </p>
          </div>
          
          <div className="logic-block group cursor-default">
            <div className="text-[50px] md:text-[80px] font-serif tracking-[-0.05em] text-[#121110]/10 mb-4 transition-all duration-500 group-hover:text-[#C5A059] group-hover:scale-105 origin-left">02</div>
            <h3 className="text-[14px] font-bold uppercase tracking-[0.1em] text-[#121110] mb-4">
              {t("Sites Que Não Representam o Seu Valor", "Websites That Don't Reflect Your Value")}
            </h3>
            <p className="text-[16px] leading-[1.6] text-[#121110]/80 max-w-md font-light">
              {t(
                "Um site ultrapassado ou mal feito afasta clientes antes mesmo de conhecerem o seu trabalho. Redesenhamos a estrutura visual, melhoramos os textos e otimizamos para os motores de busca — para que cada visita se transforme numa oportunidade real.",
                "An outdated or poorly built website drives clients away before they even discover your work. We redesign the visual structure, refine the copy, and optimise for search engines — so every visit becomes a real opportunity."
              )}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
