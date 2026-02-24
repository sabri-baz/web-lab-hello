import './App.css'
import React from 'react'
function App() {
  return (
    <>
      {/* 3. ADIM: Erişilebilirlik - Skip Navigation [cite: 994, 1011] */}
      <a href="#main-content" className="skip-link">Ana icerige atla</a>

      {/* 1. ADIM: Semantik Header ve Navigasyon [cite: 741, 744, 1187] */}
      <header>
        <h1>Sabri - Kisisel Portfolyo</h1> {/* [cite: 857, 1188] */}
        <nav aria-label="Ana navigasyon"> {/* [cite: 981, 1189] */}
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      {/* Semantik Main ve Skip Link Hedefi [cite: 747, 1006] */}
      <main id="main-content">
        
        {/* 2. ADIM: Hakkımda Bölümü ve Profil Fotoğrafı [cite: 778, 1191] */}
        <section id="hakkimda">
          <h2>Hakkimda</h2> {/* [cite: 858, 1192] */}
          <figure> {/* [cite: 761, 1193] */}
            <img 
              src="/profil.jpg" 
              alt="Sabri'nin vesikalik fotografi" 
            /> {/* [cite: 906, 1193] */}
            <figcaption>Sabri - Yazilim Muhendisligi Ogrencisi</figcaption> {/* [cite: 761, 1193] */}
          </figure>
          <p>Firat Universitesi Yazilim Muhendisligi 3. sinif ogrencisiyim. [cite: 689, 1194]</p>
          <h3>Yeteneklerim</h3>
          <ul> {/* [cite: 1195] */}
            <li>React & TypeScript</li>
            <li>Python & Yapay Zeka</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        {/* Projelerim Bölümü [cite: 790, 1196] */}
        <section id="projeler">
          <h2>Projelerim</h2>
          <article> {/* [cite: 753, 1197] */}
            <h3>Smart Garden Assistant</h3> {/* [cite: 1198] */}
            <p>Bitki hastaliklarini tespit eden yapay zeka tabanli bir mobil uygulama.</p>
          </article>
          <article>
            <h3>BazCrypte</h3>
            <p>Collatz sanisina dayali guvenli rastgele sayi uretim algoritmasi.</p>
          </article>
        </section>

        {/* 4. ADIM: Doğrulamalı İletişim Formu [cite: 1020, 1088] */}
        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate> {/* [cite: 1091, 1168] */}
            <fieldset> {/* [cite: 1043, 1092] */}
              <legend>Iletisim Formu</legend> {/* [cite: 1043, 1093] */}

              {/* Ad Soyad ve Label İlişkisi [cite: 1050, 1095] */}
              <div className="form-group">
                <label htmlFor="name">Ad Soyad: </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error" 
                /> {/* [cite: 1096, 1097, 1099] */}
                <small id="name-error" className="error-msg" role="alert"></small> {/* [cite: 1098, 1101, 1170] */}
              </div>

              {/* E-posta Alanı [cite: 1032, 1110] */}
              <div className="form-group">
                <label htmlFor="email">E-posta: </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error" 
                /> {/* [cite: 1110, 1111, 1113] */}
                <small id="email-error" className="error-msg" role="alert"></small> {/* [cite: 1115, 1118] */}
              </div>

              {/* Konu Seçimi [cite: 1040, 1133] */}
              <div className="form-group">
                <label htmlFor="subject">Konu: </label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select> {/* [cite: 1134, 1135] */}
                <small id="subject-error" className="error-msg" role="alert"></small> {/* [cite: 1138, 1139] */}
              </div>

              {/* Mesaj Alanı [cite: 1038, 1151] */}
              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  minLength={10} 
                  aria-describedby="message-error"
                ></textarea> {/* [cite: 1152, 1153] */}
                <small id="message-error" className="error-msg" role="alert"></small> {/* [cite: 1154, 1156] */}
              </div>

              <button type="submit">Gonder</button> {/* [cite: 1042, 1159] */}
            </fieldset>
          </form>
        </section>

      </main>

      {/* Footer [cite: 759, 813, 1204] */}
      <footer>
        <p>&copy; 2026 Sabri. Tum haklari saklidir.</p> {/* [cite: 814, 1205] */}
      </footer>
    </>
  )
}

export default App