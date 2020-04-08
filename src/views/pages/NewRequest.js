import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'
import PageHeader from '../components/PageHeader'
import Icon from 'react-native-vector-icons/FontAwesome'
import NumericStepper from '../components/NumericStepper'
import { COLORS } from '../../styles'
import {
  Button
} from 'react-native-elements'

const prods = [{
  descricao: 'Botijão 13KG',
  preco: 70.00,
  codigo: 1,
  quantidade: 0
}, {
  descricao: 'Galão de água',
  preco: 10.00,
  codigo: 29,
  quantidade: 0
}, {
  descricao: 'Botijão 13KG',
  preco: 70.00,
  codigo: 17,
  quantidade: 0
}, {
  descricao: 'Galão de água',
  preco: 10.00,
  codigo: 26,
  quantidade: 0
}, {
  descricao: 'Botijão 13KG',
  preco: 70.00,
  codigo: 13,
  quantidade: 0
}, {
  descricao: 'Galão de água',
  preco: 10.00,
  codigo: 22,
  quantidade: 0
}, {
  descricao: 'Botijão 13KG',
  preco: 70.00,
  codigo: 11,
  quantidade: 0
}, {
  descricao: 'Galão de água',
  preco: 10.00,
  codigo: 21,
  quantidade: 0
}]

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20
  },
  stepper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  description: {
    color: COLORS.PRIMARY,
    fontSize: 15
  },
  label: {
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 15,
    color: COLORS.PRIMARY
  },
  confirmButton: {
    height: 50,
    width: 300,
    backgroundColor: COLORS.CONFIRM
  }
})

export default (props) => {

  const [products, setProducts] = useState(prods)
  const [valueOfRequest, setValueOfRequest] = useState(0)

  useEffect(() => {
    const total = products.reduce(
      (accumulator, product) => accumulator + (product.quantidade * product.preco), 0)
    setValueOfRequest(total)
  }, [products])

  function addProduct(productIndex) {
    const newProducts = [...products]
    setProducts(newProducts.map((p, i) => i === productIndex ? { ...p, quantidade: p.quantidade + 1 } : p))
  }

  function removeProduct(productIndex) {
    const newProducts = [...products]
    setProducts(newProducts.map((p, i) => i === productIndex && p.quantidade > 0 ? { ...p, quantidade: p.quantidade - 1 } : p))
  }

  const { navigation } = props
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.85 }}>
        <PageHeader navigation={props.navigation} />
        <View style={styles.container}>
          <View>
            <Icon
              name='user-circle-o'
              color={COLORS.PRIMARY}
              size={50}
            />
          </View>
          <Text>Nome da distribuidora</Text>
        </View>
        <Text style={styles.label}>Escolha os itens do seu pedido: </Text>
        <FlatList data={products}
          keyExtractor={item => item.codigo.toString()}
          renderItem={({ item, index }) =>
            <View style={styles.stepper}>
              <Text style={styles.description}>R${item.preco}</Text>
              <Text style={styles.description}>{item.descricao}</Text>
              <NumericStepper count={item.quantidade || 0} add={() => addProduct(index)} remove={() => removeProduct(index)} />
            </View>}
        />
      </View>
      <View style={{ flex: 0.15, alignItems: 'center' }}>
        <Button 
          disabled={valueOfRequest === 0} 
          onPress={() => navigation.navigate('FinishRequest', { requestValue: valueOfRequest, selectedProducts : products.filter(p => p.quantidade > 0)})} 
          buttonStyle={styles.confirmButton} 
          title={`Próximo ${valueOfRequest ? `R$${valueOfRequest}` : ''}`} 
        />
      </View>
    </View>
  )
}