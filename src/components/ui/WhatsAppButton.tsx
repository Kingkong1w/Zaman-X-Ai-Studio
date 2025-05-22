
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolling down, show when scrolling up
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a 
          href="https://wa.me/923215372647" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          aria-label="Contact on WhatsApp"
        >
          <motion.div 
            className="bg-green-600 hover:bg-green-700 p-4 rounded-full shadow-lg shadow-green-700/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              boxShadow: ["0px 0px 0px rgba(22, 163, 74, 0.5)", "0px 0px 20px rgba(22, 163, 74, 0.7)", "0px 0px 0px rgba(22, 163, 74, 0.5)"],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="none">
              <path d="M17.6 6.3A8.3 8.3 0 0 0 12 4.4a8.2 8.2 0 0 0-8.2 8.2c0 1.4.4 2.9 1.1 4.1L4 21.2l4.5-1.2a8.4 8.4 0 0 0 3.5.7 8.2 8.2 0 0 0 8.2-8.2c0-2.2-.9-4.3-2.4-5.9l-.2-.3zm1.1 10.4c-.2.6-1.2 1.2-1.7 1.2-.4 0-.7.2-3.8-.8-3.2-1-5.2-3.4-5.4-3.6-.2-.2-1.4-1.8-1.4-3.5s.9-2.5 1.2-2.8c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.6.8 2 .9 2.1.1.2.1.4 0 .6-.1.2-.2.3-.3.4l-.4.5c-.2.1-.4.3-.2.6.2.3.9 1.3 1.8 2 1.2 1 2.2 1.3 2.6 1.5.3.1.5 0 .7-.1.2-.1.4-.7.7-1.3.2-.6.5-.6.8-.5.3.1 1.9 1 2.2 1.1.3.2.6.2.7.3.1.3.1 1-.1 1.7z"/>
            </svg>
          </motion.div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
