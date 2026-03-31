import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="py-24 px-4 text-center bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
          Merhaba, Ben Sabri
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium tracking-wide">
          Frontend Developer | React & TypeScript
        </p>
      </div>
    </section>
  );
}
