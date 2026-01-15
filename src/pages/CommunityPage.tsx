import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const CommunityPage = () => {
  const whyRef = useRef(null);
  const approachRef = useRef(null);
  const beliefRef = useRef(null);
  const storiesRef = useRef(null);
  const programsRef = useRef(null);
  const supportRef = useRef(null);

  const isWhyInView = useInView(whyRef, { once: true, margin: '-100px' });
  const isApproachInView = useInView(approachRef, { once: true, margin: '-100px' });
  const isBeliefInView = useInView(beliefRef, { once: true, margin: '-100px' });
  const isStoriesInView = useInView(storiesRef, { once: true, margin: '-100px' });
  const isProgramsInView = useInView(programsRef, { once: true, margin: '-100px' });
  const isSupportInView = useInView(supportRef, { once: true, margin: '-100px' });

  const approaches = [
    { title: 'Free Art Classes', description: 'Every month, we provide completely free painting sessions for girls aged 8-18. No strings attached. Just space to create, experiment, and be messy.' },
    { title: 'Art Education', description: 'We teach technique, yes. But more importantly, we teach girls that their artistic choices are valid, that there\'s no "wrong" way to express themselves.' },
    { title: 'Confidence Building', description: 'Through art, girls learn to trust their instincts, make bold choices, and stand by their creative decisions—skills that translate to every area of life.' },
    { title: 'Mentorship', description: 'We connect girls with female artists, entrepreneurs, and professionals who model what\'s possible when women claim their creative power.' },
    { title: 'Materials & Tools', description: 'Every girl receives art supplies to take home. Because creativity shouldn\'t stop when the class ends. Their practice deserves to continue.' },
    { title: 'Showcase Opportunities', description: 'We create platforms for girls to exhibit their work, to be seen, to experience what it feels like when others witness and value what they\'ve created.' },
  ];

  const stories = [
    { name: 'Amara, Age 14', role: 'Aspiring Artist', quote: 'I used to think art was for rich people. Now I know it\'s for anyone brave enough to pick up a brush. I\'m brave enough.', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop' },
    { name: 'Chioma, Age 16', role: 'Scholarship Recipient', quote: 'The program taught me that making mistakes is part of creating. Now I apply that to everything—school, friendships, life.', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&auto=format&fit=crop' },
    { name: 'Blessing, Age 12', role: 'Young Creator', quote: 'For the first time, adults were asking what I wanted to create instead of telling me what to make. That changed something in me.', image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&auto=format&fit=crop' },
    { name: 'Zainab, Age 15', role: 'Mentee', quote: 'I didn\'t know women could be professional artists. Meeting the mentors showed me I could build a life around creating. That\'s what I\'m doing.', image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&auto=format&fit=crop' },
  ];

  const programs = [
    {
      title: 'Monthly Free Sessions',
      description: 'Every first Saturday of the month, we host completely free painting sessions for girls. All materials provided. All girls welcome.',
      features: ['2-hour creative sessions', 'All supplies included', 'Take home your artwork', 'Receive art kit to continue at home', 'Snacks and refreshments', 'Safe, supportive environment'],
      cta: 'Register A Girl',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop',
    },
    {
      title: 'Mentorship Program',
      description: 'We pair girls with female artists and creatives for ongoing mentorship, guidance, and exposure to creative career paths.',
      features: ['6-month mentorship commitment', 'Monthly one-on-one sessions', 'Studio visits and job shadowing', 'Portfolio development support', 'Career guidance and planning', 'Network building opportunities'],
      cta: 'Apply For Mentorship',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop',
    },
    {
      title: 'Annual Exhibition',
      description: 'Every year, we host a public exhibition showcasing work created by girls in our program. Their art, their voices, their stories—centered.',
      features: ['Professional gallery space', 'Artwork properly displayed', 'Opening night reception', 'Artist statements published', 'Media coverage and exposure', 'Artwork sales benefit the artist'],
      cta: 'Support Exhibition',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format&fit=crop',
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
            Our Mission
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-purple-800 mb-4 sm:mb-6 leading-tight">
            Empowering Girls<br />
            <span className="font-script text-coral">Through Creative Expression</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-text-main leading-relaxed max-w-xl">
            We believe that every girl deserves the tools, space, and encouragement to discover her voice, build her confidence, and paint her own future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] sm:h-[500px]"
        >
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&auto=format&fit=crop"
            alt="Young girls creating art"
            className="w-full h-full object-cover shadow-card"
          />
          <div className="absolute inset-0 bg-purple-600/10" />
        </motion.div>
      </section>

      <section ref={whyRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-paper-white relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
              The Reality
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-800 tracking-tight">
              Why Girl Child Empowerment Matters
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 text-base sm:text-lg leading-loose text-text-main"
          >
            <p className="font-sans">
              In Nigeria and across the world, girls face systemic barriers that limit their access to education, creative opportunities, and self-expression. They're often told to be quiet, to be small, to make themselves less—to take up less space in the world.
            </p>
            <p className="font-sans">
              We see girls conditioned to believe that their dreams are too big, their voices too loud, their ambitions too much. They're taught that creativity is a luxury they can't afford, that art is frivolous, that self-expression is selfish.
            </p>
            <p className="font-handwriting text-lg sm:text-xl text-purple-600 font-medium border-l-4 border-coral pl-4 sm:pl-6">
              But we know the truth: When a girl holds a paintbrush, she's not just making art. She's claiming space. She's finding her voice. She's learning that what she creates matters.
            </p>
            <p className="font-sans">
              Art isn't frivolous. Art is resistance. Art is healing. Art is a girl learning that her perspective deserves to exist, that her imagination has value, that her hands can build worlds.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={approachRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-paper-warm/60 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
              How We Help
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-800 mb-4 sm:mb-6 tracking-tight">
              Creating Space For Girls To Thrive
            </h2>
            <p className="font-sans text-base sm:text-lg text-text-muted leading-relaxed">
              Our Girl Child Initiative isn't charity. It's investment. It's radical belief in what happens when girls are given resources and told: your creativity matters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isApproachInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="text-center p-8 sm:p-10 lg:p-12 bg-paper-white shadow-card hover:shadow-card-hover transition-all relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-coral"
              >
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4">
                  {approach.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
                  {approach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={beliefRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-paper-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isBeliefInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] sm:h-[500px] order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&auto=format&fit=crop"
                alt="Young girl painting"
                className="w-full h-full object-cover shadow-card"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isBeliefInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-4 sm:mb-6">
                Our Philosophy
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-800 mb-6 sm:mb-8 tracking-tight">
                What We Believe
              </h2>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-loose text-text-main">
                <p className="font-sans">
                  <strong>We believe girls don't need to be "fixed."</strong> They need systems that support them. They need adults who believe in them. They need spaces where their voices aren't diminished.
                </p>
                <p className="font-sans">
                  <strong>We believe creativity is not optional.</strong> It's essential. It's how girls process their experiences, envision their futures, and develop the confidence to pursue those visions.
                </p>
                <p className="font-sans">
                  <strong>We believe art education is feminist education.</strong> When we teach a girl to trust her creative instincts, we're teaching her to trust herself. When we validate her artistic choices, we're teaching her that her choices matter.
                </p>
                <p className="font-handwriting text-lg sm:text-xl text-coral font-medium">
                  We're not just teaching girls to paint. We're teaching them that they have the right to take up space, to be loud, to be bold, to create without apology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={storiesRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-lavender-100/40 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isStoriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
              Real Impact
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-800 mb-4 sm:mb-6 tracking-tight">
              The Girls We've Worked With
            </h2>
            <p className="font-sans text-base sm:text-lg text-text-muted leading-relaxed">
              These aren't success stories—they're just beginnings. These are girls claiming their right to create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isStoriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="bg-paper-white shadow-card hover:shadow-card-hover transition-all overflow-hidden"
              >
                <div className="relative h-[250px] sm:h-[300px] overflow-hidden">
                  <motion.img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6 sm:p-8 text-center">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-purple-800 mb-2">
                    {story.name}
                  </h3>
                  <div className="font-bold text-xs sm:text-sm text-coral uppercase tracking-wide mb-3 sm:mb-4">
                    {story.role}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed italic">
                    "{story.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={programsRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-paper-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isProgramsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
              Our Programs
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-800 tracking-tight">
              How We Serve
            </h2>
          </motion.div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isProgramsInView ? { opacity: 1, y: 0 } : {}}
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
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </motion.div>

                <div className={index % 2 === 0 ? '' : 'lg:order-1'}>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-800 mb-4 sm:mb-6">
                    {program.title}
                  </h3>
                  <p className="font-sans text-base sm:text-lg text-text-main leading-loose mb-6 sm:mb-8">
                    {program.description}
                  </p>

                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-text-main">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-mint text-paper-white flex items-center justify-center text-xs font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="font-sans leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto font-bold">
                      {program.cta}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={supportRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-paper-warm/60 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isSupportInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-4 sm:mb-6">
                Take Action
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-800 mb-6 sm:mb-8 tracking-tight">
                How You Can Help
              </h2>

              <p className="font-sans text-base sm:text-lg text-text-main leading-loose mb-6 sm:mb-8">
                This work requires resources. It requires adults who believe that girls' creativity matters. It requires people who understand that empowering girls through art isn't extra—it's essential.
              </p>

              <h3 className="font-display text-xl sm:text-2xl text-purple-600 font-semibold mb-4 sm:mb-6">Ways to Support:</h3>

              <ul className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {[
                  { title: 'Donate Directly', description: 'Fund art supplies, instructor fees, and program costs' },
                  { title: 'Sponsor A Girl', description: 'Cover the full cost of one girl\'s participation for a year' },
                  { title: 'Donate Supplies', description: 'Contribute art materials or funds for supplies' },
                  { title: 'Volunteer', description: 'Share your skills as a teaching assistant or mentor' },
                  { title: 'Spread the Word', description: 'Tell others about our work and our mission' },
                ].map((way, idx) => (
                  <li key={idx} className="text-sm sm:text-base font-sans">
                    <strong className="text-purple-800">{way.title}</strong> — {way.description}
                  </li>
                ))}
              </ul>

              <p className="font-handwriting text-lg sm:text-xl text-coral font-medium mb-6 sm:mb-8">
                Every purchase you make, every session you book—10% goes directly to this program. You're already part of this work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isSupportInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&auto=format&fit=crop"
                alt="Girls creating art"
                className="w-full h-full object-cover shadow-card"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-lavender-100/60 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-purple-800 mb-8 sm:mb-12 tracking-tight"
          >
            This Is About More Than Paint
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 text-lg sm:text-xl leading-loose text-text-main"
          >
            <p className="font-sans">
              When we hand a girl a paintbrush, we're handing her permission. Permission to take up space. Permission to be loud. Permission to be messy. Permission to make mistakes and call them art.
            </p>
            <p className="font-sans">
              We're teaching her that what she creates has value. That her perspective matters. That she doesn't need anyone's permission to express herself—but if she did, we're giving it anyway.
            </p>
            <p className="font-handwriting text-xl sm:text-2xl text-purple-600 font-semibold">
              This is feminist work. This is resistance work. This is the work of believing that girls deserve access to their own creative power.
            </p>
            <p className="font-handwriting text-xl sm:text-2xl text-purple-600 font-semibold">
              And we won't stop until every girl knows: your art matters. Your voice matters. You matter.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-purple-800 text-paper-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-coral rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-mint rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 sm:mb-8 tracking-tight"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
          >
            Ready To Make A Difference?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-sans text-lg sm:text-xl md:text-2xl leading-loose mb-8 sm:mb-12 text-paper-white/95"
          >
            Support our Girl Child Initiative. Register a girl for our program. Become a mentor. Donate supplies. Every action matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="light" size="lg" className="w-full sm:w-auto font-bold">
                Get Involved
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline-light" size="lg" className="w-full sm:w-auto font-bold">
                Make A Donation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;