import { StyleSheet, Dimensions, ScrollView, FlatList, View, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { Block, theme, Text, Button } from 'galio-framework';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import React from 'react';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

const { width } = Dimensions.get('screen');

const data = [
  { title: "Attendance", icon: "calendar" },
  { title: "Requests", icon: 'export' },
  { title: "Profile", icon: 'user' },
  { title: "News", icon: 'profile' }
]

const CardBox = ({ item }) => {
  return (
    <Block card flex style={[styles.card, styles.shadow]} middle>
      <AntDesignIcons name={item.icon} size={40} />
      <Text h6 style={{ marginTop: 10 }}>{item.title}</Text>
    </Block>
  )
}

const Home = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Register")
      })
      .catch(error => alert(error.message))
  }
  return (
    <Block flex center style={styles.home}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <View style={styles.user}>
          <FeatherIcons name='user' size={40} style={styles.userPic} onPress={() => navigation.navigate("Profile")} />
          <View>
            <Text>Welcome</Text>
            <Text>{auth.currentUser?.email}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
        <Block style={styles.calendar} middle>
          <Text h5>Calendar</Text>
        </Block>
        <Block>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <CardBox item={item} style={{ margin: 5 }} />
            )}
            keyExtractor={(item, index) => index}
            numColumns={2}
          />
        </Block>
        <Block row style={styles.time} card>
          <Button color="warning" onPress={() => Alert.alert('Arrived Time: 9:00 AM')}>
            ирсэн цаг
          </Button>
          <Button color="success" onPress={() => Alert.alert('Leave Time: 6:00 PM')}>
            явсан цаг
          </Button>
        </Block>
      </ScrollView>
    </Block>
  )
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  user: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#009EFF'
  },
  userPic: {
    marginRight: 30
  },
  time: {
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  calendar: {
    marginVertical: 20,
    width: width,
    height: 80,
    backgroundColor: '#F3ECB0'
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 200,
    marginBottom: 16,
    marginHorizontal: 10
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },

});

export default Home;
