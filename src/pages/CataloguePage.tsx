import { motion, useInView } from 'framer-motion';
import { useRef} from 'react';
import { PRODUCTS, FEATURED_PRODUCTS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const CataloguePage = () => {
  const categoriesRef = useRef(null);
  const productsRef = useRef(null);
  const featuredRef = useRef(null);
  const bulkRef = useRef(null);

  const isCategoriesInView = useInView(categoriesRef, { once: true, margin: '-100px' });
  const isProductsInView = useInView(productsRef, { once: true, margin: '-100px' });
  const isFeaturedInView = useInView(featuredRef, { once: true, margin: '-100px' });
  const isBulkInView = useInView(bulkRef, { once: true, margin: '-100px' });

  const categories = [
    { name: 'Complete Kits', description: 'Everything you need to start painting, packaged together for convenience and value.' },
    { name: 'Brushes', description: 'Professional-grade brushes in various sizes and styles for different techniques.' },
    { name: 'Paints', description: 'High-quality acrylics, oils, and watercolors in vibrant, true-to-color pigments.' },
    { name: 'Canvases', description: 'Pre-stretched, primed canvases in various sizes ready for your masterpiece.' },
    { name: 'Accessories', description: 'Palettes, easels, aprons, and all the extras that make painting more enjoyable.' },
    { name: 'Bulk Orders', description: 'Special pricing for schools, churches, and organizations ordering in quantity.' },
  ];

  const benefits = [
    { title: 'Quality Tested', description: 'Every product is tested by our instructors and artists to ensure it meets our standards.' },
    { title: 'Fair Pricing', description: 'Quality materials at prices that don\'t break the bank. We believe art should be accessible.' },
    { title: 'Fast Delivery', description: 'Lagos delivery within 2-3 days. Nationwide shipping available across Nigeria.' },
    { title: 'Give Back', description: '10% of art material sales support our Girl Child Initiative. Creating art, creating impact.' },
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
            Our Products
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-purple-800 mb-4 sm:mb-6 leading-tight">
            Quality Art Materials<br />
            <span className="font-script text-coral">For Every Creator</span>
          </h1>
          <p className="font-sans text-lg sm:text-xl text-text-main leading-relaxed max-w-xl">
            We carefully curate and produce art supplies that make creating easier, more enjoyable, and accessible to everyone—from absolute beginners to seasoned artists.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] sm:h-[500px]"
        >
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&auto=format&fit=crop"
            alt="Art materials"
            className="w-full h-full object-cover shadow-card"
          />
          <div className="absolute inset-0 bg-purple-600/10" />
        </motion.div>
      </section>

      <section ref={categoriesRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-paper-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isCategoriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
              Shop By Category
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-800 mb-4 sm:mb-6 tracking-tight">
              Find What You Need
            </h2>
            <p className="font-sans text-base sm:text-lg text-text-muted leading-relaxed">
              Browse our selection of quality art materials, carefully chosen to support your creative journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isCategoriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="text-center p-8 sm:p-10 lg:p-12 bg-paper-white shadow-card hover:shadow-card-hover transition-all relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-coral"
              >
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4">
                  {category.name}
                </h3>
                <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={productsRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-paper-warm/60 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isProductsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
              Featured Products
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-800 mb-4 sm:mb-6 tracking-tight">
              Customer Favorites
            </h2>
            <p className="font-sans text-base sm:text-lg text-text-muted leading-relaxed">
              Our most popular items, loved by beginners and experienced artists alike.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isProductsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="bg-paper-white shadow-card hover:shadow-card-hover transition-all overflow-hidden group"
              >
                <div className="relative h-[250px] sm:h-[300px] overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-purple-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                    <div className="text-paper-white">
                      <h3 className="font-display text-lg sm:text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="font-sans text-xs sm:text-sm">₦{product.price.toLocaleString()} • {product.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={featuredRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-paper-white relative">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 lg:space-y-24">
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isFeaturedInView ? { opacity: 1, y: 0 } : {}}
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
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>

              <div className={index % 2 === 0 ? '' : 'lg:order-1'}>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-800 mb-3 sm:mb-4">
                  {product.name}
                </h3>
                <p className="font-sans text-base sm:text-lg text-text-main leading-loose mb-4 sm:mb-6">
                  {product.description}
                </p>

                {product.features && (
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-text-main">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-mint text-paper-white flex items-center justify-center text-xs font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="font-sans leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="font-display text-3xl sm:text-4xl text-purple-600 font-bold">
                    ₦{product.price.toLocaleString()}
                  </span>
                  <Link to="/contact">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto font-bold">
                      Order Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={bulkRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-lavender-100/40 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isBulkInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] sm:h-[500px] order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop"
                alt="Bulk orders"
                className="w-full h-full object-cover shadow-card"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isBulkInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-4 sm:mb-6">
                For Organizations
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-800 mb-4 sm:mb-6 tracking-tight">
                Bulk Order Pricing
              </h2>
              <p className="font-sans text-base sm:text-lg text-text-main leading-loose mb-4 sm:mb-6">
                Planning a large event or need supplies for your institution? We offer special pricing for bulk orders.
              </p>
              <p className="font-sans text-base sm:text-lg text-text-main leading-loose mb-4 sm:mb-6">
                Perfect for:
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  'Schools and educational programs',
                  'Church groups and ministries',
                  'Corporate team-building events',
                  'Community centers and NGOs',
                  'Event planners and organizers',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-text-main">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-mint text-paper-white flex items-center justify-center text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="font-sans leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-handwriting text-lg sm:text-xl text-purple-600 font-semibold mb-2">
                Orders of 10+ kits receive 15% discount
              </p>
              <p className="font-handwriting text-lg sm:text-xl text-purple-600 font-semibold mb-6 sm:mb-8">
                Orders of 25+ kits receive 25% discount
              </p>
              <Link to="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto font-bold">
                  Request Bulk Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-paper-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="text-coral font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4">
              Quality Guarantee
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-800 tracking-tight">
              Why Choose Our Materials
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="text-center p-8 sm:p-10 lg:p-12 bg-paper-white shadow-card hover:shadow-card-hover transition-all relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-coral"
              >
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-purple-800 mb-3 sm:mb-4">
                  {benefit.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
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
            Ready To Stock Your Studio?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-sans text-lg sm:text-xl md:text-2xl leading-loose mb-8 sm:mb-12 text-paper-white/95"
          >
            Browse our full catalogue, request custom kits, or ask about bulk pricing. We're here to help you find exactly what you need.
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
                Place An Order
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline-light" size="lg" className="w-full sm:w-auto font-bold">
                Request Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CataloguePage;