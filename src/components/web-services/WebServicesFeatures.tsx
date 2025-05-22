
import { Card } from "@/components/ui/card";

const WebServicesFeatures = () => {
  const features = [
    {
      icon: "🎨",
      title: "Custom Design",
      description: "Unique, tailored designs that reflect your brand identity and meet your specific requirements."
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description: "All our websites are fully responsive and work perfectly on all devices and screen sizes."
    },
    {
      icon: "🚀",
      title: "Fast Loading",
      description: "Optimized for speed to ensure the best user experience and improved search engine rankings."
    },
    {
      icon: "🔒",
      title: "Secure",
      description: "Built with security in mind, with SSL certificates and security best practices implemented."
    },
    {
      icon: "🔍",
      title: "SEO Optimized",
      description: "Search engine friendly code and structure to help improve your visibility in search results."
    },
    {
      icon: "🛠️",
      title: "Easy to Manage",
      description: "Simple and intuitive admin panels that make it easy to update and manage your website."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-zamanx-blue opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-zamanx-violet opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Why Choose Our Web Services?</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We build websites and digital solutions that not only look great but also perform exceptionally well.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-0 p-6 hover:shadow-lg hover:shadow-zamanx-blue/5 transition-all duration-300 h-full">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">Ready to Get Started?</h3>
            <p className="text-white/70 mb-6">
              Contact us today for a free consultation and let's discuss how we can help you build an amazing online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/923215372647" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="mr-2">
                  <path d="M17.6 6.3A8.3 8.3 0 0 0 12 4.4a8.2 8.2 0 0 0-8.2 8.2c0 1.4.4 2.9 1.1 4.1L4 21.2l4.5-1.2a8.4 8.4 0 0 0 3.5.7 8.2 8.2 0 0 0 8.2-8.2c0-2.2-.9-4.3-2.4-5.9l-.2-.3zm1.1 10.4c-.2.6-1.2 1.2-1.7 1.2-.4 0-.7.2-3.8-.8-3.2-1-5.2-3.4-5.4-3.6-.2-.2-1.4-1.8-1.4-3.5s.9-2.5 1.2-2.8c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.6.8 2 .9 2.1.1.2.1.4 0 .6-.1.2-.2.3-.3.4l-.4.5c-.2.1-.4.3-.2.6.2.3.9 1.3 1.8 2 1.2 1 2.2 1.3 2.6 1.5.3.1.5 0 .7-.1.2-.1.4-.7.7-1.3.2-.6.5-.6.8-.5.3.1 1.9 1 2.2 1.1.3.2.6.2.7.3.1.3.1 1-.1 1.7z"/>
                </svg>
                WhatsApp: 03215372647
              </a>
              <a 
                href="mailto:zamanxaistudio@gmail.com" 
                className="inline-flex items-center justify-center bg-zamanx-blue hover:bg-zamanx-blue/80 text-white px-6 py-3 rounded-md transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email: zamanxaistudio@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebServicesFeatures;
