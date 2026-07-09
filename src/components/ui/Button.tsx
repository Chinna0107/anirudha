import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  
  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const circle = document.createElement('span');
    circle.style.width = circle.style.height = `${Math.max(rect.width, rect.height)}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.classList.add('ripple');

    const rippleContainer = button.querySelector('.ripple-container');
    if (rippleContainer) {
      rippleContainer.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    }
  };
  const baseStyles = 'relative overflow-hidden inline-flex items-center justify-center font-display font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-1 hover:shadow-xl group';
  
  const variants = {
    primary: 'bg-brand-primary text-slate-900 hover:bg-slate-800 shadow-md shadow-brand-primary/20 focus:ring-brand-primary',
    secondary: 'bg-brand-secondary text-white hover:bg-zinc-700 shadow-md focus:ring-zinc-500',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-slate-500 bg-transparent',
    whatsapp: 'bg-brand-whatsapp text-white hover:bg-green-600 shadow-lg shadow-green-500/30 focus:ring-green-500 hover:scale-105',
    danger: 'bg-brand-danger text-white hover:bg-red-600 shadow-md focus:ring-red-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      ref={buttonRef}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      onClick={(e) => {
        handleRipple(e);
        if (props.onClick) props.onClick(e);
      }}
      {...props}
    >
      <div className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </div>
      
      {/* Ripple Container */}
      <div className="ripple-container absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-0" />
      
      {/* Shine Sweep (Only primary/whatsapp) */}
      {(variant === 'primary' || variant === 'whatsapp') && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine z-0 pointer-events-none" />
      )}
    </button>
  );
};
