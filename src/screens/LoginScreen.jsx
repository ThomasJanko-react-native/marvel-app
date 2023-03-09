import React from 'react';
import { View, Text, Button } from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to the Home screen!</Text>
      <Button
        title="Go to Characters Screen !"
        onPress={() => navigation.navigate('CharactersScreen')}
      />
    </View>
  );
}

export default LoginScreen;
