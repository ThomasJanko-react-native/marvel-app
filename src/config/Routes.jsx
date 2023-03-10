import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CharactersScreen from '../screens/CharactersScreen';
import LoginScreen from '../screens/LoginScreen';

import styled from 'styled-components'
import Details from '../components/Details';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'react-native-axios'

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();


function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LoginScreen"
        options={{
          headerTitle: 'Auth',
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: 'blue',
        }}
        component={LoginScreen}
      />
    </AuthStack.Navigator>
  );
}

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CharactersScreen"
        options={{ headerShown: true, headerTitleAlign: 'center' }}
        component={CharactersScreen}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="LoginScreen" options={{headerTitle: 'Auth', headerShown: true, headerTitleAlign: 'center', headerTintColor: 'blue',}} component={LoginScreen} />

    </Stack.Navigator>
  );
}

function Routes() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setToken(token);
    };
  
    getToken();
  }, []);
  
  useEffect(() => {
    checkToken();
  }, [token]);

  const checkToken = async () => {
    if (token) { 
     axios.get(`https://login.hikkary.com/protected`,{
      params: {
       token: token
      },
      headers: {
        Accept: '*/*',
      }})
     .then((res) =>{
      if(res.status === 200){
        setIsAuthenticated(true);
      }
    })
    }
    else {
      setIsAuthenticated(false);
    }
  };

  return (
    <GlobalSafeAreaView>
    <NavigationContainer>
      {isAuthenticated ? (
        <MainNavigator />
      //   <Stack.Navigator >
      //   <Stack.Screen  name="CharactersScreen" options={{headerShown: true, headerTitleAlign: 'center'}} component={CharactersScreen} />
      //   <Stack.Screen name="Details" component={Details} />
      //   <Stack.Screen name="LoginScreen" options={{headerTitle: 'Auth', headerShown: true, headerTitleAlign: 'center', headerTintColor: 'blue',}} component={LoginScreen} />
      // </Stack.Navigator>
      ) : (
        <Stack.Navigator >
          <Stack.Screen name="AuthNavigator" options={{headerShown: false}} component={AuthNavigator} />
        {/* <Stack.Screen name="LoginScreen" options={{headerTitle: 'Auth', headerShown: true, headerTitleAlign: 'center', headerTintColor: 'blue',}} component={LoginScreen} /> */}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  </GlobalSafeAreaView>
   
  );
}

const GlobalSafeAreaView = styled.SafeAreaView`
flex: 1;
`

export default Routes;
