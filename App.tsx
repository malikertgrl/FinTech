import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/components/Header'
import Dates from './src/components/Dates'
import Banks from './src/components/Banks'
import RecentTransactions from './src/components/RecentTransections'
import GetPaidMenus from './src/components/GetPaidMenus'
const App = () => {
  return (
    <View>
      <Header />
      <Dates />
      <Banks />
      <RecentTransactions />
      <GetPaidMenus/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})