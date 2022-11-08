import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'

export interface Props {
    source:any;
    total:string;
    type:string;
    number:number;

}
const PaymentRow = ({source,total, type,number}:Props) => {
  return (
    <View style={styles.paymentRow}>
    <View style={styles.innerRow}>
        <Image
            source={source}
        />
        <View style= {styles.textContainer}>
            <View >
                <Text style={styles.paymentText}>{type}</Text>

            </View>
            <View style={{marginTop:3}} >
                <Text style={styles.paymentText2}>{`İşlem Adedi: ${number}`}</Text>
            </View>
        </View>

    </View>
    <View>
        <View >
            <Text style={styles.paymentText2}>{total}</Text>
        </View>

    </View>
</View>
  )
}

export default PaymentRow

const styles = StyleSheet.create({
    paymentRow: {
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    innerRow: { flexDirection: 'row' },
    textContainer: {marginLeft:5},
    paymentText: { color: Colors.graySecondary, fontSize: Fonts.f14 },
    paymentText2: { fontSize: Fonts.f16 }
})