import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProofHistory } from './components/SocialProofHistory';
import { CuratedGrid } from './components/CuratedGrid';
import { LookbookShowcase } from './components/LookbookShowcase';
import { StylingQuizSection } from './components/StylingQuizSection';
import { TrustSection } from './components/TrustSection';
import { LocationFooter } from './components/LocationFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { VipConciergeModal } from './components/VipConciergeModal';

export default function App() {
  const [vipModalOpen, setVipModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121212] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
      {/* Editorial Luxury Header */}
      <Header onOpenVipModal={() => setVipModalOpen(true)} />

      {/* Main Flagship Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenVipModal={() => setVipModalOpen(true)} />

        {/* 24 Years Tradition & Social Proof */}
        <SocialProofHistory />

        {/* 3 Visual Pillars Curated Grid */}
        <CuratedGrid />

        {/* Lookbook Capsule Showcase with Filters & Fabric Inspector */}
        <LookbookShowcase />

        {/* Interactive Personal Styling & Mala Delivery Simulator */}
        <StylingQuizSection />

        {/* Verified Business & Legal Trust (CNPJ: 04.114.752/0001-34) */}
        <TrustSection />
      </main>

      {/* Styled Location Map & Complete Footer */}
      <LocationFooter />

      {/* Persistent Floating WhatsApp Concierge */}
      <FloatingWhatsApp />

      {/* VIP Concierge Booking Modal */}
      <VipConciergeModal
        isOpen={vipModalOpen}
        onClose={() => setVipModalOpen(false)}
      />
    </div>
  );
}
