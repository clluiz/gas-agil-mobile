import React from 'react'
import {
  Text,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import PageHeader from '../components/PageHeader'
import { FlatList } from 'react-native-gesture-handler'
import { Rating } from 'react-native-ratings'

import { COLORS } from '../styles/'; 

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    borderColor: COLORS.GRAY,
    height: 120,
    borderWidth: 1,
    borderStyle: 'solid',
    margin: 10
  },
  cardTitle: {
    backgroundColor: COLORS.LIGHT_GRAY,
    height: 40,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  cardBody: {
    padding: 10
  },  
  title: {
    color: COLORS.PRIMARY,
    fontSize: 17
  },
  address: {
    fontSize: 14,
    color: COLORS.GRAY
  },
  rating: {
    display: 'flex',
    flexDirection: 'row'
  },
  closed: {
    color: COLORS.ERROR
  },
  open: {
    color: COLORS.SUCCESS
  }
})

const distributors = [{
  id: 1,
  name: 'Petrogás',
  address: 'R. Chagas Dória, 320 - Murad',
  rating: '5',
  status: 'open',
  distance: '1'
}, {
  id: 2,
  name: 'Lavras gás',
  address: 'R. Firmino Sales, 183 -  Centro',
  rating: '3.5',
  status: 'closed',
  distance: '1.5'
}, {
  id: 3,
  name: 'Venerando gás',
  address: 'R. Donato Bauth, 137 - Artur Bernades',
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

const Open = () => <Text style={styles.open}>ABERTO</Text>

const Closed = () => <Text style={styles.closed}>FECHADO</Text>

const RenderDistributor = ({ name, address, rating, status, distance }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardTitle}>
        <Text style={styles.title}>{name}</Text>
        <Rating
            ratingCount={5}
            type="star"
            imageSize={20}
            startingValue={rating}
            readonly={true}
            backgroundColor="#FF0000"
          />        
      </View>
      <View style={styles.cardBody}>
        {status === 'open' ? <Open /> : <Closed />}
        <Text style={styles.address}>{`${address} - ${distance}km`}</Text>
      </View>
    </View>
  )
}

export default (props) => (
  <ScrollView>
    <PageHeader navigation={props.navigation}  />
    <FlatList
      data={distributors}
      renderItem={({item}) => <RenderDistributor {...item} />}
      keyExtractor={item => item.id}
    />
  </ScrollView>
)