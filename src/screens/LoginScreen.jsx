import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import LoginForm from '../components/LoginForm';
import logo from '../assets/marvel_logo.png'

function LoginScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Formulaire de connexion</Text>
        <Image source={logo} style={styles.logo} />
      </View>
      <LoginForm />
      <Button
        title="Go to Characters Screen !"
        onPress={() => navigation.navigate('CharactersScreen')}
      />


    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    marginTop: 10,
    alignItems: 'center',
  },
  text:{
    fontSize: 20
  },
  logo:{
    width: 100,
    height: 80,
    resizeMode: 'contain'
  }
})

export default LoginScreen;
