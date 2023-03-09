import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import CharactersList from '../components/CharactersList';
import logo from '../assets/marvel_logo.png'

function CharactersScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text>Welcome to the Character screen!</Text> */}
      <Image source={logo} style={styles.logo} />
        <CharactersList/>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: 'contain'
  }
})

export default CharactersScreen;
