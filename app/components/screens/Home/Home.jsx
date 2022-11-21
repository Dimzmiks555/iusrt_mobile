import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Layout from '../../ui/layout/Layout'
import Bills from './components/Bills/Bills'
import Documents from './components/Documents/Documents'
import Information from './components/Information/Information'

const Home = () => {
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-2xl font-bold mb-4">Главная</Text>
          <Information/>
          <Bills/>
          <Documents/>
      </ScrollView>
    </Layout>
  )
}

export default Home