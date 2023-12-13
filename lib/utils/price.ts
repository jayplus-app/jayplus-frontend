/**
 * Converts the price in cents into a string representation of dollars and cents.
 * @param priceInCents - The price in cents to be converted.
 * @returns The converted price string in the format "dollars.cents".
 */
export function formatPriceFromCentsToDollarsString(
  priceInCents: number
): string {
  const dollars = Math.floor(priceInCents / 100)
  const cents = priceInCents % 100
  const formattedDollars = dollars.toLocaleString()
  const formattedCents = cents.toString().padStart(2, '0')
  return `${formattedDollars}.${formattedCents}`
}
