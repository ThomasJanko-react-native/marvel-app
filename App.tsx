import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CharactersScreen from './src/screens/CharactersScreen';
import LoginScreen from './src/screens/LoginScreen';
import Routes from './src/config/Routes';

const Stack = createStackNavigator();

function App() {
  return (
    <Routes/>
  );
}

export default App;
