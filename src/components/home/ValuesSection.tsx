import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const values = [
  {
    title: 'Painting Experiences',
    description: 'We host guided painting sessions for schools, churches, families, and communities.',
  },
  {
    title: 'Art Materials',
    description: 'We produce quality art materials and kits—simple, neat, and ready to use.',
  },
  {
    title: 'Girl Child Support',
    description: 'We support the girl child through charity projects and creative opportunities.',
  },
];

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="offerings"
      ref={ref}
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-paper-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-24"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-coral text-xs sm:text-sm font-semibold tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-purple-800 tracking-tight px-4">
            Three simple ways we serve
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -12, scale: 1.02 }}
              className="text-center p-8 sm:p-10 lg:p-12 bg-paper-white shadow-card hover:shadow-card-hover transition-all duration-300 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-purple-600 before:via-coral before:to-mint"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4">
                {value.title}
              </h3>
              <p className="text-base sm:text-lg text-text-muted leading-loose">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;