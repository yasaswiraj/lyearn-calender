import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Sessions() {
  const [data] = useState([
    {
      date: '12th December, 2021.',
      sessions: [
        {
          title: '3 Dimensional Connections',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
          uri: '1.png',
        },
        {
          title:
            'The Next Billion and the Rise of Irrational Design by Payal Arora',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
          uri: '2.png',
        },
        {
          title: 'Designing your life',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
          uri: '3.png',
        },
      ],
    },

    {
      date: '12th December, 2021.',
      sessions: [
        {
          title: 'The Accidental Design Leader',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
          uri: '4.png',
        },
        {
          title: 'Sprinklr Gold Deck',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
          uri: '5.png',
        },
      ],
    },

    {
      date: '12th December, 2021.',
      sessions: [
        {
          title: 'Hello',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
          uri: '5.png',
        },
      ],
    },
  ]);
  const dataList = () =>
    data.map((temp, i) => {
      return (
        <View key={i++}>
          <View style={styles.date}></View>
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
              <View
                style={[
                  styles.sessionSchedule,
                  {
                    width: `${Math.random() * (90 - 20) + 20}%`,
                    marginRight: 6,
                  },
                ]}></View>
              <View
                style={[
                  styles.sessionSchedule,
                  {width: `${Math.random() * (40 - 10) + 10}%`},
                ]}></View>
            </View>
            <View style={styles.sessionStatus}></View>
          </View>
        </View>
      );
    });
  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <TouchableOpacity style={styles.filter}>
          <Text style={{color: 'black', fontWeight: '400'}}>Date</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter}>
          <Text style={{color: 'black', fontWeight: '400'}}>Seats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter}>
          <Text style={{color: 'black', fontWeight: '400'}}>Instructor</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.sessions}
        contentContainerStyle={styles.sessionsContainer}>
        {dataList()}
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
    width: 160,
    height: 18,
    marginVertical: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
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
    marginBottom: 10,
  },
  schedule: {
    flexDirection: 'row',
  },
  sessionSchedule: {
    height: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
    marginBottom: 10,
  },
  sessionStatus: {
    backgroundColor: '#f2f2f2',
    height: 26,
    width: 120,
    borderRadius: 13,
  },
});
