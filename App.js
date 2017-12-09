import React from 'react';

import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import ReactGithub from './app/components/ReactGithub'
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

const App = connect(mapStateToProps, mapDispatchToProps)(ReactGithub);

const app = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default app;
