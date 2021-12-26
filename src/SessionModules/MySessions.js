import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import SeatsFilter from './SeatsFilter';
import DateFilter from './DateFilter';

export default function MySessions() {
  const [SeatsFilterVisible, setSeatsFilterVisible] = useState(false);
  const [DateFilterVisible, setDateFilterVisible] = useState(false);
  const [InstructorFilterVisible, setInstructorFilterVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [data] = useState([]);
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
          <Text style={{color: '#666666', fontWeight: 'bold', fontSize: 10}}>
            FINISHED
          </Text>
        </View>
      );
    else if (session.registered)
      return (
        <View style={[styles.sessionStatus, {backgroundColor: '#444444'}]}>
          <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 10}}>
            REGISTERED
          </Text>
        </View>
      );
    else {
      if (session.seats === 0)
        return (
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 20, height: 20, marginRight: 10}}
              source={require('../../icons/seats-full.png')}
            />
            <Text style={{color: '#666666'}}>No Seats</Text>
          </View>
        );
      else if (session.seats > 10)
        return (
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 20, height: 20, marginRight: 10}}
              source={require('../../icons/capacity.png')}
            />
            <Text style={{color: '#666666', marginRight: 20}}>
              {session.capacity}
            </Text>
            <Image
              style={{width: 20, height: 20, marginRight: 10}}
              source={require('../../icons/seats.png')}
            />
            <Text style={{color: '#666666'}}>{session.seats} left</Text>
          </View>
        );
      else
        return (
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{width: 20, height: 20, marginRight: 10}}
              source={require('../../icons/capacity.png')}
            />
            <Text style={{color: '#666666', marginRight: 20}}>
              {session.capacity}
            </Text>
            <Image
              style={{width: 20, height: 20, marginRight: 10}}
              source={require('../../icons/filling-fast.png')}
            />
            <Text style={{color: '#666666'}}>{session.seats} left</Text>
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
        <View key={i++} style={styles.session}>
          <Image
            style={styles.sessionImage}
            source={require(`../../images/5.png`)}
          />
          <View style={styles.sessionContent}>
            <Text style={styles.sessionTitle}>{session.title}</Text>
            <View style={styles.schedule}>
              <Text style={{color: '#666666'}}>
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
    } else dataList();
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
          <Text style={{color: 'black', fontWeight: '400'}}>Date</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            SeatsFilterVisible
              ? [styles.filter, {borderColor: 'black', borderWidth: 1}]
              : styles.filter
          }
          onPress={() => setSeatsFilterVisible(!SeatsFilterVisible)}>
          <Text style={{color: 'black', fontWeight: '400'}}>Seats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            InstructorFilterVisible
              ? [styles.filter, {borderColor: 'black', borderWidth: 1}]
              : styles.filter
          }
          //onPress={() => setInstructorFilterVisible(!InstructorFilterVisible)}
        >
          <Text style={{color: 'black', fontWeight: '400'}}>Instructor</Text>
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
  },
  date: {
    fontSize: 16,
    marginVertical: 20,
    fontWeight: '600',
    color: 'black',
  },
  sessions: {
    marginVertical: 20,
  },
  session: {
    marginVertical: 20,
    flexDirection: 'row',
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
