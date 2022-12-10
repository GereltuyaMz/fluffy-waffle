import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Block, Text } from 'galio-framework';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import EntypoIcons from "react-native-vector-icons/Entypo";

const Attendance = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');

  const timedif = () => {
    const start = "09:10".split(":");
    const end = "17:00".split(":");
    const startTime = new Date(0, 0, 0, start[0], start[1], 0);
    const endTime = new Date(0, 0, 0, end[0], end[1], 0);
    let diff = endTime.getTime() - startTime.getTime();
    const hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(diff / 1000 / 60);
    setHours(hours);
    setMinutes(minutes);
  }

  useEffect(() => {
    timedif();
  }, [])

  return (
    <Block style={styles.container}>
      <View>
        <Text muted style={{ marginBottom: 10 }} size={17}>15 December, 2022</Text>
        <ImageBackground source={require('./img/check-in-background.jpg')} resizeMode="cover" style={styles.backgroundImg} imageStyle={{ borderRadius: 10 }}>
          <Block row style={styles.time} space="between">
            <Block>
              <Text size={12} color="white" style={{ marginRight: 15, marginBottom: 7 }}>Check-in</Text>
              <Text h5 color="white">08:48 AM</Text>
            </Block>
            <Block>
              <Text size={12} color="white" style={{ marginRight: 15, marginBottom: 7 }}>Check-out</Text>
              <Text h5 color="white">05:30 PM</Text>
            </Block>
          </Block>
          <Block row space='between' style={{ marginTop: 15 }}>
            <Block row middle>
              <EntypoIcons name="location-pin" size={20} color={'#fff'} />
              <Text style={{ marginLeft: 6 }} size={11} color="white" bold>Central tower</Text>
            </Block>
            <Block row middle>
              <AntDesignIcons name="checkcircle" color={'#fff'} size={16} />
              <Text style={{ marginLeft: 6 }} size={11} color='white' bold>{hours}h {minutes}m</Text>
            </Block>
          </Block>
        </ImageBackground>
      </View>
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
    height: 115,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
});
export default Attendance