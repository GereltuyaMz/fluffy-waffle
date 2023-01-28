import { StyleSheet } from 'react-native';
import { Block } from 'galio-framework';
import { intervalToDuration } from 'date-fns';
import { AttendanceCard } from '../components/AttendanceCard';

const Attendance = ({ route }) => {
  // const { arriveDate, leftDate } = route.params;
  const arriveDate = new Date();
  const leftDate = new Date();
  // console.log('arrive', typeof format(arriveDate, 'kk:mm'));
  // console.log('leftDate', leftDate);

  const duration = intervalToDuration({
    start: new Date(0, 0, 0, 11, 35, 0, 0),
    end: new Date(0, 0, 0, 18, 40, 0, 0)
  })

  // console.log(duration);
  return (
    <Block style={styles.container}>
      <AttendanceCard arriveDate={arriveDate} leftDate={leftDate} duration={duration} />
    </Block>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    height: '100%'
  },
});

export default Attendance;