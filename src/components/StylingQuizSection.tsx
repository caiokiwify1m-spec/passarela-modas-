import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, MessageCircle, Heart, Shirt, Palette, PackageCheck, ShieldCheck } from 'lucide-react';
import { STORE_DATA } from '../data/content';

export const StylingQuizSection: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedStyle, setSelectedStyle] = useState('Quiet Luxury & Alfaiataria');
  const [selectedOccasion, setSelectedOccasion] = useState('Dia a Dia Executivo & Trabalho');
  const [selectedSize, setSelectedSize] = useState('M (40)');
  const [selectedColors, setSelectedColors] = useState<string[]>(['Neutros & Areia', 'Dourado & Ouro']);
  const [deliveryMode, setDeliveryMode] = useState('Mala Delivery em Casa (Diamantina)');
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('Diamantina');

  const styles = [
    { title: 'Quiet Luxury & Alfaiataria', desc: 'Blazers estruturados, linho nobre e caimento reto impecável' },
    { title: 'Casual Chique & Fibras Naturais', desc: 'Linho europeu, tricots leves e cores minerais confortáveis' },
    { title: 'Festas & Noites Nobres', desc: 'Vestidos acetinados, fendas elegantes e brilho sutil' },
    { title: 'Acessórios & Semijoias em Ouro', desc: 'Correntaria 18k, clutches e bolsas em couro legítimo' },
  ];

  const occasions = [
    'Dia a Dia Executivo & Trabalho',
    'Jantares & Encontros Especiais',
    'Casamentos & Recepções',
    'Viagens & Férias Elegantes',
    'Renovação Completa de Guarda-Roupa',
  ];

  const sizes = ['PP (36)', 'P (38)', 'M (40)', 'G (42)', 'GG (44/46)', 'Tamanho Único / Ajustável'];

  const palettes = [
    { name: 'Neutros & Areia', hex: '#D8CAB8' },
    { name: 'Eerie Black & Monocromático', hex: '#121212' },
    { name: 'Dourado & Ouro 18k', hex: '#C5A059' },
    { name: 'Tons Minerais & Terracota', hex: '#B87D65' },
    { name: 'Esmeralda & Azul Profundo', hex: '#1E4D40' },
  ];

  const toggleColor = (name: string) => {
    if (selectedColors.includes(name)) {
      setSelectedColors(selectedColors.filter((c) => c !== name));
    } else {
      setSelectedColors([...selectedColors, name]);
    }
  };

  const handleSendToWhatsApp = () => {
    const text = `*Curadoria Personalizada • Passarela Modas*\n\n` +
      `*Cliente:* ${customerName || 'Cliente VIP'}\n` +
      `*Cidade:* ${customerCity}\n` +
      `*Estilo Preferido:* ${selectedStyle}\n` +
      `*Ocasião Principal:* ${selectedOccasion}\n` +
      `*Tamanho Indicativo:* ${selectedSize}\n` +
      `*Paleta de Cores:* ${selectedColors.join(', ')}\n` +
      `*Modalidade:* ${deliveryMode}\n\n` +
      `Olá Genilda e equipe! Gostaria de receber uma seleção exclusiva de fotos/peças com base nas minhas escolhas.`;

    const url = `https://wa.me/${STORE_DATA.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="consultoria" className="py-24 bg-[#FAFAFA] border-y border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFFFFF] border border-[#C5A059]/50 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#121212]">
              Consultoria Digital & Mala VIP
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#121212]">
            Descubra Sua Seleção Sob Medida
          </h2>

          <p className="font-sans-clean text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
            Em menos de 1 minuto, selecione o seu estilo e preferências. Nossa consultora preparará 
            uma seleção exclusiva de fotos em alta definição ou uma <strong>Mala Delivery</strong> para a sua casa.
          </p>
        </div>

        {/* Interactive Stepper Card */}
        <div className="max-w-4xl mx-auto bg-[#FFFFFF] border border-neutral-300 shadow-xl p-6 sm:p-10 relative">
          {/* Step Progress Indicators */}
          <div className="flex items-center justify-between border-b border-neutral-200 pb-6 mb-8">
            <div className="flex items-center gap-2">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                step >= 1 ? 'bg-[#121212] text-[#C5A059]' : 'bg-neutral-100 text-neutral-400'
              }`}>
                1
              </span>
              <span className="text-xs uppercase font-semibold tracking-wider text-neutral-800 hidden sm:inline">
                Estilo & Ocasião
              </span>
            </div>

            <div className="w-8 sm:w-16 h-[1px] bg-neutral-200"></div>

            <div className="flex items-center gap-2">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                step >= 2 ? 'bg-[#121212] text-[#C5A059]' : 'bg-neutral-100 text-neutral-400'
              }`}>
                2
              </span>
              <span className="text-xs uppercase font-semibold tracking-wider text-neutral-800 hidden sm:inline">
                Tamanho & Cores
              </span>
            </div>

            <div className="w-8 sm:w-16 h-[1px] bg-neutral-200"></div>

            <div className="flex items-center gap-2">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                step >= 3 ? 'bg-[#121212] text-[#C5A059]' : 'bg-neutral-100 text-neutral-400'
              }`}>
                3
              </span>
              <span className="text-xs uppercase font-semibold tracking-wider text-neutral-800 hidden sm:inline">
                Revisão & Envio
              </span>
            </div>
          </div>

          {/* STEP 1: Style & Occasion */}
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in duration-300 text-left">
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#121212] mb-1">
                  Qual estética melhor traduz seu momento?
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  Escolha a proposta que você deseja explorar com nossa equipe.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {styles.map((s) => (
                    <button
                      key={s.title}
                      onClick={() => setSelectedStyle(s.title)}
                      className={`p-5 text-left border transition-all duration-300 relative ${
                        selectedStyle === s.title
                          ? 'border-[#C5A059] bg-[#FAFAFA] shadow-md ring-1 ring-[#C5A059]'
                          : 'border-neutral-200 hover:border-neutral-400 bg-white'
                      }`}
                    >
                      {selectedStyle === s.title && (
                        <div className="absolute top-3 right-3 w-5 h-5 bg-[#C5A059] rounded-full flex items-center justify-center text-white">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                      <div className="font-editorial text-lg font-bold text-[#121212] pr-6">
                        {s.title}
                      </div>
                      <div className="text-xs text-neutral-600 font-light mt-1.5 leading-relaxed">
                        {s.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-editorial text-lg font-bold text-[#121212] mb-2">
                  Qual é a ocasião prioritária?
                </h4>
                <div className="flex flex-wrap gap-2">
                  {occasions.map((occ) => (
                    <button
                      key={occ}
                      onClick={() => setSelectedOccasion(occ)}
                      className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-colors ${
                        selectedOccasion === occ
                          ? 'bg-[#121212] text-[#FAFAFA] border border-[#121212]'
                          : 'bg-[#FAFAFA] text-neutral-700 border border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-8 py-3.5 bg-[#121212] hover:bg-[#C5A059] text-white hover:text-black text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
                >
                  <span>Próximo Passo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Sizes & Color Palettes */}
          {step === 2 && (
            <div className="space-y-8 animate-in fade-in duration-300 text-left">
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#121212] mb-1">
                  Seu Tamanho & Preferências de Cor
                </h3>
                <p className="text-xs text-neutral-500 mb-4">
                  Trabalhamos com modelagens estruturadas que vestem do PP ao Plus com conforto.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-3 px-4 text-center border text-xs font-semibold uppercase tracking-wider transition-all ${
                        selectedSize === sz
                          ? 'border-[#C5A059] bg-[#121212] text-[#FAFAFA]'
                          : 'border-neutral-200 bg-[#FAFAFA] text-neutral-700 hover:border-neutral-400'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-editorial text-lg font-bold text-[#121212] mb-2">
                  Paleta de Cores Desejada (selecione uma ou mais):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {palettes.map((p) => {
                    const isSelected = selectedColors.includes(p.name);
                    return (
                      <button
                        key={p.name}
                        onClick={() => toggleColor(p.name)}
                        className={`p-3.5 flex items-center justify-between border transition-all ${
                          isSelected
                            ? 'border-[#C5A059] bg-[#FAFAFA] ring-1 ring-[#C5A059]'
                            : 'border-neutral-200 bg-white hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="w-4 h-4 rounded-full border border-neutral-300 shadow-inner"
                            style={{ backgroundColor: p.hex }}
                          ></span>
                          <span className="text-xs font-medium text-neutral-800">{p.name}</span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-[#C5A059]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs uppercase tracking-wider font-semibold text-neutral-600 hover:text-black py-2"
                >
                  Voltar
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-8 py-3.5 bg-[#121212] hover:bg-[#C5A059] text-white hover:text-black text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
                >
                  <span>Ver Meu Resumo VIP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Review & Direct Dispatch */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300 text-left">
              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#121212] mb-1">
                  Seu Perfil de Curadoria Exclusivo
                </h3>
                <p className="text-xs text-neutral-500 mb-6">
                  Revise os detalhes abaixo para receber o catálogo personalizado via WhatsApp.
                </p>
              </div>

              {/* Summary Box */}
              <div className="p-6 bg-[#FAFAFA] border border-[#C5A059]/40 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-neutral-400 uppercase tracking-wider block text-[10px]">Estilo Selecionado:</span>
                    <strong className="text-neutral-900 text-sm font-editorial">{selectedStyle}</strong>
                  </div>

                  <div>
                    <span className="text-neutral-400 uppercase tracking-wider block text-[10px]">Ocasião:</span>
                    <strong className="text-neutral-900 text-sm">{selectedOccasion}</strong>
                  </div>

                  <div>
                    <span className="text-neutral-400 uppercase tracking-wider block text-[10px]">Tamanho:</span>
                    <strong className="text-neutral-900 text-sm">{selectedSize}</strong>
                  </div>

                  <div>
                    <span className="text-neutral-400 uppercase tracking-wider block text-[10px]">Cores Selecionadas:</span>
                    <strong className="text-neutral-900 text-sm">{selectedColors.join(', ') || 'Todas as cores'}</strong>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200/80">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-700 mb-1">
                    Modalidade Desejada:
                  </label>
                  <select
                    value={deliveryMode}
                    onChange={(e) => setDeliveryMode(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-neutral-300 text-xs text-neutral-900 focus:border-[#C5A059] focus:outline-none"
                  >
                    <option value="Mala Delivery em Casa (Diamantina)">Mala Delivery em Casa (Diamantina)</option>
                    <option value="Provador Privativo com Horário na Loja">Provador Privativo com Horário na Loja</option>
                    <option value="Catálogo Digital & Envio por Correios/Transportadora">Catálogo Digital & Envio por Correios/Transportadora</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-medium text-neutral-600 mb-1">
                      Seu Nome:
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Maria Clara"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-xs text-neutral-900 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-medium text-neutral-600 mb-1">
                      Sua Cidade:
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Diamantina, MG"
                      value={customerCity}
                      onChange={(e) => setCustomerCity(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-xs text-neutral-900 focus:border-[#C5A059] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs uppercase tracking-wider font-semibold text-neutral-600 hover:text-black py-2"
                >
                  Modificar Respostas
                </button>

                <button
                  onClick={handleSendToWhatsApp}
                  className="px-8 py-4 bg-[#121212] hover:bg-[#C5A059] text-white hover:text-black text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5A059] group-hover:text-black" />
                  <span>Enviar para Genilda no WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Atendimento confidencial direto com a equipe de Diamantina.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
