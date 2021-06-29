import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteItem, addToCart, removeOneItem } from '../../store/actions/products';
import { Ionicons } from '@expo/vector-icons';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const deleteThisItem = (id) => {
    dispatch(deleteItem(id))
  }
  const addItemToCart = (product) => {
    dispatch(addToCart(product))
  }
  const removeAnItem = (id) => {
    dispatch(removeOneItem(id))
  }

  return (
    <View style={ styles.productHolder }>
      <View style={ styles.productInfo }>
        <Text style={ styles.productInfoText }>{ product.type }</Text>
        <Text style={ styles.productInfoText }>{ product.brand }</Text>
        <Text style={ styles.productInfoText }>${ product.price }</Text>
      </View>
      <View style={ styles.productCountHolder }>
        <Button onPress={ removeAnItem.bind(null, product.id) } title='-' />
        <Text style={ styles.productCount }>{ product.count }</Text>
        <Button onPress={ addItemToCart.bind(null, product) } title='+' />
        <TouchableHighlight onPress={ deleteThisItem.bind(null, product.id) }>
          <View style={ styles.deleteBtn }>
            <Ionicons
              name="md-trash-outline"
              size={ 30 }
              color="red"
            />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Product;

const styles = StyleSheet.create({
  productHolder: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'green',
    marginBottom: 10,
  },
  deleteBtn: {
    alignItems: 'center',
    marginLeft: 20,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productInfoText: {
    paddingHorizontal: 5,
    fontSize: 20,
  },
  productCountHolder: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productCount: {
    fontSize: 25,
    paddingHorizontal: 5,
  },
});