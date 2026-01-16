import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

const heroImages = [
  'assets/image.png',
  'assets/image-copy-3.png',
  'assets/image-copy.png',
  'assets/image5.png',
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <section className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 relative bg-gradient-to-br from-lavender-100/60 to-paper-warm/80">
      <motion.div 
        className="flex flex-col justify-center px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-24 order-2 lg:order-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-block text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-4 sm:mb-8 pb-2 border-b-2 border-coral w-fit"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Welcome
        </motion.div>

        <motion.h1 
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-purple-800 mb-6 sm:mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A <span className="font-script text-coral">safe space</span>
          <br />
          to create.
        </motion.h1>

        <motion.p 
          className="font-sans text-base sm:text-lg md:text-xl text-text-main leading-relaxed mb-8 sm:mb-12 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          We bring people together through painting—so everyone can breathe, connect, and feel joy again.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto font-bold">
              Book a Session
            </Button>
          </Link>
          <a href="#about" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto font-bold">
              Learn More
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="relative h-[400px] sm:h-[500px] lg:h-full flex items-center justify-center px-4 sm:px-6 lg:px-16 py-8 sm:py-16 order-1 lg:order-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] perspective-[2000px]">
          <div className="relative w-full h-full">
            {heroImages.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 bg-paper-white shadow-2xl overflow-hidden"
                initial={{ rotateY: 0, opacity: 0 }}
                animate={{
                  rotateY: index === currentSlide ? 0 : index < currentSlide ? -180 : 0,
                  opacity: index === currentSlide ? 1 : 0,
                  zIndex: index === currentSlide ? 10 : 1,
                }}
                transition={{ duration: 1.2, ease: [0.4, 0.0, 0.2, 1] }}
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'left center',
                }}
              >
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-4 sm:bottom-8 lg:bottom-12 right-4 sm:right-12 lg:right-24 flex gap-2 sm:gap-4 z-20">
            <motion.button
              onClick={prevSlide}
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-paper-white border-2 border-text-main flex items-center justify-center text-text-main text-xl sm:text-2xl hover:bg-text-main hover:text-paper-white transition-colors shadow-card"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              ‹
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-paper-white border-2 border-text-main flex items-center justify-center text-text-main text-xl sm:text-2xl hover:bg-text-main hover:text-paper-white transition-colors shadow-card"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              ›
            </motion.button>
          </div>
          <div className="absolute bottom-4 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
            {heroImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 border-2 border-text-main transition-all ${
                  index === currentSlide ? 'bg-coral border-coral scale-125' : 'bg-transparent'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;