import React from 'react'
import { StyleSheet, Dimensions, ScrollView, FlatList, View, Alert, ImageBackground, Image } from 'react-native';
import { Block, theme, Text, Button } from 'galio-framework';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const { width } = Dimensions.get('screen');

const Attendance = () => {
  return (
    <Block style={styles.container}>
      <View>
        <Text muted style={{ marginBottom: 10 }} size={17}>15 December</Text>
        <ImageBackground source={require('./img/check-in-background.jpg')} resizeMode="cover" style={styles.backgroundImg} imageStyle={{ borderRadius: 10 }}>
          <Block row style={styles.checkin}>
            <Text size={12} color="white" style={{ marginRight: 15 }}>Check-In Time</Text>
            <AntDesignIcons name="checkcircle" color={'#fff'} size={16} />
          </Block>
          <Text h3 color="white">08:48 AM</Text>
          <Text size={10} color="white">Today</Text>
        </ImageBackground>
      </View>
      <ImageBackground source={require('./img/check-out-background.jpg')} resizeMode="cover" style={styles.backgroundImg} imageStyle={{ borderRadius: 10 }}>
        <Block row style={styles.checkin}>
          <Text size={12} color="white" style={{ marginRight: 15 }}>Check-Out Time</Text>
          <AntDesignIcons name="checkcircle" color={'#fff'} size={16} />
        </Block>
        <Text h3 color="white">05:00 PM</Text>
        <Text size={10} color="white">Today</Text>
      </ImageBackground>

      {/* second round */}
      <View>
        <Text muted style={{ marginBottom: 10 }} size={17}>14 December</Text>
        <ImageBackground source={require('./img/check-in-background.jpg')} resizeMode="cover" style={styles.backgroundImg} imageStyle={{ borderRadius: 10 }}>
          <Block row style={styles.checkin}>
            <Text size={12} color="white" style={{ marginRight: 15 }}>Check-In Time</Text>
            <AntDesignIcons name="checkcircle" color={'#fff'} size={16} />
          </Block>
          <Text h3 color="white">09:30 AM</Text>
          <Text size={10} color="white">Today</Text>
        </ImageBackground>
      </View>
      <ImageBackground source={require('./img/check-out-background.jpg')} resizeMode="cover" style={styles.backgroundImg} imageStyle={{ borderRadius: 10 }}>
        <Block row style={styles.checkin}>
          <Text size={12} color="white" style={{ marginRight: 15 }}>Check-Out Time</Text>
          <AntDesignIcons name="checkcircle" color={'#fff'} size={16} />
        </Block>
        <Text h3 color="white">07:00 PM</Text>
        <Text size={10} color="white">Today</Text>
      </ImageBackground>
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    height: '100%'
  },
  backgroundImg: {
    justifyContent: 'center',
    height: 120,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  checkin: {
    alignItems: 'center',
  }
});
export default Attendance