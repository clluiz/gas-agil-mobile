import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  Button
} from 'react-native-elements'
import { COLORS } from '../../styles'

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: COLORS.PRIMARY
  },
  icon: {
    marginHorizontal: 20,
    color: COLORS.PRIMARY
  },
  description: {
    fontSize: 20,
    color: COLORS.PRIMARY
  }
})

export default (props) => {
  const { count, add, remove } = props
  return (
    <View style={styles.container}>
      <Button
        type='clear'
        onPress={remove}
        icon={<Icon
          name="minus"
          size={20}
          style={styles.icon}
          onPress={remove} />}
      />
      <Text style={styles.description}>{count}</Text>
      <Button
        type='clear'
        onPress={add}
        icon={<Icon
          name="plus"
          size={20}
          style={styles.icon}
          onPress={add}
        />}
      />
    </View>
  )
}