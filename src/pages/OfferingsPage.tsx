import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const OfferingsPage = () => {
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);

  const isServicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const isCtaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  const services = [
    {
      title: 'Painting Experiences',
      description: 'We host guided painting sessions designed to bring people together and help everyone discover their inner artist.',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format&fit=crop',
      features: [
        'School painting programs',
        'Church group sessions',
        'Corporate team building',
        'Private events & celebrations',
        'Community gatherings',
        'Date night experiences',
      ],
      cta: 'Book A Session',
      link: '/contact',
    },
    {
      title: 'Art Materials',
      description: 'We produce and provide quality art materials that make creating easier and more enjoyable for artists at every level.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop',
      features: [
        'Curated painting kits',
        'Professional brushes',
        'Quality canvases',
        'Acrylic & oil paints',
        'Complete starter sets',
        'Custom bulk orders',
      ],
      cta: 'View Catalogue',
      link: '/catalogue',
    },
    {
      title: 'Girl Child Support',
      description: 'We\'re committed to empowering young girls through art education, mentorship, and creating opportunities for creative expression.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop',
      features: [
        'Free art classes for girls',
        'Mentorship programs',
        'Art supply donations',
        'Scholarship opportunities',
        'Creative workshops',
        'Community exhibitions',
      ],
      cta: 'Learn More',
      link: '/community',
    },
  ];

  return (
    <div className="min-h-screen relative">
      <section className="min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24 bg-lavender-100/40 relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-4 sm:mb-6 pb-2 border-b-2 border-coral inline-block">
            Our Services
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-purple-800 mb-4 sm:mb-6 leading-tight">
            Three Simple Ways<br />
            <span className="font-script text-coral">We Serve You</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-text-main leading-relaxed max-w-xl">
            From painting experiences to art materials and community support—we're here to make creativity accessible and joyful for everyone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] sm:h-[500px]"
        >
          <img
            src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1200&auto=format&fit=crop"
            alt="Art session"
            className="w-full h-full object-cover shadow-card"
          />
          <div className="absolute inset-0 bg-purple-600/10" />
        </motion.div>
      </section>

      <section ref={servicesRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-paper-white relative">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 lg:space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative h-[350px] sm:h-[400px] shadow-card overflow-hidden ${
                  index % 2 === 0 ? '' : 'lg:order-2'
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>

              <div className={index % 2 === 0 ? '' : 'lg:order-1'}>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-800 mb-4 sm:mb-6">
                  {service.title}
                </h3>
                <p className="font-sans text-base sm:text-lg text-text-main leading-loose mb-6 sm:mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base text-text-main">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-mint text-paper-white flex items-center justify-center text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="font-sans leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={service.link}>
                  <Button variant="primary" size="lg" className="w-full sm:w-auto font-bold">
                    {service.cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={ctaRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-purple-800 text-paper-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-coral rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-mint rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 sm:mb-8 tracking-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
          >
            Ready To Create Something Amazing?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl md:text-2xl leading-loose mb-8 sm:mb-12 text-paper-white/95"
          >
            Let's plan your painting experience. Tell us about your event, and we'll make it unforgettable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="light" size="lg" className="w-full sm:w-auto font-bold">
                Book Your Session
              </Button>
            </Link>
            <Link to="/catalogue" className="w-full sm:w-auto">
              <Button variant="outline-light" size="lg" className="w-full sm:w-auto font-bold">
                Browse Materials
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OfferingsPage;