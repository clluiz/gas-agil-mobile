import React, { useState } from 'react'
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
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
  button: {
    width: 300,
    backgroundColor: COLORS.PRIMARY
  },
  card: {
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: COLORS.LIGHT_GRAY,
    borderWidth: 1,
    padding: 10,
    height: 120,
    margin: 10,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: COLORS.DARK_GRAY
  },
  removeButton: {
    fontSize: 12,
    color: COLORS.GRAY
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 15,
    color: COLORS.PRIMARY
  }
})

const AddresItem = ({ address }) => {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>{`${address.logradouro}, ${address.numero}`}</Text>
        <Text style={styles.text}>{`${address.bairro}, ${address.cidade}-${address.estado}`}</Text>
      </View>
      <View>
        <Button
          icon={
            <Icon
              type="font-awesome"
              name="trash"
              size={15}
              color={COLORS.ERROR}            
              />
            }
            titleStyle={styles.removeButton}
            title="Remover este endereço"
            type="clear"
        />
      </View>
    </View>
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
    numero: '325',
    bairro: 'Parque Bocaina',
    cidade: 'Lavras',
    estado: 'MG'
  }, {
    logradouro: 'Rua das Estrelas',
    numero: '67',
    bairro: 'Morada do Sol',
    cidade: 'Lavras',
    estado: 'MG'
  }])

  return (
    <View>
      <PageHeader navigation={props.navigation} />
      <Text style={styles.title}>Endereços</Text>
      {
        adresses.length === 0 ?
          <Text>
            Nenhum endereço cadastrado
          </Text>
          :
          <FlatList
            data={adresses}
            keyExtractor={item => item.logradouro}
            renderItem={({ item }) =>
            <AddresItem address={item} />}
          />
      }
      <View style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
        <Button
          buttonStyle={styles.button}
          onPress={() => props.navigation.navigate('NewAddress')}
          title="Adicionar novo endereço"
        />
      </View>
    </View>
  )
}