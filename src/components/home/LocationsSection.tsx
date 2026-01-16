import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, MapPin, Building2, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import PaperSection from '@/components/ui/PaperSection';

interface LocationData {
  id: string;
  city: string;
  pickupLocations?: string[];
  venues?: string[];
  status: 'active' | 'coming-soon';
  comingSoonText?: string;
  image: string;
}

const CITY_LOCATIONS: LocationData[] = [
  {
    id: 'lagos',
    city: 'Lagos',
    pickupLocations: [
      'Island: Eleganza Garden Estate',
      'Mainland: 4 Moses Iguodala Street, Adekunle Banjo, Magodo',
    ],
    venues: ['Oh Lala', 'Mac Eddys Court', 'Lifestyle 18', 'Herel Play', 'The Back'],
    status: 'active',
    image: 'https://images.unsplash.com/photo-1609790662659-f54d956f58dc?w=800&auto=format&fit=crop',
  },
  {
    id: 'warri',
    city: 'Warri',
    pickupLocations: ['Landmark Esco Supermarket', 'Cosini Road'],
    venues: ['D\'Angelo'],
    status: 'active',
    image: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=800&auto=format&fit=crop',
  },
  {
    id: 'asaba',
    city: 'Asaba',
    venues: ['PBL Café'],
    status: 'active',
    image: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&auto=format&fit=crop',
  },
  {
    id: 'port-harcourt',
    city: 'Port Harcourt',
    status: 'coming-soon',
    comingSoonText: 'Pick Up & Partnered Venues',
    image: 'https://images.unsplash.com/photo-1619198055293-4f5b0b8f9def?w=800&auto=format&fit=crop',
  },
  {
    id: 'abuja',
    city: 'Abuja',
    status: 'coming-soon',
    comingSoonText: 'Pick Up & Partnered Venues',
    image: 'https://images.unsplash.com/photo-1612462823484-2fe596fd2e66?w=800&auto=format&fit=crop',
  },
];

const LocationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCity, setSelectedCity] = useState<LocationData | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const handleWhatsAppContact = (city: string, type: 'pickup' | 'venue' | 'enquire' | 'waitlist') => {
    const messages: Record<string, string> = {
      pickup: `Hi! I'd like to arrange a pick up in ${city}.`,
      venue: `Hi! I'd like to book a venue in ${city}.`,
      enquire: `Hi! I'd like to enquire about services in ${city}.`,
      waitlist: `Hi! I'd like to join the waitlist for ${city}.`,
    };
    
    const whatsappNumber = '2347089403978';
    const message = encodeURIComponent(messages[type]);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <PaperSection
      hasTornTop
      hasTornBottom
      bgColor="#F8FAFC"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12"
    >
      <div id="locations" ref={ref} className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-coral text-xs sm:text-sm font-semibold tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
            Find Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-purple-800 mb-4 sm:mb-6 tracking-tight">
            Where We Create
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed px-4">
            Pick up your materials or book a venue at any of our locations across Nigeria.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {CITY_LOCATIONS.map((location) => (
            <motion.div
              key={location.id}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => location.status === 'active' && setSelectedCity(location)}
              className={`bg-paper-white border-2 sm:border-3 border-text-main shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden ${
                location.status === 'active' ? 'cursor-pointer hover:border-purple-600' : 'opacity-75'
              }`}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.city}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center">
                  <h3 className="text-3xl font-bold text-paper-white tracking-wide uppercase mb-2 drop-shadow-lg">
                    {location.city}
                  </h3>
                  {location.status === 'coming-soon' && (
                    <div className="inline-block bg-white/25 backdrop-blur-lg border border-white/30 text-paper-white px-3 sm:px-4 py-1 text-xs font-bold tracking-wide uppercase">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                {location.status === 'active' ? (
                  <>
                    {location.pickupLocations && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-purple-800 font-semibold mb-2">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm uppercase tracking-wide">Pick Up</span>
                        </div>
                        <ul className="space-y-1 text-xs sm:text-sm text-text-muted ml-5 sm:ml-6">
                          {location.pickupLocations.map((loc, idx) => (
                            <li key={idx} className="leading-relaxed">• {loc}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {location.venues && (
                      <div className="mb-6">
                        <div className="flex items-center gap-2 text-purple-800 font-semibold mb-2">
                          <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm uppercase tracking-wide">
                            {location.pickupLocations ? 'Book a Venue' : 'Partnered Venue'}
                          </span>
                        </div>
                        <ul className="space-y-1 text-xs sm:text-sm text-text-muted ml-5 sm:ml-6">
                          {location.venues.map((venue, idx) => (
                            <li key={idx} className="leading-relaxed">• {venue}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="text-xs text-coral font-medium italic text-center pt-4 border-t border-text-main/10">
                      Click to view details & book
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center py-6 sm:py-8">
                      <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-text-muted mx-auto mb-4" />
                      <p className="text-xs sm:text-sm text-text-muted mb-4 sm:mb-6">
                        {location.comingSoonText}<br />Coming Soon
                      </p>
                      <div className="space-y-2 sm:space-y-3">
                        <Button 
                          variant="primary" 
                          size="sm"
                          className="w-full text-xs sm:text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleWhatsAppContact(location.city, 'waitlist');
                          }}
                        >
                          Join Waitlist
                        </Button>
                        <Button 
                          variant="secondary" 
                          size="sm"
                          className="w-full text-xs sm:text-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleWhatsAppContact(location.city, 'enquire');
                          }}
                        >
                          Enquire
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center py-6 sm:py-8 px-4 sm:px-6 bg-gradient-to-r from-lavender-100/50 to-coral/10 border-t-2 border-b-2 border-coral/20"
        >
          <p className="text-base sm:text-lg text-purple-800 font-medium italic">
            More locations loading. We're expanding so you always have access to the experience.
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCity(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-paper-white max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 sm:border-4 border-purple-600"
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img 
                  src={selectedCity.image} 
                  alt={selectedCity.city}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <button
                  onClick={() => setSelectedCity(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/25 backdrop-blur-lg border border-white/30 text-paper-white hover:bg-white/40 transition-all flex items-center justify-center z-10"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center">
                  <h3 className="text-4xl sm:text-5xl font-bold text-paper-white tracking-wide uppercase drop-shadow-2xl">
                    {selectedCity.city}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                {selectedCity.pickupLocations && (
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 text-purple-800 font-bold mb-3 sm:mb-4 text-base sm:text-lg">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="uppercase tracking-wide">Pick Up Locations</span>
                    </div>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {selectedCity.pickupLocations.map((loc, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-text-main bg-lavender-100/30 p-3 sm:p-4 border-l-4 border-purple-600">
                          <span className="font-medium">{loc}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="primary"
                      size="lg"
                      className="w-full text-sm sm:text-base"
                      onClick={() => handleWhatsAppContact(selectedCity.city, 'pickup')}
                    >
                      Arrange Pick Up in {selectedCity.city}
                    </Button>
                  </div>
                )}

                {selectedCity.venues && (
                  <div className={selectedCity.pickupLocations ? 'pt-6 sm:pt-8 border-t-2 border-text-main/10' : ''}>
                    <div className="flex items-center gap-2 sm:gap-3 text-purple-800 font-bold mb-3 sm:mb-4 text-base sm:text-lg">
                      <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="uppercase tracking-wide">
                        {selectedCity.pickupLocations ? 'Book a Venue' : 'Partnered Venue'}
                      </span>
                    </div>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {selectedCity.venues.map((venue, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-text-main bg-mint/10 p-3 sm:p-4 border-l-4 border-mint">
                          <span className="font-medium">{venue}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="primary"
                      size="lg"
                      className="w-full bg-gradient-to-r from-coral to-mint border-transparent text-sm sm:text-base"
                      onClick={() => handleWhatsAppContact(selectedCity.city, 'venue')}
                    >
                      Book a Venue in {selectedCity.city}
                    </Button>
                  </div>
                )}

                <div className="text-center pt-4 sm:pt-6 border-t-2 border-text-main/10">
                  <p className="text-xs sm:text-sm text-coral font-medium italic">
                    More locations coming soon in {selectedCity.city}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PaperSection>
  );
};

export default LocationsSection;