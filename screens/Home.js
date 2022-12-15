import React, { useState, useCallback } from 'react';
import { StyleSheet, Dimensions, FlatList, View, Alert, TouchableOpacity, Image } from 'react-native';
import { Block, theme, Text, Button } from 'galio-framework';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/core'
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import IonIcons from "react-native-vector-icons/Ionicons";
import { auth } from '../firebaseConfig';
import { Images } from '../constants';

const { width } = Dimensions.get('screen');

const data = [
  { title: "Attendance", icon: "calendar" },
  { title: "Request", icon: 'export' },
  { title: "PaySlip", icon: 'mail' },
  { title: "News", icon: 'profile' }
]

const CardBox = ({ item, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(item.title)} activeOpacity={1}>
      <Block style={[styles.card, styles.shadow]} middle>
        <AntDesignIcons name={item.icon} size={40} color="#009EFF" />
        <Text size={19} style={{ marginTop: 20 }}>{item.title}</Text>
      </Block>
    </TouchableOpacity>
  )
}

const Home = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [endTime, setEndTime] = useState(false);

  const toggleAlert = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const toggleEndTime = useCallback(() => {
    setEndTime(!endTime);
  }, [endTime]);

  const currentDate = new Date().toLocaleString();

  return (
    // <SafeAreaView>
    <Block middle style={styles.home}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
        ListHeaderComponent={
          <>
            <View style={styles.user}>
              <View>
                <Text style={{ textTransform: 'uppercase', fontWeight: 'bold', marginBottom: 7 }} size={11} muted>Welcome</Text>
                <Text style={{ fontWeight: 'bold' }} size={16}>{auth.currentUser?.email}</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Image
                  source={{ uri: Images.ProfilePicture }}
                  style={styles.avatar}
                />
              </TouchableOpacity>
            </View>
            <Block style={styles.calendar} middle>
              <Text h5>Calendar</Text>
            </Block>
          </>
        }
        data={data}
        renderItem={({ item }) => (
          <CardBox item={item} style={{ margin: 5 }} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        ListFooterComponent={
          <Block row style={styles.time} card>
            <Button color="info" onPress={toggleAlert}>
              ирсэн цаг
            </Button>
            <Button onPress={toggleEndTime}>
              явсан цаг
            </Button>
          </Block>
        }
      />
      <FancyAlert
        visible={visible}
        icon={<View style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1363DF',
          borderRadius: 50,
          width: '100%',
        }}><IonIcons name="log-in-outline" size={40} color="#fff" /></View>}
        style={{ backgroundColor: 'white' }}
      >
        <Text style={{ marginBottom: 20 }}>You arrived at: {currentDate}</Text>
        <Button style={{ marginBottom: 25 }} color="info" onPress={toggleAlert}>Close</Button>
      </FancyAlert>
      <FancyAlert
        visible={endTime}
        icon={<View style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#5E72E4',
          borderRadius: 50,
          width: '100%',
        }}><IonIcons name="log-out-outline" size={40} color="#fff" /></View>}
        style={{ backgroundColor: 'white' }}
      >
        <Text style={{ marginBottom: 20 }}>You left at: {currentDate}</Text>
        <Button style={{ marginBottom: 25 }} onPress={toggleEndTime}>Close</Button>
      </FancyAlert>
    </Block>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  home: {
    width: width,
    backgroundColor: '#EFEFEF'
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  user: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'space-between'
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
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 15
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE * 0.2,
    borderWidth: 0,
    minHeight: 200,
    marginBottom: 16,
    borderRadius: 15,
    width: width * 0.43
  },
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.06,
    shadowRadius: 7,
    elevation: 7
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 62,
  },

});

export default Home;
