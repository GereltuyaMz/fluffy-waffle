import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../screens/Register';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Register} options={{ header: () => null }} />
    </Stack.Navigator>
  )
}

export default AuthStack;
