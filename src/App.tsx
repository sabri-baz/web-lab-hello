import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Web Tasarımı ve Programlama</h1>
      <h2>LAB-1</h2>
      
      <section>
        <h3>Kişisel Bilgiler</h3>
        <p><strong>Ad Soyad:</strong> [sabri baz]</p>
        <p><strong>Öğrenci No:</strong> [240541164]</p>
        <p><strong>Bölüm:</strong> Yazılım Mühendisliği (3. Sınıf)</p>
      </section>

      <hr />

      <section>
        <h3>Hakkımda</h3>
        <p>
          Fırat Üniversitesi'nde Yazılım Mühendisliği öğrencisiyim. 
          Özellikle yapay zeka, mikroservis mimarileri ve gömülü sistemler üzerine projeler geliştirmekten keyif alıyorum.
        </p>
      </section>

      <section>
        <h3>Hobilerim</h3>
        <ul>
          <li>Ev otomasyonu sistemleri üzerine çalışmak</li>
          <li>Yeni programlama dilleri ve algoritmalar keşfetmek</li>
          <li>Satranç oynamak ve teknik makaleler okumak</li>
          <li>Yeni teknolojileri denemek</li>
        </ul>
      </section>
    </div>
  );
}

export default App;