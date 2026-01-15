import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const services = [
    'Painting Experiences',
    'Art Materials Production',
    'Girl Child Support',
    'School Sessions',
    'Church Groups',
    'Private Events',
  ];

  return (
    <footer className="bg-[#2D2621] text-paper-white/70 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-paper-texture" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 mb-8 sm:mb-12">
          
          <div className="text-center md:text-left lg:col-span-4">
            <Link to="/" className="inline-block">
              <motion.div 
                className="flex flex-col items-center md:items-start gap-3 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/assets/image2.png" 
                  alt="SipNPaint Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
                <div className="text-xl sm:text-2xl font-semibold text-paper-white tracking-[1px] sm:tracking-[2px] lowercase leading-none">
                  sip<span className="text-coral">n</span>paint
                  <span className="block sm:inline">Experience</span>
                </div>
              </motion.div>
            </Link>
            <p className="text-sm sm:text-base leading-relaxed text-paper-white/60 italic">
              Creating colorful memories, one brushstroke at a time.
            </p>
          </div>

          <div className="text-center md:text-left lg:col-span-3">
            <h3 className="text-paper-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg tracking-wide uppercase">
              Our Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm sm:text-base hover:text-coral transition-colors duration-300 cursor-default">
                    • {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left lg:col-span-2">
            <h3 className="text-paper-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg tracking-wide uppercase">
              Get In Touch
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="tel:+2341234567890"
                className="flex items-center justify-center md:justify-start gap-3 text-sm sm:text-base hover:text-coral transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span>+234 123 456 7890</span>
              </a>

              <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-coral transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-coral transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-coral transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          <motion.div 
            className="hidden lg:flex lg:col-span-3 items-center justify-center"
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src="/assets/image5.png"
              alt="Paint Brush"
              className="w-full max-w-[1000px] h-auto object-contain drop-shadow-2xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [-5, 5, -5]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-paper-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-paper-white/50">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} SipNPaintExperience. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link to="/privacy" className="hover:text-coral transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-coral transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 8px, #e95793 8px, #e95793 10px, transparent 10px, transparent 15px, #e95793 15px, #e95793 17px)',
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;