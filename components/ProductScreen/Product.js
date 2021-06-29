import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { useDispatch } from 'react-redux';
import { contentWidth } from '../../assets/cssVars';
import { addToCart } from '../../store/actions/products';

const Product = ({ info, type }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart({
      type,
      brand: info.brand,
      price: info.price,
      id: info.id,
    }))
  }

  return (
    <View style={ styles.container }>
      <Image
        style={ styles.image }
        source={ { uri: info.imgUrl } }
        resizeMode="contain"
      />
      <View style={ styles.textHolder }>
        <Text style={ styles.text }>{ info.brand }</Text>
        <Text style={ styles.price() }>{ `$${info.price}` }</Text>
      </View>
      <View style={ styles.btnHolder }>
        <View style={ styles.btn }>
          <Button onPress={ addItemToCart } title='Add to Cart' />
        </View>
      </View>
    </View >
  )
}

export default Product

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: contentWidth,
    height: 300,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  image: {
    flex: 5,
  },
  textHolder: {
    marginVertical: 5
  },
  text: {
    textAlign: 'center',
  },
  price: function () { return { ...this.text, fontSize: 20 } },
  btnHolder: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    width: 150,
  },
})
