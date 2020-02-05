import React, { useEffect, useState } from 'react';
import MapView from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { DrawerActions } from 'react-navigation-drawer';
import { COLORS } from '../../styles';

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  touchableOpacity: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 50,
    bottom: 80
  },
  actionButton: {
    borderRadius: 50,
    backgroundColor: COLORS.PRIMARY,
    width : 65,
    height: 65
  }
});

const Main = (props) => {

  const [location, setLocation] = useState({
    latitude: -21.26457,
    longitude: -44.99624,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05
  });
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLocation(info.coords)
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
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
      <View style={{ position: 'absolute', top: '5%', left: '5%' }}>
        <Button icon={
          <Icon
            type="font-awesome"
            name="bars"
            color={COLORS.PRIMARY}
            size={35}
          />}
          type='clear'
          onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())} />
      </View>
      {/* <TouchableOpacity style={styles.touchableOpacity}>
        <Button buttonStyle={styles.actionButton} icon={<Icon type='material' name='add' color={COLORS.WHITE} size={35} />} onPress={() => props.navigation.navigate('NewRequest')} />
      </TouchableOpacity> */}
    </View>
  )
}

export default Main;  