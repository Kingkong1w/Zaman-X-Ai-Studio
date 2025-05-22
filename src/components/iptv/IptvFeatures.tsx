
import { Check, Tv, Smartphone, Clock, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    className="glass-card p-6 rounded-xl"
    whileHover={{ 
      y: -5,
      boxShadow: "0px 10px 15px rgba(0, 153, 255, 0.2)",
    }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      <div className="p-3 rounded-lg bg-zamanx-violet/20 mr-4">
        <Icon className="w-6 h-6 text-zamanx-blue" />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-white/70">{description}</p>
  </motion.div>
);

const IptvFeatures = () => {
  const features = [
    {
      icon: Tv,
      title: "Multi-Device Support",
      description: "Works on Smart TV, Android Box, Mobile, Tablet, PC, and Mac. Use M3U or dedicated apps."
    },
    {
      icon: Clock,
      title: "Instant Activation",
      description: "Get access within minutes after payment. No waiting time, start watching immediately."
    },
    {
      icon: Smartphone,
      title: "User-Friendly Interface",
      description: "Easy to navigate interface with categories, search, and favorites for a smooth experience."
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to assist you with any issues."
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">Premium IPTV Features</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Enjoy a seamless entertainment experience with our feature-rich IPTV service
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <motion.div 
          className="mt-16 glass-card p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Why Choose Our IPTV Service?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Check className="w-5 h-5 text-zamanx-blue mr-2 mt-1 flex-shrink-0" />
              <p className="text-white/70">High-quality streaming with minimal buffering</p>
            </motion.div>
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Check className="w-5 h-5 text-zamanx-blue mr-2 mt-1 flex-shrink-0" />
              <p className="text-white/70">Regular updates with new channels and content</p>
            </motion.div>
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Check className="w-5 h-5 text-zamanx-blue mr-2 mt-1 flex-shrink-0" />
              <p className="text-white/70">Electronic Program Guide (EPG) for most channels</p>
            </motion.div>
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Check className="w-5 h-5 text-zamanx-blue mr-2 mt-1 flex-shrink-0" />
              <p className="text-white/70">Catch-up TV functionality for selected channels</p>
            </motion.div>
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Check className="w-5 h-5 text-zamanx-blue mr-2 mt-1 flex-shrink-0" />
              <p className="text-white/70">Premium sports channels including PPV events</p>
            </motion.div>
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Check className="w-5 h-5 text-zamanx-blue mr-2 mt-1 flex-shrink-0" />
              <p className="text-white/70">VOD (Video on Demand) library with latest movies</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <a 
              href="https://wa.me/923215372647?text=I'd%20like%20to%20learn%20more%20about%20your%20IPTV%20Features" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-[#5433FF] to-[#20BDFF] hover:from-[#20BDFF] hover:to-[#5433FF] shadow-lg shadow-blue-500/20 text-white px-8 py-6 text-lg font-bold rounded-xl">
                Learn More About Features
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IptvFeatures;
