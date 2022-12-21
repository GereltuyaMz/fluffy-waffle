import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Block, Text } from 'galio-framework';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const News = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('NewsDetail')}>
        <Block row center style={styles.newsCard}>
          <Image source={require('./img/news.jpg')} style={styles.imageStyles} />
          <View style={{ width: 0, flexGrow: 1, flex: 1 }}>
            <Text size={16} style={{ marginBottom: 10 }} bold>Elon Musk’s Twitter bans CNN, NYT, WaPo journalists without explanation</Text>
            <Block row>
              <AntDesignIcons name='clockcircleo' size={16} style={{ marginRight: 10 }} color="#D6E4E5" />
              <Text muted>4 hours ago</Text>
            </Block>
          </View>
        </Block>
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F7F7F7',
    height: '100%'
  },
  backgroundImg: {
    justifyContent: 'center',
    height: 115,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  imageStyles: {
    width: 110,
    height: 110,
    borderRadius: 30,
    marginRight: 15
  },
  newsCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10
  }
});
export default News