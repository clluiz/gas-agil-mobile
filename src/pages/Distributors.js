import React from 'react'
import {
  Text,
  StyleSheet,
  View
} from 'react-native'
import PageHeader from '../components/PageHeader'
import { FlatList } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  
})

const distributors = [{
  id: 1,
  name: 'Petrogás',
  address: 'R. Chagas Dória, 320 - Murad, Lavras - MG',
  rating: '5',
  status: 'open',
  distance: '1'
}, {
  id: 2,
  name: 'Lavras gás',
  address: 'R. Firmino Sales, 183 - Centro, Lavras - MG',
  rating: '3.5',
  status: 'closed',
  distance: '1.5'
}, {
  id: 3,
  name: 'Venerando gás',
  address: 'R. Donato Bauth, 137 - Artur Bernades, Lavras - MG',
  rating: '5',
  status: 'closed',
  distance: '9'
}, {
  id: 4,
  name: 'Consigaz',
  address: 'Avenida Coronel, Av. Juventino Dias Teixeira',
  rating: '5',
  status: 'open',
  distance: '3.7'
}]

const RenderDistributor = ({ name, address, rating, status, distance }) => {
  return (
    <View>
      <Text>{`${name} ${status == 'open' ? 'ABERTO' : 'FECHADO'}`}</Text>
      <Text>{`Avaliação: ${rating}`}</Text>
      <Text>{`${address} - ${distance}km`}</Text>
    </View>
  )
}

export default (props) => (
  <View>
    <PageHeader navigation={props.navigation} />
    <FlatList
      data={distributors}
      renderItem={({item}) => <RenderDistributor {...item} />}
      keyExtractor={item => item.id}
    />
  </View>
)