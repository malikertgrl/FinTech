import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Banks from '../components/Banks'
import RecentTransactions from '../components/RecentTransections'
import GetPaidMenus from '../components/GetPaidMenus'
import Transections from '../components/Transections'

const Home = () => {
    return (
        <View style={styles.flex}>
            <Header />
            <Transections/>
            <Banks />
            <RecentTransactions />
            <GetPaidMenus />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    flex: {
        flex: 1
    }
})