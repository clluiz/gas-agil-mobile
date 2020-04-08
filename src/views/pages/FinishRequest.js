import React, { useState } from 'react'
import {
  FlatList,
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
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: COLORS.PRIMARY
  },
  value: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.PRIMARY
  },
  container: {
    alignItems: 'center',
    flex: 3
  },
  finishButton: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.CONFIRM
  },
  paymentMethod: {
    fontSize: 20,
    color: COLORS.PRIMARY
  },
  resume: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    width: 300,
    fontSize: 20
  },
  item: {
    fontSize: 15,
    padding: 5,
    color: COLORS.PRIMARY,
    textAlign: 'center'
  }
})

const MONEY = 0
const CARD = 1

export default ({ navigation }) => {
  const { state: { params } } = navigation
  const [paymentMethod, setPaymentMethod] = useState(MONEY)

  return (
    <View style={{ flex: 1 }}>
      <PageHeader navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>Resumo</Text>
        <FlatList
          data={params.selectedProducts}
          keyExtractor={item => item.codigo.toString()}
          renderItem={({ item }) =>
            <View style={styles.resume}>
              <Text style={styles.item}>{item.quantidade}</Text>
              <Text style={styles.item}>{item.descricao}</Text>
              <Text style={styles.item}>R${item.preco.toFixed(2)}</Text>
            </View>
          }
        />
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <Text style={styles.value}>Total: R$ {params.requestValue.toFixed(2)}</Text>
        <Text style={styles.paymentMethod}>Pagar com:</Text>
        <ButtonGroup
          selectedTextStyle={{ color: COLORS.WHITE }}
          selectedButtonStyle={{ backgroundColor: COLORS.PRIMARY }}
          buttonStyle={{ backgroundColor: COLORS.WHITE }}
          onPress={(index) => setPaymentMethod(index)}
          selectedIndex={paymentMethod}
          buttons={['Dinheiro', 'Cartão']}
        />
      </View>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
        <Icon
          name='map-marker'
          color={COLORS.PRIMARY}
          size={40}
        />
        <View>
          <Text>Endereço de entrega:</Text>
          <Text>Rua Geraldo Ribeiro, 345, Parque Bocaina</Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Button buttonStyle={styles.finishButton} title="Finalizar pedido"></Button>
      </View>
    </View>
  )
}