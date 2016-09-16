import { BTN_DISABLED, BTN_ENABLED } from '../actions/PostFormActions'

const initialState = {
  disabled: true
}

export default function postsForm( state = initialState, action) {
  switch (action.type) {
    case BTN_DISABLED:
      return { ...state, disabled: true }
    case BTN_ENABLED:
      return { ...state, disabled: false }
    default:
      return state
  }
}