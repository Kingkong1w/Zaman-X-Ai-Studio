
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-zamanx-dark min-h-screen">
      <Navbar />
      
      <div className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-zamanx-blue opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-zamanx-violet opacity-20 blur-3xl animate-float-slow"></div>
        
        <div className="text-center z-10 glass-card p-12 rounded-xl">
          <h1 className="text-8xl font-bold mb-4 text-gradient">404</h1>
          <p className="text-xl text-white mb-8">Oops! This page doesn't exist</p>
          <Link to="/">
            <Button className="bg-gradient-to-r from-zamanx-blue to-zamanx-violet hover:from-zamanx-violet hover:to-zamanx-blue text-white">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
