import React, { useEffect, useRef } from 'react';
import { MessageCircle, Sparkles, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { STORE_DATA } from '../data/content';
import gsap from 'gsap';

interface HeroProps {
  onOpenVipModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVipModal }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP text reveal and entrance stagger animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
        );
      }

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.5'
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        );
      }

      if (ctaGroupRef.current) {
        tl.fromTo(
          ctaGroupRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        );
      }

      if (imageFrameRef.current) {
        tl.fromTo(
          imageFrameRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 1.2 },
          '-=1'
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center bg-[#FAFAFA] overflow-hidden pt-6 pb-16 md:py-20"
    >
      {/* Subtle Luxury Watermark / Background Texture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[#121212] font-editorial text-[14vw] tracking-tighter whitespace-nowrap z-0">
        PASSARELA MODAS
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & Editorial Copy Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Heritage Badge */}
            <div ref={badgeRef} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#FFFFFF] border border-[#C5A059]/40 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#121212]">
                Tradição desde 2000 • Diamantina, MG
              </span>
            </div>

            {/* Main Headline */}
            <h1
              ref={titleRef}
              className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#121212] leading-[1.12]"
            >
              A Elegância que <br />
              <span className="italic font-normal text-[#121212]">Atravessa o Tempo.</span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="font-sans-clean text-lg sm:text-xl text-neutral-600 font-light leading-relaxed max-w-2xl"
            >
              Curadoria exclusiva de moda e acessórios no coração de Diamantina desde 2000.
              Vinte e quatro anos vestindo a mulher contemporânea com alfaiataria impecável,
              semijoias refinadas e atendimento personalizado.
            </p>

            {/* Call to Actions */}
            <div ref={ctaGroupRef} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-whatsapp-main-cta"
                href={`https://wa.me/${STORE_DATA.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de explorar a nova coleção da Passarela Modas via WhatsApp.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#121212] text-[#FAFAFA] font-sans-clean text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#C5A059] hover:text-[#121212] shadow-md hover:shadow-lg overflow-hidden"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A059] group-hover:text-[#121212] transition-colors" />
                <span>Explorar Coleção via WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                id="hero-vip-concierge-cta"
                onClick={onOpenVipModal}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-transparent border border-[#121212] text-[#121212] font-sans-clean text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#121212] hover:text-[#FAFAFA] transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-[#C5A059] group-hover:text-[#C5A059]" />
                <span>Agendar Atendimento VIP</span>
              </button>
            </div>

            {/* Editorial Quick Trust Indicators */}
            <div className="pt-6 border-t border-neutral-200/70 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#121212]">
                  24 <span className="text-sm font-normal text-[#C5A059]">Anos</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-700 font-medium">
                  Referência Mineira
                </div>
              </div>

              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#121212]">
                  100%
                </div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-700 font-medium">
                  Curadoria Autêntica
                </div>
              </div>

              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#121212]">
                  Centro
                </div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-700 font-medium">
                  Histórico Diamantina
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual & Hero Editorial Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div
              ref={imageFrameRef}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Gold Border Offset Frame for Luxury Effect */}
              <div className="absolute -inset-3 border border-[#C5A059]/40 -z-10 translate-x-2 translate-y-2 hidden sm:block"></div>

              {/* Main Image Container */}
              <div className="editorial-img-container bg-[#FFFFFF] shadow-xl border border-neutral-200 p-2 sm:p-3">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                  <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
                    alt="Elegant woman walking in a historic Brazilian street, sun flare"
                    className="editorial-img w-full h-full object-cover"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/70 via-transparent to-transparent"></div>

                  {/* Floating Luxury Tag inside Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FFFFFF]/90 backdrop-blur-md border border-[#C5A059]/30 text-left">
                    <div className="text-[10px] tracking-[0.2em] font-semibold text-[#C5A059] uppercase">
                      Edição Quiet Luxury
                    </div>
                    <div className="font-editorial text-base sm:text-lg font-bold text-[#121212] leading-tight">
                      Curadoria Diamantina 2024
                    </div>
                    <div className="text-[11px] text-neutral-700 mt-0.5">
                      Rua Augusto Nelson, 116 A • Centro
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Badge Float */}
              <div className="absolute -top-4 -right-4 bg-[#121212] text-[#FAFAFA] border border-[#C5A059] px-4 py-2 shadow-lg hidden sm:flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span className="text-[10px] uppercase tracking-widest font-semibold">
                  Empresa Verificada
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
