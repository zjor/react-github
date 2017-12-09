import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity } from 'react-native'

class RepoListItem extends React.PureComponent {

  constructor(props) {
    super(props)
  }

  onPress() {
    this.props.onPressItem(this.props.item)
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.listItem}
          onPress={this.onPress.bind(this)}>
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
