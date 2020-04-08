import React from 'react'
import {
  Button,
  View,
  Text
} from 'react-native'
import PageHeader from '../components/PageHeader'

export default (props) => (
  <View>
    <PageHeader navigation={props.navigation} />
    <Text>Endereços cadastrados</Text>
    <Text>
      Nenhum endereço cadastrado
    </Text>
    <Button 
      onPress={() => props.navigation.navigate('NewAddress')}
      title="Adicionar novo endereço"
    />

  </View>
)