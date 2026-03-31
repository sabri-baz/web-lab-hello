import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled';
}

export default function Card({
  title,
  children,
  image,
  imageAlt,
  footer,
  variant = "elevated",
}: CardProps) {
  // 1. DOKUNUŞ: elevated varyantına 'hover:-translate-y-1' (yukarı kayma) ve 'hover:shadow-xl' (büyük gölge) eklendi
  const variants = {
    elevated: `bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:-translate-y-1`,
    outlined: `bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700`,
    filled: `bg-gray-100 dark:bg-gray-800`,
  };

  return (
    // 2. DOKUNUŞ: transition-shadow yerine 'transition-all duration-300' kullanılarak hareketin yağ gibi akması sağlandı
    <div className={`rounded-xl overflow-hidden transition-all duration-300 ${variants[variant]}`}>
      {image && (
        <img src={image} alt={imageAlt || ""} className="w-full h-48 object-cover" />
      )}
      <div className="p-5">
        {title && (
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h3>
        )}
        <div className="text-gray-600 dark:text-gray-400">
          {children}
        </div>
      </div>
      {footer && (
        <div className="px-5 py-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
}