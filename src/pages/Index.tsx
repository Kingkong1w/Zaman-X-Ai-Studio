
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Hero from '@/components/home/Hero';
import ServiceCards from '@/components/home/ServiceCards';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-zamanx-dark min-h-screen">
      <Navbar />
      <Hero />
      <ServiceCards />
      <AboutSection />
      <TestimonialsSlider />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
