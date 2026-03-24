import React, { useState, useEffect } from 'react';
import Button from './components/button'; // (Not: Component isimleri genelde büyük harfle başlar, güvenli olması için büyük yazdım)
import Input from './components/input';
import Card from './components/card';
import Alert from './components/Alert'; // LAB-5 hata mesajları için Alert bileşeni eklendi [cite: 1150]
import UIKit from './page/UIKit';

// LAB-5 İçe Aktarımları [cite: 1145-1148]
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./util/projectHelpers";

export default function App() {
  // --- TEMEL STATE'LER (Sayfa ve Tema) ---
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState('portfolio');

  // --- LAB-5 STATE'LERİ (Projeler, Filtreler, Yükleme Durumu) [cite: 1152-1172] ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Tema Değiştirme Fonksiyonu
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  // --- LAB-5 VERİ ÇEKME (Component yüklendiğinde bir kez çalışır) [cite: 1196-1221] ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmeyen hata");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- LAB-5 TÜRETİLMİŞ VERİ (Filtreleme ve Sıralama) [cite: 1227-1237] ---
  const filtered = applyFilters(projects, search, category, sortField, sortOrder);
  const categories: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

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
                    <Button variant="ghost" size="sm" onClick={() => setCurrentPage('uikit')}>
                      UI Kit &rarr;
                    </Button>
                  </li>
                </>
              ) : (
                <li>
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
          
          {/* HAKKIMDA BÖLÜMÜ (Değişmedi) */}
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

          {/* PROJELERİM BÖLÜMÜ (LAB-5 ile Dinamik Hale Geldi) */}
          <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Projelerim</h2>
              
              {/* LAB-5 Hata Durumu [cite: 1260-1267] */}
              {error && (
                <div className="mb-6">
                  <Alert variant="error" title="Hata">{error}</Alert>
                </div>
              )}

              {/* LAB-5 Filtreler ve Sıralama [cite: 1275-1342] */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <Input 
                    id="search" 
                    label=""
                    placeholder="Proje ara (İsim, teknoloji vb.)..." 
                    value={search} 
                    onChange={e => setSearch(e.target.value)} 
                  />
                </div>
                
                <div className="flex gap-2 flex-wrap items-center">
                  {categories.map(cat => (
                    <Button 
                      key={cat} 
                      variant={category === cat ? "primary" : "ghost"} 
                      size="sm" 
                      onClick={() => setCategory(cat)}
                    >
                      {cat === "all" ? "Tümü" : cat.toUpperCase()}
                    </Button>
                  ))}
                </div>

                <div className="flex gap-2 items-center sm:ml-auto">
                  <select 
                    value={sortField} 
                    onChange={e => setSortField(e.target.value as SortField)} 
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                  >
                    <option value="year">Yıla Göre</option>
                    <option value="title">Başlığa Göre</option>
                  </select>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSortOrder(o => o === "asc" ? "desc" : "asc")}
                  >
                    {sortOrder === "asc" ? "A-Z / Eski-Yeni" : "Z-A / Yeni-Eski"}
                  </Button>
                </div>
              </div>

              {/* LAB-5 Yükleniyor Durumu [cite: 1359-1363] */}
              {loading && (
                <p className="text-center text-gray-500 dark:text-gray-400 py-10">
                  Projeler yükleniyor...
                </p>
              )}

              {/* LAB-5 Boş Sonuç Durumu [cite: 1417-1422] */}
              {!loading && filtered.length === 0 && !error && (
                <p className="text-center text-gray-500 dark:text-gray-400 py-10">
                  Aradığınız kriterlere uygun proje bulunamadı.
                </p>
              )}

              {/* LAB-5 Dinamik Proje Kartları [cite: 1423-1453] */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(project => (
                  <Card 
                    key={project.id} 
                    variant="elevated" 
                    title={project.title} 
                    image={project.image} 
                    imageAlt={`${project.title} görseli`}
                  >
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 h-10">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map(t => (
                        <span 
                          key={t} 
                          className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs px-2.5 py-1 rounded-full font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 font-semibold border-t border-gray-100 dark:border-gray-800 pt-3 mt-auto">
                      <span>{project.year}</span>
                      <span className="uppercase tracking-wider">{project.category}</span>
                    </div>
                  </Card>
                ))}
              </div>

              {/* LAB-5 Toplam Sonuç Sayısı [cite: 1454-1459] */}
              {!loading && !error && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 text-center">
                  {filtered.length} / {projects.length} proje gösteriliyor
                </p>
              )}
            </div>
          </section>

          {/* İLETİŞİM BÖLÜMÜ (Değişmedi) */}
          <section id="iletisim" className="py-16 px-4 max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">İletişim</h2>
            <form className="space-y-4">
              <Input id="name" label="Ad Soyad" required />
              <Input id="email" label="E-posta" type="email" required />
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mesajınız</label>
                <textarea id="message" rows={5} required className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors"></textarea>
              </div>
              <Button variant="primary" size="lg" type="submit">Gönder</Button>
            </form>
          </section>
        </main>
      ) : (
        /* UI Kit Sayfası (Değişmedi) */
        <UIKit />
      )}

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm transition-colors">
        <p>&copy; 2026 Sabri. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}