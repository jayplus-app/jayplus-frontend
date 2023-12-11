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

/**
 * Gets the origin of the current window (client-side).
 * @returns {string} The origin as a string.
 */
export function getClientURLOrigin() {
  const origin = window.location.origin
  return origin
}
