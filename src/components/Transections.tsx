import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts } from '../constants'
import InnerDate from './InnerDate'
import Payment from './Payment'

const Transections = () => {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <View>
      <View style={styles.container}>
        <InnerDate isSelected={true} setIsSelected={setIsSelected} title='Günlük' />
        <InnerDate isSelected={isSelected} setIsSelected={setIsSelected} title='Aylık' />
        <Text style={styles.seperator}> | </Text>
        <InnerDate isSelected={isSelected} setIsSelected={setIsSelected} title='Yıllık' />
      </View>
      <Payment />
    </View>
  )

}

export default Transections

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    marginLeft: '19.19%',
    marginRight: '19.19%'
  },
  seperator: {
    color: Colors.gray
  }

})