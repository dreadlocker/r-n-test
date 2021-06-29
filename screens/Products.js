import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { fullWidth } from '../assets/cssVars';
import DropDownPicker from '../components/ProductScreen/DropDownPicker';
import RenderProductTypesAndProducts from '../components/ProductScreen/RenderProductTypesAndProducts';
import GoToCartBtn from '../components/ProductScreen/GoToCartBtn';

const Products = ({ navigation }) => {
  return (
    <View style={ styles.scrollViewHolder } >
      <DropDownPicker />
      <ScrollView style={ styles.scrollView } >
        <RenderProductTypesAndProducts />
        <GoToCartBtn navigation={ navigation } />
      </ScrollView>
    </View>
  );
}

export default Products;

const styles = StyleSheet.create({
  scrollViewHolder: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
    width: fullWidth,
  },
});