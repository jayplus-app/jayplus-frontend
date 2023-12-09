import { usePathname, useSearchParams } from 'next/navigation'

/**
 * Custom hook that provides a function to update query parameters in the URL.
 * @returns {Function} The updateQueryParams function.
 */
export const useUpdateQueryParams = () => {
  const pathName = usePathname()
  const searchParams = useSearchParams()

  /**
   * Updates the specified query parameter with the given value and returns the updated URL.
   * If the query parameter doesn't exist, it will be added.
   * @param {string} paramName - The name of the query parameter to update.
   * @param {string | number} paramValue - The new value for the query parameter.
   * @returns {string} The updated URL with the modified query parameter.
   */
  const updateQueryParams = (
    paramName: string,
    paramValue: string | number
  ) => {
    const params = new URLSearchParams(searchParams)
    params.set(paramName, paramValue.toString())
    const newUrl = `${pathName}?${params.toString()}`
    return newUrl
  }

  return updateQueryParams
}
