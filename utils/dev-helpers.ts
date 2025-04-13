/**
 * Helper functions for development environment
 */

/**
 * Checks if the application is running in development mode
 */
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
}

/**
 * Safe email handling for development environment
 * Uses a predefined test email in development to avoid sending emails to real addresses
 * @param email The email address from the form
 * @returns Either the safe test email (in development) or the original email (in production)
 */
export const getSafeEmail = (email: string): string => {
  if (isDevelopment()) {
    // Use a test email service like Mailhog or a safe test email
    return 'test@example.com';
  }
  return email;
} 