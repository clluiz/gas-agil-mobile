import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import {
  Button
} from 'react-native-elements'
import PageHeader from '../components/PageHeader'
import Address from '../components/Adresses'
import KeyboardShift from '../components/KeyboardShift'
import { COLORS } from '../styles'

const styles = StyleSheet.create({
  button: {
    width: 300,
    backgroundColor: COLORS.PRIMARY
  }
})

export default (props) => {

  function adicionarEndereco() {
  }

  return (<KeyboardShift extraGap={100}>
    {
      () => (
        <View>
          <PageHeader navigation={props.navigation} />
          <View style={{ paddingHorizontal: 10 }}>
            <Address />
          </View>
          <View style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              buttonStyle={styles.button}
              title="Salvar"
              onPress={() => adicionarEndereco()}
            />
          </View>
        </View>
      )
    }
  </KeyboardShift>)
}