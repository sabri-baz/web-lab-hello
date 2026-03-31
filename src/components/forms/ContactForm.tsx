import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Alert from '../ui/Alert';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Ad Soyad zorunludur.';
    if (!formData.email.trim()) newErrors.email = 'E-posta zorunludur.';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Geçerli bir e-posta giriniz.';
    if (!formData.subject.trim()) newErrors.subject = 'Konu zorunludur.';
    if (!formData.message.trim()) newErrors.message = 'Mesaj zorunludur.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      // Simüle edilmiş asenkron işlem
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      {isSuccess && (
        <Alert variant="success" title="Başarılı">
          Mesajınız başarıyla gönderildi. Size en kısa sürede dönüş yapacağım.
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <Input 
          id="name" 
          label="Ad Soyad" 
          value={formData.name} 
          onChange={handleChange} 
          error={errors.name} 
          required 
          disabled={isSubmitting}
        />
        <Input 
          id="email" 
          label="E-posta" 
          type="email" 
          value={formData.email} 
          onChange={handleChange} 
          error={errors.email} 
          required 
          disabled={isSubmitting}
        />
        <Input 
          id="subject" 
          label="Konu" 
          value={formData.subject} 
          onChange={handleChange} 
          error={errors.subject} 
          required 
          disabled={isSubmitting}
        />
        <div className="space-y-1">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Mesajınız
          </label>
          <textarea 
            id="message" 
            rows={5} 
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:outline-none dark:bg-gray-800 dark:text-gray-100 shadow-sm transition-all duration-300 ${
              errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-400/50" : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/50"
            } ${isSubmitting ? "bg-gray-100 cursor-not-allowed dark:bg-gray-700" : "bg-white dark:bg-gray-800"}`}
            required 
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-sm text-red-600 dark:text-red-400 animate-pulse">{errors.message}</p>
          )}
        </div>
        <Button variant="primary" size="lg" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Gönderiliyor..." : "Gönder"}
        </Button>
      </form>
    </div>
  );
}
