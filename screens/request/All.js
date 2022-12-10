import React, { useState } from 'react'
import { StyleSheet, ScrollView, Dimensions, Modal, View, TouchableOpacity, Text, Pressable } from 'react-native';
import { theme, Block, Input } from 'galio-framework';
import RequestCard from '../../components/RequestCard';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';

const { width } = Dimensions.get('screen');

const All = () => {
  const [modal, setModal] = useState(false);
  return (
    <View>
      <ScrollView style={styles.container} contentContainerStyle={styles.articles} showsVerticalScrollIndicator={false}>
        <RequestCard status={"approved"} title="Sick leave request" date="Dec 15 - Dec 16 2022" name="Ugtakhbayar.S" />
        <RequestCard status={"pending"} title="Sick leave request" date="Dec 15 - Dec 16 2022" name="Ugtakhbayar.S" />
        <RequestCard status={"pending"} title="Sick leave request" date="Dec 15 - Dec 16 2022" name="Ugtakhbayar.S" />
        <RequestCard status={"declined"} title="Sick leave request" date="Dec 15 - Dec 16 2022" name="Ugtakhbayar.S" />
        <RequestCard status={"declined"} title="Sick leave request" date="Dec 15 - Dec 16 2022" name="Ugtakhbayar.S" />

      </ScrollView>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Input placeholder="title" color={theme.COLORS.INFO} style={{ borderColor: theme.COLORS.INFO }} label="Request title" />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModal(!modal)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.create} onPress={() => setModal(true)}>
        <Block middle>
          <AntDesignIcons name='plus' size={25} color={'white'} />
        </Block>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFEF',
    height: '100%',
    position: 'relative'
  },
  articles: {
    paddingVertical: theme.SIZES.BASE,
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  create: {
    backgroundColor: '#009EFF',
    width: width * 0.12,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    position: 'absolute',
    bottom: 30,
    right: 30
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 15,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default All