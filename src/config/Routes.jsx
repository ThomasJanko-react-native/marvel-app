import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CharactersScreen from '../screens/CharactersScreen';
import LoginScreen from '../screens/LoginScreen';

import styled from 'styled-components'
import Details from '../components/Details';

const Stack = createStackNavigator();

function Routes() {
  return (
    <GlobalSafeAreaView>
        <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name="LoginScreen" options={{headerTitle: 'Auth', headerShown: true, headerTitleAlign: 'center', headerTintColor: 'blue',}} component={LoginScreen} />
            <Stack.Screen  name="CharactersScreen" options={{headerShown: true, headerTitleAlign: 'center'}} component={CharactersScreen} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
        </NavigationContainer>
    </GlobalSafeAreaView>
  );
}

const GlobalSafeAreaView = styled.SafeAreaView`
flex: 1;
`

export default Routes;
