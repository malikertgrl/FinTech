import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'
import PaymentRow from './PaymentRow'

const Payment = () => {
    return (
        <View style={styles.container}>
            <PaymentRow
                source={require('../assets/Images/Payment.png')}
                total='100.00 TL'
                type= 'Ödeme'
                number={1}
            />
            <PaymentRow
                source={require('../assets/Images/Cancel.png')}
                total='0.00 TL'
                type= 'İptal/İade'
                number={0}
                 />
            <PaymentRow
                source={require('../assets/Images/Total.png')}
                total='100.00 TL' 
                type= 'Toplam'
                number={1}
                />
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    container: {
        marginHorizontal:10,
        borderBottomWidth:1,
        borderBottomColor:Colors.gray
     }
})