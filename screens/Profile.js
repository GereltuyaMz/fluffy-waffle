import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import FeatherIcons from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width, marginTop: '25%' }}
          >
            <Block flex style={styles.profileCard}>
              <Block middle style={styles.avatarContainer}>
                <Image
                  source={{ uri: Images.ProfilePicture }}
                  style={styles.avatar}
                />
              </Block>
              <Block style={styles.userInfo}>
                <Block style={styles.divider}>
                  <FeatherIcons name="user" size={30} />
                  <Text muted>Jessica Jones</Text>
                </Block>
                <Block style={styles.divider}>
                  <FeatherIcons name="calendar" size={30} />
                  <Text muted>1996/03/18</Text>
                </Block>
                <Block style={styles.divider}>
                  <FeatherIcons name="smartphone" size={30} />
                  <Text muted>99663049</Text>
                </Block>
                <Block style={styles.divider}>
                  <FeatherIcons name="mail" size={30} />
                  <Text muted>gegiimz96@gmail.com</Text>
                </Block>
                <Block style={styles.divider}>
                  <FeatherIcons name="briefcase" size={30} />
                  <Text muted>Accountant</Text>
                </Block>
              </Block>
              <Block middle>
                <Button color="warning">Update</Button>
              </Block>
            </Block>
          </ScrollView>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  userInfo: {
    marginTop: 50
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  divider: {
    borderColor: "#E9ECEF",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default Profile;
