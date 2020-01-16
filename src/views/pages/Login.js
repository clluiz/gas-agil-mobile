import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import PageHeader from '../components/PageHeader'

export default (props) => (
  <View>
    <PageHeader navigation={props.navigation}/>
    <Text>Login</Text>
  </View>
)