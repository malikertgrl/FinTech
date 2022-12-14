import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'
import Bank from './Bank'
import Card from './Card'
import HeaderText from './Headertext'

const Banks = () => {
    return (
        <Card>
            <HeaderText title='Banka Bazında Ödemeler' />
            <View style={styles.dateStyle}>
                <Text style={styles.text}>01.01.2022 tarihinden itibaren</Text>
            </View>
            <Bank
                name='Param Axess'
                source={require('../assets/Images/orange.png')}
                total={'100.00 TL'}
                percent='%50'
            />
            <Bank
                name='Param Bonus'
                source={require('../assets/Images/green.png')}
                total={'50.00 TL'}
                percent='%25'
            />
            <Bank
                name='Param Word'
                source={require('../assets/Images/purple.png')}
                total={'50.00 TL'}
                percent='%25'
            />


        </Card>
    )
}

export default Banks

const styles = StyleSheet.create({
    text: {
        fontSize: Fonts.f14,
        fontWeight: '400',
        color: Colors.graySecondary
    },
    dateStyle: {
        marginVertical: 8
    }
})