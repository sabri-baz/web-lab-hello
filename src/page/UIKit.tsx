import React from 'react';
import Button from '../components/button';
import Input from '../components/input';
import Card from '../components/card';
import Alert from '../components/Alert';

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        UI Kit
      </h1>

      {/* --- BUTTONS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 dark:text-white">
          Buttons
        </h2>
        {/* Varyant 1: Renkler */}
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        {/* Varyant 2: Boyutlar */}
        <div className="flex flex-wrap items-end gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* --- INPUTS --- */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 dark:text-white">
          Inputs
        </h2>
        {/* Varyant 3, 4, 5, 6: Form Durumları */}
        <Input id="ui-name" label="Normal Input" placeholder="Bir şeyler yazın..." />
        <Input id="ui-err" label="Hatalı Input" error="Bu alan zorunludur" />
        <Input id="ui-help" label="Help Text" type="email" helpText="E-posta adresinizi girin" />
        <Input id="ui-dis" label="Disabled" disabled value="Düzenlenemez" />
      </section>

      {/* --- CARDS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 dark:text-white">
          Cards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Varyant 7, 8, 9: Kart Stilleri */}
          <Card variant="elevated" title="Elevated Card">Gölge ile yükseltilmiş kart.</Card>
          <Card variant="outlined" title="Outlined Card">Çerçeveli kart.</Card>
          <Card variant="filled" title="Filled Card">Dolgulu arka plan.</Card>
        </div>
      </section>

      {/* --- ALERTS --- */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-800 pb-2 dark:text-white">
          Alerts
        </h2>
        {/* Varyant 10, 11, 12, 13: Bildirim Renkleri */}
        <Alert variant="info" title="Bilgi">Bilgilendirme mesajı.</Alert>
        <Alert variant="success" title="Başarılı">İşlem tamamlandı.</Alert>
        <Alert variant="warning" title="Uyarı">Dikkat edilmesi gereken durum.</Alert>
        <Alert variant="error" title="Hata" dismissible>Bir hata oluştu.</Alert>
      </section>
    </div>
  );
}