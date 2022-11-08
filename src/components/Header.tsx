import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView,Dimensions } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'

const Header = () => {
    return (
             <SafeAreaView style={styles.containerStyle}>
                <View style={{marginLeft:16}}>
                <TouchableOpacity onPress={() => console.log('drawe')}>
                    <Image
                        source={require('../assets/Images/DrawerIcon.png')}
                        style={{width:24,height:24}}
                    />
                </TouchableOpacity>
                </View>
               
                <View style={styles.innerStyle}>
                    <Image
                        source={require('../assets/Images/Logo.png')}
                        // style={styles.logo}

                    />
                    <Text style={styles.text}>Netahsilat</Text>
                </View>
                <View style={{marginRight:16}}>
                <Image
                    source={require('../assets/Images/tlIcon.png')}
                    style={{width:31,height:31}}

                />
                </View>
                
            </SafeAreaView>

           
    )
}

export default Header

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth:2,
        borderBottomColor:Colors.primary,
        height:'12%',
    },
    innerStyle: {
        alignItems: 'center',

    },
    logo: {
        width:108,
        height:29,
        // aspectRatio: 3.704615,
        // width: '20%',
        // height: undefined,
    
    },

    text: {
        color: Colors.green,
        fontSize: Fonts.sml,
        fontWeight:'500',
        fontStyle: 'italic'
    }
})