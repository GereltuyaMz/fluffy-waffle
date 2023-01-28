import React, { useState } from 'react';
import { StyleSheet, Dimensions, FlatList, View, TouchableOpacity, Image } from 'react-native';
import { Block, theme, Text, Button } from 'galio-framework';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import { auth } from '../firebaseConfig';
import { Images } from '../constants';
import { TimeAlert } from '../components/Alert';
import { parseISO, parse } from 'date-fns';

const { width } = Dimensions.get('screen');

const data = [
  { title: "Attendance", icon: "calendar" },
  { title: "Request", icon: 'export' },
  { title: "PaySlip", icon: 'mail' },
  { title: "News", icon: 'profile' }
]

const CardBox = ({ item, navigation, arriveDate, leftDate }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(item.title)} activeOpacity={1}>
      <Block style={[styles.card, styles.shadow]} middle>
        <AntDesignIcons name={item.icon} size={40} color="#009EFF" />
        <Text size={19} style={{ marginTop: 20 }}>{item.title}</Text>
      </Block>
    </TouchableOpacity>
  )
}

const Home = ({ navigation }) => {
  const [arrive, setArrive] = useState(false);
  const [left, setLeft] = useState(false);
  const arriveDate = new Date().toLocaleString();
  const leftDate = new Date().toLocaleString();
  return (
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
          <CardBox item={item} style={{ margin: 5 }} navigation={navigation} arriveDate={arriveDate} leftDate={leftDate} />
        )}
        keyExtractor={(item, index) => index}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        ListFooterComponent={
          <Block row style={styles.time} card>
            <Button color="info" onPress={() => setArrive(true)}>
              ирсэн цаг
            </Button>
            <Button color='primary' onPress={() => setLeft(true)}>
              явсан цаг
            </Button>
          </Block>
        }
      />
      {arrive && <TimeAlert setVisible={setArrive} visible={arrive} status='Ирсэн цаг' currentDate={arriveDate} />}
      {left && <TimeAlert setVisible={setLeft} visible={left} status='Явсан цаг' currentDate={leftDate} />}
    </Block>
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
