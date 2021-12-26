import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Tabs from '../TabNavigationModules/TabNavigation';
import Loading from '../SessionModules/Loading';
import Sessions from '../SessionModules/Sessions';
import MySessions from '../SessionModules/MySessions';
export default function Home() {
  const [SelectedTab, setSelectedTab] = useState('all');
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  const sessions = () => {
    if (IsLoading) return <Loading />;
    else {
      if (SelectedTab === 'all') return <Sessions />;
      else return <MySessions />;
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
    paddingHorizontal: 25,
    marginTop: 30,
  },
  title: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
  tagline: {
    marginTop: 25,
    marginBottom: 40,
    color: '#222222',
    fontSize: 16,
    fontWeight: '300',
  },
});
