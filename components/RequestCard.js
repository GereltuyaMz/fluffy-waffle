import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import { Block, theme, Text } from 'galio-framework';
import StatusTag from './Tag';

const { width } = Dimensions.get('screen');

const RequestCard = ({ status, title, date, name }) => {
  return (
    <Block style={[styles.requestCard, styles.shadow]}>
      <StatusTag status={status} />
      <Text size={18} bold color='#132C33'>{title}</Text>
      <Text muted>{date}</Text>
      <Block row middle space='between' style={{ marginTop: 20 }}>
        <Block>
          <Text muted size={13} style={{ marginBottom: 5 }}>Approved By</Text>
          <Text color='#5CB8E4' style={{ fontWeight: '500' }}>{name}</Text>
        </Block>
      </Block>
    </Block>

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
  articles: {
    paddingVertical: theme.SIZES.BASE,
    justifyContent: 'center',
    paddingHorizontal: 15
  },
});

export default RequestCard