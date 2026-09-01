import React from 'react';
import { Sparkles, Award, History, HeartHandshake, ShieldCheck, Quote } from 'lucide-react';
import { HISTORY_MILESTONES, TESTIMONIALS, STORE_DATA } from '../data/content';

export const SocialProofHistory: React.FC = () => {
  return (
    <section id="tradicao" className="py-24 bg-[#FFFFFF] border-y border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Heading Statement */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAFAFA] border border-[#C5A059]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#121212]">
              Tradição • Herança • Confiança
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#121212] leading-tight">
            “Há 24 anos vestindo a essência da mulher mineira com{' '}
            <span className="italic font-normal text-[#C5A059]">sofisticação e confiança</span>.”
          </h2>

          <p className="font-sans-clean text-neutral-600 text-base sm:text-lg leading-relaxed font-light max-w-3xl mx-auto">
            Fundada no ano 2000 por <strong>Genilda Costa</strong> no coração da histórica Diamantina, a 
            <strong> Passarela Modas</strong> consolidou-se como o refúgio das mulheres que valorizam a 
            alta qualidade, o caimento impecável e um acolhimento genuinamente mineiro. Aqui, a tradição 
            encontra a vanguarda do <em>Quiet Luxury</em>.
          </p>
        </div>

        {/* Narrative & Milestone Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Historic Editorial Image with Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-neutral-200 p-3 bg-[#FAFAFA] shadow-md">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                  alt="Elegant woman walking in a historic Brazilian street, sun flare"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#C5A059] font-medium">
                    Diamantina, Minas Gerais
                  </div>
                  <div className="font-editorial text-xl font-bold">
                    Patrimônio & Elegância Atemporal
                  </div>
                </div>
              </div>
            </div>
            {/* Heritage Seal */}
            <div className="absolute -bottom-6 -left-4 bg-[#121212] text-[#FAFAFA] border border-[#C5A059] p-4 shadow-xl hidden sm:block max-w-[200px] text-left">
              <Award className="w-6 h-6 text-[#C5A059] mb-1" />
              <div className="text-xs font-bold uppercase tracking-wider">Desde o Ano 2000</div>
              <div className="text-[11px] text-neutral-400">24 anos de dedicação à moda feminina</div>
            </div>
          </div>

          {/* Right: Milestones Journey */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="border-b border-neutral-200 pb-4">
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#121212]">
                Uma Trajetória Esculpida pela Confiança
              </h3>
              <p className="text-sm text-neutral-500 font-light mt-1">
                A evolução da Passarela Modas no Centro Histórico de Diamantina.
              </p>
            </div>

            <div className="space-y-6">
              {HISTORY_MILESTONES.map((milestone) => (
                <div
                  key={milestone.year}
                  className="p-6 bg-[#FAFAFA] border border-neutral-200 hover:border-[#C5A059]/60 transition-all duration-300 relative group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-editorial text-2xl font-bold text-[#C5A059]">
                        {milestone.year}
                      </span>
                      <h4 className="font-editorial text-lg font-bold text-[#121212]">
                        {milestone.title}
                      </h4>
                    </div>
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-neutral-700 bg-white px-2.5 py-1 border border-neutral-200 self-start sm:self-auto">
                      {milestone.highlight}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Quote Box */}
            <div className="p-6 bg-[#121212] text-[#FAFAFA] border-l-4 border-[#C5A059] flex items-start gap-4">
              <Quote className="w-8 h-8 text-[#C5A059] shrink-0 opacity-75" />
              <div>
                <p className="font-editorial text-base sm:text-lg italic leading-relaxed text-neutral-200">
                  “Moda não é apenas o que se veste, é a segurança que se sente ao entrar em qualquer lugar. Há 24 anos, minha missão é fazer cada mulher brilhar com autenticidade.”
                </p>
                <div className="mt-3 text-xs uppercase tracking-widest font-semibold text-[#C5A059]">
                  — Genilda Costa, Fundadora da Passarela Modas
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials / Social Proof Row */}
        <div className="mt-20 pt-16 border-t border-neutral-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              Vozes de Quem Confia
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#121212] mt-1">
              Gerações de Clientes Satisfeitas
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#FAFAFA] border border-neutral-200 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <p className="font-editorial italic text-neutral-700 text-base leading-relaxed mb-6">
                  “{t.content}”
                </p>
                <div className="pt-4 border-t border-neutral-200/80">
                  <div className="font-sans-clean text-sm font-bold text-[#121212]">
                    {t.author}
                  </div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
