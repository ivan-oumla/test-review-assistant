/**
 * Validates email addresses using a standard regex pattern
 */
export function validateEmail(email: string): boolean {
  if (!email) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates URLs ensuring they have proper protocol and format
 */
export function validateUrl(url: string): boolean {
  if (!url) return false;

  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Validates that a string is not empty after trimming
 */
export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}

/**
 * Validates that a string meets minimum length requirement
 */
export function validateMinLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength;
}

/**
 * Validates that a number is within a specified range
 */
export function validateNumberRange(
  value: number,
  min: number,
  max: number
): boolean {
  return value >= min && value <= max;
}
