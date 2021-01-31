

import { dbAddUser,dbSelect } from './server/connect';
import * as React from 'react';
import { StyleSheet, Text, Button, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from './src/auth';
import Glavn from './src/glavn';

const Stack = createStackNavigator();


// console.log(dbSelect("user"))
// console.log(dbAddUser ("Login","password","name","email","phone","user"))


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen
          screenOptions={{headerShown: false,}}
          name="Home"
          component={Auth}
        />
        <Stack.Screen 
          name="Maine" 
          component={Glavn} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
