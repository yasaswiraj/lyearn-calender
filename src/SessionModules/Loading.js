import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export default function Loading() {
  const [data] = useState([
    {
      date: '12th December, 2021.',
      sessions: [
        {
          title: 'Hello',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
        },
        {
          title: 'Hello',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
        },
        {
          title: 'Hello',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
        },
        {
          title: 'Hello',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
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
          <View style={styles.sessionImage}></View>
          <View style={styles.sessionContent}>
            <View
              style={[
                styles.sessionTitle,
                {width: `${Math.random() * (95 - 60) + 60}%`},
              ]}></View>
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
        <View style={styles.filter}></View>
        <View style={styles.filter}></View>
        <View style={styles.filter}></View>
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
    width: 85,
    height: 36,
    marginRight: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 24,
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
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginRight: 16,
  },
  sessionContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  sessionTitle: {
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  schedule: {
    flexDirection: 'row',
  },
  sessionSchedule: {
    height: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
  },
  sessionStatus: {
    backgroundColor: '#f2f2f2',
    height: 26,
    width: 120,
    borderRadius: 13,
  },
});
