import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SvgUri } from 'react-native-svg'

const PaymentBottom = ({ uri }: any) => {
    return (
        <View style={styles.shadow}>
            <SvgUri
                uri={uri}
            />
        </View>
    )
}

export default PaymentBottom

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    }
})