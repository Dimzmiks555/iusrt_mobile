import React, { useState } from 'react'
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Layout from '../../ui/layout/Layout'
import ReceiptItem from './components/ReceiptItem/ReceiptItem'
import Filters from './components/Filters/Filters';


const Receipts = () => {


  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-2xl font-bold mb-4">Квитанции</Text>
          <Filters/>
          <View>
            <ReceiptItem/>
            <ReceiptItem showMore/>
            <ReceiptItem/>
            <ReceiptItem/>
            <ReceiptItem/>
            <ReceiptItem/>
          </View>
      </ScrollView>
    </Layout>
  )
}

export default Receipts