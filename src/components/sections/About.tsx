import React from 'react';

export default function About() {
  return (
    <section id="hakkimda" className="pt-16 pb-8 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        <figure className="shrink-0">
          <img src="https://picsum.photos/200" alt="Profil fotoğrafı" className="w-40 h-40 rounded-full object-cover shadow-lg" />
        </figure>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">Hakkımda</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. Yapay zeka, derin öğrenme, siber güvenlik ve modern web teknolojileri (React, Node.js) üzerine projeler geliştiriyorum. Algoritma tasarımı ve problem çözme süreçlerine büyük ilgi duyuyorum.
          </p>
        </div>
      </div>
    </section>
  );
}
