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
import {Calendar} from 'react-native-calendars';

export default function DateFilter({
  DateFilterVisible,
  setDateFilterVisible,
  selectedDay,
  setSelectedDay,
}) {
  const [sessionsDates] = useState({
    '2021-12-02': {
      selected: false,
      customStyles: styles.markedStyle,
    },
    '2021-12-12': {customStyles: styles.markedStyle},
    '2021-12-27': {customStyles: styles.markedStyle},
    '2021-12-28': {customStyles: styles.markedStyle},
    '2022-01-02': {customStyles: styles.markedStyle},
  });
  const [markedDates, setMarkedDates] = useState(sessionsDates);

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
        <View style={{flex: 1}}></View>
        <View style={styles.container}>
          <Calendar
            markingType={'custom'}
            markedDates={markedDates}
            current={'2021-12-26'}
            theme={{
              todayTextColor: 'red',
              arrowColor: 'black',
              'stylesheet.calendar.main': styles.customCalender,
            }}
            renderArrow={direction => {
              if (direction === 'left')
                return (
                  <Image
                    style={{width: 25, height: 25}}
                    source={require('../../icons/arrow-left.png')}
                  />
                );
              if (direction === 'right')
                return (
                  <Image
                    style={{width: 25, height: 25}}
                    source={require('../../icons/arrow-right.png')}
                  />
                );
            }}
            onDayPress={day => {
              console.log('selected day', day);
              setSelectedDay(new Date(day.dateString));
              var addition = {};
              addition[day.dateString] = {customStyles: styles.selectedStyle};
              const final = Object.assign(addition, sessionsDates);
              setMarkedDates(final);
            }}
            firstDay={1}
            disableAllTouchEventsForDisabledDays={true}
            enableSwipeMonths={true}
          />
          <TouchableOpacity
            onPress={() => {
              setDateFilterVisible(!DateFilterVisible);
            }}
            style={styles.button}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>
              Select Date
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  customDay: {
    textAlign: 'center',
    height: 20,
  },
  disabledText: {
    color: '#999999',
  },
  defaultText: {
    color: '#000000',
  },
  markedStyle: {
    container: {
      borderColor: '#bfbfbf',
      borderWidth: 1,
    },
  },
  selectedStyle: {
    container: {
      backgroundColor: 'black',
    },
    text: {
      color: 'white',
    },
  },
  customCalender: {
    dayContainer: {
      flex: 1,
      marginHorizontal: 25,
      alignItems: 'center',
    },
    week: {
      marginVertical: 5,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },
});
