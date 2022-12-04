import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/core'
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
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
    <Block flex middle>
      {/* <StatusBar hidden /> */}
      <Block style={styles.registerContainer}>
        <Block flex={0.3} middle style={styles.socialConnect}>
          <Block card middle style={styles.border}>
            <Text h6>Logo</Text>
          </Block>
        </Block>
        <Block flex middle>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            enabled
          >
            <Block flex middle>
              <Block width={width * 0.8} style={{ marginBottom: 30 }}>
                <Input
                  borderless
                  placeholder="Email"
                  iconContent={
                    <Icon
                      size={16}
                      color={argonTheme.COLORS.ICON}
                      name="ic_mail_24px"
                      family="ArgonExtra"
                      style={styles.inputIcons}
                    />
                  }
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </Block>
              <Block width={width * 0.8}>
                <Input
                  password
                  borderless
                  placeholder="Password"
                  iconContent={
                    <Icon
                      size={16}
                      color={argonTheme.COLORS.ICON}
                      name="padlock-unlocked"
                      family="ArgonExtra"
                      style={styles.inputIcons}
                    />
                  }
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                />
              </Block>
            </Block>
            <Block middle>
              <Button color="primary" style={styles.createButton} onPress={handleLogin}>
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
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  border: {
    width: 70,
    height: 70,
    backgroundColor: "#D6E4E5"
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
  }
});

export default Register;
