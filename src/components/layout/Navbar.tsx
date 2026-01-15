import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigationStore } from '@/lib/index';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavigationStore();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Offerings', path: '/offerings' },
    { label: 'Catalogue', path: '/catalogue' },
    { label: 'Community', path: '/community' },
    { label: 'Contact', path: '/contact' },
  ];

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);
  const isActive = (path: string) => location.pathname === path;

  const TornUnderline = ({ active }: { active: boolean }) => (
    <motion.span
      className="absolute bottom-0 left-0 h-[3px] bg-coral shadow-sm"
      initial={{ width: 0 }}
      animate={{ width: active ? '100%' : 0 }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.3 }}
      style={{
        clipPath: 'polygon(0% 20%, 2% 40%, 5% 10%, 8% 60%, 12% 30%, 15% 80%, 18% 50%, 22% 90%, 25% 40%, 28% 70%, 32% 20%, 35% 85%, 38% 45%, 42% 75%, 45% 35%, 48% 90%, 52% 50%, 55% 80%, 58% 40%, 62% 70%, 65% 25%, 68% 85%, 72% 45%, 75% 65%, 78% 35%, 82% 80%, 85% 50%, 88% 70%, 92% 40%, 95% 85%, 98% 55%, 100% 75%, 100% 100%, 0% 100%)'
      }}
    />
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-paper-white/98 backdrop-blur-lg border-b border-text-main/10">
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none bg-paper-texture" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex justify-between lg:grid lg:grid-cols-3 items-center py-4 lg:py-6">
          
          <ul className="hidden lg:flex gap-10">
            {leftLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    'relative font-medium text-sm tracking-widest uppercase transition-colors py-2 group',
                    isActive(link.path) ? 'text-purple-600' : 'text-text-main hover:text-purple-600'
                  )}
                >
                  {link.label}
                  <TornUnderline active={isActive(link.path)} />
                </Link>
              </li>
            ))}
          </ul>

          <Link 
            to="/" 
            onClick={closeMobileMenu}
            className="flex flex-row lg:flex-col items-center justify-center gap-3 lg:gap-2"
          >
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/assets/image2.png" 
                alt="Logo"
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
              />
            </motion.div>
            <div className="text-xl lg:text-2xl font-semibold text-purple-800 tracking-[1px] lg:tracking-[2px] lowercase leading-none">
              sip<span className="text-coral">n</span>paint
              <span className="hidden sm:inline lg:inline">Experience</span>
            </div>
          </Link>

          <ul className="hidden lg:flex gap-10 justify-end">
            {rightLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    'relative font-medium text-sm tracking-widest uppercase transition-colors py-2 group',
                    isActive(link.path) ? 'text-purple-600' : 'text-text-main hover:text-purple-600'
                  )}
                >
                  {link.label}
                  <TornUnderline active={isActive(link.path)} />
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-text-main hover:text-purple-600 transition-colors z-50"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-paper-white border-t border-text-main/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-paper-texture" />
            <ul className="px-8 py-10 space-y-6 relative z-10">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={cn(
                      'block text-xl font-medium tracking-wide transition-colors',
                      isActive(link.path) ? 'text-purple-600' : 'text-text-main'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 8px, #8B7765 8px, #8B7765 10px, transparent 10px, transparent 15px, #8B7765 15px, #8B7765 17px)',
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;