import { Button } from "@/components/ui/button";
import { Tv, Check } from "lucide-react";
import { motion } from "framer-motion";

type PackageProps = {
  name: string;
  channels: string;
  validity: string;
  price: string;
  features: string[];
  popular?: boolean;
};

const PackageCard = ({ name, channels, validity, price, features, popular }: PackageProps) => {
  return (
    <motion.div 
      className={`glass-card relative ${popular ? 'border-zamanx-violet' : 'border-white/10'} p-6 rounded-xl`}
      whileHover={{ 
        y: -10,
        boxShadow: "0px 10px 20px rgba(155, 48, 255, 0.2)",
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-zamanx-violet text-white text-xs py-1 px-3 rounded-full">
          Most Popular
        </div>
      )}
      <div className="flex items-center justify-center mb-4">
        <Tv className="w-10 h-10 text-zamanx-blue" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4 text-center">{name}</h3>
      <div className="mb-4 text-center">
        <span className="text-3xl font-bold text-gradient">{price}</span>
        <span className="text-white/60 text-sm">/{validity}</span>
      </div>
      <div className="mb-4 text-center">
        <span className="text-white/80">{channels}</span>
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-center text-sm text-white/70"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Check className="w-4 h-4 mr-2 text-zamanx-blue" />
            {feature}
          </motion.li>
        ))}
      </ul>
      <a 
        href={`https://wa.me/923215372647?text=I'm%20interested%20in%20your%20${name}%20IPTV%20Package`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            className={`w-full ${popular 
              ? 'bg-gradient-to-r from-[#4158D0] to-[#C850C0] hover:from-[#C850C0] hover:to-[#4158D0]' 
              : 'bg-gradient-to-r from-[#0072ff] to-[#00c6ff] hover:from-[#00c6ff] hover:to-[#0072ff]'} 
              text-white font-bold py-6 px-4 rounded-lg shadow-lg ${popular ? 'shadow-purple-500/20' : 'shadow-blue-500/20'}`}
          >
            Order Now
          </Button>
        </motion.div>
      </a>
    </motion.div>
  );
};

const IptvPackages = () => {
  const packages: PackageProps[] = [
    {
      name: "Basic Local",
      channels: "300+ (PK/IN/UK)",
      validity: "1 Month",
      price: "£15",
      features: [
        "300+ Local Channels",
        "Pakistani & Indian Content",
        "UK Channels",
        "7 Days Support",
        "Works on All Devices"
      ]
    },
    {
      name: "Standard",
      channels: "500+ + Sports",
      validity: "3 Months",
      price: "£30",
      features: [
        "500+ International Channels",
        "Premium Sports Channels",
        "HD Quality Streams",
        "24/7 Support",
        "Multi-device Support"
      ],
      popular: true
    },
    {
      name: "Family Plan",
      channels: "1000+ Channels",
      validity: "6 Months",
      price: "£40",
      features: [
        "1000+ International Channels",
        "Premium Sports & Movies",
        "6 Month Validity",
        "24/7 Support",
        "4 Device Connections"
      ]
    },
    {
      name: "Premium Int'l",
      channels: "2000+ + Movies",
      validity: "12 Months",
      price: "£60",
      features: [
        "2000+ Global Channels",
        "Full Movies Library",
        "Series & TV Shows",
        "Premium Support",
        "Unlimited Device Connections"
      ]
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-zamanx-blue opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-zamanx-violet opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">Our IPTV Packages</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Choose the perfect package for your entertainment needs. All packages include instant activation and premium support.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IptvPackages;
