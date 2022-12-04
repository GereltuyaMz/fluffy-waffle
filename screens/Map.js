import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
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
        zoomTapEnabled
        showsMyLocationButton
      >
        <Marker coordinate={mapRegion} title='Your place' />
      </MapView>
      <Block row style={{ marginTop: 20, backgroundColor: '#fff' }} card middle>
        <Button color="warning" onPress={() => Alert.alert('Arrived Time: 9:00 AM')}>
          ирсэн цаг
        </Button>
        <Button color="success" onPress={() => Alert.alert('Leave Time: 6:00 PM')}>
          явсан цаг
        </Button>
      </Block>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '80%',
    position: 'relative'
  },
  locationBtn: {
    backgroundColor: '#fff',
    width: 50,
    borderRadius: 10,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'absolute',
    top: '40%',
    right: 10
  }
});

export default Map;