import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
  const { openDrawer, toggleDrawer } = navigation
  const openDrawerHandler = () => {
    openDrawer()
  }

  return (
    <View style={ styles.container }>
      <Text>Swipe screen from left to right to open the drawer</Text>
      <Text>... or click the button below.</Text>
      <View style={ styles.button }>
        <Button onPress={ openDrawerHandler } title='Open Drawer' />
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginVertical: 10,
  }
});