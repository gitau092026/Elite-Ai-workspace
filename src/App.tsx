import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandBar } from './components/BrandBar';
import { ServicesSection } from './components/ServicesSection';
import { TemplatesSection } from './components/TemplatesSection';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { BookCallModal } from './components/BookCallModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [bookCallOpen, setBookCallOpen] = useState(false);
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'services':
        return (
          <ScrollReveal direction="up" key="services">
            <ServicesSection onOpenBookCall={() => setBookCallOpen(true)} />
            <CtaBanner onOpenBookCall={() => setBookCallOpen(true)} />
          </ScrollReveal>
        );

      case 'templates':
        return (
          <ScrollReveal direction="up" key="templates">
            <TemplatesSection onOpenBookCall={() => setBookCallOpen(true)} />
            <CtaBanner onOpenBookCall={() => setBookCallOpen(true)} />
          </ScrollReveal>
        );

      case 'pricing':
        return (
          <ScrollReveal direction="up" key="pricing">
            <PricingSection onOpenBookCall={() => setBookCallOpen(true)} />
            <CtaBanner onOpenBookCall={() => setBookCallOpen(true)} />
          </ScrollReveal>
        );

      case 'about':
        return (
          <ScrollReveal direction="up" key="about">
            <AboutSection onOpenBookCall={() => setBookCallOpen(true)} />
            <CtaBanner onOpenBookCall={() => setBookCallOpen(true)} />
          </ScrollReveal>
        );

      case 'faqs':
        return (
          <ScrollReveal direction="up" key="faqs">
            <FaqSection
              onOpenBookCall={() => setBookCallOpen(true)}
              onOpenWhatsApp={() => setWhatsAppOpen(true)}
            />
            <CtaBanner onOpenBookCall={() => setBookCallOpen(true)} />
          </ScrollReveal>
        );

      case 'home':
      default:
        return (
          <div key="home">
            <Hero
              onOpenBookCall={() => setBookCallOpen(true)}
              onOpenWhatsApp={() => setWhatsAppOpen(true)}
              onNavigate={handleNavigate}
            />
            <BrandBar />
            <ServicesSection onOpenBookCall={() => setBookCallOpen(true)} />
            <CtaBanner onOpenBookCall={() => setBookCallOpen(true)} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-[#FF7300] selection:text-white flex flex-col justify-between overflow-x-hidden">
      
      <div>
        {/* Header with Navigation */}
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenBookCall={() => setBookCallOpen(true)}
        />

        {/* Main Content Area - Rendered Independently per Page */}
        <main className="w-full">
          {renderCurrentPage()}
        </main>
      </div>

      {/* Footer */}
      <Footer
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBookCall={() => setBookCallOpen(true)}
        onOpenWhatsApp={() => setWhatsAppOpen(true)}
      />

      {/* Book Call Consultation Modal */}
      <BookCallModal
        isOpen={bookCallOpen}
        onClose={() => setBookCallOpen(false)}
      />

      {/* Interactive WhatsApp Live Chat */}
      <WhatsAppWidget
        isOpen={whatsAppOpen}
        onClose={() => setWhatsAppOpen(false)}
      />

    </div>
  );
}

