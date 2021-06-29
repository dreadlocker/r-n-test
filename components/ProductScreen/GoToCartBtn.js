import React from 'react'
import { StyleSheet, Button, View } from 'react-native'
import { fullWidth, contentWidth } from '../../assets/cssVars';

const GoToCartBtn = ({ navigation }) => {
  const goToCart = () => {
    navigation.navigate('Cart')
  }

  return (
    <View style={ styles.buttonHolder }>
      <View style={ styles.button }>
        <Button onPress={ goToCart } title='View Cart' />
      </View>
    </View>
  )
}

export default GoToCartBtn

const styles = StyleSheet.create({
  buttonHolder: {
    width: fullWidth,
    alignItems: 'center',
  },
  button: {
    width: contentWidth,
    marginVertical: 10,
  },
})
