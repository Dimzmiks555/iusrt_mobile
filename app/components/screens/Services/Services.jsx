import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Layout from '../../ui/layout/Layout'
import ServiceItem from './components/ServiceItem/ServiceItem'

const Services = () => {
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-2xl font-bold mb-4">Оплата услуг</Text>
          <View>
            <ServiceItem />
            <ServiceItem/>
            <ServiceItem/>
          </View>
      </ScrollView>
    </Layout>
  )
}

export default Services