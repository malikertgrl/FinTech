import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts } from '../constants'

export interface Props {
    isSelected: boolean;
    title: string;
    setIsSelected: any
}
const InnerDate = ({ isSelected, title, setIsSelected }: Props) => {


    return (
        <View style={isSelected ? styles.SelectedInnerText : styles.innerText}>
            <TouchableOpacity onPress={() => console.log('first')}>
                <Text style={isSelected ? styles.selectedtext : styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InnerDate

const styles = StyleSheet.create({
    innerText: {
        margin: 5,
        padding: 7

    },
    SelectedInnerText: {
        margin: 5,
        backgroundColor: Colors.primary,
        borderRadius: 8,
        padding: 7

    },
    text: {
        fontSize: Fonts.mdm,
        fontWeight: '400'
    },
    selectedtext: {
        color: Colors.white,
        fontSize: Fonts.mdm,
        fontWeight: '700'
    }
})