import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { SelectedWorkSection } from '../components/SelectedWorkSection';
import { ProcessSection } from '../components/ProcessSection';
import { ImpactSection } from '../components/ImpactSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SelectedWorkSection />
      <ProcessSection />
      <ImpactSection />
      <ContactSection />
    </main>
  );
};
