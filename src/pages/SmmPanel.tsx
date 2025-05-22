
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import SmmHero from '@/components/smm/SmmHero';
import SmmServices from '@/components/smm/SmmServices';
import SmmTestimonials from '@/components/smm/SmmTestimonials';

const SmmPanel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-zamanx-dark min-h-screen">
      <Navbar />
      <SmmHero />
      <SmmServices />
      <SmmTestimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default SmmPanel;
