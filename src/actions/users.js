export const actionTypes = {
  LOAD_USERS: '[Users] Load Users',
  LOAD_USERS_COMPLETE: '[Users] Load Users Complete',
  LOAD_USERS_ERROR: '[Users] Load Users Error',

  TOGGLE_USER_EXTRA: '[Users] Toggle Extra Info'
}

export function loadUsers () {
  return {
    type: actionTypes.LOAD_USERS
  }
}

export function loadUsersComplete (users) {
  return {
    type: actionTypes.LOAD_USERS_COMPLETE,
    payload: users
  }
}

export function toggleUserExtra (user) {
  return {
    type: actionTypes.TOGGLE_USER_EXTRA,
    payload: user
  }
}
