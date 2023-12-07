/**
 * Indicates whether the code is running on the client side.
 * True if `window` object is available, otherwise false.
 * @type {boolean}
 */
export const isClientSide = typeof window !== 'undefined'
