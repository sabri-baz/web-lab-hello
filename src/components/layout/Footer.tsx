import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm transition-colors mt-auto">
      <p>&copy; {new Date().getFullYear()} Sabri. Tüm hakları saklıdır.</p>
    </footer>
  );
}
