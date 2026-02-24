import React from 'react';
function App() {
  return (
    <>
    <a href="#main-content" className="skip-link">Ana icerige atla</a>
      <header>
        <h1>Sabri [Soyadın] - Portfolyo</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img src="profil.jpg" alt="Sabri'nin vesikalik fotografi" />
            <figcaption>Sabri - Yazilim Muhendisi Adayi</figcaption>
          </figure>
          <p>Firat Universitesi Yazilim Muhendisligi ogrencisiyim.</p>
          <h3>Yeteneklerim</h3>
          <ul>
            <li>React & TypeScript</li>
            <li>Python & AI</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          {/* Her proje bir article etiketi içinde olmalı */}
          <article>
            <h3>Proje Adı</h3>
            <p>Proje açıklaması buraya gelecek.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          {/* Uygulama-4: Form buraya gelecek */}
          <p>İletişim formu yakında burada olacak.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Sabri [Soyadın]. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;