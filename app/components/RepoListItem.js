import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity } from 'react-native'

class RepoListItem extends React.Component {

  constructor(props) {
    super(props)
  }

  onPress() {
    this.props.navigation.navigate('Details')
  }

  render() {
    console.log(this.props)
    return (
      <View>
        <TouchableOpacity
          style={styles.listItem}
          onPress={this.onPress.bind(this)}
          >
          <Text>{this.props.item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 8
  }
})

export default RepoListItem
