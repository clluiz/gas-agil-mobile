import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  Button
} from 'react-native-elements'
import PageHeader from '../components/PageHeader'
import { COLORS } from '../../styles'

const styles = StyleSheet.create({
  button: {
    width: 300,
    backgroundColor: COLORS.PRIMARY
  }
})

export default (props) => (
  <View>
    <PageHeader navigation={props.navigation} />
    <Text>Endereços cadastrados</Text>
    <Text>
      Nenhum endereço cadastrado
    </Text>
    <View style={{ display: 'flex', alignItems: 'center' }}>
      <Button
        buttonStyle={styles.button} 
        onPress={() => props.navigation.navigate('NewAddress')}
        title="Adicionar novo endereço"
      />
    </View>
  </View>
)