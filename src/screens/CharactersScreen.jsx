import React from 'react';
import { View, Text, Button } from 'react-native';

function CharactersScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to the Character screen!</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
}

export default CharactersScreen;
