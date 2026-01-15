import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PaperSection from '@/components/ui/PaperSection';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <PaperSection 
      hasTornTop
      hasTornBottom
      bgColor="#FDFCFA"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12"
    >
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] sm:h-[500px] lg:h-[600px] order-2 lg:order-1"
        >
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop"
            alt="Our Story"
            className="w-full h-full object-cover shadow-card"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-purple-800 mb-6 sm:mb-8 tracking-tight">
            Who We Are
          </h2>

          <p className="text-base sm:text-lg text-text-main leading-loose mb-4 sm:mb-6">
            Sipnpaintexperience is a creative community built on one simple thing: people deserve joy.
          </p>

          <p className="text-base sm:text-lg text-text-main leading-loose mb-4 sm:mb-6">
            We plan painting experiences that bring hearts together—in schools, churches, communities, and events.
          </p>

          <p className="text-lg sm:text-xl text-purple-600 font-medium italic my-6 sm:my-8 pl-4 sm:pl-6 border-l-4 border-coral">
            This is bigger than painting. It's about connection, confidence, and community.
          </p>

          <p className="text-base sm:text-lg text-text-main leading-loose">
            We don't just host sessions. We create moments people remember.
          </p>
        </motion.div>
      </div>
    </PaperSection>
  );
};

export default AboutSection;