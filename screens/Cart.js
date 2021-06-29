import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import Product from '../components/CartScreen/Product'

const Cart = ({ navigation }) => {
  const { cart } = useSelector(state => state.products)

  const goToProducts = () => {
    navigation.navigate('Products')
  }
  const placeOrder = () => {
    Alert.alert(
      'App ends here :)',
      'Buy functionality NOT implemented!',
    )
  }

  const content = cart.length === 0
    ? <Text style={ styles.noProducts }>No products added</Text>
    : cart.map((product, idx) => <Product product={ product } key={ idx } />)

  return (
    <View style={ styles.container }>
      { content }
      <View style={ styles.productsBtn }>
        <Button onPress={ goToProducts } title='View Products' />
      </View>
      { cart.length > 0 && <Button onPress={ placeOrder } title='Place Order' color={ 'green' } /> }
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noProducts: {
    marginVertical: 10,
  },
  productsBtn: {
    marginBottom: 10,
  },
});