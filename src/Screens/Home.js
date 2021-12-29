import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Tabs from '../Components/Navigation/TabNavigation';
import Loading from '../Components/Loading/Loading';
import Sessions from '../Components/Sessions/Sessions';
export default function Home() {
  const [SelectedTab, setSelectedTab] = useState('all');
  const [IsLoading, setIsLoading] = useState(true);
  const [data] = useState([
    {
      date: 'Fri, 12 December',
      sessions: [
        {
          title: '3 Dimensional Connections',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
          uri: '1.png',
          finished: true,
          registered: false,
          capacity: 112,
          seats: 22,
        },
        {
          title:
            'The Next Billion and the Rise of Irrational Design by Payal Arora',
          timings: '6:00 PM - 13 Feb, 9:30 PM IST',
          duration: '2 days',
          uri: '2.png',
          finished: false,
          registered: true,
          capacity: 112,
          seats: 22,
        },
        {
          title: 'Designing your life',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
          uri: '3.png',
          finished: false,
          registered: false,
          capacity: 112,
          seats: 22,
        },
      ],
    },

    {
      date: 'Sat, 27 December',
      sessions: [
        {
          title: 'The Accidental Design Leader',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
          uri: '4.png',
          finished: false,
          registered: false,
          capacity: 112,
          seats: 0,
        },
        {
          title: 'Sprinklr Gold Deck',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
          uri: '5.png',
          finished: false,
          registered: false,
          capacity: 112,
          seats: 3,
        },
      ],
    },

    {
      date: 'Tue, 30 December',
      sessions: [
        {
          title: 'The perfect holiday',
          timings: '8:30 AM - 12:00 PM IST',
          duration: '30 min',
          uri: '5.png',
          finished: false,
          registered: false,
          capacity: 112,
          seats: 9,
        },
      ],
    },
  ]);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  const sessions = () => {
    if (IsLoading) return <Loading />;
    else {
      if (SelectedTab === 'all') return <Sessions data={data} />;
      else return <Sessions data={[]} />;
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Sessions</Text>
        <Text style={styles.tagline}>
          Discover on-demand learning, discussions and interactive sessions in
          your community
        </Text>
        <Tabs SelectedTab={SelectedTab} setSelectedTab={setSelectedTab} />
        {sessions()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 16,
  },
  title: {
    color: 'black',
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 16,
    marginLeft: 8,
  },
  tagline: {
    marginBottom: 36,
    color: '#222222',
    fontSize: 16,
    fontWeight: '400',
    width: 325,
    lineHeight: 26,
    marginLeft: 8,
  },
});
