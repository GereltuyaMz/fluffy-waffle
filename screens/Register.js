import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { Block, Text } from "galio-framework";
import { Button, Input } from "../components";
import { argonTheme } from "../constants";
import { AuthContext } from "../navigation/AuthProvider";

const { width, height } = Dimensions.get("screen");

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useContext(AuthContext);

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
            <Block middle style={{ marginTop: 30 }}>
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
                  secureTextEntry
                />
              </Block>
              <Block bottom>
                <Text muted size={10}>Forget password?</Text>
              </Block>
            </Block>
            <Block middle>
              <Button color="info" style={styles.createButton} onPress={() => login(email, password)}>
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
