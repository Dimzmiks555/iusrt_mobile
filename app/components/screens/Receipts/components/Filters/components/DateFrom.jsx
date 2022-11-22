import React, { useState } from 'react'

import { Platform, Text, TouchableOpacity, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

const DateFrom = () => {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      if (Platform.OS === 'android') {
        // setShow(false);
        // for iOS, add a button that closes the picker
      }
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      setShow(true);
      showMode('date');
    };


  return (
    <View className="w-[48%]">
        <Text className="mb-2">От даты</Text>
        <TouchableOpacity className="border border-gray-300 px-3 py-2 rounded-lg " onPress={showDatepicker} title="Show date picker!">
            <Text className="text-gray-800">{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {show && (
        <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            onChange={onChange}
        />
        )}
    </View>
  )
}

export default DateFrom