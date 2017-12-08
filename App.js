import React from 'react';
import {
   StyleSheet,
   Text,
   TextInput,
   Button,
   FlatList,
   ProgressBarAndroid,
   View
 } from 'react-native';

import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'

import reactGithub from './app/reducers';
import { setUsername, setRepos, requestRepos } from './app/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  async fetchRepos() {
    try {
      this.props.requestRepos();
      const res = await fetch('https://api.github.com/users/' + this.props.username + '/repos');
      const json = await res.json();
      const repos = json.map(repo => { return {key: repo.url, name: repo.full_name} });
      this.props.setRepos(repos);
    } catch (e) {
      console.warn(e);
    }
  }

  render() {
    const progressBar = (
      <View style={{flex: 1}}>
        <ProgressBarAndroid styleAttr="Large" />
      </View>
    );

    const listItem = ({ item }) => (
      <View>
        <Text>{item.name}</Text>
      </View>
    );

    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.search}
            placeholder="Type user's name here"
            onChangeText={(text) => this.props.setUsername(text)}
          />
          <Button
            title="Repos"
            onPress={this.fetchRepos.bind(this)}
          />
        </View>
        {this.props.repos.isLoading ? progressBar :
          <FlatList
            style={{width: '100%'}}
            data={this.props.repos.items}
            renderItem={listItem}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginTop: Expo.Constants.statusBarHeight
  },
  searchBar: {
    flexDirection: 'row',
    marginBottom: 8
  },
  search: {
    flex: 1,
    marginRight: 8
  }
});

const store = createStore(reactGithub);

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
        requestRepos: () => dispatch(requestRepos())
    }
};

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App);

const app = () => (
  <Provider store={store}>
    <ReduxApp />
  </Provider>
);

export default app;
