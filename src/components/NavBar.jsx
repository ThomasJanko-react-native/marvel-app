import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {

    const navigation = useNavigation();
    return (
        <Header
        containerStyle={styles.header}
        centerComponent={{ text: 'My App', style: styles.title }}
        leftComponent={{
            text: 'Login',
            style: styles.button,
            onPress: () => navigation.navigate('Login'),
        }}
        rightComponent={{
            text: 'Characters',
            style: styles.button,
            onPress: () => navigation.navigate('Characters'),
        }}
        />
    );
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#fff',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    title: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 18,
    },
    button: {
      color: '#000',
      fontSize: 16,
    },
  });

export default NavBar;
