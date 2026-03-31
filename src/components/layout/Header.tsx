import React, { useState } from 'react';
import Button from '../ui/Button';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">Sabri</h1>
        
        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          onClick={toggleMenu}
          aria-label="Menüyü aç/kapat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Ana navigasyon">
          <ul className="flex items-center gap-2">
            {currentPage === 'portfolio' ? (
              <>
                <li><a href="#hero" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Ana Sayfa</a></li>
                <li><a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Hakkımda</a></li>
                <li><a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Projeler</a></li>
                <li><a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">İletişim</a></li>
                <li className="ml-2 border-l pl-2 border-gray-300 dark:border-gray-600">
                  <Button variant="ghost" size="sm" onClick={() => onPageChange('uikit')}>
                    UI Kit &rarr;
                  </Button>
                </li>
              </>
            ) : (
              <li>
                <Button variant="ghost" size="sm" onClick={() => onPageChange('portfolio')}>
                  &larr; Portföye Dön
                </Button>
              </li>
            )}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 pb-4">
          <ul className="flex flex-col px-4 pt-2">
            {currentPage === 'portfolio' ? (
              <>
                <li><a href="#hero" onClick={toggleMenu} className="block py-2 text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">Ana Sayfa</a></li>
                <li><a href="#hakkimda" onClick={toggleMenu} className="block py-2 text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">Hakkımda</a></li>
                <li><a href="#projeler" onClick={toggleMenu} className="block py-2 text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">Projeler</a></li>
                <li><a href="#iletisim" onClick={toggleMenu} className="block py-2 text-gray-700 dark:text-gray-300 border-b border-gray-100 dark:border-gray-800">İletişim</a></li>
                <li className="pt-4">
                  <Button variant="primary" className="w-full" onClick={() => { toggleMenu(); onPageChange('uikit'); }}>
                    UI Kit Görüntüle &rarr;
                  </Button>
                </li>
              </>
            ) : (
              <li className="pt-2">
                <Button variant="ghost" className="w-full" onClick={() => { toggleMenu(); onPageChange('portfolio'); }}>
                  &larr; Portföye Dön
                </Button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
