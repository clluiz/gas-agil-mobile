import React from 'react'
import {
  View,
  Text
} from 'react-native'
import PageHeader from '../components/PageHeader'
import Address from '../components/Address'
import KeyboardShift from '../components/KeyboardShift'

export default (props) => (
  <KeyboardShift extraGap={100}>
    {
      () => (
        <View>
          <PageHeader navigation={props.navigation} />
          <Address />
        </View>
      )
    }
  </KeyboardShift>
)