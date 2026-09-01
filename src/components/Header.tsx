import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import { STORE_DATA } from '../data/content';

interface HeaderProps {
  onOpenVipModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenVipModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Coleções', href: '#colecoes' },
    { label: 'Tradição (24 Anos)', href: '#tradicao' },
    { label: 'Curadoria', href: '#curadoria' },
    { label: 'Segurança & CNPJ', href: '#seguranca' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="bg-[#121212] text-[#C5A059] text-xs font-medium tracking-widest uppercase py-2 px-4 border-b border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span className="hidden sm:inline">Diamantina, MG • Tradição e Confiança Desde 2000</span>
            <span className="sm:hidden">Diamantina, MG • Desde 2000</span>
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <a
              href={`https://wa.me/${STORE_DATA.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com o atendimento da Passarela Modas.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAFAFA] transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden md:inline">WhatsApp VIP:</span> {STORE_DATA.phone}
            </a>
            <span className="hidden lg:inline text-neutral-400">CNPJ: 04.114.752/0001-34</span>
          </div>
        </div>
      </div>

      {/* Main Luxury Sticky Header */}
      <header
        id="site-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3.5'
            : 'bg-[#FAFAFA] border-b border-neutral-200/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <a href="#" className="flex flex-col group text-left">
            <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-wider text-[#121212] group-hover:text-[#A47E35] transition-colors">
              PASSARELA MODAS
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-medium -mt-1 flex items-center gap-1.5">
              <span>Diamantina</span>
              <span className="text-neutral-300">•</span>
              <span>Desde 2000</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#C5A059] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              id="header-vip-btn"
              onClick={onOpenVipModal}
              className="text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-none border border-neutral-800 text-neutral-900 hover:bg-[#121212] hover:text-[#FAFAFA] transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Atendimento VIP</span>
            </button>

            <a
              id="header-whatsapp-cta"
              href={`https://wa.me/${STORE_DATA.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de explorar as novidades da Passarela Modas.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#121212] text-[#FAFAFA] hover:bg-[#C5A059] text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-none transition-all duration-300 flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A059] group-hover:text-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a
              href={`https://wa.me/${STORE_DATA.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com a Passarela Modas.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#121212] bg-[#C5A059]/10 rounded-full sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-[#C5A059]" />
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#121212] hover:text-[#C5A059] transition-colors focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#121212]/70 backdrop-blur-sm lg:hidden transition-opacity">
          <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-[#FFFFFF] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
                <div className="flex flex-col">
                  <span className="font-editorial text-xl font-bold tracking-wider text-[#121212]">
                    PASSARELA MODAS
                  </span>
                  <span className="text-[9px] tracking-widest text-[#C5A059] uppercase font-medium">
                    Diamantina • Desde 2000
                  </span>
                </div>
                <button
                  id="mobile-menu-close"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-500 hover:text-black"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-editorial text-neutral-900 hover:text-[#C5A059] py-2 border-b border-neutral-100 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </a>
                ))}
              </div>

              <div className="space-y-3 pt-2">
                <button
                  id="mobile-drawer-vip-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenVipModal();
                  }}
                  className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span>Agendar Atendimento VIP</span>
                </button>

                <a
                  id="mobile-drawer-whatsapp-btn"
                  href={`https://wa.me/${STORE_DATA.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de atendimento exclusivo na Passarela Modas.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider bg-[#121212] text-white hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5A059]" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200 text-xs text-neutral-500 space-y-1.5">
              <div className="flex items-center gap-1.5 text-neutral-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Rua Augusto Nelson, 116 A - Centro</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-700">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>CNPJ: 04.114.752/0001-34 • Genilda Costa</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
