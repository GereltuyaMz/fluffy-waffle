import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/core'
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { Block, Text } from "galio-framework";
import { Button, Input } from "../components";
import { argonTheme } from "../constants";
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebaseConfig";

const { width, height } = Dimensions.get("screen");

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        navigation.replace("App")
      }
    })

    return unsubscribe
  }, [])

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <Block flex middle style={{ backgroundColor: '#fff' }}>
      {/* <StatusBar hidden /> */}
      <Block style={styles.registerContainer}>
        <Block middle style={styles.socialConnect}>
          <Image
            source={require('./img/logo.jpg')}
            style={styles.logo}
          />
        </Block>
        <Block flex middle>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            enabled
          >
            <Block flex middle>
              <Block width={width * 0.8} style={{ marginBottom: 30 }}>
                <Text muted size={11}>Your Email</Text>
                <Input
                  borderless
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </Block>
              <Block width={width * 0.8}>
                <Text muted size={11}>Password</Text>
                <Input
                  password
                  borderless
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                />
              </Block>
              <Block bottom>
                <Text muted size={10}>Forget password?</Text>
              </Block>
            </Block>
            <Block middle>
              <Button color="info" style={styles.createButton} onPress={handleLogin}>
                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                  Log In
                </Text>
              </Button>
            </Block>
          </KeyboardAvoidingView>
        </Block>
      </Block>
    </Block>
  )
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.45,
  },
  createButton: {
    width: width * 0.7,
    marginTop: 50,
    borderRadius: 20,
    height: 57
  },
  logo: {
    width: 130,
    height: 130
  }
});

export default Register;
