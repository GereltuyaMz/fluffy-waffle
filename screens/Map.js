import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import { Block, Button } from 'galio-framework';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import IonIcons from "react-native-vector-icons/Ionicons";
import * as Location from 'expo-location';

const Map = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [visible, setVisible] = useState(false);
  const [endTime, setEndTime] = useState(false);
  const [mapRegion, setMapRegion] = useState({
    latitude: 47.91584816859115,
    longitude: 106.91856159183534,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const toggleAlert = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const toggleEndTime = useCallback(() => {
    setEndTime(!endTime);
  }, [endTime]);

  const currentDate = new Date().toLocaleString();

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location has denied');
    }
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })
  }

  useEffect(() => {
    userLocation();
  }, [])

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={mapRegion}
        showsUserLocation
        showsMyLocationButton
        provider={PROVIDER_GOOGLE}
      >
        <Marker coordinate={mapRegion} title='Your place' />

        <Circle center={{ latitude: mapRegion.latitude, longitude: mapRegion.longitude }} radius={200} fillColor="#F1F6F5" strokeColor='#D6E4E5' />
      </MapView>
      <Block row middle style={{ marginTop: 15 }}>
        <Button color="info" onPress={toggleAlert}>
          ирсэн цаг
        </Button>
        <Button onPress={toggleEndTime}>
          явсан цаг
        </Button>
      </Block>
      {/* Alert component */}
      <FancyAlert
        visible={visible}
        icon={<View style={styles.arriveIcon}><IonIcons name="log-in-outline" size={40} color="#fff" /></View>}
        style={{ backgroundColor: 'white' }}
      >
        <Text>You arrived at: {currentDate}</Text>
        <Button style={styles.button} color="info" onPress={toggleAlert}>Close</Button>
      </FancyAlert>
      <FancyAlert
        visible={endTime}
        icon={<View style={styles.leftIcon}><IonIcons name="log-out-outline" size={40} color="#fff" /></View>}
        style={{ backgroundColor: 'white' }}
      >
        <Text>You left at: {currentDate}</Text>
        <Button style={styles.button} onPress={toggleEndTime}>Close</Button>
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
  arriveIcon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1363DF',
    borderRadius: 50,
    width: '100%',
  },
  leftIcon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E72E4',
    borderRadius: 50,
    width: '100%',
  },
  button: {
    marginBottom: 25,
    marginTop: 20
  }
});

export default Map;