import React from 'react';

import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { StackNavigator } from 'react-navigation';

import ReactGithubApp from './app/components/ReactGithubApp'
import RepoDetailsView from './app/components/RepoDetailsView'

import rootReducer from './app/reducers'
import { setUsername, setRepos, requestRepos, fetchRepos } from './app/actions'

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

const mapStateToProps = (state) => {
    return {
        username: state.username,
        repos: state.repos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (username) => dispatch(setUsername(username)),
        setRepos: (id) => dispatch(setRepos(id)),
        requestRepos: () => dispatch(requestRepos()),
        fetchRepos: (username) => dispatch(fetchRepos(username))
    }
};

const App = connect(mapStateToProps, mapDispatchToProps)(ReactGithubApp);

const RootNavigator = StackNavigator({
  Home: {
    screen: App
  },
  Details: {
    screen: RepoDetailsView
  }
})

const app = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default app;
