import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { theme, Input, Button } from 'galio-framework';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import DropDownPicker from "react-native-dropdown-picker";

export const LeaveForm = ({ visible, setVisible }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(null);
  const [types, setTypes] = useState([
    { label: 'Medical', value: 'medical' },
    { label: 'Family', value: 'family' },
    { label: 'Other', value: 'other' },
  ]);
  const [durationOpen, setDurationOpen] = useState(false);
  const [duration, setDuration] = useState(null);
  const [durations, setDurations] = useState([
    { label: '1 day', value: 'one-day' },
    { label: '2 day', value: 'two-day' },
    { label: '3 day', value: 'three-day' },
  ]);

  const [approveOpen, setApproveOpen] = useState(false);
  const [approve, setApprove] = useState(null);
  const [approves, setApproves] = useState([
    { label: 'Saraa', value: 'saraa' },
    { label: 'Naraa', value: 'naraa' },
  ]);

  return (
    <View>
      <FancyAlert
        visible={visible}
        icon={
          <View style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1363DF',
            borderRadius: 50,
            width: '100%',
          }}>
            <AntDesignIcons name='form' size={40} color="#fff" />
          </View>
        }
        style={{ backgroundColor: 'white' }}
      >
        <Text style={{ marginVertical: 10 }}>Овог, нэр</Text>
        <Input placeholder="Овог, нэр" color={theme.COLORS.INFO} style={{ borderColor: theme.COLORS.INFO }} />
        <Text style={{ marginVertical: 10 }}>Шалтгаан</Text>
        <DropDownPicker
          open={open}
          value={type}
          items={types}
          setOpen={setOpen}
          setValue={setType}
          setItems={setTypes}
          zIndex={3000}
        />

        <Text style={{ marginVertical: 10 }}>Хугацаа</Text>
        <DropDownPicker
          open={durationOpen}
          value={duration}
          items={durations}
          setOpen={setDurationOpen}
          setValue={setDuration}
          setItems={setDurations}
          zIndex={2000}
        />

        <Text style={{ marginVertical: 10 }}>Баталсан</Text>
        <DropDownPicker
          open={approveOpen}
          value={approve}
          items={approves}
          setOpen={setApproveOpen}
          setValue={setApprove}
          setItems={setApproves}
          zIndex={1000}
        />

        <Button style={{ marginBottom: 25, marginTop: 25 }} color='info' onPress={() => setVisible(false)}>Close</Button>
      </FancyAlert>
    </View>
  )
}
