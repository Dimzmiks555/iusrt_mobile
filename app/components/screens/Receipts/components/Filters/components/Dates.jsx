import React, { useState } from 'react'
import { Platform, Text, TouchableOpacity, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import DateFrom from './DateFrom';
import DateTo from './DateTo';


const Dates = () => {


   


  return (
    <View className="flex-row justify-between">
      <DateFrom/>
      <DateTo/>
    </View>
  )
}

export default Dates