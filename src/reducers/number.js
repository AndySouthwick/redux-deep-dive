import { actionTypes } from '../actions/number'

const initialState = {
  value: 0
}

export default function(state = initialState, action) {
  switch(action.type) {
    case actionTypes.ADD:
      return {
        value: state.value + 1
      }

    default:
      return state
  }
}
