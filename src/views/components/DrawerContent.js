import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native'
import {
  NavigationActions
} from 'react-navigation'
import {
  DrawerItems
} from 'react-navigation-drawer'
import {
  Header,
  Button
} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import SafeAreaView from 'react-native-safe-area-view'
import { COLORS } from '../../styles';

const styles = StyleSheet.create({
  pictureContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150
  },
  containerStyle: {
    backgroundColor: 'transparent',
    height: 50,
    padding: 15,
    borderBottomColor : 'transparent'
  },
  pictureInfo : {
    color : COLORS.DARK_GRAY, 
    fontStyle : 'italic', 
    fontSize : 12
  },
  userName : {
    color : COLORS.DARK_GRAY
  }
});

export default class DrawerContent extends Component {

  constructor(props) {
    super(props);
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <Header containerStyle={styles.containerStyle}
            rightComponent={
              <Button
                type='clear'
                styles={{ flex: 1 }}
                onPress={() => this.props.navigation.goBack()}
                icon={<Icon
                  name='arrow-left'
                  color={COLORS.PRIMARY}
                  size={25}
                />}
              />
            } />
          <View style={styles.pictureContainer}>
            <Text style={styles.userName}>Nome do usuário</Text>
            <Icon name='user-circle-o' color={COLORS.PRIMARY} size={100} />
            <Text style={styles.pictureInfo}>Clique para adicionar uma foto sua</Text>
          </View>
          <DrawerItems {...this.props} activeBackgroundColor={COLORS.LIGHT_GRAY} inactiveBackgroundColor='transparent' inactiveTintColor={COLORS.PRIMARY}/>
        </SafeAreaView>
      </ScrollView>
    )
  }
}