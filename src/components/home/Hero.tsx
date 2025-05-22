
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-zamanx-blue opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-zamanx-violet opacity-20 blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full animate-rotate-slow opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-white/5 rounded-full animate-rotate-slow opacity-20" style={{ animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 inline-block">
            <div className="relative">
              <h1 className="text-5xl md:text-6xl font-bold mb-2 text-gradient glow-text">
                ZamanX
              </h1>
              <span className="text-lg absolute -top-2 -right-16 bg-zamanx-violet text-white px-2 rounded animate-pulse-glow">AI Studio</span>
            </div>
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-white transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            One Platform. <span className="text-gradient">Infinite Digital Power.</span>
          </h2>
          
          <p className={`text-white/70 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            Premium AI tools, web development, IPTV services, and digital marketing solutions - all at affordable prices.
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <a href="#services">
              <Button className="bg-zamanx-blue hover:bg-zamanx-blue/80 text-black font-medium px-8 py-6">
                Explore Services
              </Button>
            </a>
            <a href="https://wa.me/923215372647" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-zamanx-violet hover:bg-zamanx-violet/20 text-white px-8 py-6">
                Contact Now
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* 3D floating elements */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
        <div className="animate-bounce text-white/50 flex flex-col items-center">
          <span className="mb-2 text-xs">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
}
