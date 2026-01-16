import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'light' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading,
      disabled,
      fullWidth,
      children,
      ...motionProps
    },
    ref
  ) => {
    const baseStyles =
      'font-raleway font-medium tracking-wide transition-all duration-300 border-2 inline-flex items-center justify-center text-center';

    const variants = {
      primary:
        'bg-purple-800 text-paper-white border-purple-800 hover:bg-transparent hover:text-purple-800 shadow-card hover:shadow-card-hover',
      secondary:
        'bg-transparent text-text-main border-text-main hover:bg-text-main hover:text-paper-white',
      light:
        'bg-paper-white text-purple-800 border-paper-white hover:bg-transparent hover:text-paper-white',
      'outline-light':
        'bg-transparent text-paper-white border-paper-white hover:bg-paper-white hover:text-purple-800',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs md:px-6 md:text-sm',
      md: 'px-6 py-2.5 text-sm md:px-12 md:py-3 md:text-base',
      lg: 'px-8 py-3 text-base md:px-16 md:py-4 md:text-lg',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth ? 'w-full' : 'w-auto',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        disabled={disabled || isLoading}
        {...motionProps}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
export default Button;