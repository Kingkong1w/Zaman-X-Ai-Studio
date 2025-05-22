
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const testimonials: Testimonial[] = [
    {
      name: "Ahmed Khan",
      role: "E-commerce Owner",
      content: "ZamanX built our online store and integrated WhatsApp automation. Sales have increased by 40% in just two months!"
    },
    {
      name: "Fatima Ali",
      role: "Content Creator",
      content: "The AI tools access has transformed my content creation process. I'm producing 3x more quality content in less time."
    },
    {
      name: "Mohammad Raza",
      role: "Digital Marketing Agency",
      content: "Their SMM panel has been a game changer for our agency. Reliable service, fast delivery, and amazing customer support."
    },
    {
      name: "Sara Malik",
      role: "Lifestyle Blogger",
      content: "The IPTV service is exceptional. Crystal clear quality and never buffers. Best value for money out there!"
    }
  ];
  
  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonials-section');
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
  
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials-section" className="py-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-zamanx-violet opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">Client Testimonials</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients about their experience.
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-8 rounded-xl relative">
            <div className="absolute -top-4 -left-4 text-4xl">❝</div>
            <div className="mb-8">
              <p className="text-white/90 text-lg italic">
                {testimonials[currentIndex].content}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-zamanx-blue text-sm">{testimonials[currentIndex].role}</p>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-white/10 hover:bg-zamanx-blue/20"
                  onClick={goToPrevSlide}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-white/10 hover:bg-zamanx-violet/20"
                  onClick={goToNextSlide}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </Button>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-6 bg-gradient-to-r from-zamanx-blue to-zamanx-violet' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
