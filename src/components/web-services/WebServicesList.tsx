import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon, GlobeIcon, ShoppingBagIcon, MessageSquareIcon, InstagramIcon } from "lucide-react";

const WebServicesList = () => {
  const services = [
    {
      title: "Portfolio Website",
      description: "Professional portfolio websites for personal brands, freelancers, and artists.",
      features: ["Custom Design", "Mobile Responsive", "Contact Form", "SEO Optimization"],
      price: "Rs. 3,000 - 6,000",
      icon: <GlobeIcon className="h-8 w-8 text-zamanx-blue" />,
      color: "from-zamanx-blue to-zamanx-violet"
    },
    {
      title: "Business Website",
      description: "Professional websites for shops, businesses, and brands with premium features.",
      features: ["5-10 Pages", "Admin Panel", "Fully Responsive", "SEO Optimization"],
      price: "Rs. 7,000 - 12,000",
      icon: <GlobeIcon className="h-8 w-8 text-zamanx-blue" />,
      color: "from-zamanx-blue to-zamanx-violet"
    },
    {
      title: "E-Commerce Website",
      description: "Complete online store with shopping cart, payment integration, and product management.",
      features: ["Product Management", "Payment Gateway", "Order Tracking", "Customer Dashboard"],
      price: "Rs. 15,000 - 25,000",
      icon: <ShoppingBagIcon className="h-8 w-8 text-zamanx-violet" />,
      color: "from-zamanx-violet to-zamanx-blue"
    },
    {
      title: "WhatsApp Automation",
      description: "AI-powered chatbot setup for WhatsApp Business API with custom flows.",
      features: ["Auto Responses", "Menu System", "Lead Capture", "Payment Links"],
      price: "Rs. 4,999 - 9,999",
      icon: <MessageSquareIcon className="h-8 w-8 text-zamanx-blue" />,
      color: "from-zamanx-blue to-zamanx-violet"
    },
    {
      title: "SMM Panel Setup",
      description: "Custom SMM panel setup for resellers with payment gateway integration.",
      features: ["Admin Dashboard", "Service Management", "Payment Gateway", "User Management"],
      price: "Rs. 7,000 - 10,000",
      icon: <InstagramIcon className="h-8 w-8 text-zamanx-violet" />,
      color: "from-zamanx-violet to-zamanx-blue"
    },
    {
      title: "Custom AI Tools Access",
      description: "Bespoke setup for AI tools access with custom interfaces and APIs.",
      features: ["Tool Integration", "Custom Interface", "API Access", "Regular Updates"],
      price: "Rs. 5,000+",
      icon: <GlobeIcon className="h-8 w-8 text-zamanx-blue" />,
      color: "from-zamanx-blue to-zamanx-violet"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Our Services & Pricing</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We offer a wide range of web and digital services to meet your needs at affordable prices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-0 overflow-hidden hover:shadow-lg hover:shadow-zamanx-blue/10 transition-all duration-300">
              <div className={`h-1 w-full bg-gradient-to-r ${service.color}`}></div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {service.icon}
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-white/60">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-white/80">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-zamanx-blue" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <p className="text-lg font-semibold text-gradient">{service.price}</p>
                </div>
              </CardContent>
              <CardFooter>
                <a 
                  href={`https://wa.me/923215372647?text=I'm%20interested%20in%20your%20${service.title}%20service`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full"
                >
                  <Button className="w-full bg-blue-600 text-white hover:bg-violet-700 transition-colors font-semibold shadow-lg">
                    Book Now on WhatsApp
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebServicesList;
