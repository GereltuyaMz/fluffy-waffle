import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { useContext, useState } from "react";
import FeatherIcons from 'react-native-vector-icons/Feather';
import { Block, Text, Button } from "galio-framework";
import { AuthContext } from "../navigation/AuthProvider";
import { EditProfile } from "../components/EditProfile";

const Profile = () => {
  const { logout } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);
  const handleProfile = () => {
    setEdit(!edit);
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
          <Text bold size={20} style={{ marginTop: 18 }}>Сарангэрэл</Text>
          <Button color="info" style={styles.editBtn} onPress={handleProfile}>Профайл засах</Button>
        </Block>
        {edit ? (
          <EditProfile />
        ) :
          (<Block style={styles.userInfo}>
            <Block style={styles.generalInfo}>
              <Block row space="between" style={styles.divider}>
                <Text bold>Имэйл:</Text>
                <Text muted>saraa61@gmail.com</Text>
              </Block>
              <Block row space="between" style={styles.divider}>
                <Text bold>Төрсөн огноо:</Text>
                <Text muted>18.03.1996</Text>
              </Block>
              <Block row space="between" style={styles.divider}>
                <Text bold>Утас:</Text>
                <Text muted>99098978</Text>
              </Block>
            </Block>
            <Block style={styles.generalInfo}>
              <Block row space="between" style={styles.divider}>
                <Text bold>Салбар:</Text>
                <Text muted>Central Tower</Text>
              </Block>
              <Block row space="between" style={styles.divider}>
                <Text bold>Албан тушаал:</Text>
                <Text muted>Accountant</Text>
              </Block>
            </Block>
            <Block style={styles.generalInfo}>
              <Block row space="between" style={styles.divider}>
                <Text bold>Гэрээ:</Text>
                <Text muted>pdf</Text>
              </Block>
            </Block>
            <Block style={styles.logOut}>
              <TouchableOpacity onPress={() => logout()} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.outBtn}>
                  <FeatherIcons name="log-out" size={25} color="white" />
                </View>
                <Text size={17} muted>Гарах</Text>
              </TouchableOpacity>
            </Block>
          </Block>)
        }

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
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 5,
    width: 200
  },
});

export default Profile;
