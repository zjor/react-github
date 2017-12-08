import { combineReducers } from 'redux'

const repos = (state = [{key: '1', name: 'Empty list'}], action) => {
  switch (action.type) {
    case "SET_REPOS":
      return action.repos
    default:
      return state
  }
}

const username = (state = "", action) => {
  switch (action.type) {
    case "SET_USERNAME":
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
