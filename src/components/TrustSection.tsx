import React, { useState } from 'react';
import { ShieldCheck, CheckCircle, FileText, Building2, Calendar, MapPin, Copy, Check, Lock, Sparkles } from 'lucide-react';
import { STORE_DATA } from '../data/content';

export const TrustSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCnpj = () => {
    navigator.clipboard.writeText(STORE_DATA.cnpj);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="seguranca" className="py-24 bg-[#121212] text-[#FAFAFA] relative overflow-hidden">
      {/* Subtle Luxury Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          {/* Verified Badge Header */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#C5A059]/10 border border-[#C5A059] shadow-inner">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A059]">
              Empresa Verificada & Idoneidade Comprovada
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Segurança, Transparência & Tradição
          </h2>

          <p className="font-sans-clean text-neutral-400 text-base sm:text-lg leading-relaxed font-light">
            Em um mundo digital, a confiança construída ao longo de 24 anos de endereço fixo e 
            atendimento ético é o nosso maior patrimônio.
          </p>
        </div>

        {/* The Master Verification Certificate Card */}
        <div className="max-w-4xl mx-auto bg-[#1A1A1A] border border-[#C5A059]/40 p-8 sm:p-12 shadow-2xl relative">
          {/* Gold Decorative Corner Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C5A059]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C5A059]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C5A059]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C5A059]"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            {/* Seal & Status Column */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-neutral-800 pb-8 md:pb-0 md:pr-8">
              <div className="w-20 h-20 rounded-full bg-[#121212] border-2 border-[#C5A059] flex items-center justify-center mb-4 shadow-lg">
                <ShieldCheck className="w-10 h-10 text-[#C5A059]" />
              </div>

              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A059]">
                Selo de Autenticidade
              </span>
              <h3 className="font-editorial text-xl font-bold text-white mt-1">
                Genilda Costa
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Atividade Comercial Ativa e Regularizada
              </p>

              <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <CheckCircle className="w-4 h-4" />
                <span>Situação Cadastral Ativa</span>
              </div>
            </div>

            {/* Legal Records & CNPJ Column */}
            <div className="md:col-span-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* CNPJ Box */}
                <div className="p-4 bg-[#121212] border border-neutral-800 flex flex-col justify-between">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold mb-1 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>CNPJ Oficial</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-mono text-base sm:text-lg font-bold text-[#FAFAFA]">
                      {STORE_DATA.cnpj}
                    </span>
                    <button
                      onClick={handleCopyCnpj}
                      className="p-1.5 text-neutral-400 hover:text-[#C5A059] transition-colors"
                      title="Copiar CNPJ"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Razão Social Box */}
                <div className="p-4 bg-[#121212] border border-neutral-800">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold mb-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Razão Social</span>
                  </div>
                  <div className="font-editorial text-base sm:text-lg font-bold text-[#FAFAFA] mt-1">
                    {STORE_DATA.legalName}
                  </div>
                </div>

                {/* Ano de Fundação */}
                <div className="p-4 bg-[#121212] border border-neutral-800">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Início das Atividades</span>
                  </div>
                  <div className="font-sans text-sm font-semibold text-[#FAFAFA] mt-1">
                    Ano 2000 (24 anos ininterruptos)
                  </div>
                </div>

                {/* Endereço Fiscal */}
                <div className="p-4 bg-[#121212] border border-neutral-800">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Município de Registro</span>
                  </div>
                  <div className="font-sans text-sm font-semibold text-[#FAFAFA] mt-1">
                    Diamantina / Minas Gerais
                  </div>
                </div>
              </div>

              {/* Guarantees Checklist */}
              <div className="pt-2 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Emissão de Nota Fiscal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Garantia de Semijoias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Envio Rastreado & Seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
