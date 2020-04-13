/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react'
import {
  Main,
  RequestList,
  NewRequest,
  EditUser,
  Distributors,
  FinishRequest,
  NewAddress,
  Adresses
} from './pages'

import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import DrawerContent from './components/DrawerContent'
import { Icon } from 'react-native-elements'
import { COLORS } from '../styles'

const MainNavigator = createDrawerNavigator({
  Home : { screen : Main, navigationOptions: () => ({ drawerLabel: () => null }) },
  NewRequest : { screen : NewRequest, navigationOptions: () => ({ title : 'Novo pedido', drawerIcon : <Icon type="material-community" name="phone-plus" size={20} color={COLORS.PRIMARY} /> }) },
  RequestList : { screen : RequestList, navigationOptions: () => ({ title : 'Meus pedidos', drawerIcon : <Icon type="material" name="list" size={20} color={COLORS.PRIMARY} /> }) },
  Distributors : { screen : Distributors, navigationOptions: () => ({ title : 'Encontrar distribuidor', drawerIcon : <Icon type="font-awesome" name="search" size={20} color={COLORS.PRIMARY} /> }) },
  EditUser : { screen : EditUser, navigationOptions: () => ({ title : 'Meus dados', drawerIcon : <Icon type="font-awesome" name="address-card-o" size={20} color={COLORS.PRIMARY} /> }) },
  Adresses: { screen : Adresses, navigationOptions: () => ({ title : 'Endereços', drawerIcon : <Icon type="font-awesome" name="address-card-o" size={20} color={COLORS.PRIMARY} /> })},
  FinishRequest : { screen : FinishRequest, navigationOptions: () => ({ drawerLabel: () => null }) },
  NewAddress: { screen : NewAddress, navigationOptions: () => ({ drawerLabel: () => null }) }
}, {
  contentComponent : DrawerContent,
  backBehavior : 'history'
})

const App = createAppContainer(MainNavigator)

export default App
