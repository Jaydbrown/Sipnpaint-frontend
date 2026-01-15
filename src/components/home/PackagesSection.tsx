import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { PACKAGES } from '@/lib/constants';
import Button from '@/components/ui/Button';
import { useBookingStore } from '@/lib/index';

const PackagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { setSelectedPackage } = useBookingStore();

  const getGradientClass = (color: string) => {
    const gradients = {
      purple: 'from-purple-800 to-purple-600',
      coral: 'from-coral to-[#d63384]',
      mint: 'from-mint to-[#14b8a6]',
    };
    return gradients[color as keyof typeof gradients] || gradients.purple;
  };

  const getHoverBorderClass = (color: string) => {
    const borders = {
      purple: 'hover:border-purple-600',
      coral: 'hover:border-coral',
      mint: 'hover:border-mint',
    };
    return borders[color as keyof typeof borders] || borders.purple;
  };

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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="packages"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-[#F8FAFC]/40 to-paper-warm/60"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-coral text-xs sm:text-sm font-semibold tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
            Our Packages
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-purple-800 mb-4 sm:mb-6 tracking-tight">
            Choose Your Experience
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed px-4">
            From intimate gatherings to grand celebrations—we have a package that fits your vision.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={item}
              whileHover={{ y: -12 }}
              className={`bg-paper-white border-2 sm:border-3 border-text-main ${getHoverBorderClass(pkg.color)} transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col`}
            >
              <div className={`bg-gradient-to-br ${getGradientClass(pkg.color)} text-paper-white p-6 sm:p-8 text-center relative`}>
                {pkg.badge && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/25 backdrop-blur-lg border border-white/30 text-paper-white px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold tracking-wide uppercase">
                    {pkg.badge}
                  </div>
                )}
                <h3 className="text-xl sm:text-2xl font-bold tracking-wide uppercase mb-2 sm:mb-3">
                  {pkg.name}
                </h3>
                <div className="text-4xl sm:text-5xl font-light mb-1 sm:mb-2">
                  ₦{pkg.price.toLocaleString()}
                </div>
                <p className="text-xs sm:text-sm opacity-90">{pkg.attendees}</p>
              </div>

              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-text-main">
                      <span className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br ${getGradientClass(pkg.color)} text-paper-white flex items-center justify-center text-[10px] sm:text-xs font-bold mt-0.5`}>
                        ✓
                      </span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  onClick={() => setSelectedPackage(pkg.id)}
                  className="block"
                >
                  <Button 
                    variant="primary" 
                    className={`w-full bg-gradient-to-r ${getGradientClass(pkg.color)} border-transparent hover:bg-transparent hover:border-text-main text-sm sm:text-base`}
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;