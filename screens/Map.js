import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import { Block, Button } from 'galio-framework';
import { TimeAlert } from '../components/Alert';
import * as Location from 'expo-location';

const Map = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [arrive, setArrive] = useState(false);
  const [left, setLeft] = useState(false);
  const [mapRegion, setMapRegion] = useState({
    latitude: 47.91584816859115,
    longitude: 106.91856159183534,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

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
        <Button color="info" onPress={() => setArrive(true)}>
          ирсэн цаг
        </Button>
        <Button color='primary' onPress={() => setLeft(true)}>
          явсан цаг
        </Button>
      </Block>
      {arrive && <TimeAlert setVisible={setArrive} visible={arrive} status='Ирсэн цаг' location={{ latitude: mapRegion.latitude, longitude: mapRegion.longitude }} />}
      {left && <TimeAlert setVisible={setLeft} visible={left} status='Явсан цаг' location={{ latitude: mapRegion.latitude, longitude: mapRegion.longitude }} />}
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