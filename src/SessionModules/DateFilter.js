import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default function DateFilter({DateFilterVisible, setDateFilterVisible}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={DateFilterVisible}
      onRequestClose={() => {
        setDateFilterVisible(!DateFilterVisible);
      }}>
      <StatusBar
        backgroundColor="rgba(255, 255, 255, 0.5)"
        barStyle="light-content"
      />
      <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
        <View style={{flex: 4}}></View>
        <View style={styles.container}>
          <Image
            style={{width: 55, height: 35}}
            source={require('../../icons/bar.png')}
          />
          <View style={styles.checkFields}>
            <View style={styles.check}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: '#FBBF24',
                    borderRadius: 2,
                    marginRight: 15,
                  }}></View>
                <Text style={{color: '#666666'}}>Filling fast</Text>
              </View>
              <TouchableOpacity style={styles.box}></TouchableOpacity>
            </View>
            <View style={styles.check}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: '#4C98FB',
                    borderRadius: 2,
                    marginRight: 15,
                  }}></View>
                <Text style={{color: '#666666'}}>Available</Text>
              </View>
              <TouchableOpacity style={styles.box}></TouchableOpacity>
            </View>
            <View style={styles.check}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: '#999999',
                    borderRadius: 2,
                    marginRight: 15,
                  }}></View>
                <Text style={{color: '#666666'}}>Booked</Text>
              </View>
              <TouchableOpacity style={styles.box}></TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              setDateFilterVisible(!DateFilterVisible);
            }}
            style={styles.button}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkFields: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
  },
  box: {
    width: 15,
    height: 15,
    borderColor: '#d1d1d1',
    borderWidth: 1,
    borderRadius: 2,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 25,
    width: '90%',
    paddingVertical: 15,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
