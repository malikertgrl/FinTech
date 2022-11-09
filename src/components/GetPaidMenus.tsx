import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'
import { SvgUri } from 'react-native-svg'
import PaymentBottom from './PaymentBottom'
import Card from './Card'
import Headertext from './Headertext'

const GetPaidMenus = () => {
    return (
        <Card style={styles.payment} >
            <Headertext title='Ödeme Al Menüleri' />
            <View style={styles.menu}>
                <PaymentBottom uri={Image.resolveAssetSource(require('../assets/svgs/credit.svg')).uri} />
                <PaymentBottom uri={Image.resolveAssetSource(require('../assets/svgs/email.svg')).uri} />
                <PaymentBottom uri={Image.resolveAssetSource(require('../assets/svgs/sms.svg')).uri} />
                <PaymentBottom uri={Image.resolveAssetSource(require('../assets/svgs/qr.svg')).uri} />
            </View>
        </Card>
    )
}

export default GetPaidMenus

const styles = StyleSheet.create({
    payment: {
        borderBottomWidth:0
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',


    },
   
})