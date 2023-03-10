import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LoginForm from '../components/LoginForm';
import logo from '../assets/marvel_logo.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

import FlashMessage, { showMessage } from "react-native-flash-message";

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
        onPress={() => navigation.navigate('CharactersScreen') }
      />
      <Button
        title="Logout"
        onPress={() => {
          showMessage({
            message: 'Logout',
            description: 'Your account has been disconnected !',
            type: 'info',
          });
        }}
      />
      <FlashMessage floating autoHide={true} duration={6000} position="top" />
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
