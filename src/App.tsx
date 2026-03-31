import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import ProjectList from './components/sections/ProjectList';
import ContactSection from './components/sections/ContactSection';
import UIKit from './page/UIKit';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('portfolio');

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      
      {/* Erişilebilirlik: Ana İçeriğe Atla Linki */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
        Ana içeriğe atla
      </a>

      {/* Karanlık Tema Butonu */}
      <button 
        onClick={toggleDark} 
        className="fixed bottom-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:scale-110 transition-transform" 
        aria-label="Tema değiştir"
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      {/* Dinamik Header */}
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Sayfa İçeriği (Koşullu Render) */}
      {currentPage === 'portfolio' ? (
        <main id="main-content" className="flex-1 flex flex-col">
          <Hero />
          <About />
          <Skills />
          <ProjectList />
          <ContactSection />
        </main>
      ) : (
        <main id="main-content" className="flex-1">
          <UIKit />
        </main>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}