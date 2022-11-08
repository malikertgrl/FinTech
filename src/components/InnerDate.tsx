import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts } from '../constants'

export interface Props {
    isSelected: boolean;
    title: string;
    setIsSelected: any
}
const InnerDate = ({ isSelected, title, setIsSelected }: Props) => {

    const setSelect = () => {
        setIsSelected()
    }

    return (
        <View style={isSelected ? styles.SelectedInnerText : styles.innerText}>
            <TouchableOpacity onPress={val => setIsSelected(false)}>
                <Text style={isSelected ? styles.selectedtext : styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InnerDate

const styles = StyleSheet.create({
    innerText: {
        padding: 10,
        margin: 5,
        // borderLeftWidth:1,
        // borderLeftColor:Colors.gray
    },
    SelectedInnerText: {
        // marginHorizontal:5,
        // marginVertical:5,
        margin: 5,
        backgroundColor: Colors.primary,
        borderRadius: 8,
        padding: 10

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