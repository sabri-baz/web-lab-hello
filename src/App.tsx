import React from 'react';
function App() {
  return (
    <>
      {/* Sayfa genelinde bir başlık (h1) hiyerarşi için zorunludur */}
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
          {/* Uygulama-2: Profil fotoğrafı buraya gelecek */}
          <p>Yazılım mühendisliği öğrencisiyim ve modern web teknolojileri üzerine çalışıyorum.</p>
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