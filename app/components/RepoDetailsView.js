import React from 'react'
import {
  StyleSheet,
  View,
  Text
  } from 'react-native'

class RepoDetailsView extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Text> I'm details</Text>
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
