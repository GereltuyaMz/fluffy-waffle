import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import { Block, theme, Button } from 'galio-framework';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import IonIcons from "react-native-vector-icons/Ionicons";
import * as Location from 'expo-location';

const Map = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [visible, setVisible] = useState(false);
  const [endTime, setEndTime] = useState(false);

  const toggleAlert = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const toggleEndTime = useCallback(() => {
    setEndTime(!endTime);
  }, [endTime]);

  const [mapRegion, setMapRegion] = useState({
    latitude: 47.91584816859115,
    longitude: 106.91856159183534,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const currentDate = new Date().toLocaleString();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(JSON.stringify(location));
      setMapRegion({ latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01 })
    })();
  }, [])

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 47.91584816859115,
          longitude: 106.91856159183534,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation
        showsMyLocationButton
        provider={PROVIDER_GOOGLE}
      >
        <Marker coordinate={mapRegion} title='Your place' />
        <Circle center={{ latitude: mapRegion.latitude, longitude: mapRegion.longitude }} radius={200} fillColor="#F1F6F5" strokeColor='#D6E4E5' />
      </MapView>
      <Block row middle style={{ marginTop: 15 }}>
        <Button color="info" onPress={toggleAlert}>
          ?????????? ??????
        </Button>
        <Button onPress={toggleEndTime}>
          ?????????? ??????
        </Button>
      </Block>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    paddingVertical: 20
  },
  map: {
    width: '100%',
    height: '90%',
    position: 'relative',
    borderRadius: 35
  },
});

export default Map;