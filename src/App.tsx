import React, { useState } from 'react';
import Button from './components/button';
import Input from './components/input';
import Card from './components/card';
import UIKit from './page/UIKit'; // <-- UI Kit sayfamızı içeri aktardık [cite: 1142-1145]

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState('portfolio'); // Hangi sayfada olduğumuzu tutan state

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      
      {/* Erişilebilirlik: Ana İçeriğe Atla Linki */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
        Ana içeriğe atla
      </a>

      {/* Karanlık Tema Butonu */}
      <button onClick={toggleDark} className="fixed bottom-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:scale-110 transition-transform" aria-label="Tema değiştir">
        {isDark ? '☀️' : '🌙'}
      </button>

      {/* --- Dinamik Header --- */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">Sabri</h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap items-center gap-2">
              {currentPage === 'portfolio' ? (
                <>
                  <li><a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Hakkımda</a></li>
                  <li><a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">Projeler</a></li>
                  <li><a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">İletişim</a></li>
                  <li className="ml-2 border-l pl-2 border-gray-300 dark:border-gray-600">
                    {/* UI Kit Sayfasına Geçiş Butonu */}
                    <Button variant="ghost" size="sm" onClick={() => setCurrentPage('uikit')}>
                      UI Kit &rarr;
                    </Button>
                  </li>
                </>
              ) : (
                <li>
                  {/* Portföye Geri Dönüş Butonu */}
                  <Button variant="ghost" size="sm" onClick={() => setCurrentPage('portfolio')}>
                    &larr; Portföye Dön
                  </Button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>

      {/* --- Sayfa İçeriği (Koşullu Render) --- */}
      {currentPage === 'portfolio' ? (
        <main id="main-content">
          <section id="hakkimda" className="py-16 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
              <figure className="shrink-0">
                <img src="https://picsum.photos/200" alt="Profil fotoğrafı" className="w-40 h-40 rounded-full object-cover shadow-lg" />
              </figure>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">Hakkımda</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. Yapay zeka, derin öğrenme, siber güvenlik ve modern web teknolojileri (React, Node.js) üzerine projeler geliştiriyorum. Algoritma tasarımı ve problem çözme süreçlerine büyük ilgi duyuyorum.
                </p>
                <ul className="flex flex-wrap gap-2">
                  <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Python & Java & C#</li>
                  <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Makine Öğrenmesi (AI)</li>
                  <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">React & Node.js</li>
                  <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Siber Güvenlik</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Projelerim</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card variant="elevated" image="https://picsum.photos/400/200?random=1" title="Smart Garden Assistant">
                  Bitki hastalıklarını tespit eden yapay zeka destekli mobil/web entegreli derin öğrenme projesi. (TFLite & Streamlit)
                </Card>
                <Card variant="elevated" image="https://picsum.photos/400/200?random=2" title="Movie Tracker">
                  OMDB API entegrasyonu ile geliştirilmiş, Node.js ve SQL Server tabanlı modern film takip web uygulaması.
                </Card>
                <Card variant="elevated" image="https://picsum.photos/400/200?random=3" title="BazCrypte RNG">
                  Collatz sanrısı prensibini temel alarak Java ile geliştirilmiş, kriptografik rastgele sayı üretici (RNG) algoritması.
                </Card>
              </div>
            </div>
          </section>

          <section id="iletisim" className="py-16 px-4 max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">İletişim</h2>
            <form className="space-y-4">
              <Input id="name" label="Ad Soyad" required />
              <Input id="email" label="E-posta" type="email" required />
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mesajınız</label>
                <textarea id="message" rows={5} required className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"></textarea>
              </div>
              <Button variant="primary" size="lg" type="submit">Gönder</Button>
            </form>
          </section>
        </main>
      ) : (
        /* Eğer menüden UI Kit seçildiyse bu sayfa render edilecek */
        <UIKit />
      )}

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2026 Sabri. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}