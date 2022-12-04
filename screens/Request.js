import React from 'react'
import { StyleSheet, Dimensions, ScrollView, FlatList, View, ImageBackground, Image } from 'react-native';
import { Block, theme, Text, Button } from 'galio-framework';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const { width } = Dimensions.get('screen');

const StatusTag = ({ status }) => {
  return (
    <Text style={[styles.statusTag, { backgroundColor: status === "pending" ? "#F5A962" : status === "approved" ? "#B6E2A1" : "#E97777" }]} size={12} > {status}</Text>
  )
}

const Request = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.articles} showsVerticalScrollIndicator={false}>
      <Text muted bold>6 pending</Text>
      <Text h5 bold>Requests</Text>
      {/* first round */}
      <Block style={[styles.requestCard, styles.shadow]}>
        <StatusTag status={'pending'} />
        <Text size={18} bold color='#132C33'>Sick leave request</Text>
        <Text muted>Dec 15 - Dec 16 2022</Text>
        <Block row middle space='between' style={{ marginTop: 20 }}>
          <Block>
            <Text muted size={13} style={{ marginBottom: 5 }}>Pending Approval</Text>
            <Text color='#5CB8E4' style={{ fontWeight: '500' }}>Ugtakhbayar.S</Text>
          </Block>
          <Button style={styles.requestBtn} color='secondary'>Cancel</Button>
        </Block>
      </Block>
      {/* second round */}
      <Block style={[styles.requestCard, styles.shadow]}>
        <StatusTag status={'approved'} />
        <Text size={18} bold color='#132C33'>Sick leave request</Text>
        <Text muted>Nov 08 - Nov 09 2022</Text>
        <Block row middle space='between' style={{ marginTop: 20 }}>
          <Block>
            <Text muted size={13} style={{ marginBottom: 5 }}>Approved By</Text>
            <Text color='#5CB8E4' style={{ fontWeight: '500' }}>Ugtakhbayar.S</Text>
          </Block>
          <Button style={styles.requestBtn} color='secondary'>Cancel</Button>
        </Block>
      </Block>
      {/* third round */}
      <Block style={[styles.requestCard, styles.shadow]}>
        <StatusTag status={'declined'} />
        <Text size={18} bold color='#132C33'>Sick leave request</Text>
        <Text muted>Sep 12 - Sep 15 2022</Text>
        <Block row middle space='between' style={{ marginTop: 20 }}>
          <Block>
            <Text muted size={13} style={{ marginBottom: 5 }}>Declined By</Text>
            <Text color='#5CB8E4' style={{ fontWeight: '500' }}>Ugtakhbayar.S</Text>
          </Block>
          <Button style={styles.requestBtn} color='secondary'>Cancel</Button>
        </Block>
      </Block>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#EFEFEF',
    height: '100%',

  },
  requestCard: {
    backgroundColor: '#fff',
    marginTop: 30,
    padding: 25,
    borderRadius: 25,
    // width: width
  },
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10.62,
    elevation: 5
  },
  requestBtn: {
    width: width * 0.25
  },
  statusTag: {
    marginBottom: 15,
    textTransform: 'uppercase',
    // backgroundColor: '#F5A962',
    width: width * 0.2,
    textAlign: 'center',
    paddingVertical: 3,
    color: '#fff',
    borderRadius: 20,
    fontWeight: '500'
  },
  articles: {
    // width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    justifyContent: 'center',
    // alignItems: 'center'
    paddingHorizontal: 15
  },
});
export default Request