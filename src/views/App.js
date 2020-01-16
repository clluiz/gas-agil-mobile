/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Main from './pages/Main';
import Login from './pages/Login';
import RequestList from './pages/RequestList';
import NewRequest from './pages/NewRequest';
import EditUser from './pages/EditUser';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const MainNavigator = createDrawerNavigator({
  Home : { screen : Main, title : 'Home' },
  Login : { screen : Login  },
  EditUser : { screen : EditUser, navigationOptions: () => ({ title : 'Meus dados'}) },
  NewRequest : { screen : NewRequest, navigationOptions: () => ({ title : 'Novo pedido' }) },
  RequestList : { screen : RequestList, navigationOptions: () => ({ title : 'Pedidos' }) } 
});

const App = createAppContainer(MainNavigator);


// const App: () => React$Node = () => {
//   return (
//     <View style={styles.container}>
//       <NativeRouter>
//         <View style={styles.container}>
//           <Route exact path="/" component={Main} />
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/edit-user" component={EditUser} />
//           <Route exact path="/request-list" component={RequestList} />
//           <Route exact path="/new-request" component={NewRequest} /> 
//         </View>
//       </NativeRouter>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex : 1
  }
});

export default App;
