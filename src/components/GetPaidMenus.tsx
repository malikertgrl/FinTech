import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'

const GetPaidMenus = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header} >Ödeme Al Menüleri</Text>
            </View>
            <View style={styles.menu}>

                <Image source={require('../assets/Images/creditCard.png')} 
                 />
                <Image source={require('../assets/Images/Email.png')} />
                <Image source={require('../assets/Images/Sms.png')} />
                <Image source={require('../assets/Images/QrCode.png')} />
            </View>

        </View>
    )
}

export default GetPaidMenus

const styles = StyleSheet.create({
    container: {
        margin: 16,

    },
    header: {
        fontSize: Fonts.f18,
        fontWeight: '700'
    },
    menu: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',


    }
})