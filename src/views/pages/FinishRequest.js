import React, { useState } from 'react'
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
import { 
  ButtonGroup
} from 'react-native-elements'

const styles = StyleSheet.create({
  total: {
    fontSize: 40,
    textAlign: 'center',
    color: COLORS.PRIMARY
  },
  value: {
    fontSize: 60,
    textAlign: 'center',
    color: COLORS.PRIMARY
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%'
  },
  finishButton: {
    height: 50,
    backgroundColor: COLORS.SUCCESS
  },
  paymentMethod : {
    fontSize: 20
  }
})

const MONEY = 0;
const CARD = 1;

export default ({ navigation }) => {
  const { state : { params } } = navigation

  const [paymentMethod, setPaymentMethod] = useState(MONEY);

  return (
    <View style={{flex : 1}}>
      <PageHeader navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.value}>R$ {params.requestValue.toFixed(2)}</Text>
        <Text style={styles.paymentMethod}>Pagar com:</Text>
        <ButtonGroup 
          selectedTextStyle={{ color: COLORS.WHITE }}
          selectedButtonStyle={{ backgroundColor: COLORS.PRIMARY }}
          buttonStyle={{ backgroundColor: COLORS.WHITE }}
          onPress={(index) => setPaymentMethod(index)} 
          selectedIndex={paymentMethod}
          buttons={['Dinheiro', 'Cartão']}
        />
        <Button buttonStyle={styles.finishButton} title="Finalizar pedido"></Button>
      </View>
    </View>
  )
}