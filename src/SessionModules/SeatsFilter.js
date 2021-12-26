import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default function SeatsFilter({
  SeatsFilterVisible,
  setSeatsFilterVisible,
}) {
  const [SelectedFilter, setSelectedFilter] = useState('');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={SeatsFilterVisible}
      onRequestClose={() => {
        setSeatsFilterVisible(!SeatsFilterVisible);
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
              <TouchableOpacity
                style={
                  SelectedFilter === 'filling-fast'
                    ? styles.checkedBox
                    : styles.box
                }
                onPress={() => setSelectedFilter('filling-fast')}>
                <Image
                  style={{width: 10, height: 10, tintColor: 'white'}}
                  source={require('../../icons/tick.png')}
                />
              </TouchableOpacity>
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
              <TouchableOpacity
                style={
                  SelectedFilter === 'available'
                    ? styles.checkedBox
                    : styles.box
                }
                onPress={() => setSelectedFilter('available')}>
                <Image
                  style={{width: 10, height: 10, tintColor: 'white'}}
                  source={require('../../icons/tick.png')}
                />
              </TouchableOpacity>
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
              <TouchableOpacity
                style={
                  SelectedFilter === 'booked' ? styles.checkedBox : styles.box
                }
                onPress={() => setSelectedFilter('booked')}>
                <Image
                  style={{width: 10, height: 10, tintColor: 'white'}}
                  source={require('../../icons/tick.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              setSeatsFilterVisible(!SeatsFilterVisible);
            }}
            style={styles.button}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>Save</Text>
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
  checkedBox: {
    width: 15,
    height: 15,
    backgroundColor: '#d1d1d1',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
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
