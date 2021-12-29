import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import SeatsFilter from '../Filters/SeatsFilter';
import DateFilter from '../Filters/DateFilter';
import SeatsFull from '../../Assets/icons/seats-full.svg';
import Seats from '../../Assets/icons/seats.svg';
import FillingFast from '../../Assets/icons/filling-fast.svg';
import Capacity from '../../Assets/icons/capacity.svg';

export default function Sessions({data}) {
  const [SeatsFilterVisible, setSeatsFilterVisible] = useState(false);
  const [DateFilterVisible, setDateFilterVisible] = useState(false);
  const [InstructorFilterVisible, setInstructorFilterVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date());
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const statusSection = session => {
    if (session.finished)
      return (
        <View style={styles.sessionStatus}>
          <Text style={{color: '#666666', fontWeight: '600', fontSize: 12}}>
            FINISHED
          </Text>
        </View>
      );
    else if (session.registered)
      return (
        <View style={[styles.sessionStatus, {backgroundColor: '#444444'}]}>
          <Text style={{color: '#ffffff', fontWeight: '600', fontSize: 12}}>
            REGISTERED
          </Text>
        </View>
      );
    else {
      if (session.seats === 0)
        return (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <SeatsFull />
            <Text style={{color: '#666666', marginLeft: 12}}>No Seats</Text>
          </View>
        );
      else if (session.seats > 10)
        return (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Capacity />
            <Text style={{color: '#666666', marginLeft: 12, marginRight: 20}}>
              {session.capacity}
            </Text>
            <Seats />
            <Text style={{color: '#666666', marginLeft: 12}}>
              {session.seats} left
            </Text>
          </View>
        );
      else
        return (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Capacity />
            <Text style={{color: '#666666', marginLeft: 12, marginRight: 20}}>
              {session.capacity}
            </Text>
            <FillingFast />
            <Text style={{color: '#666666', marginLeft: 12}}>
              {session.seats} left
            </Text>
          </View>
        );
    }
  };
  const dataList = () =>
    data.map((temp, i) => {
      return (
        <View key={i++}>
          <Text style={styles.date}>{temp.date}</Text>
          {sessionsList(temp.sessions)}
        </View>
      );
    });
  const sessionsList = sessions =>
    sessions.map((session, i) => {
      return (
        <View
          key={i++}
          style={
            sessions.length === i
              ? styles.session
              : [
                  styles.session,
                  {borderBottomColor: '#EAEAEA', borderBottomWidth: 1},
                ]
          }>
          <Image
            style={styles.sessionImage}
            source={require(`../../Assets/images/5.png`)}
          />
          <View style={styles.sessionContent}>
            <Text style={styles.sessionTitle}>{session.title}</Text>
            <View style={styles.schedule}>
              <Text style={{color: '#666666', fontWeight: '400'}}>
                {session.timings} • {session.duration}
              </Text>
            </View>
            {statusSection(session)}
          </View>
        </View>
      );
    });
  const checkData = () => {
    if (data.length === 0) {
      return (
        <View style={{marginVertical: 15}}>
          <Text style={{color: '#999999', fontSize: 16}}>
            No sessions scheduled {days[selectedDay.getDay()]},{' '}
            {selectedDay.getDate()} {months[selectedDay.getMonth()]} onwards
          </Text>
        </View>
      );
    } else return dataList();
  };
  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <SeatsFilter
          SeatsFilterVisible={SeatsFilterVisible}
          setSeatsFilterVisible={setSeatsFilterVisible}
        />
        <DateFilter
          DateFilterVisible={DateFilterVisible}
          setDateFilterVisible={setDateFilterVisible}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
        <TouchableOpacity
          style={
            DateFilterVisible
              ? [styles.filter, {borderColor: 'black', borderWidth: 1}]
              : styles.filter
          }
          onPress={() => setDateFilterVisible(!DateFilterVisible)}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '400'}}>
            Date
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            SeatsFilterVisible
              ? [styles.filter, {borderColor: 'black', borderWidth: 1}]
              : styles.filter
          }
          onPress={() => setSeatsFilterVisible(!SeatsFilterVisible)}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '400'}}>
            Seats
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            InstructorFilterVisible
              ? [styles.filter, {borderColor: 'black', borderWidth: 1}]
              : styles.filter
          }
          //onPress={() => setInstructorFilterVisible(!InstructorFilterVisible)}
        >
          <Text style={{color: 'black', fontSize: 16, fontWeight: '400'}}>
            Instructor
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.sessions}
        contentContainerStyle={styles.sessionsContainer}>
        {checkData()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 40,
  },
  filters: {
    flexDirection: 'row',
  },
  filter: {
    minWidth: 95,
    height: 36,
    marginRight: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  date: {
    fontSize: 16,
    marginVertical: 40,
    fontWeight: '600',
    color: 'black',
    marginLeft: 8,
  },
  sessions: {
    marginVertical: 10,
  },
  session: {
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionImage: {
    width: 80,
    height: 80,
    backgroundColor: 'blue',
    borderRadius: 8,
    marginRight: 16,
  },
  sessionContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  sessionTitle: {
    fontSize: 16,
    color: 'black',
    marginBottom: 6,
    fontWeight: '600',
  },
  schedule: {
    marginBottom: 12,
  },
  sessionSchedule: {
    height: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
    marginBottom: 10,
  },
  sessionStatus: {
    backgroundColor: '#f2f2f2',
    padding: 5,
    maxWidth: 96,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
