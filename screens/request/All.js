import React, { useState } from 'react'
import { StyleSheet, ScrollView, Dimensions, View, TouchableOpacity } from 'react-native';
import { theme, Block } from 'galio-framework';
import RequestCard from '../../components/RequestCard';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import { LeaveForm } from '../../components/LeaveForm';
import { FormModal } from '../../components/Modal';

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
        {modal && <LeaveForm visible={modal} setVisible={setModal} />}
        {/* {openModal && <FormModal visible={openModal} setVisible={setOpenModal} />} */}
      </ScrollView>
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
});

export default All