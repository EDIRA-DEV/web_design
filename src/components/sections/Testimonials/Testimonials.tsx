'use client';

import { useState } from 'react';
import { useLang } from '@/lib/i18n';
import styles from './Testimonials.module.css';

export function Testimonials() {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    location: '',
    city: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={styles.headingGroup}>
          <h2 className={styles.title}>
            {t('testimonials.title1')} <em className={styles.italic}>{t('testimonials.title.italic')}</em><br />
            {t('testimonials.title2')}
          </h2>
          <p className={styles.subtitle}>
            {t('testimonials.subtitle')}
          </p>
        </div>

        {submitted ? (
          <div className={styles.successMessage}>
            <p>{t('testimonials.success')}</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <input type="text" name="firstName" placeholder={t('testimonials.field.firstName')} required value={formData.firstName} onChange={handleChange} className={styles.input} />
              </div>
              <div className={styles.field}>
                <input type="text" name="lastName" placeholder={t('testimonials.field.lastName')} required value={formData.lastName} onChange={handleChange} className={styles.input} />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <input type="email" name="email" placeholder={t('testimonials.field.email')} required value={formData.email} onChange={handleChange} className={styles.input} />
              </div>
              <div className={styles.field}>
                <input type="tel" name="phone" placeholder={t('testimonials.field.phone')} required value={formData.phone} onChange={handleChange} className={styles.input} />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <input type="text" name="company" placeholder={t('testimonials.field.company')} required value={formData.company} onChange={handleChange} className={styles.input} />
              </div>
              <div className={styles.field}>
                <input type="text" name="position" placeholder={t('testimonials.field.position')} value={formData.position} onChange={handleChange} className={styles.input} />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <input type="text" name="location" placeholder={t('testimonials.field.location')} required value={formData.location} onChange={handleChange} className={styles.input} />
              </div>
              <div className={styles.field}>
                <input type="text" name="city" placeholder={t('testimonials.field.city')} value={formData.city} onChange={handleChange} className={styles.input} />
              </div>
            </div>

            <div className={styles.fieldFull}>
              <textarea name="message" placeholder={t('testimonials.field.message')} rows={4} value={formData.message} onChange={handleChange} className={styles.textarea} />
            </div>

            <div className={styles.submitRow}>
              <button type="submit" className={styles.submitBtn}>
                {t('testimonials.submit')}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
