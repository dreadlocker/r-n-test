import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { fullWidth } from '../../assets/cssVars';
import Product from './Product';
import { useSelector } from 'react-redux';

const RenderProductTypesAndProducts = () => {
  const { filteredProducts } = useSelector(state => state.products)

  return (
    <View style={ styles.container } >
      { filteredProducts.map((productInfo) => {
        const { type, items } = productInfo

        return <View style={ styles.contentHolder } key={ type }>
          <Text style={ styles.productType }>{ type }</Text>
          { items.map((product, index) =>
            <View style={ styles.productHolder } key={ product.imgUrl } >
              <Product info={ product } type={ type } />
            </View>
          ) }
        </View>
      }) }
    </View>
  )
}

export default RenderProductTypesAndProducts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentHolder: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 30,
  },
  productType: {
    fontSize: 30,
  },
  productHolder: {
    flex: 1,
    width: 300,
    alignItems: 'center',
  },
})
