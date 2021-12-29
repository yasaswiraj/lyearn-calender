import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default function Tabs({SelectedTab, setSelectedTab}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{marginRight: 32}}
        onPress={() => setSelectedTab('all')}>
        <Text style={SelectedTab === 'all' ? styles.TabActive : styles.TabText}>
          All Sessions
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedTab('my')}>
        <Text style={SelectedTab === 'my' ? styles.TabActive : styles.TabText}>
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
  TabText: {
    paddingVertical: 20,
    fontSize: 16,
    fontWeight: '600',
    color: '#999999',
  },
  TabActive: {
    paddingVertical: 20,
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
});
