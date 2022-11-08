import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'

export interface Props {
    name: string;
    total: string;
    status: string;
    date: string;
}
const Person = ({ name, total, status, date }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.total}>{total}</Text>

            </View>
            <View style={styles.statusContainer}>
                <Text style={styles.date}>{date} </Text>
                <Text style={status == 'Beklemede' ? styles.statusWait : styles.status}>
                    {status}
                </Text>
            </View>
        </View>
    )
}

export default Person

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    innerContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    statusContainer: { flexDirection: 'row', justifyContent: 'space-between',marginTop:3 },
    name: {
        fontSize: Fonts.f14,
        fontWeight: '500'
    },
    total: {
        fontSize: Fonts.f16,
        fontWeight: '700'
    },
    date: {
        fontSize: Fonts.f11,
        fontWeight: '400',
        color: Colors.graySecondary

    }, status: {
        fontSize: Fonts.f11,
        fontWeight: '400',
        color: Colors.success
    },
    statusWait: {
        fontSize: Fonts.f11,
        fontWeight: '400',
        color: Colors.wait
    }
})