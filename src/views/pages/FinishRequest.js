import React from 'react'
import {
  View,
  Text
} from 'react-native'
import PageHeader from '../components/PageHeader'

export default () => {
  return (
    <View>
      <PageHeader navigation={props.navigation} />
      <Text>Finish request</Text>
    </View>
  )
}