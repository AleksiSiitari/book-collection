export const isKeyboardSelectionEvent = e => {
  if (e.key === 'Enter' || e.key === ' ') {
    return true
  }
  return false
}
