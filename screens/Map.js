import React, { useState, useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE, Circle } from 'react-native-maps';
import { Block, theme, Button } from 'galio-framework';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';

const Map = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 47.91584816859115,
    longitude: 106.91856159183534,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

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
  console.log('mapRegion', mapRegion);
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
        <Button color="info" onPress={() => Alert.alert('Arrived Time: 9:00 AM')}>
          ирсэн цаг
        </Button>
        <Button onPress={() => Alert.alert('Leave Time: 6:00 PM')}>
          явсан цаг
        </Button>
      </Block>
      {/* <Text>{text} </Text> */}
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