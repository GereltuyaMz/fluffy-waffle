import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import FeatherIcons from 'react-native-vector-icons/Feather';
import { Block, Text, Button } from "galio-framework";
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

const { width, height } = Dimensions.get("screen");

const Profile = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Register")
        console.log('sign out');
      })
      .catch(error => alert(error.message))
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      style={{ backgroundColor: '#F1F6F5', paddingHorizontal: 20 }}
    >
      <Block flex style={styles.profileCard}>
        <Block middle style={styles.avatarContainer}>
          <View style={{ position: 'relative' }}>
            <Image
              source={require('./img/portrait.jpg')}
              style={styles.avatar}
            />
            <View style={styles.cameraIcon}>
              <FeatherIcons name="camera" size={17} color="white" />
            </View>
          </View>
          <Text bold size={20} style={{ marginTop: 18 }}>Jessica Jones</Text>
          <Button color="info" style={styles.editBtn}>Edit Profile</Button>
        </Block>
        <Block style={styles.userInfo}>
          <Block style={styles.generalInfo}>
            <Block row space="between" style={styles.divider}>
              <Text bold>Email:</Text>
              <Text muted>gegiimz96@gmail.com</Text>
            </Block>
            <Block row space="between" style={styles.divider}>
              <Text bold>Date Of Birth:</Text>
              <Text muted>18.03.1996</Text>
            </Block>
            <Block row space="between" style={styles.divider}>
              <Text bold>Phone:</Text>
              <Text muted>99098978</Text>
            </Block>
          </Block>
          <Block style={styles.generalInfo}>
            <Block row space="between" style={styles.divider}>
              <Text bold>Branch:</Text>
              <Text muted>Central Tower</Text>
            </Block>
            <Block row space="between" style={styles.divider}>
              <Text bold>Position:</Text>
              <Text muted>Accountant</Text>
            </Block>
          </Block>
          <Block style={styles.logOut}>
            <TouchableOpacity onPress={handleSignOut} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.outBtn}>
                <FeatherIcons name="log-out" size={25} color="white" />
              </View>
              <Text size={17} muted>Log Out</Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },
  cameraIcon: {
    backgroundColor: "#1363DF",
    padding: 7,
    borderRadius: 25,
    borderColor: "#F1F6F5",
    borderWidth: 3,
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  editBtn: {
    width: width * 0.27,
    marginTop: 15,
    borderRadius: 20
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
    padding: 10,
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
  logOut: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 12
  }
});

export default Profile;
