
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import WebServicesHero from '@/components/web-services/WebServicesHero';
import WebServicesList from '@/components/web-services/WebServicesList';
import WebServicesFeatures from '@/components/web-services/WebServicesFeatures';

const WebServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-zamanx-dark min-h-screen">
      <Navbar />
      <WebServicesHero />
      <WebServicesList />
      <WebServicesFeatures />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default WebServices;
