import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'
import Person from './Person'


const RecentTransactions = () => {
    return (
        <View style={styles.container}>
            <View style={styles.HeaderContainer}>
                <Text style={styles.header} >Son İşlemler </Text>
                <TouchableOpacity>
                    <Text style={styles.buttonAll}>Tümünü Gör</Text>
                </TouchableOpacity>
            </View>
            <Person name = 'Fatih Öztürk' total ='17.865.522,19 TL' status = 'Başarılı' date= '22.12.2021 | 10:47:38' />
            <Person name = 'Fatih Öztürk' total ='17.865.522,19 TL' status = 'Beklemede' date= '22.12.2021 | 10:47:38' />
        </View>
    )
}

export default RecentTransactions

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingBottom:10

    },
    HeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        fontSize: Fonts.f18,
        fontWeight: '700'
    },
    buttonAll: {
        fontSize: Fonts.f14,
        color: Colors.primary
    },
   
})