/**
 * Gets the subdomain from the current window's hostname (client-side).
 * Assumes the subdomain is the first part of the hostname.
 * @returns {string} The subdomain as a string.
 */
export function getClientSubdomain() {
  const host = window.location.hostname
  const hostParts = host ? host.split('.') : ''
  const subdomain = hostParts[0]
  return subdomain
}
