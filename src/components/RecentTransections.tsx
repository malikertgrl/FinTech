import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'
import Person from './Person'
import Card from './Card'
import Headertext from './Headertext'


const RecentTransactions = () => {
    return (
        <Card>
            <View style={styles.HeaderContainer}>
                <Headertext title='Son İşlemler' />
                <TouchableOpacity>
                    <Text style={styles.buttonAll}>Tümünü Gör</Text>
                </TouchableOpacity>
            </View>
            <Person name = 'Fatih Öztürk' total ='17.865.522,19 TL' status = 'Başarılı' date= '22.12.2021 | 10:47:38' />
            <Person name = 'Fatih Öztürk' total ='17.865.522,19 TL' status = 'Beklemede' date= '22.12.2021 | 10:47:38' />
        </Card>
    )
}

export default RecentTransactions

const styles = StyleSheet.create({
    HeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonAll: {
        fontSize: Fonts.f14,
        color: Colors.primary
    },
   
})