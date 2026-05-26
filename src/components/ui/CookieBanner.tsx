'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import styles from './CookieBanner.module.css';

interface CookiePreferences {
  essential: boolean;
  analytical: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'edira_cookie_consent';

export function CookieBanner() {
  const { lang } = useLang();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytical: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user already consented
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // 1.5s delay before showing banner
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed = JSON.parse(stored) as CookiePreferences;
        setPreferences({
          essential: true,
          analytical: !!parsed.analytical,
          marketing: !!parsed.marketing,
        });
      } catch (e) {
        // Fallback
      }
    }
  }, []);

  // Set up event listener to reopen the preferences modal from the footer
  useEffect(() => {
    const handleReopen = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as CookiePreferences;
          setPreferences({
            essential: true,
            analytical: !!parsed.analytical,
            marketing: !!parsed.marketing,
          });
        } catch (e) {}
      }
      setIsVisible(true);
      setShowSettings(true);
    };

    window.addEventListener('open-cookie-preferences', handleReopen);
    return () => {
      window.removeEventListener('open-cookie-preferences', handleReopen);
    };
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      analytical: true,
      marketing: true,
    });
  };

  const handleRejectOptional = () => {
    savePreferences({
      essential: true,
      analytical: false,
      marketing: false,
    });
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Cannot toggle essential
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  const t = {
    es: {
      bannerText: 'Utilizamos cookies para optimizar tu experiencia y analizar el tráfico. Al hacer clic en "Aceptar todo", consientes el uso de todas las cookies opcionales (analíticas y de marketing). Puedes configurar tus opciones o rechazarlas.',
      acceptAll: 'Aceptar todo',
      rejectOptional: 'Rechazar opcionales',
      configure: 'Configurar preferencias',
      settingsTitle: 'Preferencias de cookies',
      settingsDesc: 'De acuerdo con la legislación de privacidad aplicable, puedes configurar de manera detallada qué tipo de cookies permites en este sitio. Las cookies estrictamente necesarias son obligatorias.',
      categoryEssential: 'Estrictamente necesarias',
      categoryEssentialDesc: 'Estas cookies son indispensables para la navegación básica, la seguridad del sitio, el correcto funcionamiento del formulario de contacto y para guardar tus preferencias de privacidad. No se pueden desactivar.',
      categoryAnalytical: 'Cookies de análisis y rendimiento',
      categoryAnalyticalDesc: 'Nos permiten medir de forma agregada cómo interactúan los usuarios con nuestras páginas, detectar errores, evaluar contenidos y optimizar el rendimiento del sitio.',
      categoryMarketing: 'Cookies de marketing y publicidad',
      categoryMarketingDesc: 'Se utilizan para medir la efectividad de campañas, atribuir conversiones y posibilitar la atribución en herramientas de publicidad sin realizar perfiles individuales invasivos.',
      saveSettings: 'Guardar configuración',
      alwaysActive: 'Siempre activas',
    },
    en: {
      bannerText: 'We use cookies to optimize your experience and analyze traffic. By clicking "Accept all", you consent to our use of all optional cookies (analytics and marketing). You can customize your choice or reject them.',
      acceptAll: 'Accept all',
      rejectOptional: 'Reject optional',
      configure: 'Configure preferences',
      settingsTitle: 'Cookie Preferences',
      settingsDesc: 'In accordance with applicable privacy laws, you can customize your cookie consent. Strictly necessary cookies are mandatory for the website to function.',
      categoryEssential: 'Strictly Necessary',
      categoryEssentialDesc: 'These cookies are indispensable for basic navigation, security, contact form functionality, and remembering your consent state. They cannot be disabled.',
      categoryAnalytical: 'Analytics & Performance Cookies',
      categoryAnalyticalDesc: 'Allows us to measure aggregate interaction metrics, detect rendering bugs, evaluate our contents, and improve general site performance.',
      categoryMarketing: 'Marketing & Attribution Cookies',
      categoryMarketingDesc: 'Used to track campaign effectiveness, attribute leads, and support advertising networks without creating invasive individual profiles.',
      saveSettings: 'Save settings',
      alwaysActive: 'Always active',
    },
  }[lang === 'es' ? 'es' : 'en'];

  return (
    <AnimatePresence>
      <div className={styles.wrapper}>
        {/* Banner Layer */}
        {!showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`${styles.banner} fixed bottom-4 left-4 right-4 w-auto max-w-none mx-auto flex flex-col gap-4 md:bottom-4 md:left-4 md:right-auto md:w-[420px]`}
          >
            <div className={styles.bannerContent}>
              <p className={styles.bannerText}>{t.bannerText}</p>
              <div className={`${styles.bannerActions} flex flex-col gap-2 w-full md:flex-row md:gap-2`}>
                <button
                  type="button"
                  onClick={handleRejectOptional}
                  className={`${styles.btn} ${styles.btnOutline} w-full md:w-auto md:flex-1`}
                >
                  {t.rejectOptional}
                </button>
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className={`${styles.btn} ${styles.btnOutline} w-full md:w-auto md:flex-1`}
                >
                  {t.configure}
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className={`${styles.btn} ${styles.btnPrimary} w-full md:w-auto md:flex-1`}
                >
                  {t.acceptAll}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Configuration Modal Layer */}
        {showSettings && (
          <div className={styles.modalOverlay}>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={styles.modal}
            >
              <div className={styles.modalHeader}>
                <h3 className={styles.modalTitle}>{t.settingsTitle}</h3>
                <button
                  type="button"
                  onClick={() => setShowSettings(false)}
                  className={styles.closeBtn}
                >
                  &times;
                </button>
              </div>
              <div className={styles.modalBody}>
                <p className={styles.modalDesc}>{t.settingsDesc}</p>

                <div className={styles.preferencesList}>
                  {/* Essential */}
                  <div className={styles.prefItem}>
                    <div className={styles.prefInfo}>
                      <div className={styles.prefTitleRow}>
                        <h4 className={styles.prefName}>{t.categoryEssential}</h4>
                        <span className={styles.alwaysActiveTag}>{t.alwaysActive}</span>
                      </div>
                      <p className={styles.prefDesc}>{t.categoryEssentialDesc}</p>
                    </div>
                    <div className={styles.prefToggle}>
                      <label className={styles.switch}>
                        <input
                          type="checkbox"
                          checked={true}
                          disabled={true}
                          readOnly
                        />
                        <span className={`${styles.slider} ${styles.disabledSlider}`}></span>
                      </label>
                    </div>
                  </div>

                  {/* Analytical */}
                  <div className={styles.prefItem}>
                    <div className={styles.prefInfo}>
                      <h4 className={styles.prefName}>{t.categoryAnalytical}</h4>
                      <p className={styles.prefDesc}>{t.categoryAnalyticalDesc}</p>
                    </div>
                    <div className={styles.prefToggle}>
                      <label className={styles.switch}>
                        <input
                          type="checkbox"
                          checked={preferences.analytical}
                          onChange={() => togglePreference('analytical')}
                        />
                        <span className={styles.slider}></span>
                      </label>
                    </div>
                  </div>

                  {/* Marketing */}
                  <div className={styles.prefItem}>
                    <div className={styles.prefInfo}>
                      <h4 className={styles.prefName}>{t.categoryMarketing}</h4>
                      <p className={styles.prefDesc}>{t.categoryMarketingDesc}</p>
                    </div>
                    <div className={styles.prefToggle}>
                      <label className={styles.switch}>
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={() => togglePreference('marketing')}
                        />
                        <span className={styles.slider}></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.modalFooter}>
                <button
                  type="button"
                  onClick={handleRejectOptional}
                  className={`${styles.btn} ${styles.btnOutline}`}
                >
                  {t.rejectOptional}
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className={`${styles.btn} ${styles.btnPrimary}`}
                >
                  {t.saveSettings}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}
