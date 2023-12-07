/**
 * Retrieves the subdomain from the server's host headers (server-side).
 * It uses Next.js's headers module to access the host headers.
 * Assumes the subdomain is the first part of the hostname.
 * @returns {Promise<string>} A promise that resolves to the subdomain as a string.
 */
export async function getServerSubdomain() {
  const { headers } = await import('next/headers')
  const host = headers().get('host') || ''
  const hostParts = host ? host.split('.') : ''
  const subdomain = hostParts[0]
  return subdomain
}
