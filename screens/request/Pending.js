import React from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { theme } from 'galio-framework';
import RequestCard from '../../components/RequestCard';

const Pending = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.articles} showsVerticalScrollIndicator={false}>
      <RequestCard status={"pending"} title="Sick leave request" date="Dec 15 - Dec 16 2022" name="Ugtakhbayar.S" />
      <RequestCard status={"pending"} title="Sick leave request" date="Dec 15 - Dec 16 2022" name="Ugtakhbayar.S" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#EFEFEF',
    height: '100%',

  },
  articles: {
    paddingVertical: theme.SIZES.BASE,
    justifyContent: 'center',
    paddingHorizontal: 15
  },
});

export default Pending