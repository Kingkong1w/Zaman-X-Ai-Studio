import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('General Inquiry');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Open WhatsApp with pre-filled message
    const whatsappMessage = `Hello, my name is ${name}. ${message} (Service: ${service})`;
    const whatsappUrl = `https://wa.me/923215372647?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Message sent!",
      description: "We've opened WhatsApp for you to complete your message.",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    setService('General Inquiry');
  };

  return (
    <div className="bg-blue-950/90 p-8 rounded-2xl animate-fade-in shadow-2xl">
      <h2 className="text-2xl font-bold mb-8 text-gradient">Send a Message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-zamanx-blue/20 border border-zamanx-blue/40 rounded-lg px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-zamanx-blue"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-white mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-zamanx-blue/20 border border-zamanx-blue/40 rounded-lg px-4 py-3 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-zamanx-blue"
            required
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-white mb-2">Service Interested In</label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full bg-blue-900/70 border border-blue-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zamanx-blue"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="AI Tools Access">AI Tools Access</option>
            <option value="IPTV Services">IPTV Services</option>
            <option value="Web Development">Web Development</option>
            <option value="SMM Panel">SMM Panel</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-white mb-2">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full bg-blue-900/70 border border-blue-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zamanx-blue"
            required
          ></textarea>
        </div>
        
        <Button 
          type="submit" 
          className="bg-gradient-to-r from-zamanx-blue to-zamanx-violet hover:from-zamanx-violet hover:to-zamanx-blue text-white w-full py-6"
        >
          Send Message <Send className="ml-2" size={18} />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
