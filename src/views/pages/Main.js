import React, { useEffect, useState } from 'react';
import MapView from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import {
  StyleSheet,
  View
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from 'react-navigation-drawer';

const styles = StyleSheet.create({
  map: {
    flex : 1
  }
});

const Main = (props) => {

  const [location, setLocation] = useState({
    latitude : -21.26457,
    longitude : -44.99624,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05
  });
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLocation(info.coords)
    });
  }, []);

  return (
    <View style={{flex : 1}}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      />
      <View style={{ position: 'absolute', top : '5%', left : '5%' }}>
        <Button icon={<Icon name='bars' color='black' size={35}/>} type='clear' onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())} />
      </View>
    </View>
  )
}

export default Main;