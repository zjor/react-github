import {
  SET_USERNAME,
  REQUEST_REPOS,
  SET_REPOS
} from '../actions'

export const reposReducer = (state = {
  isLoading: false,
  items: [{key: '1', name: 'Empty list'}]
}, action) => {
  switch (action.type) {
    case REQUEST_REPOS:
      return {
        ...state,
        isLoading: true
      }
    case SET_REPOS:
    return {
      isLoading: false,
      items: action.repos
    }
    default:
      return state
  }
}

export const usernameReducer = (state = "", action) => {
  switch (action.type) {
    case SET_USERNAME:
      return action.username
    default:
      return state
  }
}
