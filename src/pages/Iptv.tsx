
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import IptvHero from '@/components/iptv/IptvHero';
import IptvPackages from '@/components/iptv/IptvPackages';
import IptvFeatures from '@/components/iptv/IptvFeatures';

const Iptv = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-zamanx-dark min-h-screen">
      <Navbar />
      <IptvHero />
      <IptvPackages />
      <IptvFeatures />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Iptv;
