'use client';

/**
 * AnalyticsTracker
 *
 * Componente de inicialización y utilidades analíticas del cliente.
 * 
 * Nota de Auditoría & Arquitectura:
 * El evento estándar 'PageView' del nuevo Meta Pixel (ID: 3364790573722018) se
 * despacha directamente desde el script base oficial en RootLayout (src/app/layout.tsx)
 * para garantizar compatibilidad estricta con Meta y evitar registros duplicados de visitas.
 *
 * Al haberse dado de baja la cuenta comercial previa de Meta, se revocó y purgó el token CAPI
 * anterior. Si en el futuro se genera un token de Conversions API en la nueva cuenta comercial,
 * este componente puede utilizarse para despachar eventos híbridos deduplicados.
 */
export function AnalyticsTracker() {
  // El evento PageView base se despacha en layout.tsx.
  // Mantenemos este componente como punto de extensión para futuros eventos personalizados.
  return null;
}
