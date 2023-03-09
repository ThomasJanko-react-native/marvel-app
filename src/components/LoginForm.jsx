import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {

  const navigation = useNavigation();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  }

  const handlePasswordChange = (text) => {
    setPassword(text);
  }

  const handleLogin = () => {
    if (username.length < 3) {
      Alert.alert('Error', 'Username should be at least 3 characters long.');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Error', 'Password should be at least 8 characters long.');
      return;
    }
    console.log(`Username: ${username}, Password: ${password}`);
    
    fetch('https://login.hikkary.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response;
      })
      .then((res) => {
        token = (res.headers.get('x-access-token'))
        console.log(token)
        
        AsyncStorage.setItem('token',token);
        Alert.alert('Success', 'Login success !');
        navigation.navigate('CharactersScreen')
      })
      .catch((error) => {
        console.error('There was a problem with the login:', error);
        // display an error message to the user
        Alert.alert('Error', 'There was a problem with the login. Please try again later.');
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        onChangeText={handleUsernameChange}
        value={username}
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
        onChangeText={handlePasswordChange}
        value={password}
      />
      <View style={{ alignSelf: 'center'}}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginTop: -200
    
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    width: '100%',
    fontSize: 16,
  },
});

export default LoginForm;
