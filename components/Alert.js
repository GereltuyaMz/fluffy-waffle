import { View } from 'react-native';
import { Text, Button } from 'galio-framework';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import IonIcons from "react-native-vector-icons/Ionicons";

export const TimeAlert = ({ setVisible, visible, status, location, currentDate }) => {
  return (
    <FancyAlert
      visible={visible}
      icon={
        <View style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: status === 'Ирсэн цаг' ? '#1363DF' : '#5E72E4',
          borderRadius: 50,
          width: '100%',
        }}>
          <IonIcons name={`${status === 'Ирсэн цаг' ? 'log-in-outline' : 'log-out-outline'}`} size={40} color="#fff" />
        </View>
      }
      style={{ backgroundColor: 'white' }}
    >
      <Text>{status}: {currentDate}</Text>
      {location && <Text style={{ marginTop: 10 }}>Байршил: lat: {location.latitude}, lon: {location.longitude} </Text>}
      <Button style={{ marginBottom: 25, marginTop: 25 }} color={`${status === 'Ирсэн цаг' ? 'info' : 'primary'}`} onPress={() => setVisible(false)}>Close</Button>
    </FancyAlert>
  )
}