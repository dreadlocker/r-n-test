import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Contacts from './screens/Contacts';
import Cart from './screens/Cart';
import Products from './screens/Products';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/products';

const rootReducer = combineReducers({
  products: productsReducer,
});
const store = createStore(rootReducer);

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App () {
  return (
    <Provider store={ store }>
      <NavigationContainer >
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Products" component={ Products } />
          <Drawer.Screen name="Cart" component={ Cart } />
          <Drawer.Screen name="Contacts us" component={ Contacts } />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
