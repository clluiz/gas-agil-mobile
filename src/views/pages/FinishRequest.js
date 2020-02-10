import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  Button
} from 'react-native-elements'
import PageHeader from '../components/PageHeader'

export default ({ navigation }) => {
  const { state : { params } } = navigation;
  return (
    <View>
      <PageHeader navigation={navigation} />
      <Text>Finish request</Text>
      <Text>R$ {params.requestValue}</Text>
      <Text>Meios de pagamento:</Text>
      <Button title="Finalizar"></Button>
    </View>
  )
}