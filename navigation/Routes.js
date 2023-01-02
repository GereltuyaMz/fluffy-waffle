import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './AuthProvider';
import { auth } from "../firebaseConfig";
import { BottomStack, AuthStack } from './Screens';
import { onAuthStateChanged } from 'firebase/auth';

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const authState = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, authState);
    return subscriber;
  }, [])

  if (initializing) return null;
  console.log('user status', user);
  return (
    <NavigationContainer>
      {user ? <BottomStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Routes;