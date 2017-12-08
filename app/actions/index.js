export const SET_USERNAME = "SET_USERNAME";

export const setUsername = (username) => {
  return {
    type: SET_USERNAME,
    username
  }
}

export const REQUEST_REPOS = "REQUEST_REPOS";

export const requestRepos = () => {
  return {
    type: REQUEST_REPOS
  }
}

export const SET_REPOS = "SET_REPOS";

export const setRepos = (repos) => {
  return {
    type: SET_REPOS,
    repos
  }
}
