import { combineReducers } from 'redux'

const repos = (state = [{key: '1', name: 'Empty list'}], action) => {
  switch (action.type) {
    // TODO: add code here
    default:
      return state
  }
}


const reactGithub = combineReducers({
  repos
})

export default reactGithub
