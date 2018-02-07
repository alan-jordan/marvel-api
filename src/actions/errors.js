export const throwError = (message) => {
  return {
    type: 'THROW_ERROR',
    err: message
  }
}
