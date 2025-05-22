
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'AI Tools', path: '/ai-tools' },
    { name: 'IPTV', path: '/iptv' },
    { name: 'Web Services', path: '/web-services' },
    { name: 'SMM Panel', path: '/smm' },
    { name: 'Contact', path: '/contact' },
  ];

  // Check if path matches current location
  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zamanx-darker/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <motion.div 
        className="container mx-auto px-4 py-4 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="flex items-center space-x-2">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-2xl font-bold text-gradient glow-text">ZamanX</span>
            <motion.span 
              className="text-xs absolute -top-1 -right-12 bg-gradient-to-r from-zamanx-violet to-zamanx-blue text-white px-1 rounded"
              animate={{ y: [0, -2, 0] }} 
              transition={{ duration: 2, repeat: Infinity }}
            >
              AI Studio
            </motion.span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`relative px-2 py-1 transition-colors duration-300 ${
                isActive(link.path) 
                ? 'text-zamanx-blue' 
                : 'text-white/80 hover:text-zamanx-blue'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {isActive(link.path) && (
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-zamanx-blue/10 to-zamanx-violet/10 rounded-md -z-0"
                  layoutId="navbar-active"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
          <a 
            href="https://wa.me/923215372647" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-700/20"
            >
              WhatsApp
            </Button>
          </a>
        </nav>

        {/* Mobile menu button */}
        <motion.button 
          className="md:hidden text-white hover:text-zamanx-blue transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-gradient-to-b from-zamanx-darker/95 to-zamanx-dark/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={link.path}
                  className={`block py-2 px-3 rounded-md transition-colors ${
                    isActive(link.path) 
                    ? 'text-white bg-gradient-to-r from-zamanx-blue/20 to-zamanx-violet/20 border-l-4 border-zamanx-blue' 
                    : 'text-white/80 hover:text-zamanx-blue hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <a 
                href="https://wa.me/923215372647" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                >
                  WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
