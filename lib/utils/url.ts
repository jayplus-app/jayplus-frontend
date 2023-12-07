import { headers } from 'next/headers'
/**
 * Extracts the subdomain from headers.
 * Assumes that the hostname follows the format: [subdomain].[domain].[tld]
 * @returns {string} The subdomain, or null if no subdomain is present.
 */
export function getSubdomain() {
  const headersList = headers()
  const host = headersList.get('host')
  const hostParts = host ? host.split('.') : ''
  const subdomain = hostParts[0]
  return subdomain
}
