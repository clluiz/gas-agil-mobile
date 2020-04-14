import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
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
import { FlatList } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  button: {
    width: 300,
    backgroundColor: COLORS.PRIMARY
  }
})

const AddresItem = ({ address }) => {
  return (
    <Fragment>
      <Text>{`${address.logradouro}, ${address.numero}`}</Text>
      <Text>{`${address.bairro}`}</Text>
    </Fragment>
  )
}

AddresItem.propTypes = {
  address: PropTypes.shape({
    logradouro: PropTypes.string,
    numero: PropTypes.string,
    bairro: PropTypes.string,
    cep: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
    complemento: PropTypes.string,
    referencia: PropTypes.string
  })
} 

export default (props) => {

  const [adresses, setAdresses] = useState([{
    logradouro: 'Rua Geraldo Ribeiro',
    numero: 325,
    bairro: 'Parque Bocaina'
  }, {
    logradouro: 'Rua das Estrelas',
    numero: 67,
    bairro: 'Morada do Sol'
  }])

  return (
    <View>
      <PageHeader navigation={props.navigation} />
      {
        adresses.length === 0 ?
          <Text>
            Nenhum endereço cadastrado
          </Text>
          :
          <FlatList
            data={adresses}
            renderItem={({ item }) =>
            <AddresItem address={item} />}
          />
      }
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          buttonStyle={styles.button}
          onPress={() => props.navigation.navigate('NewAddress')}
          title="Adicionar novo endereço"
        />
      </View>
    </View>
  )
}