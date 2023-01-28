import React from 'react'
import {
  StyleSheet,
  TextInput
} from "react-native";
import { useState } from "react";
import { Block, Text, Button } from "galio-framework";

export const EditProfile = () => {
  const [profile, setProfile] = useState({ email: '', date: '', phone: '', branch: '', position: '' });

  return (
    <Block style={styles.userInfo}>
      <Block style={styles.generalInfo}>
        <Block row space="between" style={styles.divider}>
          <Text bold>Имэйл:</Text>
          <TextInput style={styles.input} onChangeText={(text) => setProfile({ ...profile, email: text })} value={profile.email} />
        </Block>
        <Block row space="between" style={styles.divider}>
          <Text bold>Төрсөн огноо:</Text>
          <TextInput style={styles.input} onChangeText={(text) => setProfile({ ...profile, date: text })} value={profile.date} />
        </Block>
        <Block row space="between" style={styles.divider}>
          <Text bold>Утас:</Text>
          <TextInput style={styles.input} onChangeText={(text) => setProfile({ ...profile, phone: text })} value={profile.phone} />
        </Block>
      </Block>
      <Block style={styles.generalInfo}>
        <Block row space="between" style={styles.divider}>
          <Text bold>Салбар:</Text>
          <TextInput style={styles.input} onChangeText={(text) => setProfile({ ...profile, branch: text })} value={profile.branch} />
        </Block>
        <Block row space="between" style={styles.divider}>
          <Text bold>Албан тушаал:</Text>
          <TextInput style={styles.input} onChangeText={(text) => setProfile({ ...profile, position: text })} value={profile.position} />
        </Block>
      </Block>
      <Block style={styles.generalInfo}>
        <Block row space="between" style={styles.divider}>
          <Text bold>Гэрээ:</Text>
          <Button color="primary" size="small" round onlyIcon icon="clouduploado" iconFamily="antdesign"></Button>
        </Block>
      </Block>
      <Button color="success" style={styles.editBtn} size="small">Хадгалах</Button>
    </Block>
  )
}

const styles = StyleSheet.create({
  editBtn: {
    borderRadius: 20,
    textAlign: "center"
  },
  userInfo: {
    marginTop: 35,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  generalInfo: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20
  },
  divider: {
    borderColor: "#E9ECEF",
    borderBottomWidth: 1,
    padding: 6,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  outBtn: {
    backgroundColor: "#1363DF",
    padding: 8,
    borderRadius: 25,
    marginRight: 20
  },
  input: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 150,
    borderRadius: 15,
    borderColor: '#1363DF'
  },
});