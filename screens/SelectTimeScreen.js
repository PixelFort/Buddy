import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const SelectTimeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Select Suitable Time',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    });
  }, []);

  const [time, setTime] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isStartTimePickerVisible, setStartTimePickerVisibility] =
    useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);

  const times = [
    {
      id: '0',
      type: 'morning',
      timings: '12am - 9am',
      icon: (
        <Ionicons name="mid-partly-sunny-outline" size={24} color="black" />
      ),
    },
    {
      id: '1',
      type: 'Day',
      timings: '9am - 4pm',
      icon: <Ionicons name="sun" size={24} color="black" />,
    },
    {
      id: '2',
      type: 'evening',
      timings: '4pm - 9pm',
      icon: <Ionicons name="sunset" size={24} color="black" />,
    },
  ];

  const showStartTimePicker = () => {
    setStartTimePickerVisibility(true);
  };

  const hideStartTimePicker = () => {
    setStartTimePickerVisibility(false);
  };

  const handleConfirmTime = time => {
    setStartTime(time);
    hideStartTimePicker();
  };

  return (
    <View>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        {times?.map((item, index) => (
          <Pressable
            style={{
              backgroundColor: 'white',
              margin: 20,
              width: 150,
              height: 120,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 15,
              shadowColor: '#171717',
              shadowOffset: {width: -2, height: 3},
              shadowRadius: 3,
            }}>
            {item?.icon}
            <Text>{item?.type}</Text>

            <Text>{item?.timings}</Text>
          </Pressable>
        ))}
      </Pressable>
      <View>
        <View>
          <Text>Start Time: </Text>

          <Button title={formatTime(startTime)} onPress={showStartTimePicker} />

          <DateTimePickerModal
            isVisible={isStartTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideStartTimePicker}
            is24Hour={false}
          />
        </View>
      </View>
    </View>
  );
};

export default SelectTimeScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    timeContainer:{
        marginBottom: 16,
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    summaryContainer: {
        marginTop: 32,
        alignItems: 'center',
    },
    summaryText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
