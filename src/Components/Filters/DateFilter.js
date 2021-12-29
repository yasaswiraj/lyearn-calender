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
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(
    `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
  );
  console.log(selectedDate);
  const [sessionDates, setSessionDates] = useState({
    '2021-12-12': {customStyles: styles.markedStyle},
    '2021-12-27': {customStyles: styles.markedStyle},
    '2021-12-28': {customStyles: styles.markedStyle},
    '2022-01-02': {customStyles: styles.markedStyle},
  });

  const [markedDates, setMarkedDates] = useState(sessionDates);
  const onDayPress = day => {
    var temp = {};
    Object.assign(temp, sessionDates);
    Object.assign(temp, {
      [day.dateString]: {
        selected: true,
        disableTouchEvent: true,
        customStyles: styles.selectedStyle,
      },
    });
    setMarkedDates(temp);
    setSelectedDay(new Date(day.dateString));
    setSelectedDate(day.dateString);
  };
  return (
    <View>
      <Modal
        animationType="fade-in"
        transparent={true}
        visible={DateFilterVisible}
        onRequestClose={() => {
          setDateFilterVisible(!DateFilterVisible);
        }}>
        <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}></View>
      </Modal>
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
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={styles.container}>
            <Calendar
              markingType={'custom'}
              markedDates={markedDates}
              current={'2021-12-26'}
              theme={{
                todayTextColor: 'red',
                arrowColor: 'black',
                'stylesheet.calendar.main': styles.customCalender,
                'stylesheet.calendar.header': {
                  monthText: {
                    fontSize: 18,
                    fontWeight: '600',
                    color: 'black',
                  },
                  dayHeader: {
                    color: '#999999',
                    fontWeight: '400',
                    marginTop: 20,
                  },
                },
              }}
              renderArrow={direction => {
                if (direction === 'left')
                  return (
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('../Assets/icons/arrow-left.png')}
                    />
                  );
                if (direction === 'right')
                  return (
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('../Assets/icons/arrow-right.png')}
                    />
                  );
              }}
              onDayPress={onDayPress}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 490,
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
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },
});
