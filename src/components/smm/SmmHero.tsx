
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SmmHero = () => {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-zamanx-blue blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-zamanx-violet blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.25, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-gradient">SMM Panel</span> <br />
            <span className="text-white">Social Media Growth Solutions</span>
          </motion.h1>
          <motion.p 
            className="text-white/70 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Boost your social media presence with our premium SMM services. Get real followers, likes, views, and comments at affordable prices.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://wa.me/923215372647?text=I'm%20interested%20in%20your%20SMM%20Panel%20services" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] hover:from-[#3F5EFB] hover:to-[#FC466B] shadow-lg shadow-purple-500/20 text-white px-10 py-7 text-lg font-bold rounded-xl">
                Get Started on WhatsApp
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmmHero;
