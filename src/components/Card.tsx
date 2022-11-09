import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants'

export interface Props {
  children: any;
  style?: any
}

const Card = ({ children, style }: Props) => {
  return (
    <View style={[styles.container, { ...style }]}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,

  },
})