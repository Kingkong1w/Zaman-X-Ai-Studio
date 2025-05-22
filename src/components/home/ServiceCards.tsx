import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  index: number;
}

function ServiceCard({ icon, title, description, link, index }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 * index);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`glass-card rounded-xl p-6 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mb-4 text-4xl text-gradient">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/70 text-sm mb-4">{description}</p>
      <Link to={link}>
        <Button className="w-full bg-blue-600 text-white hover:bg-violet-700 transition-colors font-semibold shadow-lg">
          Learn More
        </Button>
      </Link>
    </div>
  );
}

export default function ServiceCards() {
  const services = [
    {
      icon: '🧠',
      title: 'AI Tools Access',
      description: 'Premium access to ChatGPT-4, Midjourney, D-ID, and more AI tools at affordable rates.',
      link: '/ai-tools'
    },
    {
      icon: '📺',
      title: 'IPTV Services',
      description: 'Access 2000+ international channels, movies, and series with our premium IPTV packages.',
      link: '/iptv'
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites, e-commerce solutions, and digital platforms tailored to your needs.',
      link: '/web-services'
    },
    {
      icon: '📱',
      title: 'SMM Panel',
      description: 'Grow your social media presence with our SMM services. Followers, likes, views & more.',
      link: '/smm'
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-zamanx-blue opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-zamanx-violet opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">Premium Services</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover our range of high-quality digital services designed to propel your brand into the future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
