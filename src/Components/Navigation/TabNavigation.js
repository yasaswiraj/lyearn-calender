import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default function Tabs({SelectedTab, setSelectedTab}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          {marginRight: 32},
          SelectedTab === 'all' ? styles.TabActive : styles.Tab,
        ]}
        onPress={() => setSelectedTab('all')}>
        <Text
          style={SelectedTab === 'all' ? styles.TabActiveText : styles.TabText}>
          All Sessions
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={SelectedTab === 'my' ? styles.TabActive : styles.Tab}
        onPress={() => setSelectedTab('my')}>
        <Text
          style={SelectedTab === 'my' ? styles.TabActiveText : styles.TabText}>
          My Sessions
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  Tab: {paddingVertical: 20, borderBottomColor: 'black', borderBottomWidth: 0},
  TabActive: {
    paddingVertical: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  TabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#999999',
  },
  TabActiveText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});
