import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutPage = () => {
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);

  const isMissionInView = useInView(missionRef, { once: true, margin: '-100px' });
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const isTimelineInView = useInView(timelineRef, { once: true, margin: '-100px' });

  const values = [
    { title: 'Community First', description: 'We believe in the power of people coming together. Every session is designed to build connections, not just paintings.' },
    { title: 'No Judgment Zone', description: 'There\'s no such thing as a bad painting here. We celebrate every brushstroke and encourage every creative choice.' },
    { title: 'Joy in Process', description: 'It\'s not about the final product. It\'s about the experience, the laughter, and the memories made along the way.' },
    { title: 'Intentional Inclusion', description: 'Everyone is welcome here. We actively create spaces where people from all walks of life feel seen and valued.' },
    { title: 'Quality Materials', description: 'We invest in good supplies because we believe people deserve tools that make creating easier, not harder.' },
    { title: 'Give Back', description: 'A portion of every session supports our charity work with the girl child. Creating art, creating opportunity.' },
  ];

  const timeline = [
    { year: '2019', title: 'The Beginning', description: 'Started with one room, five people, and a dream to make art accessible to everyone.' },
    { year: '2020', title: 'Going Virtual', description: 'Adapted to keep people connected during challenging times with online painting sessions.' },
    { year: '2021', title: 'Expanding Locations', description: 'Opened three new studios across Lagos to bring creativity closer to more communities.' },
    { year: '2022', title: 'Girl Child Initiative', description: 'Launched our charity program supporting young girls through art education.' },
    { year: '2023', title: 'Corporate Partnerships', description: 'Started working with companies to bring team-building through creativity.' },
    { year: '2024', title: 'National Reach', description: 'Expanded to Warri and counting—bringing our mission to more people across Nigeria.' },
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
            Our Story
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-purple-800 mb-4 sm:mb-6 leading-tight">
            Creating Joy Through<br />
            <span className="font-script text-coral">Art & Connection</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-text-main leading-relaxed max-w-xl">
            Sipnpaintexperience is a premium painting experience brand—built for modern social living. We curate elevated paint moments through our DIY kits, professional painting setups, private and corporate bookings, and venue-based experiences—supported with nationwide delivery and seamless coordination. Beyond events, we are committed to impact: we advocate for the Girl Child by creating creative opportunities, safe community spaces, and purpose-led activations that inspire confidence, expression, and growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] sm:h-[500px]"
        >
          <img
            src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&auto=format&fit=crop"
            alt="People painting together"
            className="w-full h-full object-cover shadow-card"
          />
          <div className="absolute inset-0 bg-purple-600/10" />
        </motion.div>
      </section>

      <section ref={missionRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-paper-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-4 sm:mb-6">
              Our Mission
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-800 mb-6 sm:mb-8 tracking-tight">
              Why We Exist
            </h2>
            <p className="font-sans text-base sm:text-lg text-text-main leading-loose mb-4 sm:mb-6">
              In a world that moves too fast, we create spaces where people can slow down, pick up a brush, and remember what it feels like to just create.
            </p>
            <p className="font-sans text-base sm:text-lg text-text-main leading-loose mb-6 sm:mb-8">
              SipNPaintExperience isn't just about painting. It's about building confidence, fostering connection, and giving people permission to be beginners again.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {[
                { number: '5,000+', label: 'Happy Painters' },
                { number: '200+', label: 'Events Hosted' },
                { number: '50+', label: 'Community Partners' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="text-center p-6 sm:p-8 bg-paper-white shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="font-sans text-xs text-text-muted uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
          >
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop"
              alt="Art supplies"
              className="w-full h-full object-cover shadow-card"
            />
          </motion.div>
        </div>
      </section>

      <section ref={valuesRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-paper-warm/60 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
              Our Values
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-800 mb-4 sm:mb-6 tracking-tight">
              What We Stand For
            </h2>
            <p className="font-sans text-base sm:text-lg text-text-muted leading-relaxed">
              These principles guide everything we do—from how we teach to how we treat our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="text-center p-8 sm:p-10 lg:p-12 bg-paper-white shadow-card hover:shadow-card-hover transition-all relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-coral"
              >
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4">
                  {value.title}
                </h3>
                <p className="font-sans text-base sm:text-lg text-text-muted leading-loose">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={timelineRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-lavender-100/40 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
              Our Journey
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-800 tracking-tight">
              How We Got Here
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-600 transform -translate-x-1/2 hidden lg:block" />

            <div className="space-y-12 sm:space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:text-right'
                  }`}
                >
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-purple-600 rounded-full border-4 border-paper-white shadow-lg z-10 hidden lg:block" />

                  <div className={index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-paper-white p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all"
                    >
                      <div className="inline-block bg-purple-600 text-paper-white px-3 sm:px-4 py-2 font-bold text-sm mb-3 sm:mb-4">
                        {item.year}
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-purple-800 mb-2 sm:mb-3">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {index % 2 === 0 && <div className="hidden lg:block" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;