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

export const fetchRepos = (username) => {
  return async (dispatch) => {
    dispatch(requestRepos())
    try {
      const res = await fetch('https://api.github.com/users/' + username + '/repos')
      const json = await res.json()
      const repos = json.map(repo => { return {key: repo.url, name: repo.full_name} })
      dispatch(setRepos(repos))
    } catch (e) {
      console.log(e)
    }

  }

}
