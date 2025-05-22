import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const SmmServices = () => {
  const services = [
    {
      platform: "Instagram",
      services: [
        { name: "Followers", price: "Rs. 200 - 500 / 1K", speed: "Fast" },
        { name: "Likes", price: "Rs. 100 - 300 / 1K", speed: "Instant" },
        { name: "Views", price: "Rs. 50 - 150 / 1K", speed: "Instant" }
      ],
      color: "from-purple-600 to-pink-500"
    },
    {
      platform: "TikTok",
      services: [
        { name: "Followers", price: "Rs. 300 - 600 / 1K", speed: "Medium" },
        { name: "Likes", price: "Rs. 150 - 350 / 1K", speed: "Fast" },
        { name: "Views", price: "Rs. 80 - 200 / 1K", speed: "Instant" }
      ],
      color: "from-black to-gray-800"
    },
    {
      platform: "YouTube",
      services: [
        { name: "Subscribers", price: "Rs. 500 - 1000 / 1K", speed: "Slow" },
        { name: "Views", price: "Rs. 200 - 400 / 1K", speed: "Medium" },
        { name: "Watch Time", price: "Rs. 1000 - 2000 / 1K min", speed: "Medium" }
      ],
      color: "from-red-600 to-red-800"
    },
    {
      platform: "Facebook",
      services: [
        { name: "Page Likes", price: "Rs. 300 - 700 / 1K", speed: "Medium" },
        { name: "Post Likes", price: "Rs. 150 - 400 / 1K", speed: "Fast" },
        { name: "Video Views", price: "Rs. 100 - 300 / 1K", speed: "Fast" }
      ],
      color: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Premium SMM Services</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Grow your social media presence with our high-quality services. We offer the best prices in the market with fast delivery and 24/7 support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-0 overflow-hidden hover:shadow-lg hover:shadow-zamanx-blue/10 transition-all duration-300">
              <div className={`h-2 w-full bg-gradient-to-r ${service.color}`}></div>
              <CardHeader>
                <CardTitle className="text-white text-2xl">{service.platform}</CardTitle>
                <CardDescription className="text-white/60">Premium Growth Services</CardDescription>
              </CardHeader>
              <CardContent className="text-white/80">
                <ul className="space-y-3">
                  {service.services.map((item, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <span>{item.name}</span>
                      <span className="text-sm opacity-80">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a 
                  href={`https://wa.me/923215372647?text=I'm%20interested%20in%20${service.platform}%20SMM%20services`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full"
                >
                  <Button className="w-full bg-blue-600 text-white hover:bg-violet-700 transition-colors font-semibold shadow-lg py-5">
                    Order Now
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">Reseller SMM Panel</h3>
            <p className="text-white/70 mb-6">
              Start your own SMM business with our ready-to-use reseller panel. Get wholesale pricing and premium features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="glass-card p-4 text-center flex-1">
                <h4 className="text-white font-medium">Basic Panel</h4>
                <p className="text-3xl font-bold text-gradient my-2">Rs. 7,000</p>
                <p className="text-white/60 text-sm">One-time setup fee</p>
              </div>
              <div className="glass-card p-4 text-center flex-1">
                <h4 className="text-white font-medium">Premium Panel</h4>
                <p className="text-3xl font-bold text-gradient my-2">Rs. 10,000</p>
                <p className="text-white/60 text-sm">With payment gateway</p>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="https://wa.me/923215372647?text=I'm%20interested%20in%20your%20Reseller%20SMM%20Panel" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-zamanx-violet to-zamanx-blue hover:from-zamanx-blue hover:to-zamanx-violet shadow-lg shadow-zamanx-violet/20 text-white px-8 py-6 text-lg font-medium">
                  Get Your Own Panel
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmmServices;
