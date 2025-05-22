
import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zamanx-darker py-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-zamanx-blue blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-zamanx-violet blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="relative">
                <span className="text-2xl font-bold text-gradient">ZamanX</span>
                <span className="text-xs absolute -top-1 -right-12 bg-zamanx-violet text-white px-1 rounded">AI Studio</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm mb-4">
              Premium AI, Web, and Digital services at affordable prices.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/923215372647" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-zamanx-blue transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M17.6 6.3A8.3 8.3 0 0 0 12 4.4a8.2 8.2 0 0 0-8.2 8.2c0 1.4.4 2.9 1.1 4.1L4 21.2l4.5-1.2a8.4 8.4 0 0 0 3.5.7 8.2 8.2 0 0 0 8.2-8.2c0-2.2-.9-4.3-2.4-5.9l-.2-.3zm1.1 10.4c-.2.6-1.2 1.2-1.7 1.2-.4 0-.7.2-3.8-.8-3.2-1-5.2-3.4-5.4-3.6-.2-.2-1.4-1.8-1.4-3.5s.9-2.5 1.2-2.8c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.6.8 2 .9 2.1.1.2.1.4 0 .6-.1.2-.2.3-.3.4l-.4.5c-.2.1-.4.3-.2.6.2.3.9 1.3 1.8 2 1.2 1 2.2 1.3 2.6 1.5.3.1.5 0 .7-.1.2-.1.4-.7.7-1.3.2-.6.5-.6.8-.5.3.1 1.9 1 2.2 1.1.3.2.6.2.7.3.1.3.1 1-.1 1.7z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-zamanx-blue transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-zamanx-blue transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-zamanx-blue transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-zamanx-blue transition-colors text-sm">About Us</Link></li>
              <li><Link to="/ai-tools" className="text-white/70 hover:text-zamanx-blue transition-colors text-sm">AI Tools</Link></li>
              <li><Link to="/iptv" className="text-white/70 hover:text-zamanx-blue transition-colors text-sm">IPTV Services</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/web-services" className="text-white/70 hover:text-zamanx-blue transition-colors text-sm">Web Development</Link></li>
              <li><Link to="/smm" className="text-white/70 hover:text-zamanx-blue transition-colors text-sm">SMM Panel</Link></li>
              <li><Link to="/ai-tools" className="text-white/70 hover:text-zamanx-blue transition-colors text-sm">AI Tools Access</Link></li>
              <li><Link to="/web-services" className="text-white/70 hover:text-zamanx-blue transition-colors text-sm">WhatsApp Automation</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70 text-sm">WhatsApp: <a href="https://wa.me/923215372647" target="_blank" rel="noopener noreferrer" className="text-zamanx-blue hover:underline">03215372647</a></li>
              <li className="text-white/70 text-sm">Email: <a href="mailto:zamanxaistudio@gmail.com" className="text-zamanx-blue hover:underline">zamanxaistudio@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          © 2025 ZamanX AI Studio – All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
