/**
 * Returns today's date in the format 'YYYY-MM-DD'.
 * @returns {string} The formatted date string.
 */
export const todaysDate = () => {
  const today = new Date()
  return `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`
}

/**
 * Adds the specified number of days to a given date.
 *
 * @param inputDate - The input date in the format "yyyy-mm-dd".
 * @param by - The number of days to add to the input date.
 * @returns The resulting date in the format "yyyy-mm-dd".
 */
export const addDaysToDate = (inputDate: string, by: number) => {
  // Parse the input date string into year, month, and day components
  let parts = inputDate.split('-')
  let year = parseInt(parts[0], 10).toString()
  let month = (parseInt(parts[1], 10) - 1).toString() // month is 0-indexed
  let day = parseInt(parts[2], 10).toString()

  // Creates a new Date object using the year, month, and day components
  let date = new Date(parseInt(year), parseInt(month), parseInt(day))

  // Adds the number of days to the date
  date.setDate(date.getDate() + by)

  // Converts the date back to the "yyyy-mm-dd" format
  year = date.getFullYear().toString()
  month = ('0' + (date.getMonth() + 1)).slice(-2)
  day = ('0' + date.getDate()).slice(-2)

  return year + '-' + month + '-' + day
}
