import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import { Text } from 'galio-framework';

const { width } = Dimensions.get('screen');

const StatusTag = ({ status }) => {
  return (
    <Text style={[styles.statusTag, { backgroundColor: status === "pending" ? "#F5A962" : status === "approved" ? "#B6E2A1" : "#E97777" }]} size={12} > {status}</Text>
  )
}

const styles = StyleSheet.create({
  statusTag: {
    marginBottom: 15,
    textTransform: 'uppercase',
    width: width * 0.2,
    textAlign: 'center',
    paddingVertical: 3,
    color: '#fff',
    borderRadius: 20,
    fontWeight: '500'
  },

});

export default StatusTag;