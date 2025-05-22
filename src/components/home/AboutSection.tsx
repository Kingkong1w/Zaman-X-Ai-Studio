
import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about-section" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-zamanx-blue opacity-10 blur-3xl animate-float-slow"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-gradient">About</span> ZamanX AI Studio
            </h2>
            
            <div className="space-y-6 text-white/80">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl text-white font-medium mb-2">Founder</h3>
                <p>
                  ZamanX AI Studio was founded by Zaman with a vision to democratize access to cutting-edge AI and digital solutions.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl text-white font-medium mb-2">Our Mission</h3>
                <p>
                  We're on a mission to bring premium AI, Web, and Digital services to everyone at affordable prices, bridging the gap between advanced technology and accessibility.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-xl text-white font-medium mb-2">Vision</h3>
                <p>
                  To become Pakistan's most powerful AI-powered service platform, empowering businesses and individuals with future-ready digital solutions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact info */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-zamanx-blue/20 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-zamanx-blue">
                      <path d="M17.6 6.3A8.3 8.3 0 0 0 12 4.4a8.2 8.2 0 0 0-8.2 8.2c0 1.4.4 2.9 1.1 4.1L4 21.2l4.5-1.2a8.4 8.4 0 0 0 3.5.7 8.2 8.2 0 0 0 8.2-8.2c0-2.2-.9-4.3-2.4-5.9l-.2-.3zm1.1 10.4c-.2.6-1.2 1.2-1.7 1.2-.4 0-.7.2-3.8-.8-3.2-1-5.2-3.4-5.4-3.6-.2-.2-1.4-1.8-1.4-3.5s.9-2.5 1.2-2.8c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.6.8 2 .9 2.1.1.2.1.4 0 .6-.1.2-.2.3-.3.4l-.4.5c-.2.1-.4.3-.2.6.2.3.9 1.3 1.8 2 1.2 1 2.2 1.3 2.6 1.5.3.1.5 0 .7-.1.2-.1.4-.7.7-1.3.2-.6.5-.6.8-.5.3.1 1.9 1 2.2 1.1.3.2.6.2.7.3.1.3.1 1-.1 1.7z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">WhatsApp</h4>
                    <a href="https://wa.me/923215372647" target="_blank" rel="noopener noreferrer" className="text-zamanx-blue hover:underline">
                      03215372647
                    </a>
                    <p className="text-white/60 text-sm mt-1">Quick responses 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-zamanx-violet/20 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zamanx-violet">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <a href="mailto:zamanxaistudio@gmail.com" className="text-zamanx-violet hover:underline">
                      zamanxaistudio@gmail.com
                    </a>
                    <p className="text-white/60 text-sm mt-1">For inquiries and support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
