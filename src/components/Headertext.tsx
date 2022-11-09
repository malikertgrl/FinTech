import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fonts } from '../constants'
export interface Props {
    title: string
}

const Headertext = ({ title }: Props) => <Text style={styles.headerText}>{title}</Text>



export default Headertext

const styles = StyleSheet.create({
    headerText: {
        fontSize: Fonts.f18,
        fontWeight: '700',
    },
})