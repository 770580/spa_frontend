export const BTN_DISABLED = 'BTN_DISABLED'
export const BTN_ENABLED = 'BTN_ENABLED'

export function disableBtn() {
  return {
    type: BTN_DISABLED,
    disabled: true
  }
}

export function enableBtn() {
  return {
    type: BTN_ENABLED,
    disabled: false
  }
}