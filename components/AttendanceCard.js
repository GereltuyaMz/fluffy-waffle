import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Block, Text } from 'galio-framework';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import EntypoIcons from "react-native-vector-icons/Entypo";
import { format } from 'date-fns';

export const AttendanceCard = ({ arriveDate, leftDate, duration }) => {
  return (
    <View>
      <Text muted style={{ marginBottom: 10 }} size={17}>{format(arriveDate, 'yyyy-MM-dd')}</Text>
      <ImageBackground source={require('../screens/img/check-in-background.jpg')} resizeMode="cover" style={styles.backgroundImg} imageStyle={{ borderRadius: 10 }}>
        <Block row style={styles.time} space="between">
          <Block>
            <Text size={12} color="white" style={{ marginRight: 15, marginBottom: 7 }}>Check-in</Text>
            <Text h5 color="white">{format(arriveDate, 'kk:mm')} AM</Text>
          </Block>
          <Block>
            <Text size={12} color="white" style={{ marginRight: 15, marginBottom: 7 }}>Check-out</Text>
            <Text h5 color="white">{format(leftDate, 'kk:mm')} PM</Text>
          </Block>
        </Block>
        <Block row space='between' style={{ marginTop: 15 }}>
          <Block row middle>
            <EntypoIcons name="location-pin" size={20} color={'#fff'} />
            <Text style={{ marginLeft: 6 }} size={11} color="white" bold>Central tower</Text>
          </Block>
          <Block row middle>
            <AntDesignIcons name="checkcircle" color={'#fff'} size={16} />
            <Text style={{ marginLeft: 6 }} size={11} color='white' bold>{duration.hours}h {duration.minutes}m</Text>
          </Block>
        </Block>
      </ImageBackground>
    </View>
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