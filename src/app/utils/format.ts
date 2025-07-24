/**
 * Utility functions for formatting values
 */

/**
 * Formatea un valor numérico como moneda según la localización
 * @param value - Valor numérico a formatear
 * @param locale - Código de localización (ej. 'es', 'en')
 * @param currencyCode - Código de moneda ISO (default: 'USD')
 * @returns String formateado como moneda
 */
export function formatCurrency(value: number, locale: string, currencyCode = 'DOP'): string {
  // Para República Dominicana, usamos RD$ como símbolo
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return new Intl.NumberFormat(locale, options).format(value);
}

/**
 * Formatea un número con separadores de miles
 * @param value - Valor numérico a formatear
 * @param locale - Código de localización
 * @param decimals - Número de decimales a mostrar
 * @returns String formateado con separadores de miles
 */
export function formatNumber(value: number, locale: string, decimals = 2): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

/**
 * Formatea un porcentaje
 * @param value - Valor decimal (ej: 0.25 para 25%)
 * @param locale - Código de localización
 * @returns String formateado como porcentaje
 */
export function formatPercent(value: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}
