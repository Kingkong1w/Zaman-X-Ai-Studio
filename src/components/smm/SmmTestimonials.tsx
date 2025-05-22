
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah K.",
    role: "Instagram Influencer",
    quote: "ZamanX SMM panel helped me grow my Instagram from 2K to 10K followers in just two months. The engagement is real and consistent!",
    avatar: "👩🏻‍💼",
  },
  {
    id: 2, 
    name: "Ahmed J.",
    role: "TikTok Creator",
    quote: "I've tried many SMM panels, but none compare to ZamanX. Fast delivery, real followers, and excellent customer support.",
    avatar: "👨🏽‍💻",
  },
  {
    id: 3,
    name: "Malik Enterprises",
    role: "Local Business",
    quote: "Our Facebook page engagement increased by 300% after using ZamanX's SMM services. Highly recommend for any business!",
    avatar: "🏢",
  },
  {
    id: 4,
    name: "Zara M.",
    role: "YouTuber",
    quote: "Got 1000+ real subscribers and increased watch time significantly. Finally monetized my channel thanks to ZamanX!",
    avatar: "👩🏽‍🦱",
  }
];

const SmmTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-zamanx-blue opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-zamanx-violet opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Client Success Stories</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            See what our clients have to say about our SMM services and how we've helped them grow their social media presence.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative">
            <div className="absolute top-4 left-4 opacity-20 text-white text-6xl font-serif">"</div>
            <div className="relative z-10">
              <div className="min-h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl mb-8">{testimonials[activeIndex].avatar}</p>
                  <p className="text-white/90 text-lg md:text-xl mb-6 italic">"{testimonials[activeIndex].quote}"</p>
                  <div className="flex flex-col items-center">
                    <p className="text-white font-bold">{testimonials[activeIndex].name}</p>
                    <p className="text-zamanx-blue">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 opacity-20 text-white text-6xl font-serif">"</div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-zamanx-blue' : 'bg-white/20'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmmTestimonials;
