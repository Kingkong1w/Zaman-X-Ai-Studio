
import { Mail, Smartphone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="glass-card p-8 rounded-2xl h-full">
      <h2 className="text-2xl font-bold mb-8 text-gradient">Contact Information</h2>
      
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="bg-zamanx-violet/20 p-3 rounded-full mr-4">
            <Smartphone className="text-zamanx-violet w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white font-medium mb-1">WhatsApp / Phone</h3>
            <a 
              href="https://wa.me/923215372647" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zamanx-blue hover:underline"
            >
              +92 321 5372647
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-zamanx-blue/20 p-3 rounded-full mr-4">
            <Mail className="text-zamanx-blue w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white font-medium mb-1">Email Address</h3>
            <a 
              href="mailto:zamanxaistudio@gmail.com" 
              className="text-zamanx-blue hover:underline"
            >
              zamanxaistudio@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-zamanx-violet/20 p-3 rounded-full mr-4">
            <MapPin className="text-zamanx-violet w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white font-medium mb-1">Location</h3>
            <p className="text-white/70">
              Lahore, Pakistan
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-zamanx-blue/20 p-3 rounded-full mr-4">
            <Clock className="text-zamanx-blue w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white font-medium mb-1">Working Hours</h3>
            <p className="text-white/70">
              Monday - Saturday: 10:00 AM - 8:00 PM
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-10 pt-6 border-t border-white/10">
        <h3 className="text-white font-medium mb-3">Follow Us</h3>
        <div className="flex space-x-4">
          <a 
            href="https://wa.me/923215372647" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none">
              <path d="M17.6 6.3A8.3 8.3 0 0 0 12 4.4a8.2 8.2 0 0 0-8.2 8.2c0 1.4.4 2.9 1.1 4.1L4 21.2l4.5-1.2a8.4 8.4 0 0 0 3.5.7 8.2 8.2 0 0 0 8.2-8.2c0-2.2-.9-4.3-2.4-5.9l-.2-.3zm1.1 10.4c-.2.6-1.2 1.2-1.7 1.2-.4 0-.7.2-3.8-.8-3.2-1-5.2-3.4-5.4-3.6-.2-.2-1.4-1.8-1.4-3.5s.9-2.5 1.2-2.8c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.6.8 2 .9 2.1.1.2.1.4 0 .6-.1.2-.2.3-.3.4l-.4.5c-.2.1-.4.3-.2.6.2.3.9 1.3 1.8 2 1.2 1 2.2 1.3 2.6 1.5.3.1.5 0 .7-.1.2-.1.4-.7.7-1.3.2-.6.5-.6.8-.5.3.1 1.9 1 2.2 1.1.3.2.6.2.7.3.1.3.1 1-.1 1.7z"/>
            </svg>
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-purple-600 to-pink-500 p-2 rounded-full transition-transform hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-transform hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
