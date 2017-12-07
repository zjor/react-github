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

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reactGithub from './app/reducers';

let store = createStore(reactGithub);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      isLoading: false,
      repos: [{key: '1', name: 'Empty list'}]
    }
  }

  onChangeText(text) {
    this.setState({ ...this.state, username: text });
  }

  async fetchRepos() {
    this.setState({ ...this.state, isLoading: true });

    const res = await fetch('https://api.github.com/users/' + this.state.username + '/repos');
    const json = await res.json();
    const repos = json.map(repo => { return {key: repo.url, name: repo.full_name} });
    this.setState({ ...this.state, repos: repos, isLoading: false});
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
            onChangeText={this.onChangeText.bind(this)}
          />
          <Button
            title="Repos"
            onPress={this.fetchRepos.bind(this)}
          />
        </View>
        {this.state.isLoading ? progressBar :
          <FlatList
            style={{width: '100%'}}
            data={this.state.repos}
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

const app = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default app;
