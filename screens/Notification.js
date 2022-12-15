import React, { useState } from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, View } from 'react-native';
import { Block, theme, Text, Button } from 'galio-framework';

const { width } = Dimensions.get('screen');


const NotifBox = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h6 muted>2022-08-01</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Block row center style={styles.notifCard}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' }} style={styles.imageStyles} />
          <View style={{ width: 0, flexGrow: 1, flex: 1 }}>
            <Text size={20} style={{ marginBottom: 7 }}>Announcement</Text>
            <Text color='#7882A4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam excepturi dolores corporis veritatis.</Text>
          </View>
        </Block>
      </TouchableOpacity>
    </View >
  )
}

const Notification = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <NotifBox navigation={navigation} />
      <NotifBox navigation={navigation} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20
  },
  container: {
    paddingTop: 20,
  },
  imageStyles: {
    width: 100,
    height: 70,
    borderRadius: 10,
    marginRight: 30
  },
  notifCard: {
    backgroundColor: '#fff',
    marginTop: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    paddingVertical: 15
  }
});

export default Notification