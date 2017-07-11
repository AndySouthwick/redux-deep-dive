import { actionTypes } from '../actions/users'

const initialState = {
  loading: false,
  data: []
}

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case actionTypes.LOAD_USERS:
      return {
        loading: true,
        data: []
      }

    case actionTypes.LOAD_USERS_COMPLETE:
      return {
        loading: false,
        data: action.payload.map((user) => {
          return {
            ...user,
            isExpanded: false
          }
        })
      }

    case actionTypes.TOGGLE_USER_EXTRA:
      return {
        loading: false,
        data: state.data.map((user) => {
          if(action.payload.id === user.id) {
            return {
              ...user,
              isExpanded: !user.isExpanded
            }
          }
          return user
        })
      }

    default:
      return state
  }
}
