import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'light' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean; // Added for mobile-friendly block buttons
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, fullWidth, ...props }, ref) => {
    const baseStyles = 'font-raleway font-medium tracking-wide transition-all duration-300 border-2 inline-flex items-center justify-center text-center';
    
    const variants = {
      primary: 'bg-purple-800 text-paper-white border-purple-800 hover:bg-transparent hover:text-purple-800 shadow-card hover:shadow-card-hover',
      secondary: 'bg-transparent text-text-main border-text-main hover:bg-text-main hover:text-paper-white',
      light: 'bg-paper-white text-purple-800 border-paper-white hover:bg-transparent hover:text-paper-white',
      'outline-light': 'bg-transparent text-paper-white border-paper-white hover:bg-paper-white hover:text-purple-800',
    };

 
    const sizes = {
      sm: 'px-4 py-2 text-xs md:px-6 md:text-sm',
      md: 'px-6 py-2.5 text-sm md:px-12 md:py-3 md:text-base',
      lg: 'px-8 py-3 text-base md:px-16 md:py-4 md:text-lg',
    };

    return (
      <motion.button
        ref={ref}
        // Disabled vertical lift on mobile to prevent "sticky" hover states
        whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { y: -2 } : {}}
        whileTap={{ scale: 0.96 }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth ? 'w-full' : 'w-auto', // Flexible width
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-sm md:text-base">Loading...</span>
          </span>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;