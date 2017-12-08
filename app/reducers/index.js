import { combineReducers } from 'redux'

import {
  SET_USERNAME,
  REQUEST_REPOS,
  SET_REPOS
} from '../actions'

const repos = (state = {
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

const username = (state = "", action) => {
  switch (action.type) {
    case SET_USERNAME:
      return action.username
    default:
      return state
  }
}

const reactGithub = combineReducers({
  repos,
  username
})

export default reactGithub
