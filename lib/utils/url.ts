import { isClientSide } from './client-server'
import { getClientSubdomain } from './client/url'
import { getServerSubdomain } from './server/url'

/**
 * Retrieves the subdomain of the current environment.
 * If the code is running on the client side, it uses the `getClientSubdomain` function.
 * Otherwise, it uses the `getServerSubdomain` function for server-side execution.
 * @returns {Promise<string>} A promise that resolves to the subdomain as a string.
 */
export async function getSubdomain() {
  const subdomain = isClientSide
    ? getClientSubdomain()
    : await getServerSubdomain()
  return subdomain
}
