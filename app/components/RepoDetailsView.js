import React from 'react'
import {
  StyleSheet,
  View,
  Text
  } from 'react-native'

class RepoDetailsView extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.repo.name}`,
  });

  render() {
    return (
      <View style={styles.view}>
        <Text>{JSON.stringify(this.props.navigation.state.params.repo)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
})

export default RepoDetailsView
