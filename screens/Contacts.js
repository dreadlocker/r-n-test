import React from 'react';
import { StyleSheet, View, Linking, Button } from 'react-native';

const Contacts = () => {
  const openGitHub = () => { Linking.openURL('https://github.com/dreadlocker') }

  return (
    <View style={ styles.container }>
      <Button title="GitHub" onPress={ openGitHub } />
    </View>
  );
}

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});