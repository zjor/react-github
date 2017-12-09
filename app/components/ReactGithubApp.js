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

class ReactGithubApp extends React.Component {
  constructor(props) {
    super(props);
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
            onPress={() => this.props.fetchRepos(this.props.username)}
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

export default ReactGithubApp;
