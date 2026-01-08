'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-theme-primary text-white hover:opacity-90 shadow-lg shadow-theme-primary/20',
      secondary: 'bg-theme-secondary text-white hover:opacity-90 shadow-lg shadow-theme-secondary/20',
      outline: 'border-2 border-theme-primary text-theme-primary hover:bg-theme-primary/10',
      ghost: 'text-theme-text hover:bg-theme-text/10',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-8 py-3.5 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-theme-accent focus:ring-offset-2',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
