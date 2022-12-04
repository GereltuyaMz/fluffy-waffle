import React, { useState } from 'react';
import { StyleSheet, Dimensions, ScrollView, FlatList, View, Image, TouchableOpacity } from 'react-native';
import { Block, theme, Text, Button } from 'galio-framework';

const { width } = Dimensions.get('screen');


const NotifBox = ({ navigation }) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detail')}>
        <Text h5 muted style={{ marginLeft: 10 }} >2022-08-01</Text>
        <Block tyle={styles.notifCard} style={{ backgroundColor: '#fff', marginTop: 10 }}>
          <Block row center style={styles.notif}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' }} style={styles.imageStyles} />
            <Block>
              <Text h6>Announcement</Text>
              <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
            </Block>
          </Block>
        </Block>
      </TouchableOpacity>
      <Block style={styles.container}>
        <Text h5 muted style={{ marginLeft: 10 }}>2022-08-02</Text>
        <Block tyle={styles.notifCard} style={{ backgroundColor: '#fff', marginTop: 10 }}>
          <Block row center style={styles.notif}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' }} style={styles.imageStyles} />
            <Block>
              <Text h6>Announcement</Text>
              <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </>

  )
}

const Notification = ({ navigation }) => {
  return (
    <ScrollView>
      <Block>
        <NotifBox navigation={navigation} />
      </Block>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  imageStyles: {
    width: 100,
    height: 60,
    borderRadius: 20,
    marginLeft: 10
  },
});

export default Notification