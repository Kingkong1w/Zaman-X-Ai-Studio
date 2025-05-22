
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-zamanx-dark min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-zamanx-blue opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-zamanx-violet opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              About <span className="text-gradient">ZamanX AI Studio</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Learn about our journey, mission, and the team behind ZamanX AI Studio
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Story</h2>
              <p className="text-white/80 mb-4">
                ZamanX AI Studio was founded with a clear vision: to democratize access to cutting-edge AI and digital technologies. In a world where premium digital tools are often priced out of reach for many businesses and individuals, we set out to create a more accessible alternative.
              </p>
              <p className="text-white/80">
                Our founder, Zaman, recognized the immense potential of AI technologies to transform businesses of all sizes. However, he also saw how the high costs associated with these tools created barriers for many, especially in emerging economies like Pakistan. This realization sparked the creation of ZamanX AI Studio – a platform dedicated to making premium digital services affordable without compromising on quality.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-white/80">
                We're on a mission to bring premium AI, Web, and Digital services to everyone at affordable prices. We believe that advanced technology should be accessible to all businesses, regardless of their size or budget. By providing cost-effective access to top-tier AI tools, web development services, and digital marketing solutions, we aim to level the playing field and empower businesses to thrive in the digital age.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-white/80">
                To become Pakistan's most powerful AI-powered service platform, revolutionizing how businesses leverage technology. We envision a future where every business in Pakistan has access to the same powerful digital tools as their international counterparts, enabling them to compete on a global scale. Through innovation, accessibility, and unwavering commitment to our clients' success, we aim to be at the forefront of Pakistan's digital transformation.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
              
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
                    <p className="text-white/60 text-sm mt-1">Available 24/7 for customer support</p>
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
                    <p className="text-white/60 text-sm mt-1">For inquiries and business proposals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default About;
