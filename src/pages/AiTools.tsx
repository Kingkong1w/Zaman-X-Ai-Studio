import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/button';

interface AiToolPlan {
  name: string;
  features: string;
  price: string;
  popular?: boolean;
}

const AiTools = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-scroll]');
      elements.forEach((el) => {
        const id = el.getAttribute('id') || '';
        if (id) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    setTimeout(() => handleScroll(), 300); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aiTools: AiToolPlan[] = [
    {
      name: 'ChatGPT-4',
      features: 'Unlimited prompts, GPT-4 access, faster responses',
      price: '5,000'
    },
    {
      name: 'Midjourney',
      features: 'AI Image Generation, unlimited prompts, high resolution exports',
      price: '6,000',
      popular: true
    },
    {
      name: 'D-ID',
      features: 'Talking avatars (100 credits), realistic AI video generation',
      price: '2,800'
    },
    {
      name: 'Runway ML',
      features: 'AI video editing, Gen-2 model, text-to-video features',
      price: '4,000'
    },
    {
      name: 'ElevenLabs',
      features: 'Voice generation, natural sounding AI voices, multiple languages',
      price: '3,500'
    },
    {
      name: 'Canva Pro / Firefly',
      features: 'Graphic design AI, templates, Magic Media feature',
      price: '2,500'
    },
    {
      name: 'Combo Plan',
      features: 'All tools included, priority support, custom tutorials',
      price: '14,999',
      popular: true
    }
  ];

  return (
    <main className="bg-zamanx-dark min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-zamanx-blue opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-zamanx-violet opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Premium <span className="text-gradient">AI Tools Access</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Get affordable access to the world's most powerful AI tools and supercharge your productivity
            </p>
          </div>
          
          <div 
            id="ai-tools-intro"
            data-scroll
            className={`glass-card p-8 rounded-xl max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
              isVisible['ai-tools-intro'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Why Choose Our AI Tools Access?</h2>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="min-w-[24px] h-6 flex items-center justify-center bg-zamanx-blue/20 rounded-full text-zamanx-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-white/80">
                    <strong className="text-white">Significantly Lower Cost</strong> - Save up to 70% compared to direct subscriptions
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="min-w-[24px] h-6 flex items-center justify-center bg-zamanx-blue/20 rounded-full text-zamanx-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-white/80">
                    <strong className="text-white">Local Payment Methods</strong> - Pay in PKR through local bank transfers or mobile wallets
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="min-w-[24px] h-6 flex items-center justify-center bg-zamanx-blue/20 rounded-full text-zamanx-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-white/80">
                    <strong className="text-white">24/7 Support</strong> - Get help with prompts, features, and troubleshooting anytime
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="min-w-[24px] h-6 flex items-center justify-center bg-zamanx-blue/20 rounded-full text-zamanx-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="text-white/80">
                    <strong className="text-white">No Credit Card Required</strong> - Avoid international transaction fees and currency conversion costs
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div 
            id="ai-tools-pricing"
            data-scroll
            className={`mb-12 transition-all duration-1000 delay-200 ${
              isVisible['ai-tools-pricing'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="text-gradient">Premium Plans</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {aiTools.map((tool, index) => (
                <div 
                  key={tool.name}
                  className={`glass-card rounded-xl p-6 transition-all relative ${
                    tool.popular ? 'border border-zamanx-blue/50' : ''
                  }`}
                >
                  {tool.popular && (
                    <span className="absolute top-0 right-0 bg-zamanx-blue text-black text-xs px-3 py-1 rounded-bl-lg rounded-tr-xl font-semibold">
                      POPULAR
                    </span>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                  <div className="h-16">
                    <p className="text-white/70 text-sm">{tool.features}</p>
                  </div>
                  <div className="mt-4 mb-6">
                    <span className="text-2xl font-bold text-gradient">Rs. {tool.price}</span>
                    <span className="text-white/50 text-sm">/month</span>
                  </div>
                  <a 
                    href={`https://wa.me/923215372647?text=Hi,%20I'm%20interested%20in%20the%20${tool.name}%20access%20plan.`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-blue-600 text-white hover:bg-violet-700 transition-colors font-semibold shadow-lg">
                      Get Access via WhatsApp
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            id="ai-tools-faq"
            data-scroll
            className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible['ai-tools-faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h2>
            
            <div className="space-y-4">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-white font-bold mb-2">How does the AI tools access work?</h3>
                <p className="text-white/70">After payment, you'll receive account credentials or access to our shared accounts platform. We handle all subscription fees, international payments, and technical setup so you can focus on using the tools.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-white font-bold mb-2">Can I cancel anytime?</h3>
                <p className="text-white/70">Yes, all plans are monthly with no long-term commitment. Simply let us know before your renewal date if you wish to cancel.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-white font-bold mb-2">What payment methods are accepted?</h3>
                <p className="text-white/70">We accept bank transfers, JazzCash, EasyPaisa, and other local payment methods. No international credit card required.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-white font-bold mb-2">Will I get the full features of these AI tools?</h3>
                <p className="text-white/70">Yes, you get access to all premium features of each tool as per their respective paid plans. There are no feature limitations.</p>
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

export default AiTools;
