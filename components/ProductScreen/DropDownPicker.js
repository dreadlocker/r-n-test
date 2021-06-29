import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import { contentWidth } from '../../assets/cssVars';
import { filterProducts } from '../../store/actions/products';

const DropDownPickerComponent = () => {
  const dispatch = useDispatch();
  const { productTypes } = useSelector(state => state.products)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(productTypes);

  const onChangeValue = (value) => {
    dispatch(filterProducts(value))
  }

  return (
    <View style={ styles.dropDownPickerHolder }>
      <DropDownPicker
        style={ styles.dropDownPicker }
        open={ open }
        value={ value }
        items={ items }
        setOpen={ setOpen }
        setValue={ setValue }
        setItems={ setItems }
        onChangeValue={ onChangeValue }
        dropDownContainerStyle={ { width: contentWidth, } }
      />
    </View>
  );
}

export default DropDownPickerComponent

const styles = StyleSheet.create({
  dropDownPickerHolder: {
    marginTop: StatusBar.currentHeight + 10,
    alignSelf: 'center',
  },
  dropDownPicker: {
    width: contentWidth,
    height: 50,
  },
})
