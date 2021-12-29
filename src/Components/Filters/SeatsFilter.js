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
    <View>
      <Modal
        animationType="fade-in"
        transparent={true}
        visible={SeatsFilterVisible}
        onRequestClose={() => {
          setSeatsFilterVisible(!SeatsFilterVisible);
        }}>
        <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}></View>
      </Modal>
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
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={styles.container}>
            <Image
              style={{width: 55, height: 35}}
              source={require('../Assets/icons/bar.png')}
            />
            <View style={styles.checkFields}>
              <TouchableOpacity
                style={styles.check}
                onPress={() => setSelectedFilter('filling-fast')}>
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
                <View
                  style={
                    SelectedFilter === 'filling-fast'
                      ? styles.checkedBox
                      : styles.box
                  }>
                  <Image
                    style={{width: 10, height: 10, tintColor: 'white'}}
                    source={require('../Assets/icons/tick.png')}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.check}
                onPress={() => setSelectedFilter('available')}>
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
                <View
                  style={
                    SelectedFilter === 'available'
                      ? styles.checkedBox
                      : styles.box
                  }>
                  <Image
                    style={{width: 10, height: 10, tintColor: 'white'}}
                    source={require('../Assets/icons/tick.png')}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.check}
                onPress={() => setSelectedFilter('booked')}>
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
                <View
                  style={
                    SelectedFilter === 'booked' ? styles.checkedBox : styles.box
                  }>
                  <Image
                    style={{width: 10, height: 10, tintColor: 'white'}}
                    source={require('../Assets/icons/tick.png')}
                  />
                </View>
              </TouchableOpacity>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 251,
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
