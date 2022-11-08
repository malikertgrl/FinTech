import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts } from '../constants'
import InnerDate from './InnerDate'
import Payment from './Payment'

const Dates = () => {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <View>
      <View style={styles.container}>
        <InnerDate isSelected={true} setIsSelected={setIsSelected} title='Günlük' />
        <InnerDate isSelected={isSelected} setIsSelected={setIsSelected} title='Aylık' />
        <InnerDate isSelected={isSelected} setIsSelected={setIsSelected} title='Yıllık' />
      </View>
      <Payment/>
    </View>
  )

}

export default Dates

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    marginVertical: 8,
    marginLeft: '21%',
    marginRight: '21%'

  }

})